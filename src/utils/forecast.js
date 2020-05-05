const request = require('request');
const forecast = (latitude, longitutde, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f6c68ee252cabced122a012237f0fbbc&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitutde)  +  '?units=f';
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, "The weather is " + body.current.weather_descriptions[0] + ". The temperature is " + body.current.temperature + ".");
        }
    })
};

module.exports = forecast;
