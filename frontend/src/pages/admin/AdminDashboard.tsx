import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Settings, LogOut, FileText, Mail, User as UserIcon, Loader2, ShieldCheck } from 'lucide-react';
import AdminReportsPage from './AdminReportsPage';
import AdminInquiriesPage from './AdminInquiriesPage';
import { useAuth } from '@/context/AuthContext';
import { apiFetch } from '@/lib/api';

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Reports', href: '/admin/reports', icon: FileText },
    { name: 'Inquiries', href: '/admin/inquiries', icon: Mail },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#283F3B] shadow-2xl min-h-screen flex flex-col fixed left-0 top-0 bottom-0 z-20">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-xl font-black text-white uppercase tracking-tighter">Market<span className="text-primary italic">Revolution</span></h1>
        </div>

        <div className="p-6 border-b border-white/5 bg-black/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <UserIcon className="w-5 h-5 text-primary" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">{user?.name}</p>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{user?.role}</p>
            </div>
          </div>
        </div>

        <nav className="mt-8 px-4 flex-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-6 py-4 rounded-xl mb-2 transition-all duration-300 ${isActive
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 font-bold'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                <Icon className="w-5 h-5 mr-4" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-6 py-4 text-red-400 hover:text-white hover:bg-red-500/20 rounded-xl transition-all font-bold group"
          >
            <LogOut className="w-5 h-5 mr-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Sign Out</span>
          </button>
          <Link
            to="/"
            className="flex items-center mt-2 w-full px-6 py-4 text-white/40 hover:text-white text-xs font-bold transition-all"
          >
            ← Return to Website
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64 p-10 overflow-y-auto min-h-screen">
        <Routes>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="reports" element={<AdminReportsPage />} />
          <Route path="inquiries" element={<AdminInquiriesPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await apiFetch('/admin/dashboard/stats');
        if (response.success) {
          setStats(response.data.stats);
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-40">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  const cards = [
    { label: 'Total Reports', value: stats?.totalReports || 0, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Total Inquiries', value: stats?.totalInquiries || 0, icon: Mail, color: 'text-orange-600', bg: 'bg-orange-100' },
    { label: 'Total Users', value: stats?.totalUsers || 0, icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { label: 'Active Admins', value: stats?.totalAdmins || 0, icon: ShieldCheck, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div>
        <h2 className="text-4xl font-black text-gray-900 leading-tight">Overview</h2>
        <div className="h-1.5 w-20 bg-indigo-600 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className={`p-3 rounded-2xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform`}>
                <card.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Growth +12%</span>
            </div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{card.label}</h3>
            <p className="text-3xl font-black text-gray-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-96 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <LayoutDashboard className="w-10 h-10 text-gray-200" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Revenue Analytics</h4>
          <p className="text-gray-500 text-sm max-w-xs">Chart integration coming soon. Track your report sales and growth over time.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-96 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <Users className="w-10 h-10 text-gray-200" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">User Demographics</h4>
          <p className="text-gray-500 text-sm max-w-xs">Detailed insights into your audience and geographic distribution.</p>
        </div>
      </div>
    </div>
  );
};

const UsersPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Users</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">User management will be implemented here.</p>
      </div>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Settings</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Settings will be implemented here.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
