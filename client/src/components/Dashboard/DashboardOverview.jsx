import { DashboardCard } from "./DashboardCard";
import { Calendar, DollarSign, Package, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const mockData = {
  revenue: "$12,450",
  revenueChange: 12.5,
  appointments: "47",
  appointmentChange: 8.2,
  inventory: "234",
  inventoryChange: -2.1,
  customers: "89",
  customerChange: 15.3,
};

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="border-0 shadow-elevated overflow-hidden">
        <div className="relative h-48 bg-gradient-primary flex items-center justify-center">
          <img 
            src={dashboardHero} 
            alt="Business Management Dashboard" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative text-center text-primary-foreground">
            <h1 className="text-3xl font-bold mb-2">Welcome to BizSpark</h1>
            <p className="text-lg opacity-90">Your complete business management solution</p>
          </div>
        </div>
      </Card>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Revenue"
          value={mockData.revenue}
          change={mockData.revenueChange}
          icon={DollarSign}
          variant="success"
        />
        <DashboardCard
          title="Appointments"
          value={mockData.appointments}
          change={mockData.appointmentChange}
          icon={Calendar}
          variant="warning"
        />
        <DashboardCard
          title="Inventory Items"
          value={mockData.inventory}
          change={mockData.inventoryChange}
          icon={Package}
          variant="info"
        />
        <DashboardCard
          title="Active Customers"
          value={mockData.customers}
          change={mockData.customerChange}
          icon={Users}
          variant="default"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-card hover:shadow-elevated transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-warning" />
              Today's Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Hair Cut - Sarah J.</span>
                <span className="text-xs text-muted-foreground">10:00 AM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Consultation - Mike R.</span>
                <span className="text-xs text-muted-foreground">2:30 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Service - Lisa M.</span>
                <span className="text-xs text-muted-foreground">4:00 PM</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-elevated transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-info" />
              Low Stock Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Hair Shampoo</span>
                <span className="text-xs text-destructive">3 left</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Conditioner</span>
                <span className="text-xs text-warning">8 left</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Styling Gel</span>
                <span className="text-xs text-warning">5 left</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-elevated transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-accent" />
              Recent Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Sarah Johnson</span>
                <span className="text-xs text-accent">+$85</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Mike Roberts</span>
                <span className="text-xs text-accent">+$120</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Lisa Martinez</span>
                <span className="text-xs text-accent">+$95</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};