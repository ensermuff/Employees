require('../src/controllers/employeeController');
require('supertest');
require('../index');
const AWS = require('aws-sdk')
const sinon = require('sinon')
const config = require("../../config")
const {v4: uuidv4} = require("uuid");
AWS.config.update(config.aws_remote_config)


describe('controllerService', () => {

    it('should find an Employee from the table', async function () {
        const client = new AWS.DynamoDB.DocumentClient()
        const getStub = sinon.stub(AWS.DynamoDB.DocumentClient.prototype, "get");

        getStub.callsFake((params, cb) => {
            cb(null, {result: []})
        })
        const id = "b3501223-513e-480c-ab48-5a3df7df4c13"
        const params = {
            TableName: config.aws_table_name,
            KeyConditionExpression: 'PK = :i',
            ExpressionAttributeValues: {
                ':i': id
            }
        }
        const reply = client.query(params, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log('data', data)
                const {Items} = data
                return Items
            }
        })
    })
})