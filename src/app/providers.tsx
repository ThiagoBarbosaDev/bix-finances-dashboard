// app/providers.tsx
"use client";

import { LoginStateProvider } from "@/features/login/contexts/login-context";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LoginStateProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </LoginStateProvider>
  );
}
