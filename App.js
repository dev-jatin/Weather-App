import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator,Text, ToastAndroid, ImageBackground } from "react-native";
import Search from "./component/search";
import Weather from './component/weather';

const API_KEY = '6fa1e498113ac83f8af338c0e491815a'

let temp, name, cond;

const App: () => Node = () => {
  const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName) {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`
        try {
            const response = await fetch(API);
            if(response.status === 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData('Mumbai');
    }, [])

    console.log(weatherData)


   if(weatherData === null) {
       console.log("Not Found")
      ToastAndroid.show("City Not Valid !", ToastAndroid.SHORT);
    } else {
        temp = (weatherData.main.temp).toFixed(0)
        cond = weatherData.weather[0].main
        name = weatherData.name
    }

    let image

    switch (cond) {
      case 'Ash' : image = require('./assets/images/Ash.jpg')
        break
      case 'Clear' : image = require('./assets/images/Clear.jpg')
        break
      case 'Clouds' : image = require('./assets/images/cloudy.jpg')
        break
      case 'Drizzle' : image = require('./assets/images/Drizzle.jpg')
        break
      case 'Fog' : image = require('./assets/images/Fog.jpg')
        break
      case 'Haze' : image = require('./assets/images/Haze.jpg')
        break
      case 'Mist' : image = require('./assets/images/Mist.jpg')
        break
      case 'Rain' : image = require('./assets/images/Rain.jpg')
        break
      case 'Sand' : image = require('./assets/images/Sand.jpg')
        break
      case 'Snow' : image = require('./assets/images/Snow.jpg')
        break
      case 'Squall' : image = require('./assets/images/Squall.jpg')
        break
      case 'Thunderstorm' : image = require('./assets/images/Thunderstorm.jpg')
        break
      case 'Tornado' : image = require('./assets/images/Tornado.jpg')
        break
      case 'Dust' : image = require('./assets/images/Dust.jpg')
        break
      default : image = require('./assets/images/cloudy.jpg')
    }
    
    return (
        <>
          <ImageBackground
            source={image}
            resizeMode={"stretch"}
            style={styles.image}>
              <Search fetchWeatherData = {fetchWeatherData}/>
              {loaded ? <View/> : 
              <View style={styles.container} >
                  <ActivityIndicator
                    size="large"
                    color="#ffffff" />
                  <Text> {' '} Loading </Text>
              </View>
                }
            <Weather
              temp={temp}
              cond={cond}
              name={name}
              fetchWeatherData={fetchWeatherData}/>
          </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    color : '#fff',
    backgroundColor:'rgba(0,0,0,0.2)',
    paddingBottom : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
      margin: 20,
      fontSize: 28
  },
  image: {
    height : "100%",
    width : "100%",
  },
});

export  default App
