import Button from "../Button/Button";
import FormField from "../FormField/FormField";

export default function SignUpCard() {
  return (
    <div className="w-96 bg-white shadow-md rounded">
      <FormField label="First Name" />
      <FormField label="Last Name" />
      <FormField label="Email" inputType={"email"} />
      <FormField label="Password" inputType={"password"} />
      <Button className="w-80 shadow rounded" label="Claim your free trial" />
      <TermsAndCondition />
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
