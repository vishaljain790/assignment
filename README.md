## Objective
This repo contains the code to make the mongodb connection and read data in a particular format along with some conditions.


## To run this on local
 To run this in local, following steps are required to execute.

 1. Clone this repo in your local env
 2. Install dependencis and dev-dependencies by running "npm install"
 3. Create a .env file
 4. Upload the necessary fields in .env file, without these steps code will not be able to run the server and will not connect to the database
    1. DB_CONNECT_URL = <url of mongodb connection>
    2. DB_NAME = <db name for mongodb>
    3. COLLECTION_NAME = <collection name to access data from>
    4. PORT = <port on which node server should run>
 5. Finally, run  "npm run start" or "npm start" command 

 ## Ouput
 To check the output following is the way.

 1. To check health check, run "http:localhost:PORT/" (This is a get call)
 2. To get the data from database, run the following curl

      curl --location --request POST 'http://localhost:PORT/v1/get-data' \
      --header 'Content-Type: application/json' \
      --data-raw '{
         "startDate": "2010-06-23",
         "endDate" : "2020-06-24",
         "minCount" : "10",
         "maxCount": "20"
      }'
   

 ## To run the test suit
 To run the test suit, you need to run "npm run test" command.

 ## Code structure
 Following is the code structure

### config
This folder contains db connection file

### controllers
This folder have the main logical part to get the data from mongodb

### models
This folder consists the model to define a record

### routes
This folder contains the middleware for a route

### test
This folder contains a single file which has the test suit

### utility
This folder contains two files, one constant.js which hold the constants used in the project. Another one is response model for api.


### app.js is a wrapper for server.js
### package.json is file which hold all the requirements to run this project like dependencies, dev dependencies and jest set up.


## Library
Following dependencies are used to build this project
1. "express": "^4.17.1", = framework
2. "express-validator": "^6.10.0", = end point validator
3. "mongoose": "^5.12.3" = wrapper of mongod

Following dev-dependencies are used to build this project
1. "dotenv": "^8.0.0", = .env file config
2. "jest": "^26.6.3", = to run and build test cases
3. "nodemon": "^1.19.0", = to run the server and pick the changes by default, no need to run server each time (better for development)
4. "supertest": "^6.1.3" = it's a lib used to call the express API written in app to wrap with jest.


## References
1. https://www.npmjs.com/package/express
2. https://www.npmjs.com/package/express-validator
3. https://www.npmjs.com/package/mongoose
4. https://www.npmjs.com/package/dotenv
5. https://www.npmjs.com/package/jest
6. https://www.npmjs.com/package/nodemon
7. https://www.npmjs.com/package/supertest


