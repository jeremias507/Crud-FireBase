import React from "react";
import { useState } from "react";
export function Todo({ todo, handleDelete, toggleComplete, handleEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange=(e)=>{
    if(todo.complete === true){
      setNewTitle(todo.title)
    }else{
      todo.title="";
      setNewTitle(e.target.value)
    }
  }
  return (
    <div className="todo">
      <input className="list"
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.title === ""?newTitle:todo.title}
        onChange={handleChange}
      ></input>
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          Marcar
        </button>
        <button className="button-edit" onClick={() => handleEdit(todo, newTitle)}>Editar</button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}> Eliminar</button>
      </div>
    </div>
  );
}
