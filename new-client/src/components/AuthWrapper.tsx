import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function AuthWrapper() {
  const { token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/", { replace: true });
  }, [token]);

  return <Outlet />;
}
