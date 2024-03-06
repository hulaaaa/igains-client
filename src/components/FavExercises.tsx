import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



export default function FavExercises() {
    return (
        <View style={styles.main}>
          <ImageBackground resizeMode="stretch" style={styles.container}  source={require('../../assets/images/app/favExerBg.png')}>
          
            <View>
              <Text style={{ fontFamily: 'Regular', fontSize: 24, color: 'rgba(255,255,255,0.9)', }}>Train everyday</Text>
              <Text style={{ fontFamily: 'Light', fontSize: 13, color: 'rgba(255,255,255,0.5)', }}>with your favourite exercises.</Text>
            </View>
            <TouchableOpacity style={{
              backgroundColor: '#201F1F',
              borderRadius: 20,
              width: '47%',
              marginTop: 20,
              paddingVertical: 10,
              borderColor: '#282727',
              borderWidth: 1,
              
            }}>
              <Text style={{fontFamily: 'Regular', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.7)'}}>
                 See your favourite 
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      height: 145,
      width:  Dimensions.get('window').width - 50,
    },
    main: {
      borderRadius: 12,
      width:  '100%',
    }
})