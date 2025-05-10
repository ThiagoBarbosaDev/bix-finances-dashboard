import { Flex } from "@chakra-ui/react";
import { LoginBackdrop } from "@/features/login/login-backdrop";
import { LoginForms } from "@/features/login/login-forms";
import LoginTitle from "@/features/login/login-title";

export default function Login() {
  return (
    <Flex as="main" h="100svh">
      <LoginBackdrop>
        <LoginTitle />
      </LoginBackdrop>
      <LoginForms />
    </Flex>
  );
}
