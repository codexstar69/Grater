import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'wouter';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

// Lazy load other pages to improve initial load performance
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
  // Loading fallback for lazy-loaded components
  const PageLoading = () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-grater-red rounded-full animate-spin"></div>
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Suspense fallback={<PageLoading />}>
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/features">
              {() => <FeaturesPage />}
            </Route>
            <Route path="/pricing">
              {() => <PricingPage />}
            </Route>
            <Route path="/contact">
              {() => <ContactPage />}
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}