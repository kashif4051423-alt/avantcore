import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { preloadHeroImages } from "@/lib/imagePreload";
import EnhancedHeader from "./components/common/EnhancedHeader";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import HomeNew from "./pages/HomeNew";
import AboutEnterprise from "./pages/AboutEnterprise";
import Company from "./pages/Company";
import Leadership from "./pages/Leadership";
import Vision from "./pages/Vision";
import Mission from "./pages/Mission";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Career from "./pages/Career";
import JobDetails from "./pages/Career/JobDetails";
import NewsEvents from "./pages/NewsEvents";
import ServiceDetail from "./pages/Services/ServiceDetail";
import Industries from "./pages/Industries/Industries";
import IndustryDetail from "./pages/Industries/IndustryDetail";
import Insights from "./pages/Insights/Insights";
import InsightDetail from "./pages/Insights/InsightDetail";
import SalesDistribution from "./pages/Products/SalesDistribution";
import HRMSPayroll from "./pages/Products/HRMSPayroll";
import InventoryPurchase from "./pages/Products/InventoryPurchase";
import ERP from "./pages/Solutions/ERP";
import GIS from "./pages/Solutions/GIS";
import BI from "./pages/Solutions/BI";
import CRM from "./pages/Solutions/CRM";
import HCM from "./pages/Solutions/HCM";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Preload hero images on app initialization
    preloadHeroImages();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-transparent">
            <ScrollToTop />
            <EnhancedHeader />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomeNew />} />
                <Route path="/about" element={<AboutEnterprise />} />
                <Route path="/company" element={<Company />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/industries/:industryId" element={<IndustryDetail />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:insightId" element={<InsightDetail />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/sales-distribution" element={<SalesDistribution />} />
                <Route path="/products/hrms-payroll" element={<HRMSPayroll />} />
                <Route path="/products/inventory-purchase" element={<InventoryPurchase />} />
                <Route path="/solutions/erp" element={<ERP />} />
                <Route path="/solutions/gis" element={<GIS />} />
                <Route path="/solutions/bi" element={<BI />} />
                <Route path="/solutions/crm" element={<CRM />} />
                <Route path="/solutions/hcm" element={<HCM />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news-events" element={<NewsEvents />} />
                <Route path="/news" element={<Index />} />
                <Route path="/career" element={<Career />} />
                <Route path="/career/:jobId" element={<JobDetails />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
