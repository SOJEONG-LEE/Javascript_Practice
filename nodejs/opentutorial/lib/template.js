module.exports = {
    HTML: function (title, list, body, control) {
        return `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            ${list}
          </ol>
          ${control}
          ${body}
        </body>
        </html>
        `;
    },
    List: function (fileList) {
        return fileList.map(file => `<li><a href="/?id=${file}">${file}</a></li>`).join('');
    }
}

// module.exports = template;