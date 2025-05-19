import React from 'react';

//VD 
function SiblingInput(props) {
    return (
      <div>
        <label>{props.label}</label>
        <input
          type="text"
          value={props.value} 
          onChange={(e) => props.onChange(e.target.value)} // Gọi hàm từ props (hàm của Cha)
        />
      </div>
    );
  }
  
  export default SiblingInput; 