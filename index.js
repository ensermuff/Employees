// Require the framework and instantiate it
const app = require('fastify')({
    logger: true
})

//bring in routes
const routes = require('./src/routes/route_index')

// Database - Import "mongoose"
const mongoose = require("mongoose")

// DB connection
mongoose.connect('mongodb://localhost/employees')
    .then(() => console.log("MONGO is ready!!"))
    .catch(err => console.log(err))


// Declare a route
app.get('/', async (req, reply) => {
    return {Employee: "Data"}
})

routes.forEach((route, index) => {
    app.route(route)
})

// Starting the server
const start = async () => {
    try{
        await app.listen(4000)
        app.log.info(`Server is running at ${address}`)
    }catch (error) {

    }
}
start()