import { Text, View } from 'react-native'
import React, { Component } from 'react'
import "../../../global.css"

const HomeLayout = ({ children }) => {
  return (
    <View className=" bg-green-800 text-green-50 flex-1 justify-center items-center h-full p-4">
      {children}
    </View>
  );
};

export default HomeLayout;
