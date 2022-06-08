import "./SignUpPage.css";

import Button from "../Components/Button/Button";
import CodeByWatchingInfoBox from "../Components/CodeByWatchingInfoBox/CodeByWatchingInfoBox";
import SignUpCard from "../Components/SignUpCard/SignUpCard";

export default function SignUpPage() {
  return (
    <div className="SignUpPage">
      <CodeByWatchingInfoBox />
      <div>
        <Button
          className="w-96 shadow rounded"
          label="Try it free 7 days then $20/mo. thereafter"
        />
        <SignUpCard />
      </div>
    </div>
  );
}
