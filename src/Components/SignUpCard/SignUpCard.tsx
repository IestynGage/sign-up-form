import "./SignUpCard.css";

import Button from "../Button/Button";
import FormField from "../FormField/FormField";
import { useState } from "react";
import { TermsAndCondition } from "../TermsAndCondition/TermsAndConditions";

export default function SignUpCard() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [valid, setValid] = useState<boolean>();

  const emailRegEx = /.*@.*\..*/;

  function checkValidForm() {
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      emailRegEx.exec(email.trim()) !== null &&
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  return (
    <div className="card bg-white shadow-md rounded">
      <FormField
        label="First Name"
        value={firstName}
        onChange={setFirstName}
        validFormField={valid}
      />
      <FormField
        label="Last Name"
        value={lastName}
        onChange={setLastName}
        validFormField={valid}
      />
      <FormField
        label="Email"
        inputType={"email"}
        value={email}
        onChange={setEmail}
        validFormField={valid}
        errorMessage={
          email !== "" && emailRegEx.exec(email.trim()) === null
            ? "This doesn't look like a email"
            : undefined
        }
      />
      <FormField
        label="Password"
        inputType={"password"}
        value={password}
        onChange={setPassword}
        validFormField={valid}
      />
      <div style={{ width: "100%" }}>
        <Button
          className="shadow rounded freeTrailBttn"
          onClick={checkValidForm}
        >
          {"CLAIM YOUR FREE TRIAL"}
        </Button>
        <TermsAndCondition />
      </div>
    </div>
  );
}
