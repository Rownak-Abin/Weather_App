    function getWeather(){

        var country_name = document.getElementById('c_name').value;
        var state_code = document.getElementById('s_code').value;
        var country_code = document.getElementById('c_code').value;

        try {

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+country_name+','+state_code+','+country_code+'&appid=be74279c601187eab7d7fa34627297f4')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            console.log(data);
            let temparature = data.main.temp - 273.15;
            temparature = (Math.round(temparature * 100) / 100).toFixed(0)+'°C';

            let feel_temp = data.main.feels_like -273.15;
            feel_temp = (Math.round(feel_temp * 100) / 100).toFixed(0)+'°C';
            
            document.getElementById("city_name").innerHTML = data.name;
            document.getElementById("temp").innerHTML = temparature;
            document.getElementById("humidity").innerHTML = 'Humidity: '+data.main.humidity+'%';
            document.getElementById("feel_like").innerHTML = 'Feels Like: '+feel_temp;
            document.getElementById("wind_speed").innerHTML = 'Wind Speed: '+data.wind.speed+' met/s';
            document.getElementById("desc").innerHTML = 'Description: '+data.weather[0].description;
      
          });
        }
        catch(err){
            document.getElementById("city_name").innerHTML = err.message;
        };

    }


