import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home replace to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />

        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:id" element={<Project />} />

        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
