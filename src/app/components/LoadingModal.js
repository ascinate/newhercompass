"use client";
import { useEffect, useState } from "react";

export default function LoadingModal({ show, text }) {
  const [count, setCount] = useState(30);

  useEffect(() => {
    if (!show) return;

    setCount(30); // reset every time modal opens

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-card text-center">
        <div className="spinner-border text-primary mb-3" role="status"></div>

        <h6 className="mb-1">{text || "Saving your log..."}</h6>

        <div className="countdown-text mt-2">
          {count}s
        </div>

        <p className="small text-muted mt-2">
          Please stay relaxed — this usually finishes early 🌸
        </p>
      </div>
    </div>
  );
}
