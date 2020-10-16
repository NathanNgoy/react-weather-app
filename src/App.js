import React, {useEffect, useState} from 'react';
import Display from './components/Display';

function App() {
  const [cityName, setCityName] = useState('Los Angeles')
  const [temp, setTemp] = useState('')
  const [minTemp, setMinTemp] = useState('')
  const [maxTemp, setMaxTemp] = useState('')
  const [description, setDescription] = useState('')
  const [unit, setUnit] = useState('F')
  

  async function getWeather() {
    try {
      const weather = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_ID}`)
      //console.log(weather);
      const weatherData = await weather.json()
      setTemp(Math.round(weatherData.main.temp))
      setMinTemp(Math.round(weatherData.main.temp_min))
      setMaxTemp(Math.round(weatherData.main.temp_max))
      setDescription(weatherData.weather[0].main)

      console.log(weatherData)
    } catch (error) {
      console.error(error);
    }
  } 

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div className = "app">
      <Display 
        tempData = {temp}
        description = {description}
        cityName = {cityName}
        unit = {unit}
      />
    </div>
  );
}

export default App;
