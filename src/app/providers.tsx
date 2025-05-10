// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { LoginStateProvider } from "@/features/login/contexts/login-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LoginStateProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </LoginStateProvider>
  );
}
