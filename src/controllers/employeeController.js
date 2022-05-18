//*Update*
const { v4:uuidv4 } = require('uuid')
// import the aws sdk to use the dynamodb libraries
const AWS = require('aws-sdk')
// update the region to where dynamodb is hosted
const config = require("../../../config")

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
    const {eid, name, email, phoneNumber, hire_date} = req.body
    const {job_id, salary, department_id, manager} = req.body

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
                eid: eid,
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                hire_date: hire_date,
                job_id: job_id,
                salary: salary,
                department_id: department_id,
                manager: manager
            }
        }
        client.put(params, function (err, data){
            if (err) {
                console.log(err)
            } else {
                console.log('data', data)
                reply.send({
                    employee: data,
                    message: `Employee with PK of ${orgId} and eid of ${eid} has been created`
                })
            }
        })
    }catch (error){
        throw error
    }
}

// update an existing Employee
exports.updateEmployee = async (req, reply) => {
    const {eid, name, email, phoneNumber, hire_date} = req.body
    const {job_id, salary, department_id, manager} = req.body

    AWS.config.update(config.aws_remote_config)
    // create a new dynamodb client which provides connectivity
    // b/w the app and the db instance
    const client = new AWS.DynamoDB.DocumentClient()
    const orgId = req.params.id //uuidv4()
    try{
        if (eid !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #eid = :eid',
                ExpressionAttributeNames: {'#eid': 'eid'},
                ExpressionAttributeValues: {
                    ':eid': eid
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
        if (email !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #email = :email',
                ExpressionAttributeNames: {'#email': 'email'},
                ExpressionAttributeValues: {
                    ':email': email
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
        if (hire_date !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #hire_date = :hire_date',
                ExpressionAttributeNames: {'#hire_date': 'hire_date'},
                ExpressionAttributeValues: {
                    ':hire_date': hire_date
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
        if (job_id !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #job_id = :job_id',
                ExpressionAttributeNames: {'#job_id': 'job_id'},
                ExpressionAttributeValues: {
                    ':job_id': job_id
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
        if (salary !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #salary = :salary',
                ExpressionAttributeNames: {'#salary': 'salary'},
                ExpressionAttributeValues: {
                    ':salary': salary
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
        if (department_id !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #department_id = :department_id',
                ExpressionAttributeNames: {'#department_id': 'department_id'},
                ExpressionAttributeValues: {
                    ':department_id': department_id
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
        if (manager !== undefined) {
            var params = {
                TableName: config.aws_table_name,
                Key: {
                    PK: orgId // Partition Key - `ORG#${orgId}`
                },
                UpdateExpression: 'set #manager = :manager',
                ExpressionAttributeNames: {'#manager': 'manager'},
                ExpressionAttributeValues: {
                    ':manager': manager
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