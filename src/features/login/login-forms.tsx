"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import {
  ChangeEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "@/components/ui/Button";
import { useLoginActions } from "./hooks/use-login-actions";
import { LoginBackdrop } from "./login-backdrop";
import LoginTitle from "./login-title";

export const LoginForms = () => {
  const { login } = useLoginActions();
  const ref = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({ email, password });
  };

  const handleClickSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <LoginBackdrop>
      <Box>
        <LoginTitle />
        <Stack
          justify={"center"}
          alignItems="center"
          spacing="12"
          p="4"
          mx="auto"
          bg="white"
          maxW={{ base: "90vw", md: "400px" }}
          minH={{ base: "50vh", md: "40vh" }}
          w="full"
          borderRadius="2xl"
          mt="1rem"
        >
          <Heading
            textAlign="center"
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            fontFamily="var(--font-montserrat)"
            textTransform={"uppercase"}
          >
            Login
          </Heading>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "2rem", flexDirection: "column" }}
          >
            <FormControl isRequired>
              <FormLabel fontFamily="inherit" color="black">
                Username
              </FormLabel>
              <Input
                placeholder="Enter your email"
                onChange={handleChangeEmail}
                ref={ref}
                color="black"
                type="email"
                autoComplete="email"
                autoFocus
                required
              />
            </FormControl>
            <FormControl isRequired color="black">
              <FormLabel fontFamily="inherit">Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                onChange={handleChangePassword}
                color="black"
                autoComplete="current-password"
                required
              />
            </FormControl>
            <Button
              colorScheme="purple"
              w="full"
              type="submit"
              marginTop="2rem"
              onClick={handleClickSubmit}
            >
              Login
            </Button>
          </form>
        </Stack>
      </Box>
    </LoginBackdrop>
  );
};
