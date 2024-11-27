import { View, Text, Button } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack screenOptions={
      {
        headerStyle:{backgroundColor:"colar"},
        headerTitleStyle: {fontWeight:'bold'},
        headerTintColor: "blue",
        // headerShown: false
      }
      }>
        <Stack.Screen name='index' options={{headerTitle:"Home"}}/>
        <Stack.Screen name='(tabs)'/>
        <Stack.Screen 
          name='modal' 
          options=
            {{title: "Modal", 
            animation: "fade_from_bottom",
            headerLeft:()=>(<Button title="close" onPress={()=>router.back}></Button>)
            }}>
        </Stack.Screen>
        <Stack.Screen 
          name='register' 
          options={{headerTitle:"Create Account", 
            headerRight:()=>(<Button title="open" 
            onPress={() => router.push("modal")}>
        </Button>)}}>
        </Stack.Screen>
        {/* <Stack.Screen name='settings' options={{headerTitle:"Settings"}}/> */}
        {/* <Stack.Screen name='profile' options={{headerTitle:"My Profile"}}/> */}
    </Stack>
  )
}

export default _layout