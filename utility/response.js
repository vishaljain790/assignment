/**
 * This file is centralized response model
 * , from here a single place changes will be required if somethign needed..
 */

 function sendResponse(code, msg, records, res, resStatus) {

    return res.status(resStatus).send({
        "code": code,
        "msg": msg,
        "records": records
    });
}


module.exports = {
    sendResponse
}