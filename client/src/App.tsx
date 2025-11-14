import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SocialPage from "./pages/SocialPage";
import LeisPage from "./pages/LeisPage";
import HistoriaPage from "./pages/HistoriaPage";
import CulturaPage from "./pages/CulturaPage";
import ConceitsPage from "./pages/ConceitsPage";
import DadosPage from "./pages/DadosPage";
import NovembroPage from "./pages/NovembroPage";
import FigurasPage from "./pages/FigurasPage";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/social"} component={SocialPage} />
      <Route path={"/leis"} component={LeisPage} />
      <Route path={"/historia"} component={HistoriaPage} />
      <Route path={"/cultura"} component={CulturaPage} />
      <Route path={"/conceitos"} component={ConceitsPage} />
      <Route path={"/dados"} component={DadosPage} />
      <Route path={"/20-de-novembro"} component={NovembroPage} />
      <Route path={"/figuras"} component={FigurasPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
