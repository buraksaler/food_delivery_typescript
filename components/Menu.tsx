import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import ExploreScreen from '../screens/Explore';
import RestaurantScreen from '../screens/Restaurants';
import ProfileScreen from '../screens/Profile';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <TouchableOpacity onPress={() => {
        //go to explore
        navigation.navigate('Explore');
      }}>
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        //go to Restaurants
        navigation.navigate('Restaurants');
      }}>
        <Text style={styles.link}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        //go to Profile
        navigation.navigate('Profile')
      }}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 3,
    backgroundColor: '#efefef',
  },
  link: {
    fontSize: 16,
    color: '#097ade',
    marginTop: 4,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
  }
})


export default Menu