import "./SignUpCard.css";

import Button from "../Button/Button";
import FormField from "../FormField/FormField";
import { TermsAndCondition } from "../TermsAndCondition/TermsAndCondition";

export default function SignUpCard() {
  return (
    <div className="card bg-white shadow-md rounded">
      <FormField label="First Name" />
      <FormField label="Last Name" />
      <FormField label="Email" inputType={"email"} />
      <FormField label="Password" inputType={"password"} />
      <div style={{ width: "100%" }}>
        <Button className="shadow rounded freeTrailBttn">
          {"CLAIM YOUR FREE TRIAL"}
        </Button>
        <TermsAndCondition />
      </div>
    </div>
  );
}
