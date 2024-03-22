var http = require('http')
var fs = require('fs')

var home
var about
var error
fs.readFile('./HTMLContent/homePage.html', (err, _html) => {
    if (err) {
        throw err
    } else {
        html = _html
    }
})
fs.readFile('./HTMLContent/about.html', (err, _html) => {
    if (err) {
        throw err
    } else {
        about = _html
    }
})
fs.readFile('./HTMLContent/error.html', (err, _html) => {
    if (err) {
        throw err
    } else {
        error = _html
    }
})

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./content/big.txt', 'utf8')
        // res.end(text)
        if (req.url == "/") {
            res.write(html)
        } else if (req.url == "/about") {
            res.write(about)
        } else {
            res.write(error)
        }
    })
    .listen(5000)