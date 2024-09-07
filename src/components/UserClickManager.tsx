"use client";
import { useEffect } from "react";

export default function UserClickManager() {
  useEffect(() => {
    const sendClick = async () => {
      try {
        console.log(
          "sending click......................................................"
        );
        const res = await fetch("/api/analytics/click", { method: "POST" });
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            localStorage.setItem(
              "lastClickTime",
              new Date().getTime().toString()
            );
          }
        }
      } catch (error) {
        console.error("Failed to send analytics:", error);
      }
    };

    sendClick();
  }, []);

  return null;
}
