import React from 'react';

function Input({ name, selected = true, onChange, value, labelName, type = 'text', className,max }) {
 
  return (
    <div className={`form-group ${className}`}>
      <label>{labelName}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        required={selected}
        style={{ backgroundColor: "#f2faf0" }}
        maxLength={max} 
      />
    </div>
  );
}

export { Input };
