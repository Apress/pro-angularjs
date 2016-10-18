var connect = require('connect');

connect.createServer(
    connect.static("../angularjs")

).listen(5000);
