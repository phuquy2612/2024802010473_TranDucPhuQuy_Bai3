import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { Appbar } from "react-native-paper";

const ToDoApp = () => {
  const [newToDo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);

  const addNewToDo = () => {
    if (newToDo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), title: newToDo }]);
      setNewToDo("");
    }
  };

  const removeToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar style={{ backgroundColor: "blue" }}>
        <Appbar.Content title="To do list" />
      </Appbar>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, marginRight: 10, padding: 5 }}
          value={newToDo}
          onChangeText={setNewToDo}
          placeholder="Enter new todo..."
        />
        <Button title="Add" onPress={addNewToDo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text>{item.title}</Text>
            <Button title="Remove" onPress={() => removeToDo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default ToDoApp;
