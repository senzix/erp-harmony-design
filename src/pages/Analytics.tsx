
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, expenses: 2400 },
  { name: 'Feb', sales: 3000, expenses: 1398 },
  { name: 'Mar', sales: 2000, expenses: 9800 },
  { name: 'Apr', sales: 2780, expenses: 3908 },
  { name: 'May', sales: 1890, expenses: 4800 },
  { name: 'Jun', sales: 2390, expenses: 3800 },
];

const Analytics = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">Analytics Overview</h1>
              <p className="text-muted-foreground mt-2">Track your business performance and metrics.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 glass-card animate-in">
                <h2 className="text-lg font-semibold mb-4">Revenue vs Expenses</h2>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="sales" stroke="#16a34a" name="Sales" />
                      <Line type="monotone" dataKey="expenses" stroke="#dc2626" name="Expenses" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6 glass-card animate-in">
                <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
                <div className="space-y-4">
                  {data.map((month) => (
                    <div key={month.name} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                      <span className="font-medium">{month.name}</span>
                      <div className="flex gap-4">
                        <span className="text-emerald-600">${month.sales}</span>
                        <span className="text-red-600">${month.expenses}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
