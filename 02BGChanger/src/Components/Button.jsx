import React from "react";

const bgColors = {
  red: "bg-red-900",
  purple : "bg-purple-900",
  green: "bg-green-900",
  yellow: "bg-yellow-900",
  pink: "bg-pink-900"
};

const Button = ({ name, color, onClickFunction}) => {

  return (
    <button
      className={`border px-10 py-3 rounded-xl text-white bg-${color}-900 text-lg cursor-pointer`}
      onClick={()=>onClickFunction(color)}
    >
      {name}
    </button>
  );
};

export default Button;