import type { Route } from "./+types/home";
import LoginPage from "../pages/login/LoginPage";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ecommerce Test App" },
    { name: "description", content: "this is the test for the QI Card Interview" },
  ];
}

export default function Login() {
  return <LoginPage/>;
}
