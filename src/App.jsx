import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import ContactForm from "./components/pages/contact/ContactForm";
import Donate from "./components/pages/donate/Donate";
import Faq from "./components/pages/FAQ/Faq";
import Strategy from "./components/pages/strategy/Strategy";
import Sponsor from "./components/pages/sponsor/Sponsor";
import Residents from "./components/pages/sponsor/Residents";
import NonResidents from "./components/pages/sponsor/NonResidents";
import GeneralDonation from "./components/pages/donate/GeneralDonation";
import NotFound from "./components/partials/NotFound";
import FeedingProgram from "./components/pages/donate/FeedingProgram";
import Sponsorship from "./components/pages/donate/Children";
import Children from "./components/pages/donate/Children";
import System from "./components/pages/sponsor/System";
import LoginPage from "./components/pages/access/LoginPage";
import UserCreateAccount from "./components/pages/access/UserCreateAccount";
import UserForgotPassword from "./components/pages/access/UserForgotPassword";

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
        <Route path="/general-donation" element={<GeneralDonation />} />
        <Route path="/feeding-program" element={<FeedingProgram />} />
        <Route path="/children" element={<Children />} />
        <Route path="/system" element={<System />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<UserCreateAccount />} />
        <Route path="/forgot" element={<UserForgotPassword />} />


        <Route path="/sponsor" element={<Sponsor />}>
          <Route index element={<Residents />} />
          <Route path="resident" element={<Residents />} />
          <Route path="non-resident" element={<NonResidents />} />
        </Route>

        <Route path="/system/:childName" element={<System />} />



        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
