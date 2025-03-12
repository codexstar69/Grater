import { Route } from 'wouter';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/not-found';
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <div className="min-h-screen">
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
      <Toaster />
    </div>
  );
}