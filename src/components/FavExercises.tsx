import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavoriteBg from '../../assets/svg/FavoriteBg'

export default function FavExercises() {
    return (
        <View style={styles.main}>
            <FavoriteBg />
            <View style={{ position: 'absolute', top: 15, left: 15, }}>
                <Text style={{ fontFamily: 'Regular', fontSize: 26, color: 'rgba(255,255,255,0.9)', }}>Train everyday</Text>
                <Text style={{ fontFamily: 'Light', fontSize: 14, color: 'rgba(255,255,255,0.5)', }}>with your favourite exercises.</Text>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        top: 40,
    },
    container: {
        zIndex: -1,
    }
})