const Employee = require("../models/Employee")

// get all employees
exports.getEmployee = async (req, reply) => {
    try{
        const employees = await Employee.find()
        // The JSON.stringify(...) below creates spaces
        return JSON.stringify(employees,null,2)
    }catch (error) {
        throw error
    }
}

// get a single Employee
exports.getSingleEmployee = async (req,reply) => {
    try{
        const employeeId = req.params.id
        const employee = await Employee.findById(employeeId)
        // The JSON.stringify(...) below creates spaces
        return JSON.stringify(employee,null,2)
    }catch (error) {
        throw error
    }
}

// add a new Employee
exports.addEmployee = async (req, reply) => {
    try{
        const employee = new Employee(req.body)
        return employee.save()
    }catch (error){
        throw error
    }
}

// update an existing Employee
exports.updateEmployee = async (req, reply) => {
    try{
        const employeeId = req.params.id
        const employee = req.body
        const {...updatedEmployee} = employee
        const update = await Employee.findByIdAndUpdate(employeeId, updatedEmployee, {new: true })
        return update
    }catch (error) {
        throw error
    }
}

// delete an existing Employee
exports.deleteEmployee = async (req, reply) => {
    try{
        const employeeId = req.params.id
        const employee = Employee.findByIdAndDelete(employeeId)
        return employee
    }catch (error) {
        throw error
    }
}