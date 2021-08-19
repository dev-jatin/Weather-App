import React ,{useState} from 'react'
import { View, Text, StatusBar, SafeAreaView} from "react-native";

import styles from "./styles";


const Weather = (props) => {

  return(
      <>
        <StatusBar barStyle='light-content' translucent backgroundColor={'transparent'} />

          <SafeAreaView style = {styles.container} >
            <Text style={styles.cityName}> {props.name} </Text>
            <View style={styles.tempContainer}>
              <Text style={styles.temperature}>{props.temp}</Text>
              <Text style={styles.cel}>{'\u00b0'}C</Text>
            </View>
            <Text style={styles.condition}>{props.cond}</Text>
          </SafeAreaView>
      </>
  )
}

export default Weather
