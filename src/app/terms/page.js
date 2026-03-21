import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import HowitBanner from '../components/TermsBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';
import TermsBanner from '../components/TermsBanner';

export default function Terms() {

  
  return (
    <>
      <Navication/>
      <TermsBanner/>
      <main className="float-start w-100 main-body position-relative">

        <section className="how-its-works-sections new-howits-div float-start w-100">
  <div className="container">

    <div className="row justify-content-center">
      <div className="col-lg-10">

        {/* Acceptance of Terms */}
        <div className="mb-5">
          <h2 className="mb-3">Acceptance of Terms</h2>
          <p>
            By accessing or using HerCompassAI, you agree to these Terms of Service.
          </p>
          <p>
            If you do not agree with these terms, please discontinue use of the platform.
          </p>
        </div>

        {/* Platform Purpose */}
        <div className="mb-5">
          <h2 className="mb-3">Platform Purpose</h2>
          <p>
            HerCompassAI provides digital wellness tools intended to help users:
          </p>
          <ul>
            <li>Track symptoms</li>
            <li>Explore lifestyle adjustments</li>
            <li>Access educational resources</li>
          </ul>
          <p>
            The platform is not a medical provider.
          </p>
        </div>

        {/* No Medical Advice */}
        <div className="mb-5">
          <h2 className="mb-3">No Medical Advice</h2>
          <p>
            Information provided through HerCompassAI is intended for general educational
            and wellness purposes only.
          </p>
          <p>It should not be considered:</p>
          <ul>
            <li>Medical advice</li>
            <li>Diagnosis</li>
            <li>Treatment recommendations</li>
          </ul>
          <p>
            Users should consult a qualified healthcare professional for medical concerns.
          </p>
        </div>

        {/* User Responsibilities */}
        <div className="mb-5">
          <h2 className="mb-3">User Responsibilities</h2>
          <p>Users agree to:</p>
          <ul>
            <li>Provide accurate information when using the platform</li>
            <li>Use the service only for lawful purposes</li>
            <li>Maintain the security of their account credentials</li>
          </ul>
        </div>

        {/* AI-Generated Content */}
        <div className="mb-5">
          <h2 className="mb-3">AI-Generated Content</h2>
          <p>
            Some content provided on the platform may be generated using artificial intelligence.
          </p>
          <p>
            While we aim to provide helpful and evidence-informed guidance:
          </p>
          <ul>
            <li>AI responses may occasionally be incomplete or inaccurate</li>
            <li>Users should verify important health decisions with healthcare professionals</li>
          </ul>
        </div>

        {/* Partner Features */}
        <div className="mb-5">
          <h2 className="mb-3">Partner Features</h2>
          <p>
            Partner summaries are optional features controlled by the user.
          </p>
          <p>Users maintain full control over:</p>
          <ul>
            <li>Whether partner access is enabled</li>
            <li>What information is shared</li>
            <li>When sharing is discontinued</li>
          </ul>
        </div>

        {/* Service Changes */}
        <div className="mb-5">
          <h2 className="mb-3">Service Changes</h2>
          <p>
            We may update features, services, or policies over time to improve the platform.
          </p>
          <p>
            Significant changes to these terms will be communicated through the platform.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-5">
          <h2 className="mb-3">Limitation of Liability</h2>
          <p>
            HerCompassAI is provided on an “as-is” basis.
          </p>
          <p>
            To the fullest extent permitted by law, we are not liable for any damages
            arising from use of the platform.
          </p>
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
