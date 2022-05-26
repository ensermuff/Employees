//*Update*
const { v4:uuidv4 } = require('uuid')
// import the aws sdk to use the dynamodb libraries
const AWS = require('aws-sdk')
// update the region to where dynamodb is hosted
const config = require("../../../../config")

// get all employees
exports.getEmployees = async (req, reply) => {
    AWS.config.update(config.aws_remote_config)
    // create a new dynamodb client which provides connectivity
    // b/w the app and the db instance
    const client = new AWS.DynamoDB.DocumentClient()
    try{
        const params = {
            TableName: config.aws_table_name
        }
        client.scan(params, function (err, data){
            if (err){
                console.log(err)
            }else {
                const { Items } = data
                reply.send({
                    employees: Items
                })
                return Items
            }
        })
        // // The JSON.stringify(...) below creates spaces
        // return JSON.stringify(employees,null,2)
    }catch (error) {
        throw error
    }
}

// get a single Employee
exports.getSingleEmployee = async (req,reply) => {
    const id = req.params.id

    AWS.config.update(config.aws_remote_config)
    // create a new dynamodb client which provides connectivity
    // b/w the app and the db instance
    const client = new AWS.DynamoDB.DocumentClient()
    try{
        const params = {
            TableName: config.aws_table_name,
            KeyConditionExpression: 'PK = :i',
            ExpressionAttributeValues: {
                ':i': id
            }
        }
        client.query(params, function (err, data){
            if (err){
                console.log(err)
            }else {
                console.log('data', data)
                const { Items } = data
                reply.send({
                    employees: Items
                })
            }
        })
        // // The JSON.stringify(...) below creates spaces
        // return JSON.stringify(employee,null,2)
    }catch (error) {
        throw error
    }
}

// add a new Employee
exports.addEmployee = async (req, reply) => {
    const {name, dob, phoneNumber, address} = req.body

    AWS.config.update(config.aws_remote_config)
    // create a new dynamodb client which provides connectivity
    // b/w the app and the db instance
    const client = new AWS.DynamoDB.DocumentClient()
    const orgId = uuidv4()
    try{
        var params = {
            TableName: config.aws_table_name,
            Item: {
                PK: orgId, // Partition Key - `ORG#${orgId}`
                name: name,
                dob: dob,
                phoneNumber: phoneNumber,
                address: address
            }
        }
        client.put(params, function (err, data){
            if (err) {
                console.log(err)
            } else {
                console.log('data', data)
                reply.send({
                    employee: data,
                    message: `Employee with PK of ${orgId} has been created`
                })
            }
        })
    }catch (error){
        throw error
    }
}

// update an existing Employee
exports.updateEmployee = async (req, reply) => {
    const {name, dob, phoneNumber, address} = req.body

    AWS.config.update(config.aws_remote_config)
    // create a new dynamodb client which provides connectivity
    // b/w the app and the db instance
    const client = new AWS.DynamoDB.DocumentClient()
    const orgId = req.params.id //uuidv4()
    try{
        if (name !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #name = :name',
                ExpressionAttributeNames: {'#name': 'name'},
                ExpressionAttributeValues: {
                    ':name': name
                }
            }
            client.update(params, function (err, data){
                if(err){
                    console.log(err)
                }else{
                    reply.send({
                        message: `Employee with PK of ${orgId} has been updated`
                    })
                }
            })
        }
        if (dob !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #dob = :dob',
                ExpressionAttributeNames: {'#dob': 'dob'},
                ExpressionAttributeValues: {
                    ':dob': dob
                }
            }
            client.update(params, function (err, data){
                if(err){
                    console.log(err)
                }else{
                    reply.send({
                        message: `Employee with PK of ${orgId} has been updated`
                    })
                }
            })
        }
        if (phoneNumber !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #phoneNumber = :phoneNumber',
                ExpressionAttributeNames: {'#phoneNumber': 'phoneNumber'},
                ExpressionAttributeValues: {
                    ':phoneNumber': phoneNumber
                }
            }
            client.update(params, function (err, data){
                if(err){
                    console.log(err)
                }else{
                    reply.send({
                        message: `Employee with PK of ${orgId} has been updated`
                    })
                }
            })
        }
        if (address !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #address = :address',
                ExpressionAttributeNames: {'#address': 'address'},
                ExpressionAttributeValues: {
                    ':address': address
                }
            }
            client.update(params, function (err, data){
                if(err){
                    console.log(err)
                }else{
                    reply.send({
                        message: `Employee with PK of ${orgId} has been updated`
                    })
                }
            })
        }
    }catch (error) {
        throw error
    }
}

// delete an existing Employee
exports.deleteEmployee = async (req, reply) => {
    try{
        AWS.config.update(config.aws_remote_config)
        // create a new dynamodb client which provides connectivity
        // b/w the app and the db instance
        const client = new AWS.DynamoDB.DocumentClient()
        const orgId = req.params.id //uuidv4()

        var params = {
            TableName: config.aws_table_name,
            Key: {
                PK: orgId // Partition Key - `ORG#${orgId}`
            }
        }
        client.delete(params, function (err, data){
            if (err){
                console.log(err)
            }else {
                reply.send({
                    message: data,
                    employee: `Employee with PK of ${orgId} has been removed`
                })
            }
        })
        // const employeeId = req.params.id
        // const employee = Employee.findByIdAndDelete(employeeId)
        // return employee
    }catch (error) {
        throw error
    }
}