import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatIsTarget from './pages/WhatIsTarget';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shcho-take-target" element={<WhatIsTarget />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
