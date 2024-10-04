import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Card from "./card.js"
import CustomTextInput from './customTextInput.js'

export default class index extends Component {
  render() {
    return (
      <View>
        <Card></Card>
        <CustomTextInput></CustomTextInput>
      </View>
    )
  }
}