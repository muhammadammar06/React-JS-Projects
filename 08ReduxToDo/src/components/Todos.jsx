import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        📝 Todos
      </h2>

      {todos.length === 0 && (
        <p className="text-gray-500 text-center">No todos yet</p>
      )}

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg"
          >
            <span className="text-gray-700">{todo.text}</span>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition cursor-pointer"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
