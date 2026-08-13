import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { brands } from "./lib/brand";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index brand={brands.hamasahlaundry} />} />
          <Route path="/hamasahlaundry" element={<Index brand={brands.hamasahlaundry} />} />
          <Route path="/hamasahbakery" element={<Index brand={brands.hamasahbakery} />} />
          <Route path="/markazfiqih" element={<Index brand={brands.markazfiqih} />} />
          <Route path="/haramaincapture" element={<Index brand={brands.haramaincapture} />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
