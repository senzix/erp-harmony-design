
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";

const Settings = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">Settings</h1>
              <p className="text-muted-foreground mt-2">Configure your application preferences.</p>
            </div>
            <Card className="p-6 glass-card animate-in">
              <h2 className="text-lg font-semibold">Coming Soon</h2>
              <p className="text-muted-foreground mt-2">This module is under development.</p>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
