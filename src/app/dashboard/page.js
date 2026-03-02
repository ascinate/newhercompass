"use client"
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';
import LoadingModal from "../components/LoadingModal";

import axios from "axios";

export default function Dashboard() {
   const hasPrefilled = useRef(false);

   const [mood, setMood] = useState(null);
   const [symptom, setSymptom] = useState([]);
   const [note, setNote] = useState("");
   const [loading, setLoading] = useState(false);
   const [sleepHours, setSleepHours] = useState("");
   const [energyLevel, setEnergyLevel] = useState("");
   const [showRoutineModal, setShowRoutineModal] = useState(false);
   const [showCoupleModal, setShowCoupleModal] = useState(false);
   const [sharedFields, setSharedFields] = useState([]);
   const [loadingShared, setLoadingShared] = useState(false);
   const [insights, setInsights] = useState(null);

   const toggleSymptom = (item) => {
      setSymptom(prev =>
         prev.includes(item)
            ? prev.filter(s => s !== item)
            : [...prev, item]
      );
   };

   const toggleField = (field) => {
      setSharedFields(prev =>
         prev.includes(field)
            ? prev.filter(f => f !== field)
            : [...prev, field]
      );
   };
   const symptomsList = ["Hot flashes", "Insomnia", "Fatigue", "Mood swings", "Brain Fog"];
   const saveLog = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
         alert("User not logged in");
         return;
      }

      if (!mood || !symptom) {
         alert("Please select mood & symptom");
         return;
      }

      try {
         setLoading(true);

         const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/symptom-logs`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
               },
               body: JSON.stringify({
                  mood: Number(mood),
                  sleep_hours: sleepHours ? Number(sleepHours) : null,
                  energy_level: energyLevel ? Number(energyLevel) : null,
                  symptoms: symptom.length > 0 ? symptom : null,
                  notes: note || null
               }),
            }
         );

         const data = await response.json();
         console.log("SAVE LOG RESPONSE:", data);

         if (data.success) {
            alert("Log saved successfully");
            // Do nothing else
            // State already holds latest selected values
         } else {
            alert(data.message || "Failed to save log");
         }

      } catch (err) {
         console.error(err);
         alert("Something went wrong");
      } finally {
         setLoading(false);
      }
   };


   const updateShared = async () => {
      if (sharedFields.length === 0) {
         alert("Please select at least one field to share.");
         return;
      }

      setLoadingShared(true);

      try {
         const token = localStorage.getItem("token");

         const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/partner/share`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                  "Accept": "application/json"
               },
               body: JSON.stringify({
                  shared_fields: sharedFields
               })
            }
         );

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
         }

         alert("Shared successfully with partner 💛");

      } catch (error) {
         console.error("Share error:", error);
         alert(error.message || "Failed to share data");
      } finally {
         setLoadingShared(false);
      }
   };

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const fetchInsights = async () => {
         try {
            const res = await fetch(
               `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`,
               {
                  headers: {
                     "Authorization": `Bearer ${token}`,
                     "Content-Type": "application/json"
                  }
               }
            );

            const data = await res.json();

            if (!data.status) return;

            if (data.latest_log && !hasPrefilled.current) {
               setMood(data.latest_log.mood || null);
               setSleepHours(data.latest_log.sleep_hours || "");
               setEnergyLevel(data.latest_log.energy_level || "");

               if (data.latest_log.symptoms?.length > 0) {
                  setSymptom(data.latest_log.symptoms);
               }

               setNote(data.latest_log.notes || "");

               hasPrefilled.current = true;
            }

            // No symptom log yet
            if (data.ai_status === null) {
               setInsights(null);
               return;
            }

            // AI still running
            if (data.ai_status === "processing") {
               setInsights(null);
               setLoading(true);   // 👈 show loader
               return;
            }

            // AI completed
            if (data.ai_status === "completed") {
               setLoading(false);
               setInsights(data.insights);
               return;
            }

            // AI failed
            if (data.ai_status === "failed") {
               setLoading(false);
               console.error("AI failed");
               setInsights(null);
            }

         } catch (error) {
            console.error("Dashboard error:", error);
         }
      };

      fetchInsights();

      const interval = setInterval(fetchInsights, 5000);
      return () => clearInterval(interval);

   }, []);
   const nutrition = insights?.nutritionInsights;
   const radarImages = nutrition?.radar?.map(item =>
      item.image_url
         ? `${process.env.NEXT_PUBLIC_API_URL}/storage/app/public/${item.image_url}`
         : null
   ).filter(Boolean);
   const movement = insights?.movementInsights;
   const mensSupport = insights?.mensSupportInsights;




   return (
      <>
         <Navication />
         <LoadingModal show={loading} text="Saving today’s log..." />
         <main className="float-start w-100 main-body dashborad-pages01 position-relative">

            <section className="float-start w-100">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3">
                        <div className="card">
                           <div className="card-body py-0">
                              <h4 className="card-title"> Mood & Symptom Tracking </h4>
                              <p className="mt-2"> Log moods, symptoms, sleep quality, energy. </p>

                              <div className="paginations-text mt-4">
                                 <p className="mt-0"> Mood (1-5) </p>
                                 <ul className="d-flex align-items-center mt-2 mb-3">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                       <li
                                          key={num}
                                          className={`modes ${mood === num ? "active" : ""}`}
                                          onClick={() => setMood(num)}
                                          style={{ cursor: "pointer" }}
                                       >
                                          {num}
                                       </li>
                                    ))}
                                 </ul>

                              </div>
                              <p className="mt-0"> Symptoms (select) </p>
                              <ul className="selcts-list mt-2 mb-3">
                                 {symptomsList.map((item, idx) => (
                                    <li
                                       key={idx}
                                       className={symptom.includes(item) ? "active" : ""}
                                       onClick={() => toggleSymptom(item)}
                                       style={{ cursor: "pointer" }}
                                    >
                                       {item}
                                    </li>
                                 ))}
                              </ul>
                              <p className="mt-0"> Note (optional) </p>
                              <textarea
                                 className="form-control mt-3"
                                 placeholder="e.g., Tried yoga — felt calmer"
                                 value={note}
                                 onChange={(e) => setNote(e.target.value)}
                              ></textarea>
                              <div className="mt-3">
                                 <label className="form-label">Sleep hours (optional)</label>
                                 <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    className="form-control"
                                    placeholder="e.g., 7.5"
                                    value={sleepHours}
                                    onChange={(e) => setSleepHours(e.target.value)}
                                 />
                              </div>

                              <div className="mt-3">
                                 <label className="form-label">Energy level (1-5) (optional)</label>
                                 <select className="form-control" value={energyLevel} onChange={(e) => setEnergyLevel(e.target.value)}>
                                    <option value="">Select</option>
                                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                                 </select>
                              </div>
                              <div className="d-flex align-items-center w-100 justify-content-between mt-3">
                                 <h6> Add a quick sleep quality/ energy in your note </h6>
                                 <button
                                    type="button"
                                    className="btn btn-svae btn-primary"
                                    onClick={saveLog}
                                    disabled={loading}
                                 >
                                    Save
                                 </button>

                              </div>
                           </div>
                        </div>
                        <div className="card">
                           <div className="card-body py-0">
                              <h4 className="card-title">AI Insights</h4>
                              <p>Personalized analysis based on your last 7 days.</p>

                              {/* Correlation Insight */}
                              {insights?.correlationInsight?.analysis && (
                                 <div className="founds-div mt-3">
                                    <h4 className="card-title">Correlation Found</h4>

                                    <p className="line-clamp-2">
                                       {insights.correlationInsight.analysis}
                                    </p>

                                    <button
                                       type="button"
                                       className="btn btn-veiews btn-primary mt-3"
                                       data-bs-toggle="modal"
                                       data-bs-target="#aiInsightsModal"
                                       onClick={() => {
                                          const modalBody = document.getElementById("aiInsightsModalBody");
                                          if (modalBody) {
                                             modalBody.innerHTML = `
                                                <h5>Analysis</h5>
                                                <p>${insights.correlationInsight.analysis}</p>

                                                <h6 class="mt-3">Key Patterns</h6>
                                                <ul>
                                                   ${insights.correlationInsight.key_patterns
                                                   ?.map(p => `<li>${p}</li>`)
                                                   .join("")}
                                                </ul>

                                                <small class="text-muted">
                                                   ${insights.correlationInsight.citations?.join(", ")}
                                                </small>
                                             `;
                                          }
                                       }}
                                    >
                                       View Related Logs
                                    </button>
                                 </div>
                              )}

                              {/* Predictive Insight */}
                              {insights?.predictiveInsight?.forecast && (
                                 <div className="founds-div mt-3">
                                    <h4 className="card-title">Predictive Insight</h4>

                                    <p className="line-clamp-2">
                                       {insights.predictiveInsight.forecast}
                                    </p>

                                    <button
                                       type="button"
                                       className="btn btn-veiews btn-primary mt-3"
                                       data-bs-toggle="modal"
                                       data-bs-target="#aiInsightsModal"
                                       onClick={() => {
                                          const modalBody = document.getElementById("aiInsightsModalBody");
                                          if (modalBody) {
                                             modalBody.innerHTML = `
                                             <h5>Forecast</h5>
                                             <p>${insights.predictiveInsight.forecast}</p>

                                             <h6 class="mt-3">Risk Reasoning</h6>
                                             <p>${insights.predictiveInsight.risk_reasoning}</p>

                                             <small class="text-muted">
                                                ${insights.predictiveInsight.citations?.join(", ")}
                                             </small>
                                          `;
                                          }
                                       }}
                                    >
                                       Start Sleep Plan
                                    </button>
                                 </div>
                              )}
                           </div>
                        </div>

                     </div>
                     <div className="col-lg-6">
                        <div className="card w-100">
                           <div className="card-body py-0">
                              <div className="row">
                                 <div className="col-lg-8">
                                    <h4 className="card-title">Nutrition & Recipes</h4>

                                    <p className="mt-2">
                                       {nutrition?.summary ||
                                          "Mood-based recipes and nutrition radar aligned with WHO/NIH guidance."}
                                    </p>

                                    <div className="row row-cols-1 row-cols-lg-3 gx-lg-4">
                                       {radarImages?.length > 0 ? (
                                          radarImages.map((img, index) => (
                                             <figure className="col" key={index}>
                                                <Image
                                                   loading="lazy"
                                                   width={420}
                                                   height={189}
                                                   src={img}
                                                   alt={`Nutrition ${index + 1}`}
                                                   unoptimized
                                                />
                                             </figure>
                                          ))
                                       ) : (
                                          <figure className="col">
                                             <Image
                                                loading="lazy"
                                                width={420}
                                                height={189}
                                                src="/imags-place01.jpg"
                                                alt="Nutrition"
                                             />
                                          </figure>
                                       )}
                                    </div>

                                    {/* Shared Shopping List */}
                                    {nutrition?.shopping_list?.length > 0 && (
                                       <>
                                          <h4 className="card-title mt-3">Shared Shopping List</h4>
                                          <ul className="mt-2">
                                             {nutrition.shopping_list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                             ))}
                                          </ul>
                                       </>
                                    )}
                                 </div>

                                 {/* RIGHT COLUMN */}
                                 <div className="col-lg-4">
                                    <p>SCI: ACOG / NIH guidance</p>

                                    <div className="bg-light p-3 mt-2">
                                       <h4 className="card-title">Suggested Recipe</h4>

                                       {nutrition?.suggested_recipe ? (
                                          <>
                                             <h5>{nutrition.suggested_recipe.title}</h5>
                                             <p>{nutrition.suggested_recipe.benefit}</p>
                                          </>
                                       ) : (
                                          <p className="text-muted">
                                             No recipe suggestion available yet.
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="card w-100">
                           <div className="card-body py-0">
                              <div className="row">
                                 <div className="col-lg-8">
                                    <h4 className="card-title">Workouts & Meditation</h4>
                                    <p className="mt-2">
                                       Adaptive workouts and guided meditations based on symptoms and goals.
                                    </p>
                                 </div>
                                 <div className="col-lg-4">
                                    <p>SCI: ACOG/NIH guidance</p>
                                 </div>
                              </div>

                              <div className="row align-items-stretch mt-3">
                                 <div className="col-lg-8">

                                    {/* Routine Section */}
                                    {movement?.routine && (
                                       <div className="new-crad01 mt-4">
                                          <h4 className="card-title">{movement.routine.title}</h4>
                                          <p>{movement.routine.description}</p>

                                          <button
                                             type="button"
                                             className="btn btn-buy btn-primary mt-3"
                                             onClick={() => setShowRoutineModal(true)}
                                          >
                                             View Routine
                                          </button>
                                       </div>
                                    )}
                                 </div>

                                 {/* Couple Mode */}
                                 {movement?.couple_mode && (
                                    <div className="col-lg-4">
                                       <div className="bg-light p-3">
                                          <h4 className="card-title">Couple Mode</h4>
                                          <p><strong>Benefit:</strong> {movement.couple_mode.benefit}</p>
                                          <p><strong>Try:</strong> {movement.couple_mode.challenge}</p>

                                          <button
                                             type="button"
                                             className="btn btn-views-ch mt-3"
                                             onClick={() => setShowCoupleModal(true)}
                                          >
                                             Start Challenge
                                          </button>
                                       </div>
                                    </div>
                                 )}
                              </div>
                           </div>
                        </div>
                        {showRoutineModal && (
                           <div className="modal fade show d-block" tabIndex="-1">
                              <div className="modal-dialog modal-dialog-centered">
                                 <div className="modal-content">

                                    <div className="modal-header">
                                       <h5 className="modal-title">
                                          {movement?.routine?.title}
                                       </h5>
                                       <button
                                          type="button"
                                          className="btn-close"
                                          onClick={() => setShowRoutineModal(false)}
                                       ></button>
                                    </div>

                                    <div className="modal-body">
                                       <p>{movement?.routine?.description}</p>

                                       <p className="text-muted mt-3">
                                          This routine is personalized based on your latest symptom patterns.
                                       </p>
                                    </div>

                                    <div className="modal-footer">
                                       <button
                                          className="btn btn-secondary"
                                          onClick={() => setShowRoutineModal(false)}
                                       >
                                          Close
                                       </button>

                                    </div>

                                 </div>
                              </div>
                           </div>
                        )}
                        {showCoupleModal && (
                           <div className="modal fade show d-block" tabIndex="-1">
                              <div className="modal-dialog modal-dialog-centered">
                                 <div className="modal-content">

                                    <div className="modal-header">
                                       <h5 className="modal-title">Couple Challenge</h5>
                                       <button
                                          type="button"
                                          className="btn-close"
                                          onClick={() => setShowCoupleModal(false)}
                                       ></button>
                                    </div>

                                    <div className="modal-body">
                                       <p>
                                          <strong>Challenge:</strong>{" "}
                                          {movement?.couple_mode?.challenge}
                                       </p>

                                       <p className="mt-2">
                                          <strong>Benefit:</strong>{" "}
                                          {movement?.couple_mode?.benefit}
                                       </p>

                                       <p className="text-muted mt-3">
                                          Doing this together strengthens connection and lowers stress.
                                       </p>
                                    </div>

                                    <div className="modal-footer">
                                       <button
                                          className="btn btn-secondary"
                                          onClick={() => setShowCoupleModal(false)}
                                       >
                                          Close
                                       </button>

                                    </div>

                                 </div>
                              </div>
                           </div>
                        )}


                     </div>

                     <div className="col-lg-3">

                        <div className="card w-100">
                           <div className="card-body py-0">
                              <h4 className="card-title">Men's Support (Men's Academy)</h4>

                              <p>
                                 Short interactive micro-courses to build empathy and communication skills.
                              </p>

                              {mensSupport?.recommended_module && (
                                 <>
                                    <h5 className="mt-2 mb-2 sub-content">
                                       Recommended: {mensSupport.recommended_module.title} —{" "}
                                       {mensSupport.recommended_module.duration}
                                    </h5>

                                    <p className="mt-2">
                                       {mensSupport.recommended_module.description}
                                    </p>

                                    {mensSupport.why_recommended && (
                                       <p className="mt-2 text-muted">
                                          <strong>Why this is recommended:</strong>{" "}
                                          {mensSupport.why_recommended}
                                       </p>
                                    )}
                                 </>
                              )}

                              {mensSupport?.partner_summary && (
                                 <div className="mt-3">
                                    <h5>Partner Digest</h5>
                                    <p>{mensSupport.partner_summary}</p>
                                 </div>
                              )}

                              {mensSupport?.digest_note && (
                                 <div className="mt-2 text-muted">
                                    <p>{mensSupport.digest_note}</p>
                                 </div>
                              )}
                           </div>
                        </div>

                        <div className="card mt-4">
                           <div className="card-body">
                              <h4 className="card-title">What information do you want to share?</h4>

                              {/* Mood Trend */}
                              <label className="d-flex align-items-center mt-2">
                                 <input
                                    type="checkbox"
                                    checked={sharedFields.includes("mood_trend")}
                                    onChange={() => toggleField("mood_trend")}
                                 />
                                 <span className="ms-2">Mood Trend</span>
                              </label>

                              {/* Notes */}
                              <label className="d-flex align-items-center mt-2">
                                 <input
                                    type="checkbox"
                                    checked={sharedFields.includes("notes")}
                                    onChange={() => toggleField("notes")}
                                 />
                                 <span className="ms-2">Recent Notes</span>
                              </label>

                              {/* AI Prediction */}
                              <label className="d-flex align-items-center mt-2">
                                 <input
                                    type="checkbox"
                                    checked={sharedFields.includes("ai_prediction")}
                                    onChange={() => toggleField("ai_prediction")}
                                 />
                                 <span className="ms-2">AI Prediction Snapshot</span>
                              </label>

                              <button
                                 className="btn btn-warning mt-3"
                                 disabled={loadingShared}
                                 onClick={updateShared}
                              >
                                 {loadingShared ? "Updating..." : "Save Shared Fields"}
                              </button>
                           </div>
                        </div>
                        <div className="card w-100">
                           <div className="card-body py-0">
                              <ul className="cardt-listks">
                                 <li>
                                    <a href="#"> FAQ </a>
                                 </li>
                                 <li>
                                    <a href="#"> Privacy & Consent </a>
                                 </li>
                                 <li>
                                    <a href="#"> Contact Support </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card w-100 mt-4">
                     <div className="card-body texr-card01 d-flex align-items-center justify-content-between py-0">
                        <p> <strong> Evidence-based: </strong> All recipes, workouts, meditations and advice reference clinical research-no fads. </p>
                        <button type="button" className="btn btn-mores btn-daind"> Learn more </button>
                     </div>
                  </div>
               </div>
            </section>
            {/* AI Insights Modal */}
            <div
               className="modal fade"
               id="aiInsightsModal"
               tabIndex="-1"
               aria-labelledby="aiInsightsModalLabel"
               aria-hidden="true"
            >
               <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title" id="aiInsightsModalLabel">Details</h5>
                        <button
                           type="button"
                           className="btn-close"
                           data-bs-dismiss="modal"
                           aria-label="Close"
                        ></button>
                     </div>
                     <div className="modal-body" id="aiInsightsModalBody">
                        {/* Content will be inserted dynamically */}
                     </div>

                  </div>
               </div>
            </div>



         </main>

         <Footer />
         <MobileMenus />
         <SignupModal />
         <LoginModal />

      </>
   )
}
