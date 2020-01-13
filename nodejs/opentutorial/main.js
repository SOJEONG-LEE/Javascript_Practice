var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer((request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    console.log('_url', _url);
    console.log('queryData.id', queryData.id);
    if (_url == '/') {
        // _url = '/index.html';
        title = 'Welcome';
    }
    if (_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}.txt`, 'utf-8', (err, description) => {
        // if(err) throw err;
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
    `;
        response.end(template);
    });

    // response.end(fs.readFileSync(__dirname + _url));
    // response.end(queryData.id);


});
app.listen(3000);