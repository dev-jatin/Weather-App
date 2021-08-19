import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";


const Search = (props) => {

  const [cityName, setCityName] = useState('')

  console.log(cityName)

  return(
    <>
      <View style={styles.container}>
        <View style={styles.insideContainer}>
          <TextInput
            style={styles.cityName}
            placeholder='Enter City name'
            onChangeText={(text) => setCityName(text)} />
          <Pressable
            title={'Search'}
            style={styles.button}
            onPress = {() => props.fetchWeatherData(cityName)}>
            <Text style = {styles.buttonText}>SEARCH</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create( {
    container : {
      alignItems : 'center',
      paddingTop : 80,
      paddingBottom : 40,
      justifyContent : 'space-between',
      backgroundColor:'rgba(0,0,0,0.2)',
    },
    insideContainer : {
      backgroundColor:'rgba(180,180,180,0.53)',
      alignItems:  'center',
      flexDirection:  'row',
      justifyContent : 'space-between',
      borderRadius : 100,
      paddingStart : 16,
      paddingEnd : 16,
    },
    button: {
      color : '#000000',
      fontWeight : 'bold'
    },
    cityName : {
      paddingEnd : 32,
      fontSize : 16,
    },
  })

export default Search
