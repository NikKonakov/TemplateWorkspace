import { Text, View, ScrollView, StyleSheet, Pressable } from 'react-native'
import React, { Component, useState, useEffect } from 'react'


export function ToDoList({tasks}) {
  // const [newTasks, setNewTasks] = useState([]);
  // useEffect(() => {
  //   setNewTasks(tasks);
  // }, [tasks]);
  return (
    <View>
        <ScrollView>
          {tasks.map((task, index) => (
            <Pressable key={index}>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
          ))}
      </ScrollView>
      </View>
  )
}


const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });