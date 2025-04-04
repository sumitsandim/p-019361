
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";
import Scholarship from "./pages/Scholarship";
import Resource from "./pages/Resource";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles/:slug" element={<Article />} />
          <Route path="/scholarships/:slug" element={<Scholarship />} />
          <Route path="/resources/:type" element={<Resource />} />
          {/* Routes for navigation menu items will be created as empty placeholders */}
          <Route path="/countries/:country" element={<NotFound />} />
          <Route path="/exams/:exam" element={<NotFound />} />
          <Route path="/colleges/:type" element={<NotFound />} />
          <Route path="/finances/:type" element={<NotFound />} />
          <Route path="/apply" element={<NotFound />} />
          <Route path="/study-in-india" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="/auth" element={<NotFound />} />
          <Route path="/my-courses" element={<NotFound />} />
          <Route path="/my-chances" element={<NotFound />} />
          <Route path="/counsellor" element={<NotFound />} />
          <Route path="/articles" element={<NotFound />} />
          <Route path="/scholarships" element={<NotFound />} />
          <Route path="/scholarships/:slug/brochure" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
