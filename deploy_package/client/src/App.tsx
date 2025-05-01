import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import BankingPrivacy from "@/pages/BankingPrivacy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";
import { useState, useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/banking-privacy" component={BankingPrivacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showNotification, setShowNotification] = useState(false);
  
  useEffect(() => {
    // Show notification after 5 seconds
    const timeout = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          {showNotification && (
            <Notification 
              onClose={() => setShowNotification(false)} 
            />
          )}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
