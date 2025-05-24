import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">The Internet Experience</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/dark-patterns" className="hover:underline">Dark Patterns</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-10 px-4">
        <Outlet />
      </main>

      <footer className="bg-gray-100 text-gray-600 text-sm p-4 mt-10 border-t">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <p>&copy; Made by Lucas Fremming {new Date().getFullYear()} </p>
          <a
            href="https://github.com/luczito/The-internet-experience"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600"
          >
            GitHub Repository
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
