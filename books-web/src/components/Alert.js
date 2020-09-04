import React from "react";

function Alert(props) {
  return (
    <div className={`alert alert-${props.type} alert-dismissible fade show mt-2 mb-2`} role="alert">
      {props.message}
      <button type="button" className="close" onClick={() => props.onClose()}>
        <span aria-hidden="true">&times;</span>
      </button>
  </div>
  );
}

export default Alert;