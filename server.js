const express = require('express');
var request = require('request');
const app = express();
let cors = require('cors');
app.use(cors());
const url ='https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

app.get('/image', function(req, res){
    request(url, function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
        
        res.status(200).send(body)
    });
})



app.listen(3003)