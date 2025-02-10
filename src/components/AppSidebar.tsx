
import { Home, BarChart3, Users, Settings, Package, Calendar, Building2, DollarSign, UserCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Building2, label: "Projects", href: "/projects" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "Employees", href: "/employees" },
  { icon: UserCircle, label: "Customers", href: "/customers" },
  { icon: Package, label: "Inventory", href: "/inventory" },
  { icon: Calendar, label: "Schedule", href: "/schedule" },
  { icon: DollarSign, label: "Payroll", href: "/payroll" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function AppSidebar() {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <Sidebar className={isMobile ? "w-[240px]" : "w-[280px]"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild data-state={location.pathname === item.href ? "active" : "inactive"}>
                    <Link to={item.href} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
