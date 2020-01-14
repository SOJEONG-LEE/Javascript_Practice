var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer((request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if (pathname === '/') {
        if (queryData.id === undefined) {
            // if(err) throw err;
            fs.readdir(__dirname + '/data', (err, fileList) => {
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var body = `<h2>${title}</h2>${description}`;
                var control = `<a href="/create">create</a>`;
                var html = template.HTML(title, template.List(fileList), body, control);
                response.writeHead(200);
                response.end(html);
            });
        } else {
            fs.readdir(__dirname + '/data', (err, fileList) => {
                var filteredId = path.parse(queryData.id).base;
                fs.readFile(__dirname + `/data/${filteredId}`, 'utf-8', (err, description) => {
                    var title = queryData.id;
                    var sanitizedTitle = sanitizeHtml(title);
                    var sanitizedDescription = sanitizeHtml(description);
                    // var sanitizedDescription = sanitizeHtml(description, {
                    //     allowedTags:['h1']
                    // });
                    var body = `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`;
                    var control = `<a href="/create">create</a> 
                                    <a href="/update?id=${sanitizedTitle}">update</a> 
                                    <form action ="/delete_process" method="post">
                                    <input type="hidden" name ="id", value="${sanitizedTitle}">
                                    <input type="submit" value="delete">
                                    </form>`;
                    var html = template.HTML(title, template.List(fileList), body, control);
                    response.writeHead(200);
                    response.end(html);
                });
            });
        }
    } else if (pathname === '/create') {
        fs.readdir(__dirname + '/data', (err, fileList) => {
            var title = 'WEB - Create';
            var body = `
            <form action = "/create_process" method="post">
            <p><input type="text" name ="title" placeholder="title"></p>
            <p>
                <textarea name = "description" placeholder="description"></textarea>
            </p>
            <p><input type="submit"></p>
            </form>`;
            var html = template.HTML(title, template.List(fileList), body, '');
            response.writeHead(200);
            response.end(html);
        });
    } else if (pathname === '/create_process') {
        var body = '';
        request.on('data', data => {
            body += data;
            if (body.length > 1e6) {
                request.connection.destroy();
            }
        });
        request.on('end', () => {
            var post = qs.parse(body);
            fs.writeFile(__dirname + `/data/${post.title}`, post.description, 'utf-8', err => {
                // if (err) throw err;
                response.writeHead(302, {Location: `/?id=${post.title}`});
                response.end();
            })
        });
    } else if (pathname === '/update') {
        fs.readdir(__dirname + '/data', (err, fileList) => {
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(__dirname + `/data/${filteredId}`, (err, description) => {
                var title = queryData.id;
                var body = `
            <form action = "/update_process" method="post">
            <input type="hidden" name ="id" value="${title}">
            <p><input type="text" name ="title" placeholder="title" value="${title}"></p>
            <p>
                <textarea name = "description" placeholder="description">${description}</textarea>
            </p>
            <p><input type="submit"></p>
            </form>`;
                var html = template.HTML(title, template.List(fileList), body, '');
                response.writeHead(200);
                response.end(html);
            });
        });
    } else if (pathname === '/update_process') {
        var body = '';
        request.on('data', data => {
            body += data;
            if (body.length > 1e6) {
                request.connection.destroy();
            }
        });
        request.on('end', () => {
            var post = qs.parse(body);
            fs.rename(__dirname + `/data/${post.id}`, __dirname + `/data/${post.title}`, err => {
                fs.writeFile(__dirname + `/data/${post.title}`, post.description, 'utf-8', err => {
                    // if (err) throw err;
                    response.writeHead(302, {Location: `/?id=${post.title}`});
                    response.end();
                });
            });
        });
    } else if (pathname === '/delete_process') {
        var body = '';
        request.on('data', data => {
            body += data;
            if (body.length > 1e6) {
                request.connection.destroy();
            }
        });
        request.on('end', () => {
            var post = qs.parse(body);
            var filteredId = path.parse(post.id).base;
            fs.unlink(__dirname + `/data/${filteredId}`, err => {
                response.writeHead(302, {Location: `/`});
                response.end();
            });
        });
    } else {
        response.writeHead(404);
        response.end('Not found');

    }
});

app.listen(3000);