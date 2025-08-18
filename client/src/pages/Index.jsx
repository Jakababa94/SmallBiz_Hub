import { useState } from "react";
import { Sidebar } from "@/components/Layout/Sidebar";
import { DashboardOverview } from "@/components/Dashboard/DashboardOverview";

const Index = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'appointments':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Appointments</h2>
            <div className="bg-card rounded-lg p-6 border border-border shadow-card">
              <p className="text-muted-foreground">Appointment booking system coming soon...</p>
            </div>
          </div>
        );
      case 'inventory':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Inventory Management</h2>
            <div className="bg-card rounded-lg p-6 border border-border shadow-card">
              <p className="text-muted-foreground">Product and service catalog coming soon...</p>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Customer Management</h2>
            <div className="bg-card rounded-lg p-6 border border-border shadow-card">
              <p className="text-muted-foreground">Customer management system coming soon...</p>
            </div>
          </div>
        );
      case 'communications':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Communications Hub</h2>
            <div className="bg-card rounded-lg p-6 border border-border shadow-card">
              <p className="text-muted-foreground">Email and SMS communication tools coming soon...</p>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Analytics</h2>
            <div className="bg-card rounded-lg p-6 border border-border shadow-card">
              <p className="text-muted-foreground">Business analytics and reporting coming soon...</p>
            </div>
          </div>
        );
      case 'payments':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Payment Management</h2>
            <div className="bg-card rounded-lg p-6 border border-border shadow-card">
              <p className="text-muted-foreground">Payment processing and Stripe integration coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Settings</h2>
            <div className="bg-card rounded-lg p-6 border border-border shadow-card">
              <p className="text-muted-foreground">Business settings and integrations coming soon...</p>
            </div>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dashboard flex">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1 p-6">
        {renderView()}
      </main>
    </div>
  );
};

export default Index;