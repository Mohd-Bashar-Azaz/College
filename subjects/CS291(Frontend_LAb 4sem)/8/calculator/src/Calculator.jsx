import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setError(false);
    } else if (value === "=") {
      try {
        if (/^[0-9+\-*/.() ]+$/.test(input)) {
          const result = eval(input);
          setInput(result.toString());
          setError(false);
        } else {
          throw new Error("Invalid input");
        }
      } catch {
        setInput("Error");
        setError(true);
      }
    } else if (value === "←") {
      if (!error) setInput((prev) => prev.slice(0, -1));
      
      else {
        setInput("");
        setError(false);
      }
    } else {
      if (error) setInput("");
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ["C", "/", "*", "←"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "="],
    ["0", ".", "(", ")"]
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className={`display ${error ? "error" : ""}`}>
          {input || "0"}
        </div>
        <div className="buttons">
          {buttons.flat().map((btn, idx) => (

            <button key={idx} className={`btn ${btn === "=" ? "equal" : ""} 
            ${btn === "C" ? "clear" : ""} ${btn === "←" ? "backspace" : ""}`}
              onClick={() => handleClick(btn)}
            > {btn} </button>
            
          ))}
        </div></div> </div>
  );};
export default Calculator;
