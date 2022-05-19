const employeeController = require("../controllers/employeeController")

const routes = [
    {
        method: 'GET',
        url: '/api/employee',
        handler: employeeController.getEmployees
    },
    {
        method: 'GET',
        url: '/api/employee/:id',
        handler: employeeController.getSingleEmployee
    },
    {
        method: 'POST',
        url: '/api/employee',
        handler: employeeController.addEmployee
    },
    {
        method: 'PUT',
        url: '/api/employee/:id',
        handler: employeeController.updateEmployee
    },
    {
        method: 'DELETE',
        url: '/api/employee/:id',
        handler: employeeController.deleteEmployee
    }
]

module.exports = routes