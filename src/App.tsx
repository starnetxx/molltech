import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PackageBasic from "./pages/PackageBasic";
import PackageStandard from "./pages/PackageStandard";
import PackageAdvanced from "./pages/PackageAdvanced";
import PackagePremium from "./pages/PackagePremium";
import Billing from "./pages/Billing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/package/basic" element={<PackageBasic />} />
          <Route path="/package/standard" element={<PackageStandard />} />
          <Route path="/package/advanced" element={<PackageAdvanced />} />
          <Route path="/package/premium" element={<PackagePremium />} />
          <Route path="/billing" element={<Billing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
