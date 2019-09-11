let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.scan({
        TableName: 'test1'
    }).promise()
        .then((data) => {
             console.log(data);
              console.log("dataaa");
            //your logic goes here
        })
        .catch((err) => {
             console.log(err);
             console.log("faillll");
            //handle error
        });


    callback(null, { "message": "Successfully executed" });
}