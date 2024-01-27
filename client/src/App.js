import Header from './components/Header';
import Home from './pages/Home';
import Embroideries from './pages/Embroideries';
import Abaya from './pages/Abaya';
import Casual from './pages/Casual';
import Jacket from './pages/Jacket';
import Jilbab from './pages/Jilbab';
import SizeGuide from './pages/SizeGuide';
import SuitFormal from './pages/SuitFormal';
import Summer from './pages/Summer';
import Cart from './pages/Cart';
import QuickView from './pages/QuickView';
import CasualQuickView from './pages/CasualQuickView';
import JacketQuickView from './pages/JacketQuickView';
import JilbabQuickView from './pages/JilbabQuickView';
import PrivacyPolicy from './footerPages/PrivacyPolicy';
import TermsOfService from './footerPages/TermsOfService';
import ShippingPolicy from './footerPages/ShippingPolicy';
import RefundPolicy from './footerPages/RefundPolicy';
import ContactInfo from './footerPages/ContactInfo';
import Contact from './footerPages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const App = () => {
  return (
    <PayPalScriptProvider
      options={{ "clientId": process.env.PAYPAL_CLIENT_ID}}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/embroideries" element={<Embroideries />} />
          <Route path="/abaya" element={<Abaya />} />
          <Route path="/casual" element={<Casual />} />
          <Route path="/jacket" element={<Jacket />} />
          <Route path="/jilbab" element={<Jilbab />} />
          <Route path="/sizeGuide" element={<SizeGuide />} />
          <Route path="/suitFormal" element={<SuitFormal />} />
          <Route path="/summer" element={<Summer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/quickView/:id" element={<QuickView />} />
          <Route
            path="/embroideries/quickView/:id"
            element={<CasualQuickView />}
          />
          <Route path="/jacket/quickView/:id" element={<JacketQuickView />} />
          <Route path="/jilbab/quickView/:id" element={<JilbabQuickView />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-information" element={<ContactInfo />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}

export default App;