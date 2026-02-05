import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

// Public routes
import HomePage from '@/pages/public/HomePage';
import AboutPage from '@/pages/public/AboutPage';
import ContactPage from '@/pages/public/ContactPage';
import ServicesPage from '@/pages/public/ServicesPage';
import ReportsPage from '@/pages/public/ReportsPage';
import ReportDetailPage from '@/pages/public/ReportDetailPage';

// Admin routes
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminLogin from '@/pages/admin/AdminLogin';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/admin/ProtectedRoute';

import SmoothScroll from '@/components/public/SmoothScroll';

function App() {
  return (
    <AuthProvider>
      <SmoothScroll>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reports/:id" element={<ReportDetailPage />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute requireAdmin>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster />
      </SmoothScroll>
    </AuthProvider>
  );
}

export default App;

