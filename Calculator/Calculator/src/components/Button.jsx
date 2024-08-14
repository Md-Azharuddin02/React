import React from "react";

function Button({ btn, onButtonClick }) {
  // Correct the prop name

  return (
    <>
      <button className="btn btn-dark btn-secondary" onClick={()=>onButtonClick(btn)}>
        {btn}
      </button>
    </>
  );
}

export default Button;
