import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextPropTypes,
  useColorScheme,
  View,
} from 'react-native';
import RestaurantCard from './components/RestaurantCard';
import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import RestaurantScreen from './screens/Restaurants';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <RestaurantScreen />
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  }
});

export default App;
