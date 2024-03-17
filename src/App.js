import Main from './components/main';
import MainBox from './components/main-box/main-box';
import './App.css';
import Cities from './components/main/cities';
import { useState } from 'react';


function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  

  return (
    <div className="App">
      <Cities setCity={setCity} setWeather={setWeather} />
      <section className='weather-app' >
        <Main />
        <div className="weather-app__main">
          <div className='box-group'>

            <MainBox city={city} weather={weather} />


          </div>
        </div>

      </section>



    </div >
  );
}

export default App;
