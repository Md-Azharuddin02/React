import Button from "./Button";
import style from "./ButtonContainer.module.css";

function ButtonContainer({ onButtonClick }) {
  // Destructure the prop
  const btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "*",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={style.container}>
        {btns.map((btn, index) => (
          <Button key={index} btn={btn} onButtonClick={onButtonClick} />
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;
