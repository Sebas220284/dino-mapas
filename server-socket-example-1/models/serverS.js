const express= require('express')
const http= require('http')
const socketio=require('socket.io')
const path=require('path')
const Sockets=require('./sokets')

class Server{
    constructor(){
        this.app=express();
        this.port= 8080
        


        //http server
this.server=http.createServer(this.app)


        //configuraciones de sockts
        this.io=socketio(this.server,{})
        
    }

consfigurarSockets(){
new Sockets(this.io)
}

    middlewares(){
       this.app.use(express.static(path.resolve(__dirname,'../public')  ))
    }
    execute(){

//inicializar middlewares

this.middlewares()

//inicializar sockets
this.consfigurarSockets()

        this.server.listen(this.port,()=>{
            console.log('server corriendo',this.port)
        });
    }
}



module.exports=Server