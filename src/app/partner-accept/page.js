"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Navication from "../components/Navication";
import Footer from "../components/Footer";
import PartnerBanner from "../components/PartnerBanner";


import MobileMenus from "../components/MobileMenus";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LogiModal";

export default function PartnerAccept() {
   const searchParams = useSearchParams();
   const token = searchParams.get("token");

   const [fullName, setFullName] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [accepted, setAccepted] = useState(false);

   const handleAccept = async () => {
      if (!token) return alert("Invalid token");

      setLoading(true);

      const res = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/api/partner/accept`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
               token,
               full_name: fullName,
               password
            })
         }
      );

      const data = await res.json();

      if (data.status) {
         localStorage.setItem("token", data.token);
         setAccepted(true);
      } else {
         alert(data.message);
      }

      setLoading(false);
   };

   return (
      <>
         <Navication />
         <PartnerBanner/>

         <div className="container py-5">

            {!accepted ? (
               <div className="row justify-content-center">
                  <div className="col-md-6">
                     <div className="card shadow-lg border-0 rounded-4 p-4">
                        <h3 className="text-center mb-3">
                           💛 You're Invited to Support
                        </h3>

                        <p className="text-center text-muted mb-4">
                           Join HerCompassAI as a partner and help create
                           deeper understanding, empathy, and connection.
                        </p>

                        <div className="mb-3">
                           <label className="form-label">Your Name</label>
                           <input
                              type="text"
                              className="form-control rounded-3"
                              placeholder="Enter your full name"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                           />
                        </div>

                        <div className="mb-3">
                           <label className="form-label">Set Password</label>
                           <input
                              type="password"
                              className="form-control rounded-3"
                              placeholder="Create a password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                           />
                        </div>

                        <button
                           className="btn btn-warning w-100 rounded-3 mt-3"
                           onClick={handleAccept}
                           disabled={loading}
                        >
                           {loading ? "Creating Your Account..." : "Accept & Join 💛"}
                        </button>
                     </div>
                  </div>
               </div>
            ) : (
               // AFTER SUCCESS
               <div className="row justify-content-center">
                  <div className="col-md-8">
                     <div className="card shadow-lg border-0 rounded-4 p-4 text-center">

                        <h3 className="mb-3 text-success">
                           🎉 Welcome, {fullName}!
                        </h3>

                        <p className="text-muted mb-4">
                           You're now part of HerCompassAI as a supportive partner.
                           Here’s a preview of what you’ll see in your dashboard.
                        </p>

                        <div className="row text-start">

                           <div className="col-md-4 mb-3">
                              <div className="p-3 bg-light rounded-3">
                                 <h6>Mood Trend</h6>
                                 <p className="small text-muted">
                                    Weekly emotional patterns & insights.
                                 </p>
                              </div>
                           </div>

                           <div className="col-md-4 mb-3">
                              <div className="p-3 bg-light rounded-3">
                                 <h6>AI Summary</h6>
                                 <p className="small text-muted">
                                    Personalized guidance on how to support.
                                 </p>
                              </div>
                           </div>

                           <div className="col-md-4 mb-3">
                              <div className="p-3 bg-light rounded-3">
                                 <h6>Connection Tips</h6>
                                 <p className="small text-muted">
                                    Simple ways to strengthen communication.
                                 </p>
                              </div>
                           </div>

                        </div>

                        <button
                           className="btn btn-dark mt-4 rounded-3"
                           onClick={() => window.location.href = "/partnerdashboard"}
                        >
                           Go to Dashboard →
                        </button>

                     </div>
                  </div>
               </div>
            )}

         </div>

         <Footer />
         <MobileMenus />
         <SignupModal />
         <LoginModal />
      </>
   );
}