const request = require("request");

const forecast=(latitude,longitude,callback)=>{

    const url='http://api.weatherstack.com/current?access_key=1913a6033d17abc4709e8f877bee41a8&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{

          if(error){

            callback('Unable to Connect to Location Service')
          }else if(body.error){
                 
            callback('Unable to find location',undefined)
    
          }else{
              callback(undefined,`${body.current.weather_descriptions[0]} . It is Currently ${body.current.temperature} degrees but it feels like ${body.current.feelslike} degrees`);



            


          }



    })




}

module.exports=forecast;