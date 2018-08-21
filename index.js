let express = require('express')
let server = express()
let bp = require('body-parser')
let cors = require('cors')
let port = 3000

//connect to DB
require('./server-assets/db/mlab-config')

server.use(cors())

//middleware
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))


//Routes
let carRoutes = require('./server-assets/routes/car-routes')
//@ts-ignore
server.use('/api/cars', carRoutes)



//starts server
server.listen(port, ()=>{
    console.log("Server running on port", port)
})