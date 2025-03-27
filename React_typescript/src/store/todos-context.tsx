import React from "react";
import Todo from "../models/todo";
import { useState } from "react";

interface ITodos {
  items: Todo[];
  onRemoveToDo: (id: string) => void;
  addTodo: (text: string) => void;
}

export const TodosContext = React.createContext<ITodos>({
  items: [],
  onRemoveToDo: () => {},
  addTodo: () => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: ITodos = {
    items: todos,
    onRemoveToDo: removeTodoHandler,
    addTodo: addTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
