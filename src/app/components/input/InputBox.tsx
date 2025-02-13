import React from "react";

const InputBox = ({
  boxName,
  type,
  placeholder,
  name,
  value,
  onChange,
  required,
}: {
  boxName: string,
  type: string;
  placeholder: string;
  name: string;
  value: any;
  onChange: any;
  required: boolean;
}) => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-white text-xl w-[160px]">{boxName}:</p>
        <input
          className="h-12 p-5 border-[0.5px] border-gray-800 rounded-md w-full"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
        />
      </div>
    </div>
  );
};

export default InputBox;
