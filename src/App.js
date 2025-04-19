import { useState, useEffect } from "react";
import { CookiePopup } from "./components/CookiePopup";
import { ToxicMeter } from "./components/ToxicMeter";
import { LoginModal } from "./components/LoginModal";
import './index.css';

function App() {
  const [score, setScore] = useState(100);
  const [patternsTriggered, setPatternsTriggered] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [products, setProducts] = useState(Array.from({ length: 6 }, (_, i) => i + 1));

  const triggerPattern = (pattern, penalty) => {
    if (!patternsTriggered.includes(pattern)) {
      setPatternsTriggered([...patternsTriggered, pattern]);
      setScore((prev) => Math.max(prev - penalty, 0));
      alert(`You triggered: ${pattern} (-${penalty} points)`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      ) {
        setProducts((prev) => {
          const newProducts = [...prev, ...Array.from({ length: 6 }, (_, i) => prev.length + i + 1)];
          triggerPattern("Infinite Scroll Trap", 10);
          return newProducts;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [patternsTriggered]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">The Internet Experience</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">About</a>
            <button
              onClick={() => {
                setShowLogin(true);
                triggerPattern("Forced Login Modal", 10);
              }}
              className="hover:underline"
            >
              Login
            </button>
          </nav>
        </div>
      </header>

      <ToxicMeter score={score} />
      <CookiePopup triggerPattern={triggerPattern} />
      <LoginModal show={showLogin} setShow={setShowLogin} triggerPattern={triggerPattern} />

      <main className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold mb-6">Welcome to Our Online Store</h2>
        <p className="mb-4 max-w-2xl text-gray-700">
          Browse our "must-have" products you never asked for. We’re watching every click 👀.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((id) => (
            <div key={id} className="border rounded-xl shadow hover:shadow-lg transition duration-300 p-4">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-semibold text-lg">Product #{id}</h3>
              <p className="text-gray-600">Limited offer! Ends never.</p>
              <p className="text-gray-800 font-bold mt-1">${(19 + id * 0.1).toFixed(2)}</p>
              <button
                onClick={() => triggerPattern("Clicked Buy without Info", 15)}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 text-center py-6 mt-12 text-sm text-gray-500">
        &copy; 2025 lufr@itu.dk | Score: {score} | Patterns Triggered: {patternsTriggered.length}
      </footer>
    </div>
  );
}

export default App;