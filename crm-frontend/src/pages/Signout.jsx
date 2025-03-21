import { useEffect } from "react";

export default function Signout() {
  useEffect(() => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  }, []);

  return null;
}
