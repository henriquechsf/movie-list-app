import React from 'react';
import HomeScreen from './src/screens/home.screen';
import DetailScreen from './src/screens/detail.screen';
const {NavigationContainer} = require('@react-navigation/native');
const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhe" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
