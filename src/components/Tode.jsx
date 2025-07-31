// import React, { useReducer, useState } from "react";

// // Reducer Function
// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [
//         ...state,
//         { id: Date.now(), text: action.payload, completed: false },
//       ];

//     case "TOGGLE_TODO":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     case "DELETE_TODO":
//       return state.filter((todo) => todo.id !== action.payload);

//     default:
//       return state;
//   }
// }

// // Initial state
// const initialState = [];

// function Tode() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [input, setInput] = useState("");

//   const handleAdd = () => {
//     if (input.trim() !== "") {
//       dispatch({ type: "ADD_TODO", payload: input });
//       setInput("");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>📝 useReducer Todo List</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={handleAdd}>Add</button>

//       <ul>
//         {state.map((todo) => (
//           <li key={todo.id}>
//             <span
//               onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//                 cursor: "pointer",
//               }}
//             >
//               {todo.text}
//             </span>
//             <button
//               onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
//               style={{ marginLeft: "10px" }}
//             >
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Tode;


import React, { useState } from 'react'

function Tode() {
    const [todoInput,setTodoInput]=useState("")
    const [todoItem,setTodoItem]=useState([])
    const handleInput=(e)=>{
        e.pre
        setTodoInput(()=>e.target.value)
    }
const handleclick=()=>{
    setTodoItem([...todoItem,todoInput])
    setTodoInput("")
}
const handleDelete=(Removeindex)=>{
    setTodoItem(todoItem.filter((item,index)=>(index!==Removeindex)))
}
  return (
    <div>
      <input type="text"value={todoInput} onChange={handleInput}/>
      <button onClick={handleclick}>add</button>
      <div>
        {todoItem.map((x,index)=>(
            <div key={index}>
                <h2>{x}</h2>
                <button onClick={()=>handleDelete(index)}>remove</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Tode
