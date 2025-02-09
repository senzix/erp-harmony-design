
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import { BarChart3, Users, Package, TrendingUp } from "lucide-react";

const QuickStats = () => {
  const stats = [
    { label: "Total Revenue", value: "$54,239", icon: TrendingUp, trend: "+14%" },
    { label: "Active Users", value: "2,834", icon: Users, trend: "+7.2%" },
    { label: "Inventory Items", value: "12,453", icon: Package, trend: "+2.4%" },
    { label: "Daily Sales", value: "384", icon: BarChart3, trend: "+4.9%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6 glass-card animate-in">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <h3 className="text-2xl font-semibold mt-2">{stat.value}</h3>
              <p className="text-sm font-medium text-emerald-600 mt-1">{stat.trend}</p>
            </div>
            <stat.icon className="h-5 w-5 text-muted-foreground" />
          </div>
        </Card>
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-semibold">Welcome back</h1>
              <p className="text-muted-foreground mt-2">Here's what's happening with your business today.</p>
            </div>
            <QuickStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 glass-card h-[400px] animate-in">
                <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                {/* Activity content will go here */}
              </Card>
              <Card className="p-6 glass-card h-[400px] animate-in">
                <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
                {/* Chart will go here */}
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
