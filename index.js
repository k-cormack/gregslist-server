let express = require('express')
let server = express()
let bp = require('body-parser')
let port = 3000

server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))






server.listen(port, ()=>{
    console.log("Server running on port", port)
})