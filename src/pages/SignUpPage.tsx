import "./SignUpPage.css";

import Button from "../Components/Button/Button";
import CodeByWatchingInfoBox from "../Components/CodeByWatchingInfoBox/CodeByWatchingInfoBox";
import SignUpCard from "../Components/SignUpCard/SignUpCard";

export default function SignUpPage() {
  return (
    <div className="SignUpPage">
      <CodeByWatchingInfoBox className="SignUpItem" />
      <div className="SignUpItem rightItem">
        <Button className="w-96 shadow rounded tryFreeButton">
          <span className="boldBttnText">{"Try it free 7 days "}</span>
          {"then $20/mo. thereafter"}
        </Button>
        <SignUpCard />
      </div>
    </div>
  );
}
