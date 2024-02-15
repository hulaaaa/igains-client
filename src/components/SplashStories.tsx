import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import * as Haptics from 'expo-haptics';


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
            <Pagination
                activeDotIndex={changedIndex}
                containerStyle={{ paddingVertical: 0, paddingBottom: 30, }}
                dotsLength={welcomeStories.length}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.7}
                animatedFriction={2}
                animatedDuration={100}
                dotStyle={{
                    width: 28,
                    height: 7,
                    borderRadius: 20,
                    marginHorizontal: -7,
                    backgroundColor: '#E0FE10'
                }}
                inactiveDotStyle={{
                    width: 20,
                    height: 7,
                    borderRadius: 20,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}
            />
            <Carousel
                data={welcomeStories}
                layout={'default'}
                loop={false}
                sliderWidth={width}
                autoplay={false}
                onSnapToItem={(index) => {
                    setChangedIndex(index)
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                }}
                itemWidth={width}
                renderItem={({ item, index }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.bottomDivText}>
                            {item}
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
        height: 150,
    },
    bottomDivText: {
        width: "90%",
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Regular',
        fontSize: 15,
    },

})