import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import FeatureBanner from '../components/FeatureBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';

export default function Features() {


  
  return (
    <>
      <Navication/>
      <FeatureBanner/>
      <main className="float-start w-100 main-body position-relative">
       <section className="float-start w-100 about-vissions-sections position-relative">
          <div className="container">
               <h2 className="text-center mt-2 main-heading col-lg-7 mx-auto body-main-heading"> Everything you need to feel supported </h2>
               <p className="text-center text-sub-paara col-lg-8 mx-auto mt-2"> Mood tracking, smart recipes, men’s support guides, and gentle habit gamification. </p>
               <div className="row col-lg-11 mx-auto row-cols-1 row-cols-lg-2 gx-lg-5 mt-0 gy-4 gy-lg-5">
                 <div className="col">
                    <div className="comons-modas d-inline-block coui-text015 w-100">
                        <div className="d-flex align-items-center">
                          <span className="ms-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></g></svg> </span>  
                           <h5 className="d-flex align-items-center"> Mood Tracking <div className="insitegts ms-4"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg> Insights </div> </h5>
                        </div>
                        <p> Log hot flashes, sleep, energy, and mood. Spot trends and share reports with your clinician. </p>
                        <ul className="d-flex m-0 p-0 align-items-center list015-div mt-3">
                           <li> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 2v4m8-4v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></g></svg> </span>  Daily/Weekly </li>
                           <li className="ms-3"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg> </span>   Trends </li>
                        </ul>
                        <Link href="/features" className="btn btn-loiks01 mt-3">  Learn more <i className="ri-arrow-right-line"></i> </Link>
                    </div>
                 </div>

                 <div className="col">
                    <div className="comons-modas d-inline-block coui-text015 w-100">
                        <div className="d-flex align-items-center">
                          <span className="ms-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12"></path></svg> </span>  
                           <h5 className="d-flex align-items-center"> Smart Recipes  </h5>
                        </div>
                        <p> Log hot flashes, sleep, energy, and mood. Spot trends and share reports with your clinician. </p>
                        <ul className="d-flex m-0 p-0 align-items-center list015-div mt-3">
                           <li> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9"></path></svg> </span>   Personalized </li>
                           <li className="ms-3"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg> </span>   Evidence-based </li>
                        </ul>
                        <Link href="/features" className="btn btn-loiks01 mt-3">  Learn more <i className="ri-arrow-right-line"></i> </Link>
                         
                    </div>
                 </div>

                 <div className="col">
                    <div className="comons-modas d-inline-block coui-text015 w-100">
                        <div className="d-flex align-items-center">
                          <span className="ms-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m11 17l2 2a1 1 0 1 0 3-3"></path><path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path></g></svg> </span>  
                           <h5 className="d-flex align-items-center"> Men’s Support  </h5>
                        </div>
                        <p> Guides and groups for partners to understand, empathize, and show up with care. </p>

                        <ul className="d-flex  m-0 p-0 align-items-center list015-div mt-3">
                           <li> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> </span>   Expert‑reviewed </li>
                           <li className="ms-3"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg> </span>   Trends </li>
                        </ul>
                        <Link href="/features" className="btn btn-loiks01 mt-3">  Learn more <i className="ri-arrow-right-line"></i> </Link>
                         
                    </div>
                 </div>

                 <div className="col">
                    <div className="comons-modas d-inline-block coui-text015 w-100">
                        <div className="d-flex align-items-center">
                          <span className="ms-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path><path d="m9 12l2 2l4-4"></path></g></svg> </span>  
                           <h5 className="d-flex align-items-center"> Gamification  </h5>
                        </div>
                        <p> Earn streaks and gentle badges for healthy habits—sleep, walks, hydration, and reflection. </p>

                        <ul className="d-flex m-0 p-0 align-items-center list015-div mt-3">
                           <li> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> </span>   Evidence-based </li>
                           <li className="ms-3"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg> </span>   Trends </li>
                        </ul>
                        <Link href="/features" className="btn btn-loiks01 mt-3">  Learn more <i className="ri-arrow-right-line"></i> </Link>
                         
                    </div>
                 </div>

              </div>
          </div>
       </section>


        <section className="pricing-table w-100 d-none mt-0">
           <div className="container">
               <h2 className="main-heading text-center mb-4"> HerCompassAI — Features Overview </h2>
               <div className="table-responsive">
                  <table className="table table-bordered align-middle text-center">
                     <thead>
                     <tr>
                        <th className="bg-light">Feature</th>
                        <th className='cs-plans01'>
                           <div className="plan-header">
                           <h4>Free (Freemium)</h4>
                           <div className="price">$0 / month</div>
                           <small>Basic features</small>
                           </div>
                        </th>
                        <th className='cs-plans01'>
                           <div className="plan-header mid">
                           <h4>Mid (Wellness Plus)</h4>
                           <div className="price">$7.99 / month</div>
                           <small>Advanced wellness tools</small>
                           </div>
                        </th>
                        <th className='cs-plans01'>
                           <div className="plan-header premium">
                           <h4>Premium (Total Balance)</h4>
                           <div className="price">$14.99 / month</div>
                           <small>Full access + AI personalization</small>
                           </div>
                        </th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr><td className="feature-title">Mood & Symptom Tracker</td>
                        <td>✅ Basic tracking</td><td>✅ Advanced tracking + history</td><td>✅ Advanced + AI insights & triggers</td></tr>

                     <tr><td className="feature-title">AI Meal Plans</td>
                        <td className="cross">❌</td><td>✅ Weekly plans</td><td>✅ Weekly + Monthly + custom macros</td></tr>

                     <tr><td className="feature-title">Smart Recipe Suggestions</td>
                        <td>✅ Basic filters</td><td>✅ Phase & mood-based</td><td>✅ AI + nutrient correlation</td></tr>

                     <tr><td className="feature-title">Grocery List Generator</td>
                        <td className="cross">❌</td><td>✅ Linked to recipes</td><td>✅ Linked + export/download</td></tr>

                     <tr><td className="feature-title">Exercise Library</td>
                        <td>✅ 5 sample workouts</td><td>✅ 15 workouts + programs</td><td>✅ Full library + personalized plans</td></tr>

                     <tr><td className="feature-title">Meditation Library</td>
                        <td>✅ 3 sample meditations</td><td>✅ 10 meditations</td><td>✅ Full library + AI playlist</td></tr>

                     <tr><td className="feature-title">Community Forum</td>
                        <td>✅ Post & reply</td><td>✅ Private groups</td><td>✅ Premium-only groups</td></tr>

                     <tr><td className="feature-title">Toxic Comment Detection</td>
                        <td>✅ Automated moderation</td><td>✅ + Manual review</td><td>✅ + Premium mod priority</td></tr>

                     <tr><td className="feature-title">Monthly Expert Webinars</td>
                        <td className="cross">❌</td><td>✅ 1 per month (recorded)</td><td>✅ Live + Q&A + replay</td></tr>

                     <tr><td className="feature-title">Hormone & Lifestyle Assessments</td>
                        <td className="cross">❌</td><td>✅ Basic quizzes</td><td>✅ AI-based recommendations</td></tr>

                     <tr><td className="feature-title">AI Chatbot (Personalized Q&A)</td>
                        <td className="cross">❌</td><td className="cross">❌</td><td>✅ Full personalization</td></tr>

                     <tr><td className="feature-title">Analytics & Progress Insights</td>
                        <td className="cross">❌</td><td>✅ Basic charts</td><td>✅ AI-driven trends</td></tr>

                     <tr><td className="feature-title">Offline Access</td>
                        <td className="cross">❌</td><td>✅ Recipes & workouts</td><td>✅ All content</td></tr>

                     <tr><td className="feature-title">Priority Support</td>
                        <td className="cross">❌</td><td className="cross">❌</td><td>✅ 24hr Email/Chat</td></tr>

                     <tr><td className="feature-title">Seasonal Challenges</td>
                        <td>✅ Basic challenges</td><td>✅ Premium challenges</td><td>✅ Exclusive rewards</td></tr>

                     <tr><td className="feature-title">Exclusive Discounts</td>
                        <td className="cross">❌</td><td>✅ Some offers</td><td>✅ Premium-only deals</td></tr>

                     <tr><td className="feature-title"></td>
                        <td className="cross"><a href="#" className="btn btn-gets-strtad">Get Started</a></td><td><a href="#" className="btn btn-gets-strtad">Get Started</a></td><td><a href="#" className="btn btn-gets-strtad">Get Started</a></td></tr>

                     </tbody>
                  </table>
               </div>
           </div>
         </section>


         <section className="pricing-table pricongs-divg015 border-0 w-100 d-inline-block mt-0">
           <div className="container">
               <h2 className="main-heading text-center mb-4"> HerCompassAI — Features Overview </h2>
               <div className="table-responsive">
                  <table className="table table-bordered feauters-divu01 align-middle text-center">
                     <thead>
                     <tr>
                        <th className="bg-light">Feature</th>
                        <th>
                           <div className="plan-header">
                           <h4>Free (Freemium)</h4>
                           <div className="price">$0 / month</div>
                           <small>Basic features</small>
                           </div>
                        </th>
                        <th>
                           <div className="plan-header mid">
                           <h4>Mid (Wellness Plus)</h4>
                           <div className="price">$7.99 / month</div>
                           <small>Advanced wellness tools</small>
                           </div>
                        </th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr><td className="feature-title">Partner Support</td>
                        <td>
                           <ul>
                               <li> ✅  Partner digest (weekly summary of shared mood/symptom trends, with consent). </li>
                               <li className='mt-2'> ✅ Access to Men’s Academy introduction: empathy mini-course (1 lesson). </li>
                           </ul> 
                        </td>
                        <td>
                           <ul>
                               <li> ✅  Full Men’s Academy (micro-courses + progress badges). </li>
                               <li className='mt-2'> ✅ Couple dashboards with joint challenges (“3 walks/week”). </li>
                               <li className='mt-2'> ✅ Shared achievements and relationship insights (“Mood correlation improved 14% with partner engagement”). </li>
                           </ul> 
                        </td>
                        
                     </tr>

                     <tr><td className="feature-title">Mood &Symptom Tracker</td>
                       <td>
                           <ul>
                               <li> ✅  Log daily moods, symptoms, sleep, and energy. </li>
                               <li className='mt-2'> ✅ Basic chart view (7-day trend). </li>
                           </ul> 
                        </td>
                        <td>
                           <ul>
                               <li> ✅  Advanced analytics (monthly &phase correlation). </li>
                               <li className='mt-2'> ✅ AI insights (“Mood improved by 15% after consistent sleep”). </li>
                               <li className='mt-2'> ✅ Partner digest summary (with consent). </li>
                           </ul> 
                        </td>
                       
                     </tr>

                     <tr><td className="feature-title">AI Meal Plans</td>

                       <td>
                           <ul>
                               <li> ✅  One daily AI meal suggestion for symptom support. </li>
                               <li className='mt-2'> ✅ Basic dietary tagging (energy, sleep, hot flash relief). </li>
                           </ul> 
                        </td>
                        <td>
                           <ul>
                               <li> ✅  Full 7-day adaptive AI meal plan. </li>
                               <li className='mt-2'> ✅ Dynamic recommendations synced with symptom logs. </li>
                               <li className='mt-2'> ✅ Partner-shared meals (“Cook together to boost mood”). </li>
                           </ul> 
                        </td>
                     </tr>

                     <tr><td className="feature-title">Recipe Suggestions</td>
                        <td>
                           <ul>
                               <li> ✅  3 free recipes/day with nutritional info. </li>
                               <li className='mt-2'> ✅ Based on popular symptom tags (e.g., “for energy,” “for calm”). </li>
                           </ul> 
                        </td>
                        <td>
                           <ul>
                               <li> ✅  Unlimited science-backed recipes. </li>
                               <li className='mt-2'> ✅ Filters for dietary restrictions (gluten-free, plant-based, iron-rich). </li>
                               <li className='mt-2'> ✅ AI auto-suggests recipes matching logged deficiencies. </li>
                           </ul> 
                        </td>
                     </tr>

                     <tr><td className="feature-title">Grocery List Generator</td>

                         <td>
                           <ul>
                               <li> ✅ Manual grocery list builder. </li>
                           </ul> 
                        </td>
                        <td>
                           <ul>
                               <li> ✅  Auto-generated shopping list from weekly AI meal plan.  </li>
                               <li className='mt-2'> ✅ Shared couple grocery sync (CPS). </li>
                               <li className='mt-2'> ✅ Smart pantry tracking (suggests replacements). </li>
                           </ul> 
                        </td>   
                        
                     </tr>

                     <tr><td className="feature-title">Exercise Library</td>
                         <td>
                           <ul>
                               <li> ✅ Access to 10 foundational videos (low-impact, stretching, breathing). </li>
                           </ul> 
                        </td>
                        <td>
                           <ul>
                               <li> ✅  Unlimited exercises personalized to logs (bone health, cardio, joint mobility).  </li>
                               <li className='mt-2'> ✅ Couple mode (partner workouts). </li>
                               <li className='mt-2'> ✅ AI coach feedback (“Try this for better sleep”). </li>
                           </ul> 
                        </td> 

                     </tr>

                     <tr><td className="feature-title">Meditation Library</td>
                        <td>
                           <ul>
                               <li> ✅ 5 guided meditations (stress, hot flashes, sleep). </li>
                           </ul> 
                        </td>
                        <td>
                           <ul>
                               <li> ✅  30+ adaptive meditations powered by AI. </li>
                               <li className='mt-2'> ✅ Couples meditations (connection, empathy). </li>
                               <li className='mt-2'> ✅ AI suggests meditations based on current symptom state. </li>
                           </ul> 
                        </td> 
                        
                     </tr>

                     <tr><td className="feature-title">AI Chatbot (Personalized Q&A)</td>
                         <td>
                           <ul>
                               <li> ✅ General wellness answers (diet, sleep, exercise). </li>
                           </ul> 
                        </td>
                        <td>
                           <ul>
                               <li> ✅  Personalized chat powered by your data. </li>
                               <li className='mt-2'> ✅ Partner-aware mode (explains “how to support” tips). </li>
                               <li className='mt-2'> ✅ Evidence-based sources cited in chat. </li>
                           </ul> 
                        </td>    
                     </tr>

                     <tr><td className="feature-title">Analytics &Progress Insights</td>
                        <td>
                           <ul>
                               <li> ✅ Basic trend dashboard (mood, energy, sleep). </li>
                           </ul> 
                        </td>
                        <td>
                           <ul>
                               <li> ✅  Full analytics suite: correlations, AI forecasts, and predictive symptom simulation. </li>
                               <li className='mt-2'> ✅ Partner digest (“Mood trending up 10%, keep up routines!”). </li>
                               <li className='mt-2'> ✅ Exportable reports for clinicians. </li>
                           </ul> 
                        </td> 
                     </tr>

                     

                     <tr><td className="feature-title"></td>
                        <td className="cross"><a href="#" className="btn btn-gets-strtad">Get Started</a></td><td><a href="#" className="btn btn-gets-strtad">Get Started</a></td></tr>

                     </tbody>
                  </table>
               </div>
           </div>
         </section>

         <section className='why-choose-news w-100 d-inline-block bg-light'>
              <div className='container'>
                 <div className='why-de-sections d-inline-block w-100'>
                     <h3 className='main-heading'> 💡 Why Upgrade to Premium+ </h3>
                     <p> Unlock a richer, science-backed experience designed for you and your partner. </p>

                     <div className='row row-cols-1 row-cols-lg-2 gy-4 mt-2'>
                         <div className='col'>
                             <div className='comons-list-div015 d-inline-block w-100'>
                                 <h4> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg> </span>
                                 Deeper personalization  </h4>
                                 <p> AI forecasts adapt dynamically to your patterns. </p>
                              </div>
                         </div>
                         <div className='col'>
                           <div className='comons-list-div015 d-inline-block w-100'>
                              <h4> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> </span>
                              Relationship-centered  </h4>
                              <p> Partners engage through digests, shared goals, and empathy training. </p>
                           </div>
                         </div>
                         <div className='col'>
                              <div className='comons-list-div015 d-inline-block w-100'>
                                 <h4> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> </span>
                                 Professional credibility  </h4>
                                 <p> All insights are grounded in peer-reviewed science and clinician oversight. </p>
                              </div>
                         </div>
                         <div className='col'>
                              <div className='comons-list-div015 d-inline-block w-100'>
                                 <h4> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg> </span>
                                 Unlimited access  </h4>
                                 <p> Recipes, meditations, and workouts evolve with your journey. </p>
                              </div>
                         </div>
                         <div className='col'>
                              <div className='comons-list-div015 d-inline-block w-100'>
                                 <h4> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg> </span>
                                 Couple growth </h4>
                                 <p> Recipes, meditations, and workouts evolve with your journey. </p>
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
