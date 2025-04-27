import { Outlet, Link } from "react-router-dom";
import { useToxicContext } from "../context/ToxicContext";

function Layout() {
  const { toxicCount } = useToxicContext();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">The Internet Experience</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/toxic-patterns" className="hover:underline">Toxic Patterns</Link>
          </nav>
        </div>
        <div className="bg-red-500 text-white text-center py-2">
          Toxic Patterns Triggered: {toxicCount}
        </div>
      </header>
      <main className="container mx-auto py-10 px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;