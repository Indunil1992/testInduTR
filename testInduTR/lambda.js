let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.get({
        TableName: 'table1',
        Key: { '1': 1, '2': 2 }
    }).promise()
        .then((data) => {
            console.log(data);
            console.log("dataaaa");
            //your logic goes here
        })
        .catch((err) => {
            console.log(err);
             console.log("errrrrr");
            //handle error
        });

    callback(null, { "message": "Successfully executed" });
}