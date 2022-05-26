// Require the framework and instantiate it
const app = require('fastify')({
    logger: true
})
app.register(require('fastify-cors'), { origin: true });
//bring in routes
const routes = require('./src/routes/route_index')

// Declare a route
app.get('/', async (req, reply) => {
    return {Employee: "Data"}
})
// app.addHook('preHandler', (req, repy, done) => {
//     req.header({
//         "Access-Control-Allow-Origin" : "*" ,
//     })
//     done()
// })

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