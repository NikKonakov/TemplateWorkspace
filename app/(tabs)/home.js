import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
        <Text style={{fontSize:26}}>Home</Text>
      </View>
    )
  }
}