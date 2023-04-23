
 const dotenv=require('dotenv').config()
const Server = require("./models/serverS");



const server = new Server()

server.execute()

module.exports={
    PORT: process.env
}