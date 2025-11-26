"use client"
import { useSearchParams } from "next/navigation";
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';

export default function Dashboard() {
     const searchParams = useSearchParams();

  const inviterName = searchParams.get("name") || "Someone";

   return (
      <>
         <Navication />
         <main className="float-start w-100 main-body dashborad-pages01 position-relative">

            <section className="float-start w-100 invitation-pages">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-9 mx-auto">
                        <div className="card w-100">
                           <div className="card-body py-0">
                              <h4 className="card-title"> Pending Invite </h4>
                              <p className="mt-2"> Dec 10, 2025 </p>
                              <div className="mian-acpts-text">
                                 <figure className="user-id">
                                    <figcaption> SD </figcaption>
                                 </figure>
                                   <h3 className="card-title text-center mt-4"> <strong> {inviterName}</strong> invited you to the Reply.  </h3>
                                   <p className="mt-2 text-center col-lg-7 mx-auto"> By tapping Accept,you are confirming that you reviewed and acceptedour terms Of Use and Privacy Policy. </p>
                              </div>
                           </div>
                           <div className="row col-lg-12 mx-auto align-items-center justify-content-between">
                              <div className="col-lg-8"> <p className="m-0"> Your invitation expires in 7 days. </p> </div>
                              <div className="col-lg-4">
                                 <div className="d-flex align-items-center justify-content-lg-end">
                                     <button type="button" className="btn btn-outline-secondary"> Decline </button>
                                     <button type="button" className="btn btn-success ms-2"> Accept invitation </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                       

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
