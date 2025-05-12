import { SimpleGrid } from "@chakra-ui/react";

interface LoginBackdropProps {
  children: React.ReactNode;
}

export const LoginBackdrop = ({ children }: LoginBackdropProps) => {
  return (
    <SimpleGrid
      placeItems="center"
      minH="100svh"
      w="full"
      color="white"
      gridGap={1}
      sx={{
        background: "var(--gradient-vibrant)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite",
        "@keyframes gradientBG": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      {children}
    </SimpleGrid>
  );
};
