import { useState, useEffect } from "react";
import { useToxicContext } from "../context/ToxicContext";

const AdCard = ({ position, triggerToxicPattern }) => (
    <div className="hidden lg:block w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      <img 
      src={position === 'left' 
        ? "https://picsum.photos/id/20/300/200" 
        : "https://picsum.photos/id/0/300/200"
      }
        alt="Article thumbnail" 
        className="w-full h-[200px] object-cover"
      />
      <span className="absolute top-2 right-2 text-[10px] text-gray-400 opacity-50">Advertisement</span>
    </div>
    <div className="p-4">
      {position === 'left' ? (
        <>
          <p className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
            Tired of getting tracked online? This is the solution!
          </p>
          <p className="text-sm text-gray-600 mb-3">
            This browser extension will block all tracking cookies and ads, and make your browsing experience much more enjoyable.
          </p>
        </>
      ) : (
        <>
          <p className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
            VPN's are dead, this is the new way to surf the web
          </p>
          <p className="text-sm text-gray-600 mb-3">
            This new technology will make your browsing experience much faster and more secure, without the need for a VPN.
          </p>
        </>
      )}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
        <span>Sponsored</span>
        <span>•</span>
        <span>2 min read</span>
      </div>
      <button 
        onClick={() => triggerToxicPattern("Clicked misleading ad, ads in general should always be avoided.")}
        className="w-full text-blue-600 text-sm py-2 hover:underline text-left"
      >
        Learn More →
      </button>
    </div>
  </div>
);

