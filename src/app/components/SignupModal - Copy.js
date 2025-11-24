"use client";
import { useState } from "react";

function SignupModal() {
  const totalSteps = 7;
  const [currentStep, setCurrentStep] = useState(1);


  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormValues((prev) => {
      if (type === "checkbox") {
        const arr = prev[name] || [];
        if (checked) return { ...prev, [name]: [...arr, value] };
        return { ...prev, [name]: arr.filter((v) => v !== value) };
      }

      return { ...prev, [name]: value };
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };


  const handleSubmit = async () => {

    const payload = {
      full_name: formValues.fullname,
      email: formValues.email,
      password: formValues.password,
      phone: formValues.phone,

      age: Number(formValues.age),
      menopause_phase: formValues.phase?.toLowerCase(),

      health_concerns: formValues.healthConcerns || [],
      medical_conditions: formValues.medicalConditions,
      hormone_therapy_status: formValues.hormoneTherapyStatus,

      diet_preferences: formValues.diet_preferences || [],
      allergies: formValues.allergies,
      energy_after_meal_rating: Number(formValues.energyAfterMealRating),

      mood_baseline: {
        anxious: Number(formValues.moodBaseline_anxious),
        calm: Number(formValues.moodBaseline_calm),
        irritable: Number(formValues.moodBaseline_irritable),
        sad: Number(formValues.moodBaseline_sad),
        happy: Number(formValues.moodBaseline_happy),
        motivated: Number(formValues.moodBaseline_motivated),
        tired: Number(formValues.moodBaseline_tired),
      },

      emotional_goals: formValues.emotionalGoals || [],
      meditation_frequency: formValues.meditationFrequency,

      activity_level: formValues.activityLevel,
      exercise_preferences: formValues.exercisePreferences || [],
      weekly_exercise: formValues.weeklyExercise,

      daily_checkin_opt_in: formValues.dailyCheckinOptIn === "on",
      preferred_recommendations:
        formValues.preferredRecommendations || [],

        partner_email: formValues.partner_email || null,
        consent_to_share: formValues.consent_to_share || false,

    };

    console.log("🚀 PAYLOAD:", payload);

    const res = await fetch("https://hercompass.onrender.com/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("REGISTER RESPONSE:", data);

    if (data.success) {
      setCurrentStep(7);
    } else {
      alert("Registration failed: " + data.message);
    }
  };


  return (
    <>
      <div
        className="modal fade crm-login-modal"
        id="registernmodal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0 p-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-0">
              <div className="form-container">
                <div className="tops-sections w-100 d-md-flex align-items-center">
                  <div id="stepIndicator" className="step-indicator">
                    Step <strong>{currentStep}</strong> of {totalSteps}
                  </div>

                  <div className="actives-linse">
                    <div className="progress">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`progress-step ${i + 1 <= currentStep ? 'active' : ''}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <form>
                  {/* Step 1 */}
                  {currentStep === 1 && (
                    <div className="step active">
                      <div className="bodys-parts-div015">
                        <div className="text-div-heading">
                          <h4 className="tell-heading">Tell us a bit about you</h4>
                          <p>We use this to tailor recommendations.</p>
                        </div>


                        <div className="form-group mt-2">
                          <label className="form-label">What is your age?</label>
                          <input
                            type="number"
                            className="form-control"
                            name="age"
                            onChange={handleChange}
                            placeholder="e.g., 48"
                            required
                          />
                        </div>


                        <div className="check-div-group mt-3">
                          <label className="form-label">What is your current menopause phase?</label>
                          <div className="radio-group d-flex align-items-center flex-wrap mt-2">
                            {["Perimenopause", "Menopause", "Postmenopause", "Unsure"].map(p => (
                              <label className="form-check me-3" key={p}>
                                <input type="radio" name="phase" value={p} required onChange={handleChange} /> {p}
                              </label>
                            ))}
                          </div>
                        </div>


                        <div className="form-group mt-3">
                          <label className="form-label">What are your primary health concerns?</label>
                          <div className="option-group d-flex flex-wrap mt-2">
                            {[
                              "Hot flashes",
                              "Fatigue",
                              "Brain fog",
                              "Sleep issues",
                              "Anxiety",
                              "Weight gain",
                              "Joint pain"
                            ].map(h => (
                              <label className="form-sl me-3" key={h}>
                                <input type="checkbox" name="healthConcerns" onChange={handleChange} value={h} /> {h}
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="form-group mt-3">
                          <label className="form-label">Do you have any diagnosed health conditions?</label>
                          <input
                            type="text"
                            className="form-control"
                            name="medicalConditions"
                            onChange={handleChange}
                            placeholder="e.g., thyroid disorder, diabetes"
                          />
                        </div>

                        {/* Hormone Therapy */}
                        <div className="check-div-group mt-3">
                          <label className="form-label">Do you take hormone therapy or supplements?</label>
                          <div className="radio-group d-flex align-items-center flex-wrap mt-2">
                            {["Yes", "No", "Considering"].map(h => (
                              <label className="form-check me-3" key={h}>
                                <input type="radio" name="hormoneTherapyStatus" onChange={handleChange} value={h} required /> {h}
                              </label>
                            ))}
                          </div>
                        </div>

                        <h6 className="qutes mt-4">You can change answers later.</h6>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="step active">
                      <div className="bodys-parts-div015">

                        <div className="text-div-heading">
                          <h4 className="tell-heading">Your diet and fitness</h4>
                          <p>Choose what fits your lifestyle.</p>
                        </div>


                        <div className="form-group">
                          <label className="form-label">Do you follow any specific dietary preferences?</label>
                          <div className="option-group d-flex flex-wrap mt-2">
                            {[
                              "Vegetarian",
                              "Vegan",
                              "Keto",
                              "Gluten-Free",
                              "Dairy-Free",
                              "Mediterranean",
                              "No Preference"
                            ].map(d => (
                              <label className="form-sl me-3" key={d}>
                                <input type="checkbox" name="diet_preferences" onChange={handleChange} value={d} /> {d}
                              </label>
                            ))}
                          </div>
                        </div>


                        <div className="form-group mt-3">
                          <label className="form-label">Do you have any food allergies?</label>
                          <input
                            type="text"
                            className="form-control"
                            name="allergies"
                            onChange={handleChange}
                            placeholder="e.g., peanuts, dairy"
                          />
                        </div>


                        <div className="form-group mt-3">
                          <label className="form-label">What is your usual energy level after eating?</label>
                          <input type="range" min="1" max="3" name="energyAfterMealRating" onChange={handleChange} className="form-range" />
                          <div className="d-flex justify-content-between">
                            <span>Low</span><span>Medium</span><span>High</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}



                  {currentStep === 3 && (
                    <div className="step active">
                      <div className="bodys-parts-div015">

                        <div className="text-div-heading">
                          <h4 className="tell-heading">Your emotions & mood profile</h4>
                          <p>Help us personalize your daily guidance.</p>
                        </div>


                        <div className="form-group mt-3">
                          <label className="form-label">
                            In the last week, how often have you felt the following moods?
                          </label>


                          {[
                            "anxious",
                            "calm",
                            "irritable",
                            "sad",
                            "happy",
                            "motivated",
                            "tired",
                          ].map((mood) => (
                            <div className="mood-slider mt-3" key={mood}>
                              <label className="form-label text-capitalize">
                                {mood}{" "}
                                <span>
                                  {mood === "happy" && "😊"}
                                  {mood === "sad" && "😔"}
                                  {mood === "anxious" && "😰"}
                                  {mood === "calm" && "😌"}
                                  {mood === "irritable" && "😠"}
                                  {mood === "motivated" && "💪"}
                                  {mood === "tired" && "😴"}
                                </span>
                              </label>
                              <input
                                type="range"
                                min="1"
                                max="5"
                                onChange={handleChange}
                                name={`moodBaseline_${mood}`}
                                className="form-range"
                                defaultValue="3"
                              />
                              <div className="d-flex justify-content-between small text-muted">
                                <span>Low</span>
                                <span>High</span>
                              </div>
                            </div>
                          ))}
                        </div>


                        <div className="form-group mt-4">
                          <label className="form-label">What are your main emotional goals?</label>
                          <div className="option-group d-flex align-items-center flex-wrap mt-2">
                            {[
                              "Better sleep",
                              "Less stress",
                              "More energy",
                              "Mood stability",
                              "Mental clarity",
                            ].map((goal) => (
                              <label className="form-sl me-3" key={goal}>
                                <input
                                  type="checkbox"
                                  name="emotionalGoals"
                                  onChange={handleChange}
                                  value={goal.toLowerCase().replace(" ", "_")}
                                />{" "}
                                {goal}
                              </label>
                            ))}
                          </div>
                        </div>


                        <div className="form-group mt-4">
                          <label className="form-label">
                            How often do you practice mindfulness or meditation?
                          </label>
                          <select className="form-control" name="meditationFrequency" onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="rarely">Rarely</option>
                            <option value="never">Never</option>
                          </select>
                        </div>
                      </div>

                      <div className="error"></div>
                    </div>
                  )}
                  {currentStep === 4 && (
                    <div className="step active">
                      <div className="bodys-parts-div015">

                        <div className="text-div-heading">
                          <h4 className="tell-heading">Your activity & lifestyle</h4>
                          <p>Help us understand your movement and routines.</p>
                        </div>


                        <div className="form-group mt-3">
                          <label className="form-label">How active are you currently?</label>
                          <div className="radio-group d-flex align-items-center flex-wrap mt-2">
                            <label className="form-check me-3">
                              <input type="radio" name="activityLevel" value="sedentary" required onChange={handleChange} /> Sedentary
                            </label>
                            <label className="form-check me-3">
                              <input type="radio" name="activityLevel" value="light" required onChange={handleChange} /> Light
                            </label>
                            <label className="form-check me-3">
                              <input type="radio" name="activityLevel" value="moderate" required onChange={handleChange} /> Moderate
                            </label>
                            <label className="form-check me-3">
                              <input type="radio" name="activityLevel" value="very_active" required onChange={handleChange} /> Very Active
                            </label>
                          </div>
                        </div>


                        <div className="form-group mt-4">
                          <label className="form-label">What kind of exercises do you prefer?</label>
                          <div className="option-group d-flex flex-wrap mt-2">
                            <label className="form-sl me-3">
                              <input type="checkbox" name="exercisePreferences" value="yoga" onChange={handleChange} /> Yoga
                            </label>
                            <label className="form-sl me-3">
                              <input type="checkbox" name="exercisePreferences" value="walking" onChange={handleChange} /> Walking
                            </label>
                            <label className="form-sl me-3">
                              <input type="checkbox" name="exercisePreferences" value="strength" onChange={handleChange} /> Strength Training
                            </label>
                            <label className="form-sl me-3">
                              <input type="checkbox" name="exercisePreferences" value="hiit" onChange={handleChange} /> HIIT
                            </label>
                            <label className="form-sl me-3">
                              <input type="checkbox" name="exercisePreferences" value="pilates" onChange={handleChange} /> Pilates
                            </label>
                            <label className="form-sl me-3">
                              <input type="checkbox" name="exercisePreferences" value="stretching" onChange={handleChange} /> Stretching
                            </label>
                          </div>
                        </div>


                        <div className="form-group mt-4">
                          <label className="form-label">How many minutes do you exercise per week?</label>
                          <select className="form-control" name="weeklyExercise" required onChange={handleChange}>
                            <option value="">Select...</option>
                            <option value="0-30">0–30 minutes</option>
                            <option value="30-60">30–60 minutes</option>
                            <option value="60-90">60–90 minutes</option>
                            <option value="90plus">90+ minutes</option>
                          </select>
                        </div>

                      </div>

                      <div className="error"></div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="step active">
                      <div className="bodys-parts-div015">

                        <div className="text-div-heading">
                          <h4 className="tell-heading">AI Personalization Preferences</h4>
                          <p>Choose how you want your AI assistant to support you.</p>
                        </div>


                        <div className="form-group mt-3">
                          <label className="form-label">
                            Would you like to receive personalized daily mood check-ins?
                          </label>
                          <div className="mt-2">
                            <label className="form-check">
                              <input
                                type="checkbox"
                                name="dailyCheckinOptIn"
                                defaultChecked
                                onChange={handleChange}
                              />{" "}
                              Enable daily check-ins
                            </label>
                          </div>
                        </div>


                        <div className="form-group mt-4">
                          <label className="form-label">
                            What kind of recommendations are most helpful to you?
                          </label>

                          <div className="option-group d-flex flex-wrap mt-2">
                            <label className="form-sl me-3">
                              <input type="checkbox" name="preferredRecommendations" value="Meal ideas" onChange={handleChange} /> Meal ideas
                            </label>

                            <label className="form-sl me-3">
                              <input type="checkbox" name="preferredRecommendations" value="Symptom insights" onChange={handleChange} /> Symptom insights
                            </label>

                            <label className="form-sl me-3">
                              <input type="checkbox" name="preferredRecommendations" value="Exercise suggestions" onChange={handleChange} /> Exercise suggestions
                            </label>

                            <label className="form-sl me-3">
                              <input type="checkbox" name="preferredRecommendations" value="Meditations" onChange={handleChange} /> Meditations
                            </label>

                            <label className="form-sl me-3">
                              <input type="checkbox" name="preferredRecommendations" value="Motivation" onChange={handleChange} /> Motivation
                            </label>
                          </div>
                        </div>

                      </div>
                      <div className="error"></div>
                    </div>
                  )}




                  {currentStep === 6 && (
                    <div className="step active">
                      <div className="bodys-parts-div015">

                        <div className="text-div-heading">
                          <h4 className="tell-heading"> Build your daily plan  </h4>
                          <p> We’ve drafted a routine based on your goals. Review and adjust the focus areas below. </p>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label"> First Name </label>
                              <input type="text" className="form-control" name="fullname" placeholder="e.g., James" required onChange={handleChange} />

                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label"> Your Email </label>
                              <input type="email" className="form-control" name="email" placeholder="e.g., danis@gmail.com" required onChange={handleChange} />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label"> Create Password </label>
                              <input type="password" name="password" className="form-control" minlength="6" placeholder="e.g., *****" required onChange={handleChange} />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label"> Phone Number </label>
                              <input type="text" className="form-control" name="phone" placeholder="e.g., + 91 1524100" required onChange={handleChange} />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-label"> Anything else we should know? </label>
                              <textarea className="form-control aret-text"></textarea>
                            </div>
                          </div>

                          <div className="col-lg-12 mt-4">
                            <h5 className="tell-heading">Invite your partner (optional)</h5>
                            <p>Share insights with someone who supports you.</p>
                          </div>

                         
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label"> Partner Email </label>
                              <input
                                type="email"
                                name="partner_email"
                                className="form-control"
                                placeholder="e.g., partner@gmail.com"
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                         
                          <div className="col-lg-12">
                            <div className="form-group d-flex align-items-center">
                              <input
                                type="checkbox"
                                name="consent_to_share"
                                onChange={(e) =>
                                  handleChange({
                                    target: {
                                      name: "consent_to_share",
                                      value: e.target.checked,
                                    },
                                  })
                                }
                                style={{ width: "18px", height: "18px", marginRight: "10px" }}
                              />
                              <label className="form-label mb-0">
                                I agree to share selected wellness insights with my partner.
                              </label>
                            </div>
                          </div>
                        </div>


                      </div>
                      <div className="error"></div>
                    </div>
                  )}


                  {currentStep === 7 && (
                    <div className="step active">
                      <div className="bodys-parts-div015">

                        <div className="text-div-heading text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="66" height="66" fill="rgba(234,113,46,1)"><path d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM19.9999 11C20.7012 11 21.3744 10.8797 22 10.6586V20C22 20.5523 21.5523 21 21 21H2V4C2 3.44772 2.44772 3 3 3H14.3413C14.1202 3.62556 13.9999 4.29873 13.9999 5C13.9999 6.44366 14.5098 7.76824 15.3593 8.80348L11.9999 11.6829L5.6507 6.24074L4.34912 7.75926L11.9999 14.3171L16.8855 10.1294C17.7934 10.6818 18.8595 11 19.9999 11Z"></path></svg>
                          <h3 className="tell-heading mt-2"> Registration completed successfully  </h3>
                          <p> Please check your registered email for <strong className="register-textr"> email verification </strong> </p>
                        </div>
                      </div>
                    </div>
                  )}


                  {currentStep !== 7 && (
                    <div className="buttons back-div-mainsd d-flex justify-content-end align-items-center pe-4">

                      <button
                        type="button"
                        className="btn btn-backs"
                        disabled={currentStep === 1}
                        onClick={prevStep}
                      >
                        Back
                      </button>

                      {currentStep < 6 ? (
                        <button className="btn ms-2 next-btnh" type="button" onClick={nextStep}>
                          Next
                        </button>
                      ) : (
                        <button className="btn ms-2 next-btnh" type="button" onClick={handleSubmit}>
                          Finish
                        </button>
                      )}

                    </div>
                  )}

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupModal;
