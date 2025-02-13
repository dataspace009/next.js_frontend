import React from "react";

const Input = ({name, type, value, onChange, placeholder = 'ppp'}: {name: string, type: string, value: string, onChange: any, placeholder: string}) => {
  return (
    <div className="input-group mt-6 w-[100%]">
      <p className="text-gray-950 text-[26px] mb-2">{name}</p>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 p-5 border-[0.5px] border-gray-800 rounded-md w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
