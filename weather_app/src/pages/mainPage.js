import React, {useState} from 'react';
import ForecastBox from './../components/forecastBoxes';
import CityList from './../components/cityList'
import Sun from './../images/sun.png';

const getForecast = async (city, setInfoCity) => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?&appid=b0cef5a7c66f966aad14d15ea06dd907&units=metric&lang=fr&q=';
  let response = await fetch(`${url}${city}`)
  let data = await response.json();
  setInfoCity(data)
}


const MainPage = () => {

  const [city, setCity] = useState('Choose a city');
  const [infoCity, setInfoCity] = useState(null);
  const cityList = ['Paris', 'Madrid', 'Copenhaguen', 'London'];

  const handleSubmit = (event) => {
      event.preventDefault();
      getForecast(city, setInfoCity);
  }

  return (
        <div className="row h-100">
      <div className="col-sm-3 h-100" style={styles.leftColumn}>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeHolder="City" className="offset-sm-1 col-sm-10" onChange={event => setCity(event.target.value)}/>
            <input type="submit" value="Search" className="offset-sm-1 col-sm-5" />
        </form>
        {cityList.map((city, index) => {
            return <CityList city={city} />
          })
        }
      </div>

      <div className="col-sm-7 offset-sm-1 h-100" style={styles.rightColumn}>
        <h1> {infoCity == null ? 'Choose a city' : city} </h1><br/>
        <img src={Sun} style={styles.weatherIcon}/> <br/>
        <p> Temperature : {!!infoCity && infoCity.main.temp} °C</p>
        <p> Humidité : {!!infoCity && infoCity.main.humidity} %</p>
        <br/>
      {infoCity != null ? (
          <div className="row">
              <ForecastBox text="Temp Min:" temperature={infoCity.main.temp_min}/>
              <ForecastBox text="Ressenti:" temperature={infoCity.main.feels_like}/>
              <ForecastBox text="Temp Max:" temperature={infoCity.main.temp_max}/>
          </div>
        ) : null
      }
      </div>
    </div>
  )
}

const styles = {
  leftColumn: {
    backgroundColor: "#CDEDF7",
    borderWidth: 2,
    borderStyle: "solid"
  },
  rightColumn: {
    color: "blue",
    borderWidth: 2,
    borderStyle: "solid"
  },
  placeBox: {
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    height: 75,
    textAlign: "center",
    backgroundColor: "#FFECAE"
  },
  weatherIcon: {
    height: 100,
    width: 100,
    align: "left"
  },
  forecastBox: {
    textAlign: "center",
    backgroundColor: "#FFECAE",
    height: 75
  }
}

export default MainPage;
