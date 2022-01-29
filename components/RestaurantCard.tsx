import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

interface Props {
    name: string;
}

const RestaurantCard: React.FC<Props> = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>{name}</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 3,
        backgroundColor: '#efefef',
    },
    screenTitle: {
        fontSize: 16,
        marginTop: 8,
        fontWeight: 'bold',
    },
})


export default RestaurantCard