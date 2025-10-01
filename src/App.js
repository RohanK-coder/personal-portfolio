import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import { initPostHog, trackPageView } from "./utils/posthog";

function App() {
  useEffect(() => {
    // Initialize PostHog
    initPostHog();
    
    // Track initial page view
    trackPageView('Portfolio Home', {
      page_title: 'Rohan Kommathoti - Portfolio',
      page_url: window.location.href,
    });
  }, []);

  return (
      <Home />
  );
}

export default App;
