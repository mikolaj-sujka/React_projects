import Header from "./components/Header";
import InvestmentContainer from "./components/InvestmentContainer";
import InvestmentResult from "./components/InvestmentResult";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleInputChange(inputId, newValue) {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputId]: +newValue };
    });
  }
  return (
    <>
      <Header />
      <InvestmentContainer onChange={handleInputChange} userInput={userInput} />
      {!isInputValid && <p className="center">Please enter a valid duration</p>}
      {isInputValid && <InvestmentResult input={userInput} />}
    </>
  );
}

export default App;
