import { isEmail, isNotEmpty, hasMinLength } from "../utils/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: email,
    handleEmailChange,
    handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) || isNotEmpty(value));

  const {
    value: password,
    handlePasswordChange,
    handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          error={emailHasError && "Please enter a valid email address."}
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => handleInputChange("password", event)}
          onBlur={() => handleInputBlur("password")}
          error={passwordHasError && "Password must be at least 6 characters."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
