var countDookoo = 0;

const http = require('http');

function requestHandler(req, res) {
    console.log(req.url);
    if (req.url === '/favicon.ico'){
        res.end('NO IMAGE!')
    } else {
        countDookoo++;
        res.end(countDookoo.toString())
    }
}
const server = http.createServer(requestHandler);
server.listen(3000, function (bug) {
    console.log(bug)
});

// заставить обработчик реквестхэндлер прочитать индекс аштиэмэль и отрисовать его