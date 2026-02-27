"use client";
import { useEffect, useState } from "react";

export default function LoadingModal({ show, apiFinished }) {
  const [step, setStep] = useState(1);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    if (!show) return;

    setStep(1);
    setMinTimePassed(false);

    // Step changes
    const t1 = setTimeout(() => setStep(2), 15000); // 15 sec
    const t2 = setTimeout(() => setStep(3), 35000); // 35 sec
    const t3 = setTimeout(() => setStep(4), 50000); // 50 sec

    // Minimum 60 sec timer
    const minTimer = setTimeout(() => {
      setMinTimePassed(true);
    }, 60000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(minTimer);
    };
  }, [show]);

  if (!show) return null;

  const getMessage = () => {
    switch (step) {
      case 1:
        return "Analyzing your 7-day symptom patterns...";
      case 2:
        return "Generating predictive menopause insights...";
      case 3:
        return "Designing your personalized nutrition plan...";
      case 4:
        return "Creating AI-generated nutrition visuals...";
      default:
        return "Processing...";
    }
  };

  return (
    <div className="loading-overlay">
      <div className="loading-card text-center">
        <div className="spinner-border text-primary mb-3" role="status"></div>

        <h6 className="mb-1">{getMessage()}</h6>

        <p className="small text-muted mt-2">
          Please stay relaxed — your health insights are being carefully prepared 🌸
        </p>

        {/* Optional Progress Bar */}
        <div className="progress mt-3">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}