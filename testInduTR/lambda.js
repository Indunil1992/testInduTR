let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();

exports.handler = function (event, context, callback) {
    kinesis.putRecord({
        Data: '1',
        PartitionKey: '1',
        StreamName: 'my-kinesis'
    }).promise()
        .then(data => {
            console.log("dataaa");
            console.log(data);
            // your logic goes here
        })
        .catch(err => {
            console.log("errrrrrr");
            console.log(err);
            // error handling goes here
        });


    callback(null, { "message": "Successfully executed" });
}