import Navbar from "./components/Navbar";
import Home from "./pages/homePage/Home";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Arbitration from "./pages/servicesPages/Arbitration";
import Construction from "./pages/servicesPages/Construction";
import ContractAdvisory from "./pages/servicesPages/ContractAdvisory";
import ContractClaim from "./pages/servicesPages/ContractClaim";
import Employement from "./pages/servicesPages/Employement";
import StartUp from "./pages/servicesPages/StartUp";
import Civil from "./pages/servicesPages/Civil";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsAndConditions from "./pages/policies/TermsAndConditions";
import LegalDisclaimer from "./pages/policies/LegalDisclaimer";

// 1. Import the scroll helper (or define it here)
import ScrollToTop from "./components/ScrollToTop"; 

const App = () => {
  return (
    <>
      {/* 2. Place it inside the Router but outside the Routes */}
      <ScrollToTop />
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />

        {/* services pages */}
        <Route path="/services/arbitration" element={<Arbitration/>} />
        <Route path="/services/construction" element={<Construction/>} />
        <Route path="/services/contract-advisory" element={<ContractAdvisory/>} />
        <Route path="/services/contract-claim" element={<ContractClaim/>} />
        <Route path="/services/employement" element={<Employement/>} />
        <Route path="/services/startup" element={<StartUp/>} />
        <Route path="/services/civil" element={<Civil/>} />

        {/* policies pages */}
        <Route path="/policies/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/policies/terms-and-conditions" element={<TermsAndConditions/>} />
        <Route path="/policies/disclaimer" element={<LegalDisclaimer/>} />
      </Routes>

      <Footer/>
    </>
  );
};

export default App;