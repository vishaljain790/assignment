const mongoose = require('mongoose')


/**
 * Model defined for a single record,
 * only allowed values are fetched,
 * ans type is set up
 */
const recordSchema = new mongoose.Schema({
  key: {
    type: String,
    required: false
  },
  counts: {
    type: Array,
    required: false
  },
  createdAt: {
    type: Date,
    required: true
  }
})


/**
 * It takes collection name along with defined schema..
 */
module.exports = mongoose.model('records', recordSchema)