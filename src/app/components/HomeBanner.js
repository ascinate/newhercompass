"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
 
function HomeBanner() {
const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId) {
          console.error("No userId found in localStorage");
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/dashboard/${userId}`
        );

        const json = await res.json();
        setDashboard(json.data);

      } catch (err) {
        console.error("Dashboard load failed:", err);
      }
    }

    load();
  }, []);

  if (!dashboard) return <p>Loading...</p>;

  const { weeklySnapshot } = dashboard;
  
    return(
     <>
      <section className="banner-div float-start w-100 position-relative">
            <div className="container position-relative">
                <div className="row align-items-start">
                    <div className="col-lg-7">
                        <div className="items-text01">
                            <h2 className="main-heading"> Navigate Menopause - <span> Together </span>.                      </h2>
                            <p className="col-lg-9"> A relationship-centered menopause wellness platform that combines clinician-backed guidance and Al-driven insights to
                                help women and their partners build predictability, connection, and confidence. </p>
                            

                            <div className="d-block button-divu w-100 mt-4">
                                <button
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#registernmodal"
                                    className="btn signup-btn"
                                    >
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
                                </span>
                                    Start Your Free Trial
                                </button>                                
                            </div>



                            <ul className="mt-4 d-flex align-items-center p-0 m-0 liks-texr01">
                                <li>
                                <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(0,163,56,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg> </span>   Backed by clinicians
                                </li>
                                <li>
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(0,111,248,1)"><path d="M18.223 3.08609C18.7112 3.57424 18.7112 4.3657 18.223 4.85385L17.08 5.99622L18.25 5.99662C20.3211 5.99662 22 7.67555 22 9.74662V17.2466C22 19.3177 20.3211 20.9966 18.25 20.9966H5.75C3.67893 20.9966 2 19.3177 2 17.2466V9.74662C2 7.67555 3.67893 5.99662 5.75 5.99662L6.91625 5.99622L5.77466 4.85481C5.28651 4.36665 5.28651 3.5752 5.77466 3.08704C6.26282 2.59889 7.05427 2.59889 7.54243 3.08704L10.1941 5.73869C10.2729 5.81753 10.339 5.90428 10.3924 5.99638L13.6046 5.99661C13.6581 5.90407 13.7244 5.81691 13.8036 5.73774L16.4553 3.08609C16.9434 2.59793 17.7349 2.59793 18.223 3.08609ZM18.25 8.50662H5.75C5.09102 8.50662 4.55115 9.01654 4.50343 9.66333L4.5 9.75662V17.2566C4.5 17.9156 5.00992 18.4555 5.65671 18.5032L5.75 18.5066H18.25C18.909 18.5066 19.4489 17.9967 19.4966 17.3499L19.5 17.2566V9.75662C19.5 9.06626 18.9404 8.50662 18.25 8.50662ZM8.25 11.0066C8.94036 11.0066 9.5 11.5663 9.5 12.2566V13.5066C9.5 14.197 8.94036 14.7566 8.25 14.7566C7.55964 14.7566 7 14.197 7 13.5066V12.2566C7 11.5663 7.55964 11.0066 8.25 11.0066ZM15.75 11.0066C16.4404 11.0066 17 11.5663 17 12.2566V13.5066C17 14.197 16.4404 14.7566 15.75 14.7566C15.0596 14.7566 14.5 14.197 14.5 13.5066V12.2566C14.5 11.5663 15.0596 11.0066 15.75 11.0066Z"></path></svg> </span>   Al-powered forecasts
                                </li>
                                <li>
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(255,76,41,1)"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path></svg> </span>   Designed for couples
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="right-side-sections01 bg-light d-inline-block w-100">
                            <h4> Weekly Snapshot </h4>
                                <div className="bg-white weekly0145 p-4 mt-3">
                                <div className="row row-cols-1 row-cols-lg-2 gy-4">
                                        <div className="col">
                                            <div className="items-weeklydiv01 moodst  p-4 d-inline-block w-100">
                                                
                                                <p className="mt-0"> Mood Trend </p>
                                                <h5 className="mt-2"> {weeklySnapshot.moodTrend}<span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z"></path></svg> </span> </h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="items-weeklydiv01 flash p-4 d-inline-block w-100">
                                                
                                                <p className="mt-0"> Hot Flash Risk </p>
                                                <h5 className="mt-2"> {weeklySnapshot.hotFlashRisk} </h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="items-weeklydiv01 scroer p-4 d-inline-block w-100">
                                                
                                                <p className="mt-0"> Sleep Score </p>
                                                <h5 className="mt-2"> {weeklySnapshot.sleepScore}</h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="items-weeklydiv01 partners p-4 d-inline-block w-100">
                                                
                                                <p className="mt-0"> Partner Read </p>
                                                <h5 className="mt-2"> {weeklySnapshot.partnerReadStatus}</h5>
                                            </div>
                                        </div>
                                </div>
                                <p className="mt-3 your-textr"> Your Partner sees a weekly, consented digest - not raw logs. </p>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
      </section>
     </>
     )
};
export default HomeBanner;
   