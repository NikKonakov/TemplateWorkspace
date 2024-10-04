import { Text, View } from 'react-native'
import React, { Component } from 'react'
import "../../global.css"

export default class index extends Component {
  render() {
    const user = { name: "Sanya", age: 22, check: true}
    return (
      <View>
        <DisplayMessage answer="Nah, I'd win" truth={false} ></DisplayMessage>
        <UserComponent user={user}></UserComponent>
      </View>
    )
  }
}

export const cringe = () => {
    return(
        <View>
            <Text>Nah, You won't</Text>
        </View>
    )
}

export const DisplayMessage = (props) => {
    return(
        <View>
            <Text>
                Sensei, are you going to lose?
            </Text>
            <Text>{props.answer}</Text>
            {props.truth == false && 
                <View>
                    <Text>He lost btw</Text>
                </View>}
        </View>
    )
}

export const UserComponent = ({user}) => {
    return(
        <View>
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
            <Text>Sanya? {user.check && <Text>Skibidi</Text>}</Text>
        </View>
    );
}
