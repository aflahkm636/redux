import { configureStore } from "@reduxjs/toolkit";
import todos from "./TodoSlice"

export const todoStore=configureStore({
    reducer:{
        todolist:todos
}
})