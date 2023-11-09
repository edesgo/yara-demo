
variable "awsProfile" {
  default = ""#Add the AWS profile to use
}
variable "region" {
  default = "" #Add region
}
variable "isProd" {
  description = "true environment is for production"
  type        = bool
  default     = false
}
#---DB---------------------------------------------------
variable "db" { #Need to be filled
  type = map
  default = {
    subnetGroup = "" #Need to be filled
    secGroup    = "" #Need to be filled
    instance    = "" #Need to be filled
    instClass   = "" #Need to be filled
    name        = "" #Need to be filled
    user        = "" #Need to be filled
    password    = "" #Need to be filled
    port        = 5432
  }
}

#---EB---------------------------------------------------
variable "app" {# ELB App name
  type = map
  default = {
    name = "" #Need to be filled
  }
}

variable "eb" {#ELB environment name
  type = map
  default = {
    name          = "" # Needs to be filled   
    solutionStack = "64bit Amazon Linux 2 v3.2.0 running Docker" #Docker app, review the latest available docker app within the link : https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html
  }
}

variable "ebEnvVar" {# Environment variables (.env)  
  type = map
  default = {
  AUTH = "ON"
  APP_NAME = ""# Needs to be filled  
  APP_PORT = "3000"
  JWT_SECRET = "fbqj5zcfbqj5EtAVEkfz"
  HOST = "localhost:3000"
  LOG_ATTEMPTS = 4
  NODE_ENV = "development"
  LDAP_URL = "" # Needs to be filled  
  LDAP_DOMAIN = "@p3-aws.com"   
  BASE_DN = "dc=p3-aws,dc=com" 
  LDAP_USER = "" # Needs to be filled  
  LDAP_PASS = "" # Needs to be filled  
  }
}

variable "ebEnvVarVPC" {## VPC Valiues
  type = map
  default = {
    VPCId                    = "" # Needs to be filled  
    Subnets                  = "" # Needs to be filled  
    ELBSubnets               = "" # Needs to be filled  
    AssociatePublicIpAddress = false
    ELBScheme                = "public"

  }
}

variable "ebEnvVarInst" {# Instance variables
  type = map
  default = {
    InstancePort       = 80
    InstanceTypeFamily = "t2"
  }
}

variable "ebEnvVarCnf" {
  type = map
  default = {
    EC2KeyName           = ""# Needs to be filled 
    IamInstanceProfile   = "aws-elasticbeanstalk-ec2-role"
    InstanceType         = "t2.micro"
    SSHSourceRestriction = "tcp,22,22,0.0.0.0/0"

  }
}
variable "ebEnvVarProxy" {
  type = map
  default = {
    ProxyServer = "nginx"
  }
}

variable "ebEnvVarControl" {
  type = map
  default = {
    DefaultSSHPort          = 22
    LaunchTimeout           = 0
    LaunchType              = "Migration"
    RollbackLaunchOnFailure = false

  }
}

variable "ebEnvVarEnv" {
  type = map
  default = {
    ServiceRole     = "arn:aws:iam::556544243066:role/aws-elasticbeanstalk-service-role"
    EnvironmentType = "SingleInstance"
  }
}

variable "ebEnvVarSyst" {
  type = map
  default = {
    SystemType     = "enhanced"
    HealthCheckSuccessThreshold = "Ok"
  }
}

#---Cloudfront--------------------------------------------
variable "bkCF" {#CloaudFront Distribution name
  type = map
  default = {
    comment       = "" #Needs to be filled 
  }
}
#---Tags--------------------------------------------------

variable "tagsProject" {###Project Tags
  type = map
  default = {
    businessUnit = "" #Needs to be filled 
    comment       = "" #Needs to be filled 
    costCenter    = "" #Needs to be filled 
    creator       = "" #Needs to be filled 
    inUse         = "" #Needs to be filled 
    projectId     = "" #Needs to be filled 
    type          = "" #Needs to be filled 
  }
}
