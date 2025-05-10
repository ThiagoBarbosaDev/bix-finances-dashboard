import { Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";

const loginTitle = () => {
  return (
    <VStack
      w="100%"
      gap={0}
      alignItems="center"
      justifyContent="center"
      h="100svh"
    >
      <Heading
        as="h1"
        size="2xl"
        fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
        textAlign="center"
      >
        Bix Finances
      </Heading>
      <Image
        width={300}
        height={300}
        priority={false}
        src="/art.png"
        alt="Finanças e Negócios"
        quality={100}
      />
    </VStack>
  );
};

export default loginTitle;
