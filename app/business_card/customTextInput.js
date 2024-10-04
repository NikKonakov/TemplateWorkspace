import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class CustomTextInput extends Component {
  render() {
    return (
      <View>
        <Text>CustomTextInput</Text>
        <TextInput multiline={true} placeholder='Joe Biden' style={styles.input}></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "green",
        borderColor: "gray",
        width:"100%",
        borderWidth: 1, 
        borderRadius: 10,
    }
})