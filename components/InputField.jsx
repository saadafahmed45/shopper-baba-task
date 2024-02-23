import React from "react";

const InputField = ({ label, type, placeholder, name }) => {
  return (
    <div className="my-2  flex flex-col">
      <label className="uppercase text-md p-2 "> {label}:</label>
      <input
        required
        className="p-2 rounded-md"
        type={type}
        name={name}
        placeholder={placeholder}
        id={`field_${name}`}
      />
    </div>
  );
};

export default InputField;
