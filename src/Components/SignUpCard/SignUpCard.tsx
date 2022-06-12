import "./SignUpCard.css";

import Button from "../Button/Button";
import FormField from "../FormField/FormField";
import { TermsAndCondition } from "../TermsAndCondition/TermsAndCondition";
import { useState } from "react";

export default function SignUpCard() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="card bg-white shadow-md rounded">
      <FormField
        placeholder="First Name"
        value={firstName}
        onChange={setFirstName}
      />
      <FormField
        placeholder="Last Name"
        value={lastName}
        onChange={setLastName}
      />
      <FormField
        placeholder="Email"
        inputType={"email"}
        value={email}
        onChange={setEmail}
      />
      <FormField
        placeholder="Password"
        inputType={"password"}
        value={password}
        onChange={setPassword}
      />
      <div style={{ width: "100%" }}>
        <Button className="shadow rounded freeTrailBttn">
          {"CLAIM YOUR FREE TRIAL"}
        </Button>
        <TermsAndCondition />
      </div>
    </div>
  );
}
