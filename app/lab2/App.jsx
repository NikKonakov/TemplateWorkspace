import React from 'react';
import {SafeAreaView} from 'react-native';
import {ToDoForm} from "./ToDoForm.jsx";
import {ToDoList} from "./ToDoList.jsx"; 

export function App() {
  return (
    <SafeAreaView>
      <ToDoList></ToDoList>
      <ToDoForm></ToDoForm>
    </SafeAreaView>
  );
}

