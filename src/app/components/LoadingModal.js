"use client";
import { useEffect } from "react";

export default function LoadingModal({ show, text }) {

  if (!show) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-card text-center">
        <div className="spinner-border text-primary mb-3" role="status"></div>

        <h6 className="mb-1">
          {text || "Processing..."}
        </h6>

        <p className="small text-muted mt-2">
          Please stay relaxed — we're preparing your personalized insights 🌸
        </p>
      </div>
    </div>
  );
}