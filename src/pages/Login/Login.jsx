import { LoginCard } from "../../components/cards/LoginCard/LoginCard";
import { Navigation } from "../../components/nav/Navigation";

export function Login() {
  return (
    <>
      <Navigation showBtnLogin />
      Login
      <LoginCard />
    </>
  );
}