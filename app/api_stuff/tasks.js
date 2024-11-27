import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPosts } from './api';

const Tasks = () => {
    const [data, setData] = useState([]);

    const fetchData = async()=>{
        try{
            return setData(await getPosts());
        }catch(e){
            console.error("Error with fetching data has occured: ", e);
            setData([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <View>
        <Text>Test</Text>
        {console.log(data)}
    </View>



    // <View>
    //     <Text>TODO List:</Text>
    //     {data.length > 0 ? (data.map((item) => (
            
    //         <View key={item.id}>
    //             <Text>Name: {item.name}</Text>
    //             <Text>ID: {item.id}</Text>
    //             <Text>Job Title: {item.title}</Text>
    //             <Text>IsBalbes?: {item.balbes}</Text>
    //             <Image source={{uri:item.avatar}}
    //             style={{ width: 100, height: 100 }}></Image>
    //         </View>
    //     ))) 
    //     : 
    //         <Text>
    //             Loading the data...
    //         </Text>
    //     }
    // </View>
  )
}

export default Tasks