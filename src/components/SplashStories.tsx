import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';

export default function SplashStories() {
    const welcomeStories: string[] = [
        "Sit back never worry about sharing bills! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sunt quia? Sit back never worry about sharing bills!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sunt quia? Sit back never worry about sharing bills! Lorem ipsum dolor sit amet. Corporis, sunt quia?",
        "Risus, sit amet, consectetur adipisicing elit. Corporis, sunt quia? Sit back never worry about sharing bills! Lorem ipsum dolor sit amet.",
        "Random text, consectetur adipisicing elit. Corporis, sunt quia? Sit back never worry about sharing bills! Lorem ipsum dolor sit amet."
    ]
    const width = Dimensions.get('window').width;
    const [changedIndex, setChangedIndex] = useState(0)

    return (
        <View style={styles.storiesDiv}>
            <View style={styles.paginationStories}>
                {
                    welcomeStories?.map((element, index) => {
                        return changedIndex === index ? 
                        <View key={index} style={{ backgroundColor: '#E0FE10', width: 35, height: 6, borderRadius: 20 }} /> : <View key={index} style={styles.pageStories} />
                    })
                }
            </View>
            <Carousel
                loop
                width={width}
                height={150}
                autoPlay={true}
                data={welcomeStories}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setChangedIndex(index)}
                renderItem={({ index }) =>(
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.bottomDivText}>
                            { welcomeStories[index] }
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    storiesDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
    },
    paginationStories: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    pageStories: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: 20,
        height: 6,
        borderRadius: 20,
    },
    bottomDivText: {
        width: "90%",
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Regular',
        fontSize: 15,
    },

})