import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <form
        onSubmit={addTodoHandler}
        className="flex bg-white shadow-lg rounded-xl overflow-hidden"
      >
        <input
          type="text"
          placeholder="Write a todo..."
          className="flex-1 px-4 py-3 text-gray-700 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 font-medium transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
