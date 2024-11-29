import { Text, View } from 'react-native'
import React, { Component } from 'react'
import HomeLayout from './layout/HomeLayout'
import {App} from "./App";

export class About extends Component {
  render() {
    return (
      <HomeLayout>
        <App>
        </App>
      </HomeLayout>
    )
  }
}

export default About