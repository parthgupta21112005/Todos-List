import React from 'react'
import {Todoitems} from "../mycomponents/Todoitems";

export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className='container my-3' style={mystyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length==0? "No Todos to display":
      props.todos.map((todo)=>{
          return (
          <>
          <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
          </>
          )
      })
        }
      {/* <Todoitems todo={props.todos[0]}/> */}
    </div>
  )
}

export default Todos
