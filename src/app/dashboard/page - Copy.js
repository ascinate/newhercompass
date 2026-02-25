"use client";
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';
import PartnerBanner from "../components/PartnerBanner";
import Navication from "../components/Navication";
import Footer from '../components/Footer';

export default function PartnerAccept() {
   const searchParams = useSearchParams();
   const token = searchParams.get("token");

   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);

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
               password
            })
         }
      );

      const data = await res.json();

      if (data.status) {
         localStorage.setItem("token", data.token);
         window.location.href = "/dashboard";
      } else {
         alert(data.message);
      }

      setLoading(false);
   };

   return (
      <>
         <Navication />
         <PartnerBanner />
         <main className="float-start w-100 main-body dashborad-pages01 position-relative pt-4">

            <section className="float-start w-100">
               <div style={{ padding: "40px" }}>
                  <h2>Accept Invitation</h2>

                  <input
                     type="password"
                     placeholder="Set your password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />

                  <button onClick={handleAccept} disabled={loading}>
                     {loading ? "Creating..." : "Accept & Join"}
                  </button>
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