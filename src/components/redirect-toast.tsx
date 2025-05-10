// src/components/redirect-toast.tsx
"use client";

import { useEffect } from "react";
import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";
import { useToast } from "@chakra-ui/react";
import { COOKIES_KEYS } from "@/constants";
import { usePathname } from "next/navigation";

const RedirectToast = () => {
  const toast = useToast();
  const pathname = usePathname();
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
  }, [toast, pathname]);

  return null;
};

export { RedirectToast };
