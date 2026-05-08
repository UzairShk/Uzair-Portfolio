import { useEffect } from "react";
import { FiShield } from "react-icons/fi";

const SecureTouchPrivacy = () => {
  useEffect(() => {
    document.title = "SecureTouch Alarm Privacy Policy";
  }, []);

  return (
    <main className="privacy-page">
      <section className="privacy-section privacy-fade-in">
        <div className="privacy-container">
          <article className="policy-card">
            <header className="policy-header">
              <div className="policy-icon-wrap" aria-hidden="true">
                <FiShield />
              </div>
              <h1 className="policy-title">SecureTouch Alarm Privacy Policy</h1>
              <p className="policy-meta">Last Updated: May 8, 2026</p>
            </header>

            <div className="policy-body">
              <section className="policy-block">
                <h2>1. Introduction</h2>
                <p>
                  SecureTouch Alarm ("we", "our", or "us") respects your privacy and is committed to
                  protecting user information. This Privacy Policy explains how the application
                  functions, what permissions may be requested, and how data is handled when you use
                  SecureTouch Alarm - Anti Theft Security App.
                </p>
              </section>

              <section className="policy-block">
                <h2>2. Information Collection</h2>
                <p>
                  SecureTouch Alarm does not directly collect, store, or sell personally identifiable
                  information such as your name, phone number, email address, contacts, or personal
                  messages.
                </p>
                <p>
                  The app is designed to perform anti-theft protection primarily through on-device
                  processing and local security logic.
                </p>
              </section>

              <section className="policy-block">
                <h2>3. Permissions Usage</h2>
                <p>
                  The app may request certain Android permissions only to deliver core security
                  features and app reliability.
                </p>
                <ul>
                  <li>Motion sensor access to detect suspicious device movement.</li>
                  <li>Vibration permission to trigger vibration-based alarm feedback.</li>
                  <li>Notification permission to display active protection controls and alerts.</li>
                  <li>
                    Foreground service permission to maintain protection while the app runs in the
                    background.
                  </li>
                </ul>
              </section>

              <section className="policy-block">
                <h2>4. Motion Sensor Usage</h2>
                <p>
                  Motion sensors are used only for anti-theft detection. Sensor data is processed in
                  real time on your device to determine whether alarm conditions are met. Motion sensor
                  readings are not used for personal profiling and are not transmitted to remote
                  servers by the app.
                </p>
              </section>

              <section className="policy-block">
                <h2>5. Notification Usage</h2>
                <p>
                  Notifications are used for essential security operations, including alarm status,
                  foreground service visibility, and quick controls (for example, opening the app or
                  managing protection state). Notifications are not used to access personal message
                  content.
                </p>
              </section>

              <section className="policy-block">
                <h2>6. Foreground Services</h2>
                <p>
                  SecureTouch Alarm may run as a foreground service to provide continuous anti-theft
                  monitoring. This ensures alarm protection remains active when the app is not on
                  screen. Foreground service behavior is limited to security functionality and does not
                  collect personal files or user content.
                </p>
              </section>

              <section className="policy-block">
                <h2>7. PIN and Local Security</h2>
                <p>
                  PIN-based protection is used to prevent unauthorized alarm dismissal. PIN data and
                  related security preferences are stored locally on the device through platform storage
                  mechanisms. PIN values are not shared with our servers.
                </p>
              </section>

              <section className="policy-block">
                <h2>8. Advertising Services (Google AdMob)</h2>
                <p>
                  The app may display ads using Google AdMob. AdMob may collect limited anonymous
                  device or usage data in accordance with Google policies. We do not receive personal
                  identity data from these ad networks.
                </p>
                <p>
                  Google Privacy Policy: {" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">
                    https://policies.google.com/privacy
                  </a>
                </p>
              </section>

              <section className="policy-block">
                <h2>9. Analytics and Diagnostics</h2>
                <p>
                  SecureTouch Alarm does not include first-party personal analytics collection. If
                  diagnostics are provided by third-party SDKs (for example, ad SDK performance and
                  crash telemetry), such data is managed under each provider's privacy practices and is
                  generally aggregated or anonymized.
                </p>
              </section>

              <section className="policy-block">
                <h2>10. Third-Party Services</h2>
                <p>The application may use the following services:</p>
                <ul>
                  <li>Google Play Services</li>
                  <li>Google AdMob</li>
                </ul>
                <p>
                  These providers may process limited technical information under their own privacy
                  policies and terms.
                </p>
              </section>

              <section className="policy-block">
                <h2>11. Data Storage and Local Processing</h2>
                <p>
                  Alarm logic, motion detection decisions, notification controls, and PIN verification
                  are designed to run locally on the device. SecureTouch Alarm does not require an
                  account to operate core anti-theft features.
                </p>
              </section>

              <section className="policy-block">
                <h2>12. Data Sharing Policy</h2>
                <p>
                  We do not sell, trade, or rent personal user data. Since the app does not directly
                  collect personal identity information, there is no personal profile database for us to
                  share. Limited data collection by third-party SDK providers is governed by those
                  providers.
                </p>
              </section>

              <section className="policy-block">
                <h2>13. Security Measures</h2>
                <p>
                  We design app features with privacy-by-default principles. Security-sensitive features
                  such as alarm control and PIN checks are constrained to on-device logic where
                  possible. While no software can guarantee absolute security, we continuously aim to
                  reduce unnecessary data exposure.
                </p>
                <ul>
                  <li>Personal photos</li>
                  <li>Contacts</li>
                  <li>Messages</li>
                  <li>Personal files</li>
                  <li>Financial information</li>
                </ul>
              </section>

              <section className="policy-block">
                <h2>14. Children's Privacy</h2>
                <p>
                  This application is not directed to children under 13 years of age. We do not
                  knowingly collect personal information from children.
                </p>
              </section>

              <section className="policy-block">
                <h2>15. User Rights</h2>
                <p>
                  You may stop using the app at any time and may revoke permissions through Android
                  system settings. You can also uninstall the app to remove local app data from your
                  device according to your device and OS behavior.
                </p>
              </section>

              <section className="policy-block">
                <h2>16. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy periodically to reflect legal, technical, or product
                  updates. The latest version is always published on this page with the updated date.
                </p>
              </section>

              <section className="policy-block">
                <h2>17. Contact Information</h2>
                <p>
                  For questions, support requests, or feedback related to this Privacy Policy, contact
                  us at:
                </p>
                <p>
                  Email: <a href="mailto:shaikhuzair1080@gmail.com">ucorp.apps@gmail.com</a>
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default SecureTouchPrivacy;
