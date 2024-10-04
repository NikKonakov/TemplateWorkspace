import { Image, Text, View, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import "../../global.css"

export default class ard extends Component {
    render() {
        return (
                <View className="border-2 border-black flex justify-center bg-emerald-200 m-4 w-1/3" style={{flexDirection: 'row'}}>
                    <View className='flex justify-center p-2' style={{flexDirection: 'col'}}>
                        <Text className='text-xl'>Nikita Konakov</Text>
                        <Text className='text-md'>Student</Text>
                        {/* <Image source={{ url: 'https://reactnative.dev/img/tiny_logo.png'}}></Image> */}
                        <img src='https://www.pngarts.com/files/5/Cartoon-Avatar-PNG-Image-Transparent.png' alt='test' className=''></img>
                    </View>
                    <View className='p-2 justify-center flex'>
                        <Text className='p-0.5'>Address: Sunhaven 991, WE, CA, AB</Text>
                        <Text className='p-0.5'>Phone: +1 403.567891</Text>
                        <Text className='p-0.5'>Email: nikita.nikita@nikita.nikita</Text>
                        <Text className='p-0.5'>Website: konakov.com</Text>
                    </View>
                </View>
        )
  }
}