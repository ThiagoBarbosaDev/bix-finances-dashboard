"use client";

import { Box, Flex, usePrefersReducedMotion } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { LucideLoaderCircle } from "lucide-react";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export const Spinner = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} 2s linear infinite`;

  return (
    <Flex
      role="status"
      flex="1"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      alignSelf="center"
    >
      <Box as={LucideLoaderCircle} h="16" w="16" animation={animation} />
    </Flex>
  );
};
