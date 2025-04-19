import { useState } from "react";

export function CookiePopup({ triggerPattern }) {
  const [visible, setVisible] = useState(true);

  const acceptAll = () => {
    triggerPattern("Accepted All Cookies", 10);
    setVisible(false);
  };

  const manageSettings = () => {
    alert("Settings are currently unavailable 🙃");
    triggerPattern("Tried to Manage Settings", 5);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md p-6 z-50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-sm text-gray-800">
          We use cookies to personalize your experience, track your every move, and sell your data. 🍪
        </p>
        <div className="flex space-x-3">
          <button
            onClick={acceptAll}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-sm"
          >
            Accept All
          </button>
          <button
            onClick={manageSettings}
            className="text-sm text-gray-200 underline hover:text-gray-800"
          >
            Manage Cookies
          </button>
        </div>
      </div>
    </div>
  );
}