let express = require("express");
let path = require('path');
let app = express();
let color = 'white';
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index",{});
})


// tell the express app to listen on port 8000
let server = app.listen(1750, function() {
 console.log("listening on port 1750");
});

const io = require('socket.io')(server);
let number =0;

function sendColor(color){
    io.sockets.emit('color', { color: color }); //3
}

io.on('connection', function (socket) { //2
    sendColor(color); 
    socket.on('green', function () {
        color='green';
        sendColor(color)
    });
    socket.on('blue', function () { //
        color='blue';
        sendColor(color)
    });
    socket.on('pink', function () { //
        color='pink';
        sendColor(color)
    });
  });




