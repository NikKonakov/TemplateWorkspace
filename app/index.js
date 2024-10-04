import React, {Component} from "react";
import {View, Text, Button, Alert} from "react-native";
import "../global.css"

class Index extends Component {
    render() {
        var isLogged = false
        let items = ["Apple", "15", "Cognac", "Beybichka"]
        return (
            <View 
            style={{
                flex: 1, 
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'rgb(255,0,255)',
            }}>
                <Text 
                style={{ 
                    fontSize: 45 
                }}>
                    Hello World!
                </Text>
                {
                    isLogged ? <Text className="color-indigo-600">Hello, user!</Text> : <Text className="color-indigo-900 text-lg font-extrabold">Please Log in</Text>
                }
                {
                    items.map((i) => <Text key={i} style={{ fontSize: 20 }}>{i}</Text>)
                }
                <Button title="Sample Title" onPress={()=>alert("Text here!")}></Button>
                <Button title="Route to Business Card"></Button>
            </View>
        );
    }
}

export default Index;