import './App.css';
import Header from "./mycomponents/header";
import { Todos } from "./mycomponents/Todos";
import { Footer } from "./mycomponents/Footer";
import { Addtodo } from "./mycomponents/Addtodo";
import React, { useState, useEffect } from "react";

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("i am delete of todo", todo);
    // let index=todos.indexof(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addtodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo])
    console.log(mytodo);

  }
  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
