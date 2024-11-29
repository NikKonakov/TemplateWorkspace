import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { ToDoForm } from "./components/ToDoForm.jsx";
import { ToDoList } from "./components/ToDoList.jsx";
import HomeLayout from "./layout/HomeLayout.js";
import { Stack, Router, Link } from 'expo-router';
import "../../global.css"



export function App() {
  const[tasks, setTasks] = useState([
    'Do Laundry',
    'Go to gym',
    'Walk dog'
  ]);
  const addTask = (task) => {
    // Implement the logic to add a new task
    setTasks(prevTasks => [...prevTasks, task]);
    // console.log(task);
  };
  return (
    <HomeLayout>
      <SafeAreaView>
              <ToDoList tasks={tasks}></ToDoList>
              <ToDoForm addTask={addTask}></ToDoForm>
            </SafeAreaView>
    </HomeLayout>
            
  );
}
