import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ToDoForm} from "./ToDoForm.jsx";
import {ToDoList} from "./ToDoList.jsx"; 


export function App() {
  const[tasks, setTasks] = useState([
    'Do Laundry',
    'Go to gym',
    'Walk dog'
  ]);
  const addTask = (task) => {
    // Implement the logic to add a new task
    setTasks(prevTasks => [...prevTasks, task]);
    console.log(task);
  };
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}></ToDoList>
      <ToDoForm addTask={addTask}></ToDoForm>
    </SafeAreaView>
  );
}

