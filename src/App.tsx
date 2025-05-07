
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import OfficeDetails from "./pages/OfficeDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import ListOffice from "./pages/ListOffice";
import BookingPage from "./pages/BookingPage";
import UserDashboard from "./pages/UserDashboard";
import HostDashboard from "./pages/HostDashboard";
import MessageCenter from "./pages/MessageCenter";
import Support from "./pages/Support";
import AdminPanel from "./pages/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/utforska" element={<Explore />} />
          <Route path="/kontor/:id" element={<OfficeDetails />} />
          <Route path="/bokning/:id" element={<BookingPage />} />
          <Route path="/logga-in" element={<Login />} />
          <Route path="/registrera" element={<Register />} />
          <Route path="/hur-det-fungerar" element={<HowItWorks />} />
          <Route path="/lista-kontor" element={<ListOffice />} />
          <Route path="/dashboard/användare" element={<UserDashboard />} />
          <Route path="/dashboard/värd" element={<HostDashboard />} />
          <Route path="/meddelanden" element={<MessageCenter />} />
          <Route path="/support" element={<Support />} />
          <Route path="/admin" element={<AdminPanel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
