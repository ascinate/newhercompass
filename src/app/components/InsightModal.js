"use client";

export default function InsightModal({ show }) {
  if (!show) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-card text-center">
        <h5 className="mb-2">Understanding your patterns</h5>

        <div className="dot-loader my-3">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p className="small text-muted">
          Connecting mood, sleep, and symptoms 💙
        </p>
      </div>
    </div>
  );
}
