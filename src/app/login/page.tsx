import LoginTitle from "@/features/login/login-title";
import { LoginForms } from "@/features/login/login-forms";
import { LoginBackdrop } from "@/features/login/login-backdrop";
import { Flex } from "@chakra-ui/react";

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
