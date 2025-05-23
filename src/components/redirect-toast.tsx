// src/components/redirect-toast.tsx
"use client";

import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";
import { COOKIES_KEYS } from "@/constants";

const RedirectToast = () => {
  const toast = useToast();

  useEffect(() => {
    const showCookieToast = async () => {
      const message = await getCookieByKey(COOKIES_KEYS.TOAST);

      if (message) {
        toast({
          title: message,
          status: "info",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        await deleteCookieByKey(COOKIES_KEYS.TOAST);
      }
    };

    showCookieToast();
  }, [toast]);

  return null;
};

export { RedirectToast };
