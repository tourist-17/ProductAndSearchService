# Folder Structure
   - src/
        index.js // server
        config/
        controllers/
        middlewares/
        models/
        repository/
        services/
        utils/
   - test/ [later]
   - static/
   - temp/
# Welcome to ProductSearch Service

## Project Setup
 - clone the project on your local
 - Execute `npm install` on the same path as of your root directory of the downloded project 
 - create a `.env` file in the root directory and add the following enviroment variable 
     - `PORT = 3001`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
 ```
 {
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Products_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

 ```
  - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
  and then execute

  `npx sequelize db:migrate`
```
