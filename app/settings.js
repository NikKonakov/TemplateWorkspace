import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {Link} from "expo-router";

export default class settings extends Component {
  render() {
    return (
      <View>
        <Text>settings</Text>
        <Link href="/index">Go to Home</Link>
        <Link href="/profile">Go to My Profile</Link>
      </View>
    )
  }
}