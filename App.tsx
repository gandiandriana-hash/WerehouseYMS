
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import DriverCheckIn from './components/DriverCheckIn';
import DriverStatus from './components/DriverStatus';
import AdminDashboard from './components/AdminDashboard';
import AdminReports from './components/AdminReports';
import SecurityDashboard from './components/SecurityDashboard';
import PublicMonitor from './components/PublicMonitor';
import DeveloperSettings from './components/DeveloperSettings';
import { ArrowRight, QrCode, ShieldCheck, Clock, BarChart, TrendingUp, Package, Monitor, Lock, Activity, Users, ArrowLeft, Truck } from 'lucide-react';

const App: React.FC = () => {
  // Simple State-based routing for demo purposes
  const [view, setView] = useState('home'); 
  const [currentDriverId, setCurrentDriverId] = useState<string | null>(null);

  // Landing Page Component - Reverted to Classic Desktop Design
  const LandingPage = () => (
    <div className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-10 md:pt-0">
      
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>

      {/* CHANGED: Use grid-cols-12 to allocate more space (span-7) to text/buttons column */}
      <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: TEXT (Span 7 for more width) */}
        <div className="text-left lg:col-span-7 pl-4 lg:pl-10">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm mb-8 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s'}}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-600">Sistem Operasional v2.5 (Full Suite)</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight animate-fade-in-up opacity-0" style={{animationDelay: '0.2s'}}>
            Modernisasi <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Logistik Gudang</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed animate-fade-in-up opacity-0 max-w-2xl" style={{animationDelay: '0.3s'}}>
            Platform manajemen antrian (YMS) tercanggih. Hilangkan penumpukan truk, percepat loading time, dan pantau data secara real-time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-5 animate-fade-in-up opacity-0 mb-16" style={{animationDelay: '0.4s'}}>
            
            {/* CHANGED: justify-center for center alignment, w-72 for wide buttons. 
                With col-span-7, this should definitely fit side-by-side. */}
            <div className="flex flex-row gap-5 justify-center w-full pr-0 lg:pr-12">
                <button 
                  onClick={() => setView('checkin')}
                  className="group relative px-6 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden w-72"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    DRIVER CHECK-IN <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button 
                  onClick={() => setView('public-monitor')}
                  className="group px-6 py-5 bg-teal-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden w-72"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                     <Activity className="w-5 h-5" /> MONITOR ANTRIAN
                  </span>
                </button>
            </div>

            {/* Login Link - Centered */}
            <div className="mt-2 flex justify-center w-full pr-0 lg:pr-12">
                <button 
                    onClick={() => setView('staff-portal')}
                    className="flex items-center gap-2 text-slate-500 font-bold hover:text-blue-600 transition-colors text-sm px-4 py-2 rounded-lg hover:bg-slate-100"
                >
                    <Lock className="w-4 h-4" /> Login Staff / Internal
                </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: HERO IMAGE (Span 5) */}
        <div className="hidden lg:block relative lg:col-span-5 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s'}}>
          {/* Main Image with improved aesthetics */}
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-white animate-float bg-white">
             <img 
               src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
               alt="Modern Warehouse" 
               className="w-full h-auto object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
             
             {/* Floating Info Card on Image */}
             <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-sm">PT Logistics Indonesia</p>
                    <p className="text-xs text-slate-500">Secure & Integrated System</p>
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* Feature Cards Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-20 mb-10">
        <div className="grid grid-cols-3 gap-6 text-left animate-fade-in-up opacity-0" style={{animationDelay: '0.6s'}}>
          {[
            { icon: QrCode, title: "QR Access", desc: "Check-in instan dengan scan QR code tanpa antri." },
            { icon: Clock, title: "Real-time", desc: "Monitoring status antrian secara langsung dan akurat." },
            { icon: ShieldCheck, title: "Terintegrasi", desc: "Data aman dan terhubung dengan sistem gudang." }
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-inner">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Staff Portal - REPLACED AdminLogin with distinct Division Selection
  const StaffPortal = () => (
    <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
             <div className="flex items-center gap-2">
                 <div className="bg-slate-900 text-white p-2 rounded-lg">
                    <Lock className="w-5 h-5" />
                 </div>
                 <h1 className="font-bold text-lg text-slate-800">Internal Access Portal</h1>
             </div>
             <button onClick={() => setView('home')} className="text-slate-500 hover:text-slate-800 font-bold text-sm flex items-center gap-2">
                 <ArrowLeft className="w-4 h-4" /> Kembali ke Utama
             </button>
        </div>

        {/* Main Content Split View - Forced Grid */}
        <div className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-2 gap-8 items-center">
            
            {/* DIVISI ADMIN OPERASIONAL */}
            <div className="h-full flex flex-col justify-center">
                <div className="group bg-white border border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors"></div>
                    
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <Package className="w-8 h-8" />
                    </div>
                    
                    <h2 className="text-3xl font-black text-slate-800 mb-2">Divisi Operasional</h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Manajemen antrian, penetapan gate, dan laporan harian. Khusus untuk staff admin gudang.
                    </p>
                    
                    <button 
                        onClick={() => setView('admin-dashboard')}
                        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                    >
                        LOGIN ADMIN OPS <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* DIVISI SECURITY */}
            <div className="h-full flex flex-col justify-center">
                <div className="group bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl hover:shadow-slate-800/50 hover:border-green-500 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -mr-16 -mt-16 group-hover:bg-green-500/20 transition-colors"></div>
                    
                    <div className="w-16 h-16 bg-green-900/50 text-green-400 rounded-2xl flex items-center justify-center mb-6 border border-green-500/30 shadow-sm">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    
                    <h2 className="text-3xl font-black text-white mb-2">Divisi Keamanan</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Pos jaga, kontrol akses masuk/keluar armada, dan verifikasi fisik kendaraan.
                    </p>
                    
                    <button 
                        onClick={() => setView('security-dashboard')}
                        className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-900/50 hover:bg-green-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                    >
                        LOGIN POS SECURITY <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        {/* Footer Utilities */}
        <div className="bg-slate-100 py-8 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-6">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Utilitas System</h3>
                <div className="flex flex-row justify-center gap-4">
                     <button onClick={() => setView('public-monitor')} className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold hover:border-purple-500 hover:text-purple-600 transition-all shadow-sm">
                        <Monitor className="w-5 h-5" /> TV Monitor Display
                     </button>
                     <button onClick={() => setView('dev-settings')} className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold hover:border-red-500 hover:text-red-600 transition-all shadow-sm">
                        <Lock className="w-5 h-5" /> Developer Tools
                     </button>
                </div>
            </div>
        </div>
    </div>
  );

  const handleCheckInSuccess = (id: string) => {
    setCurrentDriverId(id);
    setView('status');
  };

  const renderContent = () => {
    switch (view) {
      case 'home': return <LandingPage />;
      case 'checkin': return <DriverCheckIn onSuccess={handleCheckInSuccess} onBack={() => setView('home')} />;
      case 'status': return currentDriverId ? <DriverStatus driverId={currentDriverId} onBack={() => setView('home')} /> : <LandingPage />;
      case 'staff-portal': return <StaffPortal />;
      case 'admin-dashboard': return <AdminDashboard onBack={() => setView('staff-portal')} />;
      case 'admin-reports': return <AdminReports />;
      case 'security-dashboard': return <SecurityDashboard onBack={() => setView('staff-portal')} />;
      case 'public-monitor': return <PublicMonitor onBack={() => setView('home')} />;
      case 'dev-settings': return <DeveloperSettings onBack={() => setView('staff-portal')} />;
      default: return <LandingPage />;
    }
  };

  // Determine if full layout is needed or if view is fullscreen
  const isFullscreen = view === 'public-monitor' || view === 'dev-settings' || view === 'staff-portal' || view === 'security-dashboard';
  // Admin View now EXCLUDES security dashboard logic which is standalone
  const isAdminView = view.startsWith('admin');

  if (isFullscreen) return renderContent();

  return (
    <Layout view={view} onChangeView={setView} isAdmin={isAdminView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
