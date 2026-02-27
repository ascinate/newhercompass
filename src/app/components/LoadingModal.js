"use client";
import { useEffect, useState } from "react";

export default function LoadingModal({ show }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!show) return;

    setProgress(0);

    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / 60000) * 100, 100); // 60 sec
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-card text-center">
        <div className="spinner-border mb-3" role="status"></div>

        <h6 className="mb-1">
          Generating predictive menopause insights...
        </h6>

        <p className="small text-muted mt-2">
          Please stay relaxed — your health insights are being carefully prepared 🌸
        </p>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}