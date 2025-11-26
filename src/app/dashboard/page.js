"use client"
import { useState } from "react";
import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import FeatureBanner from '../components/FeatureBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';

export default function Dashboard() {

   const [mood, setMood] = useState(null);
   const [symptom, setSymptom] = useState(null);
   const [note, setNote] = useState("");
   const [loading, setLoading] = useState(false);
   const [sleepHours, setSleepHours] = useState("");
   const [energyLevel, setEnergyLevel] = useState("");

   const symptomsList = ["Hot flashes", "Insomnia", "Fatigue", "Mood swings"];

   const saveLog = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      if (!userId || !token) {
         alert("User not logged in");
         return;
      }

      if (!mood || !symptom) {
         alert("Please select mood & symptom");
         return;
      }

      try {
         setLoading(true);
         const response = await fetch("http://localhost:5000/api/logs/add", {
            method: "POST",
            headers: { "Content-Type": "application/json","Authorization": `Bearer ${token}` },

            body: JSON.stringify({
               mood,
               userId,
               sleep_hours: sleepHours ? Number(sleepHours) : null,
               energy_level: energyLevel ? Number(energyLevel) : null,
               symptoms: symptom,
               notes: note,
            }),
         });

         const data = await response.json();
         console.log("SAVE LOG RESPONSE:", data);

         alert("Log saved successfully!");
         setMood(null);
         setSymptom(null);
         setNote("");
          setSleepHours("");
          setEnergyLevel(""); 
      } catch (err) {
         console.error(err);
         alert("Something went wrong");
      } finally {
         setLoading(false);
      }
   };


   return (
      <>
         <Navication />
         <main className="float-start w-100 main-body dashborad-pages01 position-relative">

            <section className="float-start w-100">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3">
                        <div className="card">
                           <div className="card-body py-0">
                              <h4 className="card-title"> Mood & Symptom Tracking </h4>
                              <p className="mt-2"> Log moods, symptoms, sleep quality, energy-under 60s. </p>

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
                                       className={symptom === item ? "active" : ""}
                                       onClick={() => setSymptom(item)}
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
                                    {loading ? "Saving..." : "Save Log"}
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div className="card">
                           <div className="card-body py-0">
                              <h4 className="card-title"> AI Insights </h4>
                              <p> Examples of personalized insights generated from logs. </p>
                              <div className="founds-div mt-3">
                                 <h4 className="card-title"> Correlation found </h4>
                                 <p> Late caffeine linked to poorer sleep - mood down 20% next day </p>
                                 <button type="button" className="btn btn-veiews btn-primary mt-3"> View Related Logs </button>
                              </div>
                              <div className="founds-div mt-3">
                                 <h4 className="card-title"> Predictive insight </h4>
                                 <p> Hot-flash risk predicted to drop next week after consistent 7 +hrs sleep </p>
                                 <button type="button" className="btn btn-veiews btn-primary mt-3"> Start sleep plan </button>
                              </div>
                           </div>
                        </div>

                        <div className="card">
                           <div className="card-body py-0">
                              <h4 className="card-title"> Partner Digest (consent) </h4>
                              <p> Your partner sees a simplified weekly summary mood trend, one supportive note, and recommended actions. </p>
                              <div className="founds-div mt-3">
                                 <h4 className="card-title"> Shared note example: </h4>
                                 <p> "Tried yoga for hot flashes - felt slightly better." </p>
                                 <div className="d-flex justify-content-between w-100 align-items-center">
                                    <button type="button" className="btn btn-primary  mt-3"> Manage consent </button>
                                    <button type="button" className="btn btn-success ms-2 mt-3"> Open partner view </button>
                                 </div>

                              </div>
                           </div>
                        </div>

                     </div>
                     <div className="col-lg-6">
                        <div className="card w-100">
                           <div className="card-body py-0">
                              <div className="row">
                                 <div className="col-lg-8">
                                    <h4 className="card-title"> Nutrition & Recipes </h4>
                                    <p className="mt-2"> Mood-based recipes and nutrition radar vs WHO/NIH targets. </p>
                                    <figure className="mt-3">
                                       <Image loading="lazy" width={420} height={189} src="/imags-place01.jpg" alt="sm" />
                                    </figure>
                                    <p className="mt-2"> Example: Low iron & vitamin D detected - recipes suggested below. </p>
                                    <h4 className="card-title mt-3"> Shared Shopping List </h4>
                                    <ul className="mt-2">
                                       <li>
                                          Spinach
                                       </li>
                                       <li>
                                          Lentils
                                       </li>
                                       <li>
                                          Chamomile tea
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="col-lg-4">
                                    <p> SCI: ACOG/NIH guidance </p>
                                    <div className="bg-light p-3 mt-2">
                                       <h4 className="card-title"> Suggested Recipe </h4>
                                       <h5> Shared Shopping List </h5>
                                       <p> Good source of iron & fiber. </p>
                                       <button type="button" className="btn btn-primary btn-daind mt-3"> Add to Shopping </button>
                                    </div>
                                 </div>


                              </div>

                              <div className="d-flex align-items-center mt-4">
                                 <input type="text" className="form-control mt-0" placeholder="Add item" />
                                 <button type="button" className="btn btn-success m-0 ms-3"> Add </button>
                              </div>
                           </div>
                        </div>
                        <div className="card w-100">
                           <div className="card-body py-0">
                              <div className="row">
                                 <div className="col-8">
                                    <h4 className="card-title">  Workouts & Meditation </h4>
                                    <p className="mt-2"> Adaptive workouts and guided meditations based on symptoms and goals. </p>
                                 </div>
                                 <div className="col-4">
                                    <p> SCI: ACOG/NIH guidance </p>
                                 </div>
                              </div>



                              <div className="row align-items-stretch mt-3">
                                 <div className="col-8">

                                    <div className="bg-light p-4">
                                       <h4 className="card-title"> Suggested for tonight </h4>
                                       <p> 10-min guided evening meditation for sleep. </p>
                                       <div className="d-flex align-items-center justify-content-between mt-3">
                                          <button type="button" className="btn btn-daind">Start Meditation </button>
                                          <button type="button" className="btn no-tbn ms-3">Add to couple challenge </button>
                                       </div>
                                    </div>



                                    <div className="new-crad01 mt-4">
                                       <h4 className="card-title">  Workouts & Meditation </h4>
                                       <p> Adaptive workouts and guided meditations based on symptoms and goals. </p>
                                       <button type="button" className="btn btn-buy btn-primary mt-3"> View Routine </button>
                                    </div>
                                 </div>
                                 <div className="col-4">

                                    <div className="bg-light p-3">
                                       <h4 className="card-title"> Couple Mode  </h4>
                                       <p> Try: Walk together 3x this week </p>
                                       <button type="button" className="btn btn-views-ch mt-3"> Start Challenge </button>
                                    </div>
                                 </div>


                              </div>




                           </div>
                        </div>


                     </div>

                     <div className="col-lg-3">
                        <div className="card w-100">
                           <div className="card-body py-0">
                              <h4 className="card-title"> Men's Support (Men's Academy) </h4>
                              <p> Short interactive micro-courses to build empathy and communication skills. </p>
                              <h5 className="mt-2 mb-3 sub-content"> Recommended: Empathy 101-5min </h5>
                              <div className="d-flex align-items-center mt-3">
                                 <button type="button" className="btn btn-strat btn-daind"> Start </button>
                                 <button type="button" className="btn btn-pogress ms-2"> Share progress </button>
                              </div>
                              <p className="mt-3 digest01-titels"> Digest: Weekly summary shared with consent. </p>
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


         </main>

         <Footer />
         <MobileMenus />
         <SignupModal />
         <LoginModal />

      </>
   )
}
