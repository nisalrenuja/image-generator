import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-8 mb-2">
        <label
          htmlFor={name}
          className="block text-sm text-gray-900 font-medium"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            className="font-medium font-sm bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
        <input
          type={type}
          id={name}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
        <div className="relative"></div>
      </div>
    </div>
  );
};

export default FormField;
