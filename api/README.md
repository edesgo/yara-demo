# BackEnd Template
------------------------------------
### Installation
Install the next software:
- [Docker Desktop][docker]
### Infrastructure (optional)
The project use AWS infrastructure that could be generated with the current terraform script, this is created to use values from existing **COM Account** infrastructure.
Follow the next actions:
 - Edit "**_Infrastructure/vars.tf**" |  field the different values indicated with the comment "**#Need to be filled**"
 - Run the next terraform scripts:git add
    ```sh
    $ terraform init
    $ terraform plan
    $ terraform apply
    ```
    After some minutes the infrastructure  needed will be created.
### Setup Project
Follow the next actions:
 - Edit "**package.json**" |  add project information in tags "name", "version" and "description"
 - Edit "**knex/seeds/db_values.js**" |  add user information in tags "short_name", "name" and "email"
 - Create "**.env**" file and save it on apps root folder and fill all the empty values:
     ```sh
    #-------------------------------------------------------------------
    # App Parameters
    #-------------------------------------------------------------------
    APP_NAME=
    APP_PORT=3000
    JWT_SECRET= #any desired alphanumeric value with a minimum length of 20 characters
    HOST=localhost:3000
    NODE_ENV=development
    #-------------------------------------------------------------------
    # DB Parameters
    #-------------------------------------------------------------------
    DB_DATABASE=
    DB_SCHEMA=
    DB_HOST=
    DB_PORT=
    DB_USER=
    DB_PASS=
    ```
- Install node dependencies:
    ```sh
    $ npm install
    ```

- Compile project :
    ```sh
    $ npm run compile
    ```

### Run Project
Type the next command to start the BackEnd application:
```sh
$ docker-compse up --build
```
### Deployment
There are 2 options for deploy this application.
- **Manual deploy**
    - Stop applications execution.
    - Initialize elasticbeanstalk application (EB)
        ```sh
        $ eb init -- profile "default" #change default if you have a different AWS profile
        ```
        Select **Region** -> **Application** -> and type "**No**" when wizard ask for set **CodeCommit**. 
        
    - Edit "**.elasticbeanstalk/config.yml**" |  change the "**profile**" value to "**profile:null**" ( line 18 aprox)
    - Deploy application to AWS with:
        ```sh
        $  npm run deploy
        ```
    
-   **CI/CD deploy**
The app use CI/CD within [GitLab][gitLab], so everytime we push our code with a new tag on master branch, a pipeline is executed to deliver our application. We recomend gitflow as a good practice for the master branch tagging.

    - Rename "**CI-CD_.gitlab-ci.yml**" to "**.gitlab-ci.yml**".
    - Update "**.gitlab-ci.yml**" |  change environment name , line 25.
    - on [GitLab][gitLab] go to **Settings->CI /CD-> Variables**, add the next AWS variables with their values and activate the option "**Mask variable**" for each value:
        ```sh
        AWS_DEFAULT_REGION
        AWS_ACCESS_KEY_ID
        AWS_SECRET_ACCESS_KEY
        ```
    - To get notification regarding your pipelines, please select the "**custom**" notification option in the repositories main menu and be sure that the options "**Succesfull pipeline**" and "**Failed pipeline**" are selected.
    
   [docker]: <https://www.docker.com/products/docker-desktop>
   
   

