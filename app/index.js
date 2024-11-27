import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {Link} from "expo-router";

export default class index extends Component {
  render() {
    return (
      <View>
        <Text>index</Text>
        <Link href="/profile">Go to Profile</Link>
        <Link href="/settings">Go to Settings</Link>
        <Link href="/week1">Week1 Link</Link>
        <Link href="/(tabs)">Go to tabs</Link>
      </View>
    )
  }
}