var app = require('express')(),
    serveStatic = require('serve-static'),
    port = process.env.PORT || 8080;
 
app.use(serveStatic('static'));
app.listen(port);