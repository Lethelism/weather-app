const request = require('request');
const argv = require('yargs').argv;

let apiKey = '';
let city =  argv.c || 'atlanta';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err, response, body) {
	if(err){
		console.log('error:', error);
	}
	else{
		let weather = JSON.parse(body);
		let message = `It really is ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
	}
});
