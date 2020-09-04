import React from "react";

function DropDown(props) {
  return (
    <div className={`dropdown ${props.class}`}>
      <button className="btn btn-secondary dropdown-toggle" 
        type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {props.label}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {props.options.map((option, i) => (
          <button className="dropdown-item"
            key={i}
            type="button"
            onClick={() => props.onChange(option.value)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DropDown;