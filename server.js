const express = require('express') // require the express package 
const app = express() // initialize your express app instance
const cors = require('cors');
const PORT = process.env.PORT ;
const axios = require('axios'); // require the package
const weather = require('./data/weather.json')
require('dotenv').config();

app.use(cors()) // after you initialize your express app instance
// a server endpoint 


server.get('/', (req, res)=> { 
  res.send('Hello World') 
})
 

server.get('/weather', (req, res)=> { 
    res.send(weather) 
  })
   
  server.get('/weather/:lon/:lat/:city_name', (req, res)=> { 
    const data = weather.find((elem)=> +elem.lon === +req.params.lon&& +elem.lat === +req.params.lat&& 
    elem.city_name === req.params.city_name )
          if(data){
              res.send(data)

          }else{res.send('the city not found ')}
  }) ;

  server.get('/weather/:city_name', (req, res)=> { 
  let weatherArr = [] ;
  const findcity = weather.find( (elem)=> elem.city_name === req.params.city_name)
  if(findcity){findcity.map((day)=> newWeathwe.push(new Forcast(day))) ;
res.send(newWeather) ;
}else{
    res.status(500).send('the location was not found ')
}
  }) ;

  class Forecast{
      constructor(city){
          this.date = city.datetime 
          this.description = city.weather.description 
      }

  }


app.listen(PORT,()=>{
    console.log('hello from noortan')
})  // kick start the express server to work