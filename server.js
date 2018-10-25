const http = require('http');
const fs = require('fs');

function sendFile(name, type) {
    return function(req, res) {
        fs.readFile(name, function (err, data) {
            res.writeHead(200, {'Content-Type': type});
            res.end(data);
        });
    }
};


var routes = {
    '/main.css': sendFile('./main.css', 'text/css'),

    '/js/main.js': function (req, res) {
        fs.readFile('./js/main.js', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(data);
        });
    },
    '/js/jquery.js': function (req, res) {
        fs.readFile('./js/jquery.js', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(data);
        });
    },
    '/images/headerbg.jpg': function (req, res) {
        fs.readFile('./images/headerbg.jpg', function (err, data) {
            res.writeHead(200, {'Content-Type': 'image/pjpeg'});
            res.end(data);
        });
    },
    '/': function (req, res) {
        fs.readFile('./index.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
};

function requestHandler(req, res) {
    console.log(req.url);
    if (req.url in routes){
        routes[req.url](req, res)
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('not found');
    }
}
const server = http.createServer(requestHandler); //запуск сервера с помощью обработчика
server.listen(3000, function (bug) { //прослушка порта
    console.log(bug) //вывод багов в консоль
});


//https://ru.wikipedia.org/wiki/HTTP читать
//победить баттоны
//допилить обработчики на использование новой функции
//codeacademy