const mongoose = require('mongoose')


/**
 * Calling mongoose data connection to allow db call..
 */
mongoose.connect(process.env.DB_CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true  })

/**
 * Db object to access it
 */
const db = mongoose.connection

/**
 * Stream calls as per the events
 * like: error, open
 */
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))