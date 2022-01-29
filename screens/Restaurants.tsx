import { View, Text, ScrollView, StyleSheet } from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import React from 'react';

const RestaurantScreen = () => {
    return <View style={styles.container}>
        <Text style={styles.screenTitle}>Restaurant Screen</Text>
        <ScrollView>
            <RestaurantCard name='Sushi Restaurant' />
            <RestaurantCard name='Burger Restaurant' />
            <RestaurantCard name='Fine Dining Restaurant' />
            <RestaurantCard name='Sushi Restaurant' />
            <RestaurantCard name='Burger Restaurant' />
            <RestaurantCard name='Fine Dining Restaurant' />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 24,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default RestaurantScreen