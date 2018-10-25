var countDookoo = 0; //переменная в которую собираются запросы

const http = require('http'); //переменная c запросом типа передачи
var fs = require('fs');

/*function css(request, response) {
    if (request.url === '/styles.css') {
        response.writeHead(200, {'Content-type' : 'text/css'});
        var fileContents = fs.readFileSync('./views/styles.css', {encoding: 'utf8'});
        response.write(fileContents);
    }
}*/

var routes = {
    '/main.css': function (req, res) {
        fs.readFile('./main.css', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(data);
        });
    },
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
        var data = 'not found';
        res.writeHead(404, {'Content-Type': 'text/html'});
        
        res.end();
    }
}
const server = http.createServer(requestHandler); //запуск сервера с помощью обработчика
server.listen(3000, function (bug) { //прослушка порта
    console.log(bug) //вывод багов в консоль
});


//https://ru.wikipedia.org/wiki/HTTP читать
