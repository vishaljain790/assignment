
const Record = require('../models/record')

const Response = require("../utility/response");

const Constant = require("../utility/constant");

module.exports = {
    getRecords : async function(req,res){

/**
     * Request body of the post request body.
     */
 let startDate = req.body.startDate;
 let endDate = req.body.endDate;
 let minCount = req.body.minCount;
 let maxCount = req.body.maxCount;



    /**
     * Aggregate functionality is used..
     * 1. Find documents which are in given date range.
     * 2. then count the array for those records
     * 3. filter the data on sum of array as per given inputs of min and max
     * 4. sorted the data on the basis of createdAt
     * 5. send in response.
     */

        const recordsVal = await Record.aggregate([
            {
                '$match': { 'createdAt': { '$gte': new Date(startDate), '$lte': new Date(endDate) } }
            },
            {
                $project: {
                    _id: 0,
                    totalCount: { $sum: "$counts" },
                    key: "$key",
                    createdAt: "$createdAt"

                }
            },
            {
                '$match': { 'totalCount': { '$gte': Number(minCount), '$lte': Number(maxCount) } }
            },
            { $sort: { createdAt: 1 } }
        ])
        .exec(function (err, result) {
            if (err) {

                Response.sendResponse(Constant.FailureCode, Constant.Failure, [], res, 500);
            }
            else {

                Response.sendResponse(Constant.SuccessCode, Constant.Success, result, res, 200);
            }
        });
    }
}