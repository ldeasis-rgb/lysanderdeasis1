"use client";

import { useEffect, useState } from "react";
import { isAuthenticated } from "@/lib/auth";
import { CONFIG } from "@/lib/config";

interface AuthGuardOptions {
  requireAuth?: boolean;
}

export function useAuthGuard({ requireAuth = true }: AuthGuardOptions = {}) {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const userIsAuth = isAuthenticated();

    if (requireAuth && !userIsAuth) {
      window.location.replace(CONFIG.ROUTES.LOGIN);
    } else if (!requireAuth && userIsAuth) {
      window.location.replace(CONFIG.ROUTES.DASHBOARD);
    } else {
      setIsChecking(false);
    }
  }, [requireAuth]);

  return { isChecking };
}