var a = {
    string: 'a',
    'show': function () {
        console.log("hello " + this.string);
    }
}

var b = {
    string: 'b'
}

a.show();
a.show.call(b);
