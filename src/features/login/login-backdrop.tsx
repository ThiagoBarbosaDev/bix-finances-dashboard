import { Box } from "@chakra-ui/react";

interface LoginBackdropProps {
  children: React.ReactNode;
}

export const LoginBackdrop = ({ children }: LoginBackdropProps) => {
  return (
    <Box
      style={{ minHeight: "100svh" }}
      w="50%"
      color="white"
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
    </Box>
  );
};
