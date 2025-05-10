"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { useLoginAction } from "./hooks/use-login";
import {
  ChangeEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

export const LoginForms = () => {
  const { login } = useLoginAction();
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
    <SimpleGrid zIndex={1} textAlign="center" w="50%" placeItems="center">
      <Box
        maxW="md"
        mx="auto"
        mt="20"
        p="8"
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        fontFamily="var(--font-montserrat)"
      >
        <Heading
          textAlign="center"
          fontSize="2xl"
          fontFamily={"inherit"}
          textTransform={"uppercase"}
        >
          Login
        </Heading>

        <Stack spacing="12" p="4">
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "2rem", flexDirection: "column" }}
          >
            <FormControl isRequired>
              <FormLabel fontFamily="inherit">Username</FormLabel>
              <Input
                placeholder="Enter your email"
                onChange={handleChangeEmail}
                ref={ref}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontFamily="inherit">Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                onChange={handleChangePassword}
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
    </SimpleGrid>
  );
};
