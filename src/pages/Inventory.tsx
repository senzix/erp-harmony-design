
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Package, AlertTriangle } from "lucide-react";

const mockInventoryData = [
  {
    id: 1,
    item: "Asphalt Shingles",
    quantity: 1500,
    unit: "pieces",
    status: "In Stock",
    reorderPoint: 500,
  },
  {
    id: 2,
    item: "Metal Roofing Panels",
    quantity: 200,
    unit: "sheets",
    status: "Low Stock",
    reorderPoint: 250,
  },
  {
    id: 3,
    item: "Roofing Nails",
    quantity: 25000,
    unit: "pieces",
    status: "In Stock",
    reorderPoint: 10000,
  },
  {
    id: 4,
    item: "Underlayment Rolls",
    quantity: 45,
    unit: "rolls",
    status: "In Stock",
    reorderPoint: 30,
  },
  {
    id: 5,
    item: "Flashing Material",
    quantity: 100,
    unit: "pieces",
    status: "Critical",
    reorderPoint: 150,
  },
];

const Inventory = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">Inventory Management</h1>
              <p className="text-muted-foreground mt-2">Track and manage your roofing materials inventory.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-6 glass-card animate-in">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Total Items</h3>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-card animate-in">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Low Stock Items</h3>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 glass-card animate-in">
              <h2 className="text-lg font-semibold mb-4">Inventory List</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Unit</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Reorder Point</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockInventoryData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.item}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === "In Stock"
                                ? "bg-green-100 text-green-700"
                                : item.status === "Low Stock"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell>{item.reorderPoint}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Inventory;
