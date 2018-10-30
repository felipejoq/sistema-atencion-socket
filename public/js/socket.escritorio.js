var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function(){
    socket.emit('atenderTicket', {
        escritorio: escritorio
    }, function(resp){
        console.log(resp);
        if(!resp.numero){
            label.text(resp);
        }else{
            label.text('Ticket ' + resp.numero);
        }
    });
});

socket.on('connect', function(){
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(data){
});