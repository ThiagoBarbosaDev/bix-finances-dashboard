import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import React from "react";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <ChakraButton
        ref={ref}
        colorScheme="blue"
        size="md"
        variant="solid"
        borderRadius="md"
        {...props}
      />
    );
  }
);

Button.displayName = "CustomButton";

export default Button;
