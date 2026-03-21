import Link from "next/link";
import Image from "next/image";
 
function TermsBanner() {
    return(
     <>
     <section className="banner-div float-start sub-page-banners w-100 position-relative pb-4 pb-lg-5">
         <div className="container position-relative">
            <div className="row align-items-start">
               <div className="col-lg-7">
                  <div className="items-text01">
                     <h2 className="main-heading"> Terms & Conditions </h2>
                     <p className="col-lg-9"> A simple, science-backed flow that gets your whole household aligned. </p>
                  </div>
               </div>
            </div>
         </div>
     </section>
     </>
     )
};
export default TermsBanner;