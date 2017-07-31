const express = require('express'),
    path = require('path'),
    app = express(),
    http = require('http'),
    server = http.createServer(app);

app.use(express.static(__dirname));


app.use('/page', function (req, res, next) {
    res.sendFile('page.html', {root: __dirname});
});
app.use('/', function (req, res, next) {
    res.sendFile('index.html', {root: __dirname});
});
app.set('port', process.env.PORT || '3000');

server.listen(app.get('port'), function () {
    console.log('Тестовое приложение запущено http://localhost:' + app.get('port'));
});