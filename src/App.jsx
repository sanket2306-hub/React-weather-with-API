import React ,{useState,useEffect} from 'react';
import './App.css';
import Forecast from './componentes/Forecast';
import Inputs from './componentes/Inputs';
import TemperatureandDetails from './componentes/TemperatureandDetails';
import TimeandLocation from './componentes/TimeandLocation';
// import UilReact from '@iconscout/react-unicons/icons/uil-react' 
import TopButton from './componentes/TopButton';
// import getWeatherData from './Services/weatherServices';
import getFormattedWeatherData from './Services/weatherServices';
function App() {

  const [query,setQuery] =useState({q:' berlin'}); 
  const [units,setUnits] =useState('metric');
  const [weather,setWeather] =useState(null);


  useEffect(() => {
    const  fetchWeather = async() => {

      await getFormattedWeatherData( { ...query,units }).then (data => {
        setWeather(data);
      })
        
      }
  
      fetchWeather();
  }, [query ,units]);


 
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

        {weather && (
          <div>
          <TimeandLocation  weather={weather}/>
          <TemperatureandDetails  weather={weather}/>
    
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
      
    </div>
  );
}

export default App;
