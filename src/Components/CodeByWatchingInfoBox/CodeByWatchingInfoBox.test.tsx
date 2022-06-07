import { render, screen} from "@testing-library/react";
import { CodeByWatchingInfoBox } from "./CodeByWatchingInfoBox";


test("can render app", () => {
  render(<CodeByWatchingInfoBox />);

  const linkElement = screen.getByRole(/heading/ ,{name:/Learn to code by watching others/});
  expect(linkElement).toBeInTheDocument();
});
