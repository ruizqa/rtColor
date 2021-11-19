
let socket = io("http://localhost:1750"); //1
    
socket.on('color', function (data) { //4
      $('body').css('background-color',data.color);
  });

$('#green').on('click',function(){
    socket.emit('green', {msg:'green'});
})

$('#blue').on('click',function(){
    socket.emit('blue', {msg:'blue'});
})

$('#pink').on('click',function(){
    socket.emit('pink', {msg:'pink'});
})

