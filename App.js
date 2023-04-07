import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store} from "./src/store/store"
import SingupScreen from './src/scenes/SignUpScreen';
import SetupScreen from './src/scenes/SetupScreen';
import CountryScreen from './src/scenes/CountryScreen';
import HomeScreen from './src/scenes/HomeScreen';

const Stack = createNativeStackNavigator();

export default () =>{
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Signup'>
          <Stack.Screen name="Signup" component={SingupScreen} options={{title:"Sign Up" , headerTitleAlign:"center" , headerTintColor:"#005B96" }} />
          <Stack.Screen name="SetupScreen" component={SetupScreen} options={{title:"Setup Your Profile" , headerTitleAlign:"center" , headerTintColor:"#005B96" }} />
          <Stack.Screen name="CountryScreen" component={CountryScreen} options={{headerShown:false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}




