import InvestmentInput from "./InvestmentInput";

export default function InvestmentContainer({ userInput, onChange }) {
  return (
    <div className="input-group" id="user-input">
      <InvestmentInput
        initialValue={userInput.initialInvestment}
        label={"Initial Ivestment"}
        inputType={"number"}
        onChange={onChange}
        fieldId={"initialInvestment"}
      />
      <InvestmentInput
        initialValue={userInput.annualInvestment}
        label={"Annual Investment"}
        inputType={"number"}
        onChange={onChange}
        fieldId={"annualInvestment"}
      />
      <InvestmentInput
        initialValue={userInput.expectedReturn}
        label={"Expected Return"}
        inputType={"number"}
        onChange={onChange}
        fieldId={"expectedReturn"}
      />
      <InvestmentInput
        initialValue={userInput.duration}
        label={"Duration"}
        inputType={"number"}
        onChange={onChange}
        fieldId={"duration"}
      />
    </div>
  );
}
