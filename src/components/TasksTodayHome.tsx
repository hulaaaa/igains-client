import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DoneIcon from '../../assets/svg/DoneIcon';
import GymIcon from '../../assets/svg/SportIcon/GymIcon';
import RunningIcon from '../../assets/svg/SportIcon/RunningIcon';
import SwimmingIcon from '../../assets/svg/SportIcon/SwimmingIcon';
interface Task {
    title: string;
    icon: any,
    completed: boolean;
}

export default function TasksTodayHome() {
    let tasks: Task[] = [
        {
            title: "Swimming",
            icon: <SwimmingIcon/>,
            completed: false,
        },
        {
            title: "Yoga",
            icon: <RunningIcon/>,
            completed: true,
        },
        {
            title: "Running",
            icon: <RunningIcon/>,
            completed: false,
        },
        {
            title: "Gym",
            icon: <GymIcon/>,
            completed: false,
        },
        {
            title: "Stretching",
            icon: "🧎‍♂️",
            completed: true,
        },
    ]

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal={true} style={styles.container}>
            {
                tasks.map((item, index) => {
                    return (
                        <View key={index} style={styles.taskG}>
                            {
                                item.completed ? (
                                    <View style={styles.innerTaskDone}>
                                        <DoneIcon />
                                    </View>
                                ) : (
                                    <View style={styles.innerTask}>
                                        {item.icon}
                                    </View>
                                )
                            }

                            <Text style={styles.innerText}>{item.title}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
    },
    taskG: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        marginRight: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    innerTask: {
        width: 73,
        height: 73,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        borderColor: '#282728',
        borderWidth: 4,
        borderRadius: 10,
    },
    innerTaskDone: {
        width: 73,
        height: 73,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#17181B',
        borderColor: '#282728',
        borderWidth: 4,
        borderRadius: 10,
    },
    innerText: {
        fontFamily: 'Regular',
        fontSize: 15,
        color: 'white',
    }
})