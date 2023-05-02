const Marcadores = require("./marcadores")

class Sockets{
constructor(io){

this.io=io
this.marcadores=new Marcadores()

this.socketEvent()

}

socketEvent(){
//on conexcion
this.io.on('connection',(socket)=>{
    console.log('usario conectado')
//escuchar evento

socket.emit('marcadores-activos',this.marcadores.activos)
socket.on('marcador-nuevo',(marcador)=>{
    console.log('marcador-nuevo')
    this.marcadores.agregarMarcador(marcador)
    socket.broadcast.emit('marcador-nuevo',marcador)
})


//marcador-actvios

//marcador  nueevo

//marcador actuzalicadp

socket.on('marcador-actualizado',(marcador)=>{
    this.marcadores.actualizarMarcador(marcador)
    socket.broadcast.emit('marcador-actualizado',marcador)
})


})

}

}

module.exports=Sockets