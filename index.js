require('dotenv').config()


const request = require('request');
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});

let apiKey = process.env.apiKey;
let city = 'raleigh';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

console.log(apiKey)