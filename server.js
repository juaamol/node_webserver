const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res) {
//     let output = {
//         name: 'Hello',
//         age: 1,
//         url: req.url
//     }
//     res.send(output);
// })

app.get('/data', function(req, res) {
    res.send('Hello data');
})

app.listen(3000, () => {
    console.log('Listening on 3000');
});