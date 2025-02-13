import React from "react";

const Button = ({name, onClick}: {name:string, onClick: any}) => {
  return (
    <button 
      onClick={onClick}
      className="px-6 py-3 bg-blue-900 rounded-lg text-2xl text-white hover:cursor-pointer hover:scale-105 hover:bg-blue-500 transition delay-150 duration-300"
    >
      {name}
    </button>
  );
};

export default Button;
