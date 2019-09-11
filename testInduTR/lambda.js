let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.query({
        TableName: 'sample1'
    }).promise()
        .then((data) => {
             console.log("dataaa");
              console.log(data);
            //your logic goes here
        })
        .catch((err) => {
             console.log("errrr");
              console.log(err);
            //handle error
        });


    callback(null, { "message": "Successfully executed" });
}