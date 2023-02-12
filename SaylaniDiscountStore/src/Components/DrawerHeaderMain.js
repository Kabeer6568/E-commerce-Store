
// In App.js in a new project
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import React from 'react';

import DrawerHeader from './DrawerHeaderMain.js'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from '../../screens/FirstScreen.js';
import LoginForm from '../../screens/Login.js';
// import DrawerNavAddition from './src/Components/DrawerNavAddition'

const Drawer = createDrawerNavigator();


function DrawerHeaderMain() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerHeader {...props} />} screenOptions={{headerShown: false}}>
          
          <Drawer.Screen name="FirstScreen" options={{
            title: "FirstScreen",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} component={LoginForm} />



          
          <Drawer.Screen name="LoginForm" options={{
            title: "LoginForm",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} component={LoginForm} />
          

        </Drawer.Navigator>

      </NavigationContainer>


    </>
  );
}

export default DrawerHeaderMain;


