"use client";
import { useState } from "react";

function LoginModal() {

  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // ================= LOGIN =================
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

  const handleSendOtp = async () => {
    if (!forgotEmail) return alert("Enter email");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/forgot-password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      }
    );

    const data = await res.json();

    if (data.status) {
      document.getElementById("closeEmailModalBtn").click();
      alert("Verification code sent. Please check your email.");
      setTimeout(() => {
        document.getElementById("openOtpModalBtn").click();
      }, 300);
    } else {
      alert(data.message);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Enter OTP");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/verify-otp`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail, otp }),
      }
    );

    const data = await res.json();

    if (data.status) {
      document.getElementById("closeOtpModalBtn").click();
      setTimeout(() => {
        document.getElementById("openResetModalBtn").click();
      }, 300);
    } else {
      alert(data.message);
    }
  };
  const handleResetPassword = async () => {
    if (!newPassword) return alert("Enter new password");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/reset-password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: forgotEmail,
          password: newPassword,
        }),
      }
    );

    const data = await res.json();

    if (data.status) {
      document.getElementById("closeResetModalBtn").click();

      setForgotEmail("");
      setOtp("");
      setNewPassword("");

      setSuccessMessage("Password reset successfully. You can now login.");

      // Auto remove after 4 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
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
            <div className="modal-header p-0 border-0">
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="logoin-modals">
                <h2>Welcome Back</h2>
                <p>Login to manage your bowling leagues</p>

                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="text" className="form-control" name="email" required />
                  </div>

                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label>Password</label>
                      <button
                        type="button"
                        className="cl-fogets btn p-0"
                        data-bs-toggle="modal"
                        data-bs-target="#forgotEmailModal"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <input type="password" className="form-control" name="password" required />
                  </div>

                  <div className="form-group mt-2">
                    <button type="submit" className="btn btn-logins">
                      Login
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EMAIL MODAL */}
      <div className="modal fade" id="forgotEmailModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-0 border-0">
              <button
                id="closeEmailModalBtn"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body p-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setForgotEmail(e.target.value)}
              />
              <button className="btn btn-logins mt-3 w-100" onClick={handleSendOtp}>
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* OTP MODAL */}
      <div className="modal fade" id="otpModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-0 border-0">
              <button
                id="closeOtpModalBtn"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="btn btn-logins mt-3 w-100" onClick={handleVerifyOtp}>
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RESET PASSWORD MODAL */}
      <div className="modal fade" id="resetPasswordModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-0 border-0">
              <button
                id="closeResetModalBtn"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body p-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button className="btn btn-logins mt-3 w-100" onClick={handleResetPassword}>
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
      {successMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2000,
            width: "auto",
            minWidth: "300px"
          }}
        >
          <div className="alert alert-success text-center shadow">
            {successMessage}
          </div>
        </div>
      )}
      {/* Hidden Controls */}
      <button
        id="openOtpModalBtn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#otpModal"
        style={{ display: "none" }}
      ></button>

      <button
        id="openResetModalBtn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#resetPasswordModal"
        style={{ display: "none" }}
      ></button>
    </>
  );
}

export default LoginModal;