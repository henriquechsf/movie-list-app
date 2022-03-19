import React from 'react';
import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';
const {NavigationContainer} = require('@react-navigation/native');
const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
