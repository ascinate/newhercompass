"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import SymtomBanner from '../components/SymtomBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';
import BubbleChart from '../components/BubbleChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';

export default function Symptom() { 
    const [predictionData, setPredictionData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // your JWT

    axios.get(`https://hercompass.onrender.com/api/ai/predictions`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setPredictionData(res.data);
      console.log("Predictions Loaded:", res.data);
    })
    .catch(err => console.error("Prediction fetch error:", err));
  }, []);
  return (
    <>
      <Navication/>
      <SymtomBanner/>
      <main className="float-start w-100 main-body position-relative spacilas-card-bg">
         <section className="float-start w-100 mains-bodys01">
              <div className="container">
                 <div className="row">
                     <div className="col-lg-6">
                        <div className="card cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Mood Trend </h4>
                                    </div>
                                    <div className="rights-tables">
                                        <ul className="ms-0 ps-0 mt-0 d-flex align-items-center">
                                           <li className="d-flex align-items-center"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(155,139,240,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span> Mood score </li>
                                           <li className="d-flex align-items-center ms-3"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(255,209,102,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span> Avg </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-bodys-tabs w-100 d-block">
                                    <div className="cart-div015">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel">
                                                <LineChart data={predictionData?.predictions || []}/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-3 small-parast"> Visualizes mood trends over time </p>
                                </div>

                             </div>
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="card cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Symptom Frequency </h4>
                                        
                                    </div>
                                    <div className="rights-tables">
                                         
                                        <ul className="ms-0 ps-0 mt-0 d-flex align-items-center">
                                           <li className="d-flex align-items-center"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(155,139,240,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span> Occurrences </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-bodys-tabs w-100 d-block">
                                    

                                    <div className="cart-div015">
                                        
                                        <BarChart data={predictionData?.predictions || []}/>
                                             
                                        
                                    </div>
                                    
                                    <p className="mt-3 small-parast"> Visualizes mood trends over time </p>
                                </div>

                             </div>
                        </div>
                     </div>

                     <div className="col-lg-6 mt-4">
                        <div className="card cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Sleep vs Mood </h4>
                                        
                                    </div>
                                    <div className="rights-tables">
                                         
                                        <ul className="ms-0 ps-0 mt-0 d-flex align-items-center">
                                           <li className="d-flex align-items-center"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(155,139,240,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span> Mood level </li>
                                           <li className="d-flex align-items-center ms-3"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(255,209,102,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span> Sleep hours </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-bodys-tabs w-100 d-block">
                                    <div className="cart-div015">
                                        
                                        <BubbleChart data={predictionData?.predictions || []}/>
                                             
                                    </div>
                                    <p className="mt-3 small-parast"> Visualizes mood trends over time </p>
                                </div>
                             </div>
                        </div>
                     </div>

                     <div className="col-lg-6 mt-4">
                        <div className="card cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Phase Timeline </h4>
                                        
                                    </div>
                                    <div className="rights-tables">
                                         
                                        <ul className="ms-0 ps-0 mt-0 d-flex align-items-center">
                                           <li className="d-flex align-items-center"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(155,139,240,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span> Stable </li>
                                           <li className="d-flex align-items-center ms-3"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(255,209,102,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span> Improving </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-bodys-tabs w-100 d-block">
                                    

                                    <div className="cart-div015 sp-overflow pt-0 mt-0">
                                        
                                        <div className="cart-u-listpo ">
                                             <ul className="timeline">
                                                <li className="event">
                                                    <div className="event__date">
                                                    Research
                                                    </div>
                                                    
                                                    <div className="event__description">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Integer quis dui nunc. <br/>
                                                        Proin fringilla, urna nec mollis bibendum.
                                                    </p>
                                                    </div>
                                                </li>
                                                <li className="event">
                                                    <div className="event__date">
                                                    Migrating frameworks
                                                    </div>
                                                    
                                                    <div className="event__description">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Integer quis dui nunc. <br/>
                                                        Proin fringilla, urna nec mollis bibendum.
                                                    </p>
                                                    </div>
                                                </li>
                                                <li className="event event--current">
                                                    <div className="event__date">
                                                    Creating components
                                                    </div>
                                                    
                                                    <div className="event__description">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Integer quis dui nunc. <br/>
                                                        Proin fringilla, urna nec mollis bibendum.
                                                    </p>
                                                    </div>
                                                </li>
                                                <li className="event event--upcoming">
                                                    <div className="event__date">
                                                    Testing
                                                    </div>
                                                    
                                                    <p className="event__description">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Integer quis dui nunc. <br/>
                                                    Proin fringilla, urna nec mollis bibendum.
                                                    </p>
                                                </li>
                                                <li className="event event--upcoming">
                                                    <div className="event__date">
                                                    Training
                                                    </div>
                                                    
                                                    <p className="event__description">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Integer quis dui nunc. <br/>
                                                    Proin fringilla, urna nec mollis bibendum.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                             
                                        
                                    </div>
                                    
                                    <p className="mt-3 small-parast"> Timeline of different health phases </p>
                                </div>

                             </div>
                        </div>
                     </div>

                     <div className="col-lg-8 mt-4">
                         <div className="card cm-chart w-100">
                             <div className="card-body">
                                 <h4 className="card-title"> Shared Notes </h4>
                                 <div className="textrae-card w-100 mt-3">
                                    <textarea className="form-control" placeholder="Today I felt more energetic after a full 8 hours of sleep. Mild headache in afternoon, resolved with hydration. Planning to test earlier bedtime this week."></textarea>
                                 </div>
                                 <div className="tags-bg015 bg-light mt-3 p-2">
                                    <p> Tip: Tag notes with #sleep #stress to see patterns faster. </p>
                                 </div>
                                 <div className="d-flex align-items-center mt-4">
                                     <button type="button" className="btn btn-share cm-cards-btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M9.53698 13L7.32995 13.0009C6.91786 14.1656 5.80686 15 4.50098 15C2.84412 15 1.50098 13.6569 1.50098 12C1.50098 10.3431 2.84412 9 4.50098 9C5.80723 9 6.91849 9.83485 7.3303 11.0001L9.53698 11L13.001 5L16.1716 5.00009C16.5835 3.83485 17.6947 3 19.001 3C20.6578 3 22.001 4.34315 22.001 6C22.001 7.65685 20.6578 9 19.001 9C17.6951 9 16.5841 8.16562 16.172 7.0009L14.155 7L11.269 11.999L14.156 17L16.1716 17.0001C16.5835 15.8349 17.6947 15 19.001 15C20.6578 15 22.001 16.3431 22.001 18C22.001 19.6569 20.6578 21 19.001 21C17.6951 21 16.5841 20.1656 16.172 19.0009L13.001 19L9.53698 13ZM19.001 17C18.4487 17 18.001 17.4477 18.001 18C18.001 18.5523 18.4487 19 19.001 19C19.5533 19 20.001 18.5523 20.001 18C20.001 17.4477 19.5533 17 19.001 17ZM4.50098 11C3.94869 11 3.50098 11.4477 3.50098 12C3.50098 12.5523 3.94869 13 4.50098 13C5.05326 13 5.50098 12.5523 5.50098 12C5.50098 11.4477 5.05326 11 4.50098 11ZM19.001 5C18.4487 5 18.001 5.44772 18.001 6C18.001 6.55228 18.4487 7 19.001 7C19.5533 7 20.001 6.55228 20.001 6C20.001 5.44772 19.5533 5 19.001 5Z"></path></svg> Share </button>
                                     <button type="button" className="btn btn-updates1 ms-3"> Update </button>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-4 mt-4">
                         <div className="card cm-chart w-100">
                            <div className="card-body share-div-textr">
                                <h4 className="card-title"> Shared Notes </h4>
                                <div className="bg-light p-4 ai-texts">
                                     <p> Your mood improved 15% compared to last week. </p>
                                     <p className="mt-2"> Higher mood scores follow nights with 7.5–8.5h sleep. </p>
                                     <p className="mt-2"> Headache frequency decreased from 5 to 2 this period. </p>
                                </div>
                                <button type="button" className="btn mt-3 ai-ask-btn btn-daind"> Ask for deeper insights </button>
                            </div>
                         </div>
                     </div>
                     <div className="col-lg-12 mt-4">
                        <div className="card cm-chart w-100">
                            <div className="card-body p-0">
                                 <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Partner Digest Preview </h4>
                                        
                                    </div>
                                    <div className="rights-tables">
                                         
                                        <button type="button" className="btn btn-yesra btn-primary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg> What your partner sees </button>
                                    </div>
                                </div>

                                <div className="row mx-0 mb-4 csr-tis-div015 row-cols-1 row-cols-lg-2">
                                     <div className="col">
                                         <div className="new-crad01 mt-4">
                                            <div className="d-inline-block w-100">
                                                <h6 className="mb-2"> Highlights </h6>
                                                
                                                <p> Overall mood trending up 15% week-over-week. </p>
                                                <p> Sleep consistency improved; average 7.9h. </p>
                                            </div>

                                        </div>
                                     </div>

                                     <div className="col">
                                         <div className="new-crad01 mt-4">
                                            <div className="d-inline-block w-100">
                                                <h6 className="mb-2"> Recent Notes </h6>
                                                
                                                <p> Energy up after full sleep. Mild headache resolved. </p>
                                            </div>

                                        </div>
                                     </div>

                                     <div className="col">
                                         <div className="new-crad01 mt-4">
                                            <div className="d-inline-block w-100">
                                                <h6 className="mb-2"> Next Check-in </h6>
                                                
                                                <p> Friday, 5 PM </p>
                                            </div>

                                        </div>
                                     </div>

                                     <div className="col">
                                         <div className="new-crad01 mt-4">
                                            <div className="d-inline-block w-100">
                                                <h6 className="mb-2"> Shared Metrics </h6>
                                                
                                                <p> Mood, sleep hours, top symptoms. </p>
                                            </div>

                                        </div>
                                     </div>

                                </div>
                            </div>
                        </div>
                     </div>

                 </div>
              </div>
         </section>
      </main>

      <Footer/>
      <MobileMenus/>
      <SignupModal/>
      <LoginModal/>
   
    </>
  )
}
