const express = require('express')
const router = express.Router()
const {getRecords} = require("../controllers/record");
const { check, validationResult } = require('express-validator');
const Constant = require("../utility/constant");


// Creating one
router.post('/',[
  check('startDate', Constant.FieldReuired).notEmpty(),
  check('endDate', Constant.FieldReuired).notEmpty(),
  check('minCount', Constant.FieldReuired).notEmpty(),
  check('maxCount', Constant.FieldReuired).notEmpty(),
  check('startDate', Constant.DateFormatWrong).isDate({ format: 'YYYY-MM-DD' }),
  check('endDate', Constant.DateFormatWrong).isDate({ format: 'YYYY-MM-DD' }),
  check('minCount', Constant.ValueIsNotInteger).isNumeric(),
  check('maxCount', Constant.ValueIsNotInteger).isNumeric(),
  check('endDate', Constant.EndDateIsNotGtStartDate)
      .exists()
      .custom((value, { req }) => new Date(value) > new Date(req.body.startDate))
  ,
  check('maxCount', Constant.MaxAmountIsNotGtMinAmount)
      .exists()
      .custom((value, { req }) => Number(value) > Number(req.body.minCount))
], async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        /**
         * This shows all the possible error list in response,
         * as per the requirements, it can be filetered out...,
         * but for now, I allowed all errors to send in the response...
         */
        return res.status(422).json({"code": Constant.FailureCode, "msg": Constant.Failure, "records": null, errors: errors.array() })
    }


    //finally, call to main getRecords function to get the data.
    getRecords(req,res);
  } catch (err) {
    return res.status(500).json({"code": Constant.InternalError, "msg": Constant.InternalError, "records": null })
  }
  
})


module.exports = router