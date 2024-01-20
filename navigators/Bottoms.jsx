import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from '../interfaces/Home';
import Setting from '../interfaces/Settings';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="home" component={Home}/>
            <Tab.Screen name="setting" component={Setting}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavigation;