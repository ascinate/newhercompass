"use client";

import { useEffect, useState } from "react";
import Navication from "../components/Navication";
import Footer from "../components/Footer";
import MobileMenus from "../components/MobileMenus";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LogiModal";

export default function AcceptedPage() {
  const [loading, setLoading] = useState(true);
  const [inviter, setInviter] = useState(null);
  const [partnerEmail, setPartnerEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("token");
    setToken(t);

    fetch(`https://node-backend-1xs8.onrender.com/api/partner/validate/${t}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.valid) {
          setError("Invitation link has expired or is invalid.");
          return;
        }

        setInviter(data.inviter?.full_name || "Someone");
        setPartnerEmail(data.partner_email);
      })
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  const handleAccept = async () => {
    if (!password) {
      setError("Password required");
      return;
    }

    const res = await fetch("https://node-backend-1xs8.onrender.com/api/partner/accept", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        password,
        full_name: fullName,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      setError(data.message || "Failed to accept invite");
      return;
    }
  if (!data.partnerShareId) {
      setError("Partner Share ID missing from server");
      return;
    }
  localStorage.setItem("partnerShareId", data.partnerShareId);
     setSuccess("🎉 Registration successful! You can login now...");
     setTimeout(() => {
    window.location.href = "/";
  }, 3000);
  };

  if (loading)
    return (
      <div className="text-center mt-5">
        <h3>Validating invitation...</h3>
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-5">
        <h3>{error}</h3>
      </div>
    );

  return (
    <>
      <Navication />

      <main className="float-start w-100 main-body dashborad-pages01 position-relative">
        <section className="float-start w-100 invitation-pages">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="card w-100">
                  <div className="card-body py-0">
                    <h4 className="card-title"> Pending Invite </h4>

                    <div className="mian-acpts-text text-center">
                      <figure className="user-id">
                        <figcaption> {inviter?.[0]} </figcaption>
                      </figure>

                      <h3 className="card-title text-center mt-4">
                        <strong>{inviter}</strong> invited you to HerCompass.
                      </h3>

                      <p className="mt-2 text-center col-lg-7 mx-auto">
                        To continue, please enter your name and create a
                        password.
                      </p>
                    </div>
                  </div>

                  {/* Registration form */}
                  <div className="p-4">
                    <div className="mb-3">
                      <label>Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="mb-3">
                      <label>Create Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                      />
                    </div>

                    {error && <p className="text-danger">{error}</p>}
                    {success && (
                     <div className="alert alert-success text-center">
                        {success}
                     </div>
                     )}


                    <button
                      type="button"
                      className="btn btn-success w-100"
                      onClick={handleAccept}
                    >
                      Accept Invitation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileMenus />
      <SignupModal />
      <LoginModal />
    </>
  );
}
