import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="home" options={{title:"Home"}}></Stack.Screen>
            <Stack.Screen name="about" options={{title:"About"}}></Stack.Screen>
        </Stack>
    );
};

export default Layout;