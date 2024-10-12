import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlassyUILandingPage from "./components/GlassyUILandingPage";
import GlassyUIComponentsPage from "./components/GlassyUIComponentsPage";
import ButtonDetailsPage from "./components/ButtonDetailsPage";
import CardDetailsPage from "./components/CardDetailsPage";
import ProgressBarDetailPage from "./components/ProgressBarDetailPage";
import PopupDetailPage from "./components/PopupDetailPage";
import InputDetailPage from "./components/InputDetailPage";
import TextareaDetailPage from "./components/TextareaDetailPage";
import NotFoundPage from "./components/NotFoundPage";
import TooltipDetailsPage from "./components/TooltipDetailsPage";
import SpeedDialDetailsPage from "./components/SpeedDialDetailsPage";
import ModalDetailsPage from "./components/ModalDetailsPage";
import NavigationDetailsPage from "./components/NavigationDetailsPage";
import GlassMorphismGenrator from "./components/GlassMorphismGenrator";
import SliderDetailsPage from "./components/SliderDetailsPage";
import PricingDetailPage from "./components/PricingDetailPage";
import DonationPage from './components/DonationPage';
import Header from './components/Header';
import AuthenticationCard from './components/AuthenticationCards';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<GlassyUILandingPage />} />
        <Route path='/components' element={<GlassyUIComponentsPage />} />
        <Route path='/button-details' element={<ButtonDetailsPage />} />
        <Route path='/card-details' element={<CardDetailsPage />} />
        <Route
          path='/progress-bar-details'
          element={<ProgressBarDetailPage />}
        />
        <Route path="/pricing-details" element={<PricingDetailPage />} />
        <Route path='/popup-details' element={<PopupDetailPage />} />
        <Route path='/input-details' element={<InputDetailPage />} />
        <Route path='/textarea-details' element={<TextareaDetailPage />} />
        <Route path='/tooltip-details' element={<TooltipDetailsPage />} />
        <Route path='/speed-dial-details' element={<SpeedDialDetailsPage />} />
        <Route path='/modal-details' element={<ModalDetailsPage />} />
        <Route path='/navigation-details' element={<NavigationDetailsPage />} />
        <Route path='/generator' element={<GlassMorphismGenrator />} />
        <Route path='/slider-details' element={<SliderDetailsPage />} />

        <Route path='/authentication-card' element={<AuthenticationCard />} />

        {/*the DonationPage route */}
        <Route path='/' element={<GlassyUILandingPage />} />
        <Route path='/donate' element={<DonationPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
