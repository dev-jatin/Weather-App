import {StyleSheet} from 'react-native'

const styles = StyleSheet.create(
  {
    container : {
      alignItems : 'center',
      flex : 1,
      backgroundColor:'rgba(0,0,0,0.2)',
    },
    tempContainer : {
      flexDirection : 'row',
      marginTop : 20,
    },
    cel : {
      fontSize : 50,
      color : '#ffffff'
    },
    cityName : {
      color : '#ffffff',
      fontSize : 36,
      fontWeight: '200',
    },
    temperature : {
      color : '#ffffff',
      fontSize : 200,
      fontWeight : '600',
      marginBottom : 10,
    },
    condition : {
      fontSize : 25,
      color : '#ffffff',
      fontWeight : '400',
    },
    buttonText : {
      fontSize : 12,
      color : '#fff',
    },
    button : {
      backgroundColor: 'rgba(0,0,0,0.39)',
      borderRadius : 50,
      padding : 16,
    },
  }
)

export default styles
