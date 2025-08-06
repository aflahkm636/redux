import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./TodoSlice"; // adjust path as needed

function Todolist() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todolist.todos);

  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Add todo
  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  // Save edited todo
  const handleEditSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ index: editIndex, editedTodo: editText }));
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((t, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleEditSave}>Save</button>
                <button onClick={() => setEditIndex(null)}>Cancel</button>
              </>
            ) : (
              <>
                {t.todo}
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setEditText(t.todo);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => dispatch(removeTodo(index))}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
