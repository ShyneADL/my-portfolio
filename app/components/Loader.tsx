"use client";

import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    document.fonts.ready.then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);

      setTimeout(() => {
        setFadeOut(true); // Start fade-out animation

        setTimeout(() => {
          setLoading(false); // Remove loader from DOM after fade-out
        }, 500); // Match fade-out duration (0.5s)
      }, remainingTime);
    });
  }, []);

  if (loading) {
    return (
      <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
        <DotLottieReact src="/assets/Loader.lottie" loop autoplay />
      </div>
    );
  }

  return <>{children}</>;
}
