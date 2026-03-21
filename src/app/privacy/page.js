import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import HowitBanner from '../components/PrivacyPolicyBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';
import PrivacyPolicyBanner from '../components/PrivacyPolicyBanner';

export default function Privacy() {


  
  return (
    <>
      <Navication/>
      <PrivacyPolicyBanner/>
      <main className="float-start w-100 main-body position-relative">

      <section className="how-its-works-sections new-howits-div float-start w-100">
  <div className="container">

    <div className="row justify-content-center">
      <div className="col-lg-10">

        {/* Overview */}
        <div className="mb-5">
          <h2 className="mb-3">Privacy Policy</h2>
          <p>
            Your privacy is extremely important to us. HerCompassAI is designed to give users
            insight into their health patterns while maintaining strict respect for personal data.
          </p>
          <p>This policy explains:</p>
          <ul>
            <li>What information we collect</li>
            <li>How it is used</li>
            <li>How it is protected</li>
          </ul>
        </div>

        {/* Information We Collect */}
        <div className="mb-5">
          <h2 className="mb-3">Information We Collect</h2>
          <p>
            When you use HerCompassAI, we may collect the following types of information:
          </p>

          <h5 className="mt-4">Account Information</h5>
          <ul>
            <li>Name or nickname</li>
            <li>Email address</li>
            <li>Account login credentials</li>
          </ul>

          <h5 className="mt-4">Health and Wellness Data</h5>
          <p>Users may voluntarily log information such as:</p>
          <ul>
            <li>Mood</li>
            <li>Sleep patterns</li>
            <li>Energy levels</li>
            <li>Symptoms</li>
            <li>Stress levels</li>
          </ul>

          <p>
            This information is used solely to generate personalized insights within the platform.
          </p>
        </div>

        {/* How Your Information Is Used */}
        <div className="mb-5">
          <h2 className="mb-3">How Your Information Is Used</h2>
          <p>We use collected data to:</p>
          <ul>
            <li>Generate personalized insights</li>
            <li>Improve AI recommendations</li>
            <li>Provide trend analysis</li>
            <li>Deliver partner summaries (only if enabled by the user)</li>
          </ul>

          <p>
            We do not sell personal health information.
          </p>
        </div>

        {/* AI Processing */}
        <div className="mb-5">
          <h2 className="mb-3">AI Processing</h2>
          <p>
            Some features use artificial intelligence to analyze symptom patterns and generate
            recommendations.
          </p>
          <p>AI responses are designed to:</p>
          <ul>
            <li>Provide general wellness insights</li>
            <li>Reference credible sources when available</li>
            <li>Avoid medical diagnosis</li>
          </ul>
        </div>

        {/* Data Security */}
        <div className="mb-5">
          <h2 className="mb-3">Data Security</h2>
          <p>
            We implement security practices designed to protect user data, including:
          </p>
          <ul>
            <li>Encrypted connections (HTTPS)</li>
            <li>Secure database storage</li>
            <li>Restricted internal access</li>
          </ul>
        </div>

        {/* Partner Sharing Controls */}
        <div className="mb-5">
          <h2 className="mb-3">Partner Sharing Controls</h2>
          <p>If partner support features are enabled:</p>
          <ul>
            <li>Only summarized insights are shared</li>
            <li>Sensitive details remain private</li>
            <li>Sharing can be disabled at any time</li>
          </ul>
        </div>

        {/* Your Rights */}
        <div className="mb-5">
          <h2 className="mb-3">Your Rights</h2>
          <p>Users may request to:</p>
          <ul>
            <li>Access their stored data</li>
            <li>Delete their account</li>
            <li>Export personal records</li>
          </ul>

          <p>
            Requests can be submitted through the platform’s support system.
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
