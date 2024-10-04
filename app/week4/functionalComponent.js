import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'

const FunctionalComponent = () => {
    const[name,Setname] = useState("");
    const HandlePress = (newName) => {
        Setname(newName)
    };
    const[isShown, setIsShown] = useState(true);
    const HandleChangeBool = (currentState) => {
        if (currentState == true) {
            setIsShown(false)
        } else {
            setIsShown(true)
        }
    };
    const[number,setNumber] = useState(0);
    const[number2,setNumber2] = useState(0);
    const[numberTotal, setNumberTotal] = useState(null);
    const additionNK = (Qint1, Qint2) => {
        return(parseInt(Qint1)+parseInt(Qint2))
    }
    const[counter, setCounter] = useState(0);
    const manipulateCounter = (value) => {
        setCounter(counter + value)
    }
  return (
    <View 
    style={styles.container}>
        <Button 
        onPress={()=>(HandleChangeBool(isShown))}
        title="Nado Renderit'?"
        ></Button>
        {isShown ? 
        <View>
            <Text style={styles.textstyle}>Yuipeee</Text>
        </View> : 
        <View>
            <Text style={styles.textstyle}>Oh,nooo</Text>
        </View>
        }
        <Text 
        style={styles.textstyle}
        >My Name is: {name}</Text>
        <TextInput
        style={styles.textstyle}
        onChangeText={Setname}
        placeholder='Enter text here...'></TextInput>
        <Button 
        title='Name' 
        onPress={()=>(HandlePress("Test"))}
        ></Button>
        <View>
            <Text style={styles.textstyle}>Enter the first value:</Text>
            <TextInput style={styles.textstyle} onChangeText={setNumber}></TextInput>
            <Text style={styles.textstyle}>Enter the second value:</Text>
            <TextInput style={styles.textstyle} onChangeText={setNumber2}></TextInput>
            <Text style={styles.textstyle}>The result is: {numberTotal}</Text>
            <Button title='Addition' onPress={()=>(setNumberTotal(additionNK(number, number2)))}></Button>
        </View>
        <View>
            <Text style={styles.textstyle}>Counter</Text>
            <Text style={styles.textstyle}>Count: {counter}</Text>
            <Button 
            title='Do stuff' onPress={()=>(manipulateCounter(1))}
            ></Button>
        </View>
    </View>
  )
}

export default FunctionalComponent

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    textstyle:{
        color: "white"
    }
})