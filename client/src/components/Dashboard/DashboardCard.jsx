import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from 'lucide-react';
import { cn } from "@/lib/utils";

import PropTypes from "prop-types";

export const DashboardCard = ({ 
  title, 
  value, 
  change, 
  icon, // <-- add icon here
  variant = 'default',
  className 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
    case 'success':
      return 'border-accent/20 bg-accent/5';
    case 'warning':
      return 'border-warning/20 bg-warning/5';
    case 'info':
      return 'border-info/20 bg-info/5';
    default:
      return 'border-primary/20 bg-primary/5';
  }
};

const getIconStyles = () => {
  switch (variant) {
    case 'info':
      return 'text-info';
    default:
      return 'text-primary';
  }
};

  return (
    <>
      {/* Example usage, remove or move this line if not needed */}
       <DashboardCard title="Users" value="100" icon={<User />} /> 
      <Card className={cn("shadow-card", getVariantStyles(), className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {icon && <span className={cn("h-4 w-4", getIconStyles())}>{icon}</span>}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {change !== undefined && (
            <p className={cn(
              "text-xs",
              change >= 0 ? "text-accent" : "text-destructive"
            )}>
              {change >= 0 ? "+" : ""}{change}% from last month
            </p>
          )}
        </CardContent>
      </Card>
    </>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.number,
  icon: PropTypes.element.isRequired, // <-- change to element
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'info']),
  className: PropTypes.string,
};