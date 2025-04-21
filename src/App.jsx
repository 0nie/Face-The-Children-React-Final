import About from "./components/pages/about/About";
import ContactForm from "./components/pages/contact/ContactForm";
import Donate from "./components/pages/donate/Donate";
import Faq from "./components/pages/FAQ/Faq";
import Home from "./components/pages/home/Home";
import Sponsor from "./components/pages/sponsor/Sponsor";
import Strategy from "./components/pages/strategy/Strategy";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/pages/404/NotFound";

// Import the nested routes for sponsor
import Residents from './components/pages/sponsor/Residents';
import NonResidents from './components/pages/sponsor/NonResidents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/donate" element={<Donate />} />

        {/* Sponsor route with nested routes for Residents and NonResidents */}
        <Route path="/sponsor" element={<Sponsor />}>
          <Route index element={<Residents />} /> {/* Shows by default at /sponsor */}
          <Route path="resident" element={<Residents />} />
          <Route path="non-resident" element={<NonResidents />} />
        </Route>



        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
