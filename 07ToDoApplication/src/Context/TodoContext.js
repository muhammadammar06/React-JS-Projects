import {useContext, createContext} from 'react'

export const ToDoContext = createContext({
  todos: [
      {}
  ],
  addToDo : () => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {} 
});

export const ToDoContextProvider = ToDoContext.Provider;

export const useToDo = () =>{
  return useContext(ToDoContext);
}

