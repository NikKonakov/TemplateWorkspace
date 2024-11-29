import { Text, View, Pressable } from 'react-native'
import React, { Component } from 'react'
import {App} from "./App.jsx"
import {Link, useNavigation} from 'expo-router'
import HomeLayout from './layout/HomeLayout.js'
import "../../global.css"


const Index = () => {
  const navigation = useNavigation();
  return (
      <HomeLayout>
          <Pressable onPress={() => (navigation.navigate("about"))}>
            <Text className="text-white">
              Go To About Page
            </Text>
          </Pressable>
      </HomeLayout>
  );
};

export default Index;