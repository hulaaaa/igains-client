import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HeaderText({second}:any) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, Dmytro 👋🏻</Text>
            <View>
                {second}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: 'Regular',
        fontSize: 21,
        color: 'white',
    }
})