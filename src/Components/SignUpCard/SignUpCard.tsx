import "./SignUpCard.css";

import Button from "../Button/Button";
import FormField from "../FormField/FormField";

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

export function TermsAndCondition() {
  return (
    <p>
      By clicking the button you are agreeing to our{" "}
      <a href="https://www.example.com"> Terms and services</a>
    </p>
  );
}
