/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import BusinessesScreen from './screens/BusinessesScreen';
import BusinessDetailScreen from './screens/BusinessDetailScreen';

const MainNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="Home" component={BusinessesScreen} />
        <MainNavigator.Screen name="Profile" component={BusinessDetailScreen} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