function News() {
  const { triggerToxicPattern } = useToxicContext();
  const [showPopup, setShowPopup] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(true);
  const [cookieStep, setCookieStep] = useState(1);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: true,
    personalization: true
  });

  const closePopup = () => {
    setShowPopup(false);
  };

  // Add timer to show popup
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000); // 20 seconds in milliseconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <main className="container mx-auto py-10 px-4 relative">
      {/* Left side ad */}
      <div className="fixed left-4" style={{ top: '8rem' }}>
        <AdCard position="left" triggerToxicPattern={triggerToxicPattern} />
      </div>

      {/* Right side ad */}
      <div className="fixed right-4" style={{ top: '8rem' }}>
        <AdCard position="right" triggerToxicPattern={triggerToxicPattern} />
      </div>

      {/* Existing article content with adjusted max-width */}
      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">The Future of Digital Experience</h1>
          <p className="text-gray-600 text-lg">Exploring the evolution of online interactions</p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
            <span>By John Smith</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span>April 27, 2025</span>
          </div>
        </div>

        <article className="prose max-w-none">
          <div className="max-w-3xl mx-auto">
            <p className="mb-8 text-lg leading-relaxed">
              In today's rapidly evolving digital landscape, the way we interact with technology 
              continues to shape our daily lives. From social media algorithms to targeted advertising, 
              the modern internet experience has become increasingly sophisticated - and potentially 
              concerning. This article explores the hidden patterns and mechanisms that influence our 
              online behavior.
            </p>

            <h2 className="text-2xl font-semibold mb-6 mt-12">The Evolution of User Experience</h2>
            <p className="mb-8 text-lg leading-relaxed">
              As we delve deeper into the digital age, the boundaries between user convenience and 
              manipulation become increasingly blurred. Companies employ various strategies to enhance 
              engagement, but at what cost to user privacy and autonomy?
            </p>

            <div className="relative aspect-video w-3/4 mx-auto mb-8 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              {cookiePreferences.necessary && cookiePreferences.analytics && !showCookieModal ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  playsInline
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => {
                    setShowCookieModal(true);
                    setCookieStep(2); // Go to cookie settings
                  }}
                >
                  <div className="text-center p-6">
                    <p className="text-gray-600 font-semibold mb-2">⚠️ Cookie Notice</p>
                    <p className="text-sm text-gray-500">
                      Analytics cookies must be accepted to see video.
                      <br />
                      <span className="underline">Click here to change cookie preferences.</span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            <h2 className="text-2xl font-semibold mb-6 mt-12">The Privacy Paradox</h2>
            <p className="mb-8 text-lg leading-relaxed">
              While users increasingly express concerns about digital privacy, many still readily 
              accept cookies and share personal information online. This contradiction, known as the 
              privacy paradox, reveals the complex relationship between convenience and data protection 
              in our modern world.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
              "The internet is like a maze where every turn leads to a new form of data collection, 
              and users are the unwitting participants in this grand experiment."
            </blockquote>

            <h2 className="text-2xl font-semibold mb-6 mt-12">Looking Ahead</h2>
            <p className="mb-8 text-lg leading-relaxed">
              As we continue to navigate this complex digital landscape, it becomes increasingly 
              important to understand the mechanisms that influence our online behavior. The future 
              of digital interaction lies in finding the balance between personalization and privacy, 
              between convenience and control.
            </p>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <p className="text-gray-600">
                John Smith does not exist, this article is 100% AI-generated.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Existing modals */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-3/4 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Sign Up for Our Newsletter!</h2>
            <p className="text-gray-700 mb-6">
              Get the latest redundant information and spam mails from us! Don't miss out! This is a great opportunity to receive content you never asked for,
              and is not needed at all, you can close this popup in the top right corner.
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              triggerToxicPattern("Provided personal information by signing up for the newsletter without reading the details, generally these newsletters do not provide you with any useful information.");
              closePopup();
            }} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address*"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="text-xs text-gray-500 mb-4">
                * By entering your email, you agree to receive unlimited marketing emails which you cannot unsubscribe from, and us sharing your email with our partners.
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              >
                Sign Up Now
              </button>
            </form>
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{ fontSize: "12px" }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {showCookieModal && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-8 min-h-[300px] z-[100] transition-transform duration-300">
            {cookieStep === 1 && (
            <div className="container mx-auto max-w-6xl py-4">
              <h2 className="text-2xl font-bold mb-4">We Value Your Privacy</h2>
              <p className="text-gray-600 mb-6">
                We and our partners store and/or access information on your device through cookies. 
                We process personal data, such as IP addresses and cookie identifiers, and collect 
                your exact location data, browsing history, and will share this with our 500+ partners.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    triggerToxicPattern("Accepted all cookies without reading what they are used for, on almost all pages this is not neccessary and should be avoided.");
                    setShowCookieModal(false);
                  }}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={() => setCookieStep(2)}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded hover:bg-gray-200 text-sm"
                >
                  Customize Preferences
                </button>
              </div>
            </div>
          )}

          {cookieStep === 2 && (
            <div className="container mx-auto max-w-6xl py-4">
              <h2 className="text-xl font-bold mb-4">Cookie Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {Object.entries(cookiePreferences).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <h3 className="font-semibold">
                        {{
                          necessary: "Necessary",
                          personalization: "Personalization",
                          analytics: "Analytics",
                          marketing: "Marketing"
                        }[key]}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {{
                          necessary: "Required for basic site functionality",
                          personalization: "Improves user experience with custom content",
                          analytics: "Helps us understand user interaction",
                          marketing: "Used to deliver ads more relevant to you"
                        }[key]}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        disabled={key === 'necessary'}
                        onChange={() => {
                          setCookiePreferences(prev => ({
                            ...prev,
                            [key]: !prev[key]
                          }));
                        }}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setCookieStep(3)}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                  Continue to Confirmation
                </button>
              </div>
            </div>
          )}

          {cookieStep === 3 && (
            <div className="container mx-auto max-w-6xl py-4">
              <h2 className="text-xl font-bold mb-4">Are You Sure?</h2>
              <p className="text-gray-600 mb-6">
                By rejecting optional cookies, you may miss out on personalized content, 
                special offers, and improved site functionality.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    triggerToxicPattern("Accepted all cookies without reading what they are used for, on almost all pages this is not neccessary and should be avoided.");
                    setShowCookieModal(false);
                  }}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                  Accept All Cookies Instead
                </button>
                <button
                  onClick={() => setCookieStep(4)}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded hover:bg-gray-200 text-sm"
                >
                  Continue with Limited Functionality
                </button>
              </div>
            </div>
          )}

          {cookieStep === 4 && (
            <div className="container mx-auto max-w-6xl py-4">
              <h2 className="text-xl font-bold mb-4">Final Confirmation</h2>
              <p className="text-gray-600 mb-6">
                This is your last chance to reconsider. Our partners really need these 
                cookies to provide you with the best possible experience.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowCookieModal(false);
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded hover:bg-gray-200 text-xs"
                >
                  Reject Optional Cookies (Not Recommended)
                </button>
                <button
                  onClick={() => {
                    triggerToxicPattern("Accepted all cookies without reading what they are used for, on almost all pages this is not neccessary and should be avoided.");
                    setShowCookieModal(false);
                  }}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                  Accept All Cookies
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default News;