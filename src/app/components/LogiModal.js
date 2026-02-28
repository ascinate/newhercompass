"use client";
import { useState } from "react";

function LoginModal() {

  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();

    if (data.status) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.location.href =
        data.user.role === "partner"
          ? "/partnerdashboard"
          : "/dashboard";
    } else {
      alert(data.message || "Login failed");
    }
  };

  // SEND OTP
  const handleSendOtp = async () => {
    if (!forgotEmail) return alert("Enter email");

    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/forgot-password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      }
    );

    const data = await res.json();
    setLoading(false);

    if (data.status) {
      alert("OTP sent to your email");
      setStep(2);
    } else {
      alert(data.message);
    }
  };

  // RESET PASSWORD
  const handleResetPassword = async () => {
    if (!otp || !newPassword) return alert("Fill all fields");

    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/reset-password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: forgotEmail,
          otp,
          password: newPassword,
        }),
      }
    );

    const data = await res.json();
    setLoading(false);

    if (data.status) {
      alert("Password reset successful");
      setStep(1);
      setOtp("");
      setNewPassword("");
      setForgotEmail("");
    } else {
      alert(data.message);
    }
  };

  return (
    <>
      {/* LOGIN MODAL */}
      <div className="modal fade login-modals" id="loginmodal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <h2>Welcome Back</h2>
              <p>Login to manage your bowling leagues</p>

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group mt-2">
                  <div className="d-flex justify-content-between">
                    <label>Password</label>
                    <button
                      type="button"
                      className="btn p-0 text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#forgotModal"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-logins mt-3 w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FORGOT PASSWORD MODAL */}
      <div className="modal fade" id="forgotModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5>Reset Password</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {step === 1 && (
                <>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                  />
                  <button
                    className="btn btn-logins mt-3 w-100"
                    onClick={handleSendOtp}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send OTP"}
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <input
                    type="password"
                    className="form-control mt-2"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) =>
                      setNewPassword(e.target.value)
                    }
                  />

                  <button
                    className="btn btn-logins mt-3 w-100"
                    onClick={handleResetPassword}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Reset Password"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;