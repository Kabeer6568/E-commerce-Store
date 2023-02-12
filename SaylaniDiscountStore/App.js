
// import React from 'react';
// import {
//   Text,
// } from 'react-native';

// import LoginForm from "./screens/Login";
// import FirstScreen from "./screens/FirstScreen";


// function App() {
//   return (
//     <>
//       <FirstScreen/>
//     </>
//   );
// }

// export default App;




// In App.js in a new project
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import React from 'react';

import DrawerHeaderMain from './src/Components/DrawerHeaderMain'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import FirstScreen from './screens/FirstScreen';
import LoginForm from './screens/Login';
import RegistrationForm from './screens/RegistrationForm';
import Store from './screens/store';

// import DrawerNavAddition from './src/Components/DrawerNavAddition'


// import DrawerHeaderMain from './src/Components/DrawerHeaderMain'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function Root() {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={FirstScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginForm" component={LoginForm} options={{ headerShown: false }}/>
      <Stack.Screen name="RegistrationForm" component={RegistrationForm} options={{ headerShown: false }}/>
      <Stack.Screen name="Store" component={Store} options={{ headerShown: true }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}



function App() {
  return (
    <>
      <Root/>
    </>
  );
}

export default App;










