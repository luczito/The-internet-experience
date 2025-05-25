import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Shop from "./pages/Shop";
import DarkPatterns from "./pages/DarkPatterns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="shop" element={<Shop />} />
          <Route path="dark-patterns" element={<DarkPatterns />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;