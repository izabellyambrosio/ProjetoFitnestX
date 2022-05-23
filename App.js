import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartdWhite from './src/pages/StartdWhite';
import StartdBlue from './src/pages/StartdBlue';
import TrackObjective from './src/pages/TrackObjective';
import GetBurn from './src/pages/GetBurn';
import EatWell from './src/pages/EatWell';
import ImproveQuality from './src/pages/ImproveQuality';
import Register from './src/pages/Register';
import Profile from './src/pages/Profile';
import Login from './src/pages/Login';
import WhatGoal from './src/pages/WhatGoal';
import WhatGoalDois from './src/pages/WhatGoalDois';
import WhatGoalTres from './src/pages/WhatGoalTres';
import Welcome from './src/pages/Welcome';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="StartdWhite" component={StartdWhite}/>
        <Stack.Screen name="StartdBlue" component={StartdBlue}/>
        <Stack.Screen name="TrackObjective" component={TrackObjective}/>
        <Stack.Screen name="GetBurn" component={GetBurn}/>
        <Stack.Screen name="EatWell" component={EatWell}/>
        <Stack.Screen name="ImproveQuality" component={ImproveQuality}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="WhatGoal" component={WhatGoal}/>
        <Stack.Screen name='WhatGoalDois' component={WhatGoalDois}/>
        <Stack.Screen name="WhatGoalTres" component={WhatGoalTres}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App;