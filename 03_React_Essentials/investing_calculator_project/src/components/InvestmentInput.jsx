export default function InvestmentInput({
  label,
  inputType,
  onChange,
  initialValue,
  fieldId
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        value={initialValue}
        type={inputType}
        required
        onChange={(event) => onChange(fieldId, event.target.value)}
      />
    </div>
  );
}
