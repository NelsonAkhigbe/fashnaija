import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Header } from '@/components/Header';
import { HeroScrollVideo } from '@/components/HeroScrollVideo';
import { LookbookGrid } from '@/components/LookbookGrid';
import { EditorialFeature } from '@/components/EditorialFeature';
import { SecondaryEditorial } from '@/components/SecondaryEditorial';
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Header />
      <HeroScrollVideo />
      <SecondaryEditorial />
      <LookbookGrid />
      <EditorialFeature />
      <Footer />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
