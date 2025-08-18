import { 
  Calendar, 
  Package, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  Home,
  Users,
  CreditCard
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * @param {{ activeView: string, onViewChange: (view: string) => void }} props
 */

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: Home },
  { id: 'appointments', name: 'Appointments', icon: Calendar },
  { id: 'inventory', name: 'Inventory', icon: Package },
  { id: 'customers', name: 'Customers', icon: Users },
  { id: 'communications', name: 'Communications', icon: MessageSquare },
  { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  { id: 'payments', name: 'Payments', icon: CreditCard },
  { id: 'settings', name: 'Settings', icon: Settings },
];

/**
 * Sidebar component for navigation.
 */
export const Sidebar = ({ activeView, onViewChange }) => {
  return (
    <div className="w-64 bg-card border-r border-border min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary">BizSpark</h1>
        <p className="text-sm text-muted-foreground">Business Management</p>
      </div>
      
      <nav className="px-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeView === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-10",
                activeView === item.id && "bg-primary text-primary-foreground"
              )}
              onClick={() => onViewChange(item.id)}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};