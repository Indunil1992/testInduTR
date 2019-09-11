let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.get({
        TableName: 'table2',
        Key: {
            '3': '3',
            '4': '4'
        }
    }).promise()
        .then((data) => {
            console.log("dataaaa");
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