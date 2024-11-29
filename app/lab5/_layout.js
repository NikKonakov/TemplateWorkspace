import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from "expo-router";
import { App } from './App';

const Layout = () => {
    return (
        <Stack screenOptions={{headerShown:true}}> 
            <Stack.Screen name="index" options={{title:"Home"}}></Stack.Screen>
            <Stack.Screen name="about" options={{title:"About"}}></Stack.Screen>
        </Stack>
    );
};

export default Layout;