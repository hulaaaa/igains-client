import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FavoriteBg from '../../assets/svg/FavoriteBg'

export default function FavExercises() {
    return (
        <View style={styles.main}>
            <View style={{ top: 15, left: 15, justifyContent: 'space-between', height: '77%' }}>
              <View>
                <Text style={{ fontFamily: 'Regular', fontSize: 24, color: 'rgba(255,255,255,0.9)', }}>Train everyday</Text>
                <Text style={{ fontFamily: 'Light', fontSize: 13, color: 'rgba(255,255,255,0.5)', }}>with your favourite exercises.</Text>
              </View>
              <TouchableOpacity style={{
                backgroundColor: '#201F1F',
                borderRadius: 20,
                width: 'auto',
                paddingVertical: 10,
                borderColor: '#282727',
                borderWidth: 1,
              }}>
                <Text style={{fontFamily: 'Regular', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.7)'}}>
                   See your favourite 
                </Text>
              </TouchableOpacity>
            </View>
            <Image source={require('../../assets/images/app/favExerBg.png')} style={{ position: 'absolute',zIndex: -1,}} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 145,
    },
    container: {
        zIndex: -1,
    }
})