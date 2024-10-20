import { View, Text, Image } from 'react-native'
import React from 'react'

const StartScreen = () => {
  return (
    <View style ={{backgroundColor:'black',flex:1}}>
      
      <Image source={require('../../assets/image-start.png')} style ={{
        width: '100%',
        // marginTop: '-100px',
        // paddingBottom:  200
        height: 500
      }}/>
      
    </View>
  )
} 

export default StartScreen