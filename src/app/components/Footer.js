import Link from "next/link";
import Image from "next/image";
 
function Footer() {
    const footerlink = [{ id: 1, title: 'About us' , link: '/about'}, { id: 2, title: 'How it work' , link: '/howitwork'}, {id:3, title: 'Privacy' , link: '/privacy '}, {id:4, title: 'Terms' , link: '/terms '} ]; 
    return(
     <>
        <footer className="float-start w-100 position-relative">
            <section className="full-bg-footer">
                
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3 gy-4 gy-lg-0">
                        <div className="col">
                            <div className="comons-footes">
                              <Link href="/" className="footers-logos">
                                <Image width={241} height={84} loading="lazy" src="/footer-logos.svg" alt="logos"/>
                              </Link>
                                
                            </div>
                        </div>
                        

                        <div className="col">
                            <div className="comons-footes">
                            <h4>  Quick Links </h4>
                                <ul className="p-0 m-0 mt-3">
                                    {footerlink.map((type) => (
                                        <li key={type.id}>
                                            <Link href={type.link}> {type.title} </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col">
                            <div className="comons-footes">
                                <h4> Contact </h4>
                                <ul className="p-0 m-0 mt-3">
                                    <li> <Link href="mailto:privacy@hercompassai.com" className="list-anc015"> privacy@hercompassai.com </Link> </li>
                                    <li className="ft-parat01"> The content on the HerCompassAl app and website is not intended as a substitute for professional
                                    medical, healthcare, dietary, or safety advice, diagnosis, or treatment. Always consult your physician or 
                                    another qualified provider with any questions regarding a medical condition or safety concern. </li>
                                
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
      
        </footer>
       
     </>
     )
};
export default Footer;
   