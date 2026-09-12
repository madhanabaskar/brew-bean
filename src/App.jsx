import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { NotFound } from './pages/NotFound';
import { AnimatePresence } from 'framer-motion';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Menu = lazy(() => import('./pages/Menu').then(module => ({ default: module.Menu })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Gallery = lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));
const Reservation = lazy(() => import('./pages/Reservation').then(module => ({ default: module.Reservation })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Removed ScrollToTop as it causes issues with Framer Motion exit animations

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow min-h-screen">
        <ErrorBoundary>
          <Suspense fallback={<LoadingScreen delay={400} />}>
            <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default App;
