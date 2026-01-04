import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

// Public routes
import HomePage from '@/pages/public/HomePage';

// Admin routes
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminLogin from '@/pages/admin/AdminLogin';

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

