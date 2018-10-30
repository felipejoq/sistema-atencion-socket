// objeto para establecer la conexión con el servidor
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(data){
    label.text(data.actual);
})

$('button').on('click', function(){
    socket.emit('siguienteTicket', null, function(siguienteTicket){
        console.log('El siguiente ticket es: ', siguienteTicket);

        label.text(siguienteTicket);

    })
});