import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./components/CartREduce";
import { toggleTheme } from "./components/Theme";

function USERS() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const theme = useSelector((state) => state.theme);

  const themeStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    minHeight: "100vh"
  };

  return (
    <div style={themeStyles}>
      <button onClick={() => dispatch(addItem("aflah", "aflah@gmail.com"))}>
        Add Aflah
      </button>

      <button onClick={() => dispatch(addItem("rinshad", "rinshad@gmail.com"))}>
        Add Rinshad
      </button>

      <button onClick={() => dispatch(removeItem("aflah"))}>
        Remove Aflah
      </button>
      <button onClick={() => dispatch(removeItem("rinshad"))}>
        Remove rinshad
      </button>

      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>

      <h3>Cart Items:</h3>
      <ul>
        {cart.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default USERS;
