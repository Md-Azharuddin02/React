import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import style from "./Card.module.css";
import Display from "./Display";

function Card() {
  let [calC, setCalC] = useState("");
  const onButtonClick = (btn) => {
    if (btn === "C") {
      setCalC("");
    } else if (btn === "=") {
      setCalC(eval(calC));
    } else {
      let newVar = calC + btn;
      setCalC(newVar);
    }
    console.log(btn)
  };

  return (
    <>
      <div className={`card ${style.mycard}`}>
        <h1 className="text-center pt-2">Calculator</h1>
        <div className={`card-body ${style.getCardBody}`}>
          <Display calC={calC} />
          <ButtonContainer onButtonClick={onButtonClick} />
        </div>
      </div>
    </>
  );
}

export default Card;

import { IoIosAddCircle } from "react-icons/io";
<IoIosAddCircle />
