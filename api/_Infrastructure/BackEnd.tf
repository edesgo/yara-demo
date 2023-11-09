#---Privider--------------------------------------------
provider "aws" {
  region  = var.region
  profile = var.awsProfile
}
#---RDS DB-----------------------------------------------
resource "aws_db_instance" "dbToCreate" {
  allocated_storage                     = 20
  auto_minor_version_upgrade            = true
  backup_retention_period               = 0
  backup_window                         = "22:01-22:31"
  ca_cert_identifier                    = "rds-ca-2019"
  db_subnet_group_name                  = var.db.subnetGroup
  copy_tags_to_snapshot                 = false
  delete_automated_backups              = true
  deletion_protection                   = true
  engine                                = "postgres"
  engine_version                        = "11.5"
  iam_database_authentication_enabled   = false
  identifier                            = var.db.instance
  instance_class                        = var.db.instClass
  iops                                  = 0
  maintenance_window                    = "mon:04:56-mon:05:26"
  max_allocated_storage                 = 1000
  monitoring_interval                   = 0
  multi_az                              = var.isProd == true ? true : false
  storage_encrypted                     = var.isProd == true ? true : false
  name                                  = var.db.name
  option_group_name                     = "default:postgres-11"
  parameter_group_name                  = "default.postgres11"
  username                              = var.db.user
  password                              = var.db.password
  port                                  = var.db.port
  performance_insights_enabled          = var.isProd == true ? true : false
  performance_insights_retention_period = 0
  skip_final_snapshot                   = true
  storage_type                          = "gp2"
  vpc_security_group_ids                = [var.db.secGroup]
  enabled_cloudwatch_logs_exports       = ["postgresql", "upgrade"]
  tags = {
    BusinessUnit = var.tagsProject.businessUnit
    Comment       = var.tagsProject.comment
    CostCenter    = var.tagsProject.costCenter
    Creator       = var.tagsProject.creator
    InUse         = var.tagsProject.inUse
    ProjectId     = var.tagsProject.projectId
    Type          = var.tagsProject.type
  }
}
#---EB Application---------------------------------------
resource "aws_elastic_beanstalk_application" "Application" {
  name = var.app.name
}
#---EB Environment---------------------------------------
resource "aws_elastic_beanstalk_environment" "cdn-env-prod" {
  name                = var.eb.name
  application         = aws_elastic_beanstalk_application.Application.name
  solution_stack_name = var.eb.solutionStack
  #---EB Environment variables DB------------------------
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "DB_DATABASE"
    value     = aws_db_instance.dbToCreate.name
  }
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "DB_HOST"
    value     = aws_db_instance.dbToCreate.address
  }
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "DB_PASS"
    value     = aws_db_instance.dbToCreate.password
  }
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "DB_USER"
    value     = aws_db_instance.dbToCreate.username
  }
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "DB_PORT"
    value     = aws_db_instance.dbToCreate.port
  }
  #---EB Environment variables from vars.tf file--------
  dynamic "setting" {
    for_each = var.ebEnvVar
    content {
      namespace = "aws:elasticbeanstalk:application:environment"
      name      = setting.key
      value     = setting.value
    }
  }
  #---EB aws:ec2:vpc -----------------------------------
  dynamic "setting" {
    for_each = var.ebEnvVarVPC
    content {
      namespace = "aws:ec2:vpc"
      name      = setting.key
      value     = setting.value
    }
  }

  #---EB aws:cloudformation:template:parameter --------
  dynamic "setting" {
    for_each = var.ebEnvVarInst
    content {
      namespace = "aws:cloudformation:template:parameter"
      name      = setting.key
      value     = setting.value
    }
  }
  #---EB aws:autoscaling:launchconfiguration ----
  dynamic "setting" {
    for_each = var.ebEnvVarCnf
    content {
      namespace = "aws:autoscaling:launchconfiguration"
      name      = setting.key
      value     = setting.value
    }
  }

  #---EB aws:elasticbeanstalk:environment:proxy ----
  dynamic "setting" {
    for_each = var.ebEnvVarProxy
    content {
      namespace = "aws:elasticbeanstalk:environment:proxy"
      name      = setting.key
      value     = setting.value
    }
  }


  #---EB aws:elasticbeanstalk:control ----
  dynamic "setting" {
    for_each = var.ebEnvVarControl
    content {
      namespace = "aws:elasticbeanstalk:control"
      name      = setting.key
      value     = setting.value
    }
  }

  #---EB aws:elasticbeanstalk:environment ----
  dynamic "setting" {
    for_each = var.ebEnvVarEnv
    content {
      namespace = "aws:elasticbeanstalk:environment"
      name      = setting.key
      value     = setting.value
    }
  }

  #---EB aws:elasticbeanstalk:healthreporting:system ----
  dynamic "setting" {
    for_each = var.ebEnvVarSyst
    content {
      namespace = "aws:elasticbeanstalk:healthreporting:system"
      name      = setting.key
      value     = setting.value
    }
  }

  tags = {
    BusinessUnit = var.tagsProject.businessUnit
    Comment       = var.tagsProject.comment
    CostCenter    = var.tagsProject.costCenter
    Creator       = var.tagsProject.creator
    InUse         = var.tagsProject.inUse
    ProjectId     = var.tagsProject.projectId
    Type          = var.tagsProject.type
  }
}

#---Cloudfront--------------------------------------------
resource "aws_cloudfront_distribution" "BackEnd_distribution" {
  origin {
    domain_name = aws_elastic_beanstalk_environment.cdn-env-prod.cname
    origin_id   = format("Custom-%s", aws_elastic_beanstalk_environment.cdn-env-prod.cname)
    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_read_timeout      = 30
      origin_ssl_protocols     = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }
  price_class     = "PriceClass_100"
  enabled         = true
  is_ipv6_enabled = true
  comment         = var.bkCF.comment

  default_root_object = ""
  aliases             = []
  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = format("Custom-%s", aws_elastic_beanstalk_environment.cdn-env-prod.cname)
    compress         = true
    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }
  tags = {
    BusinessUnit = var.tagsProject.businessUnit
    Comment       = var.tagsProject.comment
    CostCenter    = var.tagsProject.costCenter
    Creator       = var.tagsProject.creator
    InUse         = var.tagsProject.inUse
    ProjectId     = var.tagsProject.projectId
    Type          = var.tagsProject.type
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    minimum_protocol_version       = "TLSv1"
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
