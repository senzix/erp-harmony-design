
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
import { Package, AlertTriangle, DollarSign, ArrowDownUp, Boxes } from "lucide-react";

const mockInventoryData = [
  {
    id: 1,
    item: "Asphalt Shingles",
    quantity: 1500,
    unit: "pieces",
    unitPrice: 15.99,
    status: "In Stock",
    reorderPoint: 500,
    location: "Warehouse A",
    lastUpdated: "2024-03-15",
  },
  {
    id: 2,
    item: "Metal Roofing Panels",
    quantity: 200,
    unit: "sheets",
    unitPrice: 45.50,
    status: "Low Stock",
    reorderPoint: 250,
    location: "Warehouse B",
    lastUpdated: "2024-03-14",
  },
  {
    id: 3,
    item: "Roofing Nails",
    quantity: 25000,
    unit: "pieces",
    unitPrice: 0.10,
    status: "In Stock",
    reorderPoint: 10000,
    location: "Warehouse A",
    lastUpdated: "2024-03-13",
  },
  {
    id: 4,
    item: "Underlayment Rolls",
    quantity: 45,
    unit: "rolls",
    unitPrice: 89.99,
    status: "In Stock",
    reorderPoint: 30,
    location: "Warehouse A",
    lastUpdated: "2024-03-12",
  },
  {
    id: 5,
    item: "Flashing Material",
    quantity: 100,
    unit: "pieces",
    unitPrice: 12.75,
    status: "Critical",
    reorderPoint: 150,
    location: "Warehouse B",
    lastUpdated: "2024-03-11",
  },
];

const Inventory = () => {
  // Calculate total inventory value
  const totalValue = mockInventoryData.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  // Count items by status
  const lowStockCount = mockInventoryData.filter(
    (item) => item.status === "Low Stock" || item.status === "Critical"
  ).length;

  // Calculate total unique items
  const totalItems = mockInventoryData.length;

  // Calculate total quantity across all items
  const totalQuantity = mockInventoryData.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6 glass-card animate-in">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Total Items</h3>
                    <p className="text-2xl font-bold">{totalItems}</p>
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
                    <p className="text-2xl font-bold">{lowStockCount}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-card animate-in">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Total Value</h3>
                    <p className="text-2xl font-bold">${totalValue.toFixed(2)}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-card animate-in">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Boxes className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Total Quantity</h3>
                    <p className="text-2xl font-bold">{totalQuantity}</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 glass-card animate-in">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Inventory List</h2>
                <div className="flex items-center gap-2">
                  <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Sort</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Unit</TableHead>
                      <TableHead>Unit Price</TableHead>
                      <TableHead>Total Value</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Last Updated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockInventoryData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.item}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>${item.unitPrice.toFixed(2)}</TableCell>
                        <TableCell>${(item.quantity * item.unitPrice).toFixed(2)}</TableCell>
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
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
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
