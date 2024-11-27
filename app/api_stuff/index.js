import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Tasks from './tasks'

export default class index extends Component {
  render() {
    return (
      <View>
        <Tasks></Tasks>
      </View>
    )
  }
}