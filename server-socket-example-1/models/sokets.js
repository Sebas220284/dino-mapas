class Sockets{
constructor(io){

this.io=io

this.socketEvent()

}

socketEvent(){
//on conexcion
this.io.on('connection',(socket)=>{
//escuchar evento
    socket.on('mensaje-to-server',(data)=>{
        console.log(data)


        this.io.emit('mensaje-from-server',data)
    })


})

}

}

module.exports=Sockets