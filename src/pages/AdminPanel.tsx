import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import {
  Users,
  Building,
  CreditCard,
  LineChart,
  Settings,
  MoreVertical,
  Edit,
  Trash,
  ShieldAlert,
  Star,
  Eye,
  Search,
  Check,
  X,
  Bell,
  CheckCircle,
  Filter,
  Mail,
  Phone,
  MessageSquare
} from "lucide-react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("users");
  const { toast } = useToast();

  const sampleUsers = [
    {
      id: "user-1",
      name: "Erik Johansson",
      email: "erik.johansson@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-03-15",
    },
    {
      id: "user-2",
      name: "Anna Svensson",
      email: "anna.svensson@example.com",
      role: "Host",
      status: "Inactive",
      lastLogin: "2024-03-10",
    },
    {
      id: "user-3",
      name: "Kalle Karlsson",
      email: "kalle.karlsson@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2024-03-20",
    },
  ];

  const sampleOffices = [
    {
      id: "office-1",
      name: "TechHub Stockholm",
      location: "Stockholm",
      capacity: 50,
      status: "Active",
      rating: 4.5,
    },
    {
      id: "office-2",
      name: "Creative Studio Göteborg",
      location: "Göteborg",
      capacity: 30,
      status: "Pending",
      rating: 4.2,
    },
    {
      id: "office-3",
      name: "Office Space Malmö",
      location: "Malmö",
      capacity: 20,
      status: "Inactive",
      rating: 4.8,
    },
  ];

  const sampleBookings = [
    {
      id: "booking-1",
      user: "Erik Johansson",
      office: "TechHub Stockholm",
      date: "2024-03-22",
      status: "Confirmed",
      amount: 2500,
    },
    {
      id: "booking-2",
      user: "Anna Svensson",
      office: "Creative Studio Göteborg",
      date: "2024-03-25",
      status: "Pending",
      amount: 1800,
    },
    {
      id: "booking-3",
      user: "Kalle Karlsson",
      office: "Office Space Malmö",
      date: "2024-03-28",
      status: "Cancelled",
      amount: 1200,
    },
  ];

  const sampleReviews = [
    {
      id: "review-1",
      user: "Erik Johansson",
      office: "TechHub Stockholm",
      rating: 5,
      comment: "Great office space!",
      date: "2024-03-20",
    },
    {
      id: "review-2",
      user: "Anna Svensson",
      office: "Creative Studio Göteborg",
      rating: 4,
      comment: "Nice environment.",
      date: "2024-03-15",
    },
    {
      id: "review-3",
      user: "Kalle Karlsson",
      office: "Office Space Malmö",
      rating: 3,
      comment: "Could be better.",
      date: "2024-03-10",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="users">
              <Users className="mr-2 h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="offices">
              <Building className="mr-2 h-4 w-4" />
              Offices
            </TabsTrigger>
            <TabsTrigger value="bookings">
              <CreditCard className="mr-2 h-4 w-4" />
              Bookings
            </TabsTrigger>
            <TabsTrigger value="reviews">
              <Star className="mr-2 h-4 w-4" />
              Reviews
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <LineChart className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Users Management</CardTitle>
                <CardDescription>Manage users and their roles.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.id}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                user.status === "Active" ? "success" : user.status === "Inactive" ? "destructive" : "secondary"
                              }
                            >
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.lastLogin}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <ShieldAlert className="mr-2 h-4 w-4" />
                                  Ban User
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="offices">
            <Card>
              <CardHeader>
                <CardTitle>Offices Management</CardTitle>
                <CardDescription>Manage offices and their details.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Capacity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleOffices.map((office) => (
                        <TableRow key={office.id}>
                          <TableCell className="font-medium">{office.id}</TableCell>
                          <TableCell>{office.name}</TableCell>
                          <TableCell>{office.location}</TableCell>
                          <TableCell>{office.capacity}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                office.status === "Active" ? "success" : office.status === "Pending" ? "secondary" : "destructive"
                              }
                            >
                              {office.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{office.rating}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Bookings Management</CardTitle>
                <CardDescription>Manage bookings and their details.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Office</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell>{booking.user}</TableCell>
                          <TableCell>{booking.office}</TableCell>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                booking.status === "Confirmed" ? "success" : booking.status === "Pending" ? "secondary" : "destructive"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{booking.amount}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Check className="mr-2 h-4 w-4" />
                                  Confirm
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <X className="mr-2 h-4 w-4" />
                                  Cancel
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Reviews Management</CardTitle>
                <CardDescription>Manage reviews and their details.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Office</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Comment</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleReviews.map((review) => (
                        <TableRow key={review.id}>
                          <TableCell className="font-medium">{review.id}</TableCell>
                          <TableCell>{review.user}</TableCell>
                          <TableCell>{review.office}</TableCell>
                          <TableCell>{review.rating}</TableCell>
                          <TableCell>{review.comment}</TableCell>
                          <TableCell>{review.date}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Analyze data and trends to gain insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Total Users</CardTitle>
                      <CardDescription>
                        Number of registered users
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,450</div>
                      <div className="text-sm text-muted-foreground">
                        <span className="text-green-500">+20%</span> from last
                        month
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Total Offices</CardTitle>
                      <CardDescription>
                        Number of listed office spaces
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">320</div>
                      <div className="text-sm text-muted-foreground">
                        <span className="text-red-500">-5%</span> from last
                        month
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Total Bookings</CardTitle>
                      <CardDescription>
                        Number of confirmed bookings
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">875</div>
                      <div className="text-sm text-muted-foreground">
                        <span className="text-green-500">+15%</span> from last
                        month
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Configure application settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-medium leading-none">
                        Enable Notifications
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Send push notifications for new bookings and updates.
                      </p>
                    </div>
                    <Switch id="notifications" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-medium leading-none">
                        Dark Mode
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Enable dark mode for a better viewing experience.
                      </p>
                    </div>
                    <Switch id="dark-mode" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
