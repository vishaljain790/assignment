
/**
 * Way to setting up the dotenv file to allow and access it in prcoess
 */
require('dotenv').config()

const express = require('express')
const app = express()


/**
 * Db connectivity call
 */
require("./config/db");

/**
 * Middleware to allow json in req and res model
 */
app.use(express.json())


/**
 * Setting up the router,
 * it's just written here, else we could have set it up in  a separate file too..
 */
const recordRouters = require('./routes/record')
app.use('/v1/get-data', recordRouters)


//export the built app..
module.exports = app;