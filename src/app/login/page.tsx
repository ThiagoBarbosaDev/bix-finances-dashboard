import { LoginBackdrop } from "@/features/login/login-backdrop";
import { LoginForms } from "@/features/login/login-forms";

export default function Login() {
  return (
    <LoginBackdrop>
      <LoginForms />
    </LoginBackdrop>
  );
}
