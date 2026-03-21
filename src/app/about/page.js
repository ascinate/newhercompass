import Navication from '../components/Navication';
import Footer from '../components/Footer';
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';
import AboutBanner from '../components/AboutBanner';

export default function AboutUs() {
  return (
    <>
      <Navication />
      <AboutBanner title="About Us" subtitle="Understanding menopause with clarity, science, and support." />

      <main className="float-start w-100 main-body position-relative">

        <section className="how-its-works-sections new-howits-div float-start w-100">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Mission */}
              <div className="mb-5">
                <h2 className="mb-3">Our Mission</h2>
                <p>
                  HerCompassAI was created to help women better understand and navigate
                  the physical and emotional changes that occur during perimenopause and menopause.
                </p>
                <p>Many women experience symptoms like:</p>
                <ul>
                  <li>Night sweats</li>
                  <li>Insomnia</li>
                  <li>Mood shifts</li>
                  <li>Brain fog</li>
                  <li>Fatigue</li>
                  <li>Stress</li>
                </ul>
                <p>
                  Yet most digital health tools were not designed specifically for this stage of life.
                  HerCompassAI combines science-based guidance, AI-powered insights, and supportive tools
                  to help women identify patterns in their health and take practical steps toward better wellbeing.
                </p>
                <p>
                  <strong>Our goal is simple:</strong><br />
                  Turn confusing symptoms into clear insights and supportive daily actions.
                </p>
              </div>

              {/* What Makes Us Different */}
              <div className="mb-5">
                <h2 className="mb-3">What Makes HerCompassAI Different</h2>
                <p>
                  Most health apps simply track symptoms. HerCompassAI goes further by helping users
                  understand why symptoms occur and what actions may help.
                </p>

                <h5 className="mt-4">Symptom Tracking</h5>
                <p>
                  Users log moods, sleep quality, energy levels, and symptoms to identify patterns over time.
                </p>

                <h5 className="mt-4">AI-Powered Insights</h5>
                <p>
                  Our AI analyzes symptom patterns and provides supportive recommendations for:
                </p>
                <ul>
                  <li>Nutrition</li>
                  <li>Exercise</li>
                  <li>Stress management</li>
                  <li>Sleep habits</li>
                </ul>

                <h5 className="mt-4">Evidence-Based Guidance</h5>
                <p>
                  All recommendations are generated with Science Integrity & Credibility (SCI)
                  safeguards to prioritize reputable health sources.
                </p>

                <h5 className="mt-4">Partner Support Tools</h5>
                <p>
                  HerCompassAI also helps partners better understand what their loved ones may be
                  experiencing by sharing simplified weekly summaries (with user consent).
                </p>
              </div>

              {/* Science Integrity */}
              <div className="mb-5">
                <h2 className="mb-3">Our Science Integrity Commitment</h2>
                <p>
                  Health information online is often inconsistent and confusing. To improve trust,
                  HerCompassAI applies a Science Integrity & Credibility (SCI) framework designed
                  to ensure that AI insights are:
                </p>
                <ul>
                  <li>Based on credible research sources</li>
                  <li>Explained in clear language</li>
                  <li>Presented as wellness guidance, not medical diagnosis</li>
                </ul>

                <p>Our system prioritizes references from organizations such as:</p>
                <ul>
                  <li>National Institutes of Health (NIH)</li>
                  <li>NHS</li>
                  <li>North American Menopause Society (NAMS)</li>
                  <li>Peer-reviewed clinical research</li>
                </ul>
              </div>

              {/* Vision */}
              <div className="mb-5">
                <h2 className="mb-3">Our Vision</h2>
                <p>
                  We believe technology can make menopause health more understandable,
                  supportive, and less isolating.
                </p>
                <p>
                  HerCompassAI is designed to evolve with emerging research and new technologies
                  to better support women throughout this stage of life.
                </p>
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
  );
}