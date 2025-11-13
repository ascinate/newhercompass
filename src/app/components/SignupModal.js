"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function SignupModal() {
  useEffect(() => {
    // Wait for the DOM to be ready
    const steps = document.querySelectorAll(".step");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const stepIndicator = document.getElementById("stepIndicator");
    const modal = document.getElementById("successModal");
    const progressSteps = document.querySelectorAll(".progress-step");

    // If elements don't exist yet, exit early
    if (!steps.length || !nextBtn || !prevBtn || !stepIndicator) return;

    let currentStep = 0;

    // --- FUNCTIONS ---
    function showStep(index) {
      steps.forEach((s, i) => s.classList.toggle("active", i === index));
      prevBtn.disabled = index === 0;
      nextBtn.textContent = index === steps.length - 1 ? "Submit" : "Next";
      stepIndicator.textContent = `Step ${index + 1} of ${steps.length}`;

      progressSteps.forEach((p, i) => {
        p.classList.toggle("active", i <= index);
      });
    }

    function validateStep(index) {
      const step = steps[index];
      const inputs = step.querySelectorAll("input");
      let valid = true;
      step.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

      const radioGroups = {};
      const checkboxGroups = {};

      inputs.forEach((input) => {
        const { type, name } = input;
        if (type === "radio") {
          radioGroups[name] = radioGroups[name] || [];
          radioGroups[name].push(input);
        } else if (type === "checkbox") {
          checkboxGroups[name] = checkboxGroups[name] || [];
          checkboxGroups[name].push(input);
        } else if (!input.checkValidity()) {
          input.nextElementSibling.textContent = input.validationMessage;
          valid = false;
        }
      });

      for (let group in radioGroups) {
        const checked = radioGroups[group].some((r) => r.checked);
        if (!checked) {
          step.querySelector(".error").textContent = "Please select an option.";
          valid = false;
        }
      }

      for (let group in checkboxGroups) {
        const checked = checkboxGroups[group].some((c) => c.checked);
        if (!checked) {
          step.querySelector(".error").textContent =
            "Please select at least one option.";
          valid = false;
        }
      }

      return valid;
    }

    // --- EVENT HANDLERS ---
    const handleNext = () => {
      if (nextBtn.textContent === "Submit") {
        if (!validateStep(currentStep)) return;
        alert("Form submitted successfully!");
        if (modal) modal.style.display = "flex";
        const form = document.getElementById("multiStepForm");
        if (form) form.reset();
        currentStep = 0;
        showStep(currentStep);
        return;
      }

      if (!validateStep(currentStep)) return;
      currentStep++;
      showStep(currentStep);
    };

    const handlePrev = () => {
      currentStep--;
      showStep(currentStep);
    };

    // Attach listeners
    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);

    // Initialize first step
    showStep(currentStep);

    // Cleanup
    return () => {
      nextBtn.removeEventListener("click", handleNext);
      prevBtn.removeEventListener("click", handlePrev);
    };
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
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

              <form id="multiStepForm">
                {/* Step 1 */}
                {currentStep === 1 && (
                  <div className="step active">
                    <div className="bodys-parts-div015">
                      <div className="text-div-heading">
                        <h4 className="tell-heading">Tell us a bit about you</h4>
                        <p>We use this to tailor recommendations.</p>
                      </div>

                      <div className="form-group mt-2">
                        <label className="form-label">Age</label>
                        <input
                          type="text"
                          className="form-control"
                          name="age"
                          placeholder="e.g., 48"
                          required
                        />
                      </div>

                      <div className="check-div-group mt-3">
                        <label className="form-label">Menopausal Phase</label>
                        <div className="radio-group d-flex align-items-center flex-wrap mt-2">
                          <label className="form-check me-3">
                            <input type="radio" name="plan" value="Basic" required /> Basic Plan
                          </label>
                          <label className="form-check me-3">
                            <input type="radio" name="plan" value="Pro" required /> Pro Plan
                          </label>
                          <label className="form-check me-3">
                            <input type="radio" name="plan" value="Premium" required /> Premium Plan
                          </label>
                        </div>
                      </div>

                      <h6 className="qutes mt-4">You can change answers later.</h6>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                  <div className="step active">
                    <div className="bodys-parts-div015">
                      <div className="text-div-heading">
                        <h4 className="tell-heading">Your diet and fitness</h4>
                        <p>Choose what fits your lifestyle.</p>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Diet Style</label>
                        <div className="option-group d-flex flex-wrap mt-2">
                          <label className="form-sl me-3">
                            <input type="checkbox" name="interests" value="mediterranean" /> Mediterranean
                          </label>
                          <label className="form-sl me-3">
                            <input type="checkbox" name="interests" value="vegetarian" /> Vegetarian
                          </label>
                          <label className="form-sl me-3">
                            <input type="checkbox" name="interests" value="lowcarb" /> Low-carb
                          </label>
                        </div>
                      </div>

                      <div className="check-div-group mt-3">
                        <label className="form-label">Fitness Level</label>
                        <div className="radio-group d-flex flex-wrap mt-2">
                          <label className="form-check me-3">
                            <input type="radio" name="fitness" value="beginner" /> Beginner
                          </label>
                          <label className="form-check me-3">
                            <input type="radio" name="fitness" value="intermediate" /> Intermediate
                          </label>
                          <label className="form-check me-3">
                            <input type="radio" name="fitness" value="advanced" /> Advanced
                          </label>
                        </div>
                      </div>

                      <h6 className="qutes mt-4">Tip: consistency beats intensity.</h6>
                    </div>
                  </div>
                )}


                {currentStep === 3 && (
                  <div className="step active">
                    <div className="bodys-parts-div015">

                        <div className="text-div-heading">
                           <h4 className="tell-heading"> Symptoms and priorities  </h4>
                           <p> Tell us what you’re experiencing so we can focus your plan. </p>
                        </div>

                        <div className="form-group">
                           <label className="form-label"> Which symptoms are most present? </label>
                           <div className="option-group d-flex align-items-center flex-wrap mt-2">
                              <label className="form-sl"><input type="checkbox" name="interestshot" value="hot"/> Hot flashes</label>
                              <label className="form-sl"><input type="checkbox" name="interestshot" value="night"/> Night sweats </label>
                              <label className="form-sl"><input type="checkbox" name="interestshot" value="sleep"/> Sleep issues </label>
                           </div>

                        </div>

                        <div className="form-group">
                           <label className="form-label"> Primary goal </label>
                           <div className="radio-group d-flex align-items-center flex-wrap mt-2">
                              <label className="form-check"><input type="radio" name="beginner" value="basic" required/> Reduce hot flashes </label>
                              <label className="form-check"><input type="radio" name="beginner" value="pro" required/> Improve sleep </label>
                              <label className="form-check"><input type="radio" name="beginner" value="premium" required/> Boost energy </label>
                              <label className="form-check"><input type="radio" name="beginner" value="manage" required/> Manage weight </label>
                           </div>


                        </div>
                        <div className="form-group">
                           <label className="form-label"> Anything else we should know? </label>
                           <textarea className="form-control aret-text"></textarea>
                        </div>

                    
                    </div>
                  <div className="error"></div>
                  </div>
                )}


                {currentStep === 4 && (
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
                                 <input type="text" className="form-control" name="fullname" placeholder="e.g., James" required />

                               </div>
                           </div>
                           <div className="col-lg-6">
                               <div className="form-group">
                                 <label className="form-label"> Your Email </label>
                                 <input type="email" className="form-control" name="email" placeholder="e.g., danis@gmail.com" required/>
                              </div>
                           </div>
                           <div className="col-lg-6">
                               <div className="form-group">
                                 <label className="form-label"> Create Password </label>
                                 <input type="password" name="password" className="form-control" minlength="6" placeholder="e.g., *****" required/>
                              </div>
                           </div>
                           <div className="col-lg-6">
                               <div className="form-group">
                                 <label className="form-label"> Phone Number </label>
                                 <input type="text" className="form-control" name="phone" placeholder="e.g., + 91 1524100" required/>
                               </div>
                           </div>
                           <div className="col-lg-12">
                                 <div className="form-group">
                                    <label className="form-label"> Anything else we should know? </label>
                                    <textarea className="form-control aret-text"></textarea>
                                 </div>
                           </div>
                        </div>
                        
                    
                  </div>
                  <div className="error"></div>
                  </div>
                )}


                {currentStep === 5 && (
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


                <div className="buttons back-div-mainsd d-flex justify-content-end align-items-center pe-4">
                  <button
                    type="button"
                    className="btn btn-backs"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <i className="ri-arrow-left-line"></i> Back
                  </button>

                  <button
                    type="button"
                    className="btn ms-2 next-btnh"
                    onClick={nextStep}
                  >
                    {currentStep < totalSteps ? (
                      <>
                        Next{' '}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                      </>
                    ) : (
                      'Finish'
                    )}
                  </button>
                </div>
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
