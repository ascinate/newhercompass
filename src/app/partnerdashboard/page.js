"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Navication from "../components/Navication";
import PartnerBanner from "../components/PartnerBanner";

import Footer from "../components/Footer";

import MobileMenus from "../components/MobileMenus";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LogiModal";

export default function PartnerDashboard() {
   return (
      <>
         <Navication />
         <PartnerBanner/>
         <div className="container py-5">


            {/* Overview Cards */}
            <div className="row mb-4">

               <div className="col-md-4 mb-4">
                  <div className="card shadow-sm rounded-4 p-4 text-center">
                     <h6 className="text-muted">Current Mood Trend</h6>
                     <h4 className="fw-bold text-warning">Stable 🌤</h4>
                     <p className="small text-muted mt-2">
                        Minor emotional fluctuations this week.
                     </p>
                  </div>
               </div>

               <div className="col-md-4 mb-4">
                  <div className="card shadow-sm rounded-4 p-4 text-center">
                     <h6 className="text-muted">Energy Level</h6>
                     <h4 className="fw-bold text-success">Moderate ⚡</h4>
                     <p className="small text-muted mt-2">
                        Slight afternoon fatigue reported.
                     </p>
                  </div>
               </div>

               <div className="col-md-4 mb-4">
                  <div className="card shadow-sm rounded-4 p-4 text-center">
                     <h6 className="text-muted">Sleep Quality</h6>
                     <h4 className="fw-bold text-info">Improving 🌙</h4>
                     <p className="small text-muted mt-2">
                        Fewer nighttime interruptions.
                     </p>
                  </div>
               </div>

            </div>

            {/* AI Insight */}
            <div className="card shadow-sm rounded-4 p-4 mb-4">
               <h5>🤖 AI Support Insight</h5>
               <p className="text-muted">
                  This week she may benefit from emotional reassurance and
                  low-pressure conversations. Fatigue may increase in the evenings,
                  so supportive gestures during that time can strengthen connection.
               </p>
            </div>

            {/* Recent Notes */}
            <div className="card shadow-sm rounded-4 p-4 mb-4">
               <h5>📝 Shared Reflection</h5>
               <p className="text-muted">
                  "Feeling slightly overwhelmed balancing work and rest. Trying
                  to prioritize sleep more this week."
               </p>
            </div>

            {/* Support Tips */}
            <div className="card shadow-sm rounded-4 p-4 bg-light">
               <h5>💡 Gentle Support Suggestions</h5>
               <ul className="text-muted mb-0">
                  <li>Listen without trying to immediately fix the situation.</li>
                  <li>Offer small affirmations and appreciation.</li>
                  <li>Encourage restful evening routines.</li>
                  <li>Ask open-ended questions with empathy.</li>
               </ul>
            </div>

         </div>

         <Footer />
         <MobileMenus />
      </>
   );
}