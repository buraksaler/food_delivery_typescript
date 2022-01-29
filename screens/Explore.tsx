import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';

const ExploreScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Restaurants</Text>
            <View>
                <Text style={styles.sectionTitle}>Restaurants Near You</Text>
                <RestaurantCard name='Sushi Restaurant' />
                <RestaurantCard name='Burger Restaurant' />
                <RestaurantCard name='Fine Dining Restaurant' />

                <Text>Most Popular Restaurants</Text>
                <RestaurantCard name='Sushi Restaurant' />
                <RestaurantCard name='Burger Restaurant' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    restaurantCard: {
        backgroundColor: '#efefef',
    },
    sectionTitle: {
        fontSize: 16,
        marginTop: 16,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default ExploreScreen