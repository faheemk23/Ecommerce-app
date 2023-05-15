import { SignUpCard } from "../../components/cards/SignUpCard/SignUpCard";
import { Navigation } from "../../components/nav/Navigation";

export function SignUp() {
  return (
    <>
      <Navigation showBtnLogin />
      SignUp
      <SignUpCard />
    </>
  );
}