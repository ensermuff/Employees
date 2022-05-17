const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email : String,
    phoneNumber: String,
    hire_date: Date,
    job_id: String,
    salary: Number,
    department_id: Number
})

module.exports = mongoose.model('Employee', employeeSchema)