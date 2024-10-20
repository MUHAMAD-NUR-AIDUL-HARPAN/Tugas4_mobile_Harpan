import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from '../style/font_style'
import { containerStyle } from '../style/container_style'

const StartScreen = () => {
  return (
    <View style ={{
      backgroundColor:'black',
      flex:1,  position: 'relative'}}>
       

      
      <Image source={require('../../assets/image-start.png')} style ={{
        width: '100%',
        // marginTop: '-100px',
        // paddingBottom:  200
        height: 700
      }}/>

      <View style = {{position: 'absolute', bottom: 0,
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%'
        // display: 'flex', 
        // flexDirection: 'column'd
        // flex: 1,
        // margin: 'auto'
        }}>
          
        <Text style={[style.whiteLarge, {textAlign: 'center', width: 290 }]}>coffe so good, your taste buds  will love</Text>
        <View style ={{height:10}}/>
        <Text style= {[style.whiteHint, {width: 270, textAlign: 'center'}]}>The best grain, the finest roast, the powerful flavor.</Text>
        <View style ={{height:25}}/>
      <View style = {containerStyle.button}>
        <Text style={style.whiteMedium}>Get Started</Text>
      </View>
        <View style={{height: 40}}/>
      </View>

    </View>
  )
} 

export default StartScreen