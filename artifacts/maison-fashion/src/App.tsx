import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import React, { useState } from 'react';
import HomePage from '@/pages/Home';
import AtelierPage from '@/pages/Atelier';
import CampaignsPage from '@/pages/Campaigns';
import BoutiquePage from '@/pages/Boutique';
import JournalPage from '@/pages/Journal';
import ContactPage from '@/pages/Contact';
import NotFound from '@/pages/not-found';
import Preloader from '@/components/Preloader';
import './styles/preloader.css';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/atelier" component={AtelierPage} />
      <Route path="/campaigns" component={CampaignsPage} />
      <Route path="/boutique" component={BoutiquePage} />
      <Route path="/journal" component={JournalPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [preloaded, setPreloaded] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`site-root ${preloaded ? 'site-enter' : ''}`}>
        {!preloaded && (
          <Preloader onFinish={() => setPreloaded(true)} />
        )}

        <div className="site-content">
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
