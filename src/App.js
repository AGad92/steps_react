import { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // component state
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(false);

  // Step handlers
  function handlePrevious() {
    if (step === 1) return;
    setStep(step - 1);
  }

  function handleNext() {
    if (step === 3) return;
    setStep(step + 1);
  }

  function handleClose() {
    setClose(!close);
  }
  return (
    <>
      <span className="close" onClick={handleClose}>
        &times;
      </span>
      <div className="steps" style={{ display: close ? "none" : "block" }}>
        <div className="numbers">
          <div className={step >= 1 ? "active" : undefined}>1</div>
          <div className={step >= 2 ? "active" : undefined}>2</div>
          <div className={step >= 3 ? "active" : undefined}>3</div>
        </div>
        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
