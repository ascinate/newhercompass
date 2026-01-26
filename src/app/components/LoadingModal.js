"use client";

export default function LoadingModal({ show, text }) {
  if (!show) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-card text-center">
        <div className="spinner-border text-primary mb-3" role="status"></div>
        <h6 className="mb-1">{text || "Saving your log..."}</h6>
        <p className="small text-muted">
          We’re generating insights just for you 🌸
        </p>
      </div>
    </div>
  );
}
