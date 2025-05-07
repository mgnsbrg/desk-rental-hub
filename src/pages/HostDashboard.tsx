import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Building,
  Calendar,
  CreditCard,
  MessageSquare,
  User,
  Settings,
  Plus,
  ChevronRight,
  Clock,
  Edit,
  Eye,
  BarChart,
  DollarSign,
  Users,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Chart } from "@/components/ui/chart";

const HostDashboard = () => {
  const [activeTab, setActiveTab] = useState("statistik");

  // Dummy data för statistik
  const monthlyRevenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 2000 },
    { month: "Apr", revenue: 2780 },
    { month: "Maj", revenue: 1890 },
    { month: "Jun", revenue: 2390 },
    { month: "Jul", revenue: 3490 },
    { month: "Aug", revenue: 3490 },
    { month: "Sep", revenue: 3490 },
    { month: "Okt", revenue: 3490 },
    { month: "Nov", revenue: 3490 },
    { month: "Dec", revenue: 3490 },
  ];

  const bookingStatsData = [
    { name: "Jan", antal: 20 },
    { name: "Feb", antal: 35 },
    { name: "Mar", antal: 15 },
    { name: "Apr", antal: 40 },
    { name: "Maj", antal: 25 },
  ];

  const totalRevenue = monthlyRevenueData.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalBookings = bookingStatsData.reduce((acc, curr) => acc + curr.antal, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-gray-50 py-8">
          <div className="container-custom">
            <h1 className="text-2xl md:text-3xl font-bold">Värd Dashboard</h1>
            <p className="text-gray-600 mt-2">Hantera dina kontorsutrymmen och bokningar</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="container-custom py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="statistik">Statistik</TabsTrigger>
              <TabsTrigger value="kontorsutrymmen">Kontorsutrymmen</TabsTrigger>
              <TabsTrigger value="bokningar">Bokningar</TabsTrigger>
              <TabsTrigger value="profil">Profil</TabsTrigger>
            </TabsList>
            <Separator className="my-4" />

            {/* Statistik Tab */}
            <TabsContent value="statistik" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      Totala Intäkter
                    </CardTitle>
                    <CardDescription>Sedan start</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">SEK {totalRevenue}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-gray-500" />
                      Antal Kontorsutrymmen
                    </CardTitle>
                    <CardDescription>Dina listade utrymmen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/lista-kontor" className="text-brand-600 hover:text-brand-700 flex items-center">
                      Lägg till nytt <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      Totala Bokningar
                    </CardTitle>
                    <CardDescription>Antal genomförda bokningar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalBookings}</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Månatliga Intäkter</CardTitle>
                  <CardDescription>Intäkter per månad under det senaste året</CardDescription>
                </CardHeader>
                <CardContent>
                  <Chart
                    data={monthlyRevenueData}
                    x={(d) => d.month}
                    y={(d) => d.revenue}
                    height={300}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bokningsstatistik</CardTitle>
                  <CardDescription>Antal bokningar per månad</CardDescription>
                </CardHeader>
                <CardContent>
                  <Chart
                    data={bookingStatsData}
                    x={(d) => d.name}
                    y={(d) => d.antal}
                    height={300}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Kontorsutrymmen Tab */}
            <TabsContent value="kontorsutrymmen">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Exempel på ett kontorsutrymme - Loopa igenom dina kontorsutrymmen här */}
                <Card>
                  <CardHeader>
                    <CardTitle>Modernt Kontorsutrymme</CardTitle>
                    <CardDescription>Stockholm, Teknikgatan 123</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div className="mt-2">
                      <Badge variant="secondary">Kontorsplats</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <Clock className="mr-1 inline-block h-4 w-4" /> Senast uppdaterad: 2023-11-15
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="mr-2 h-4 w-4" /> Redigera
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Eye className="mr-2 h-4 w-4" /> Visa
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                {/* ... fler kontorsutrymmen */}
              </div>
              <Button asChild className="mt-4">
                <Link to="/lista-kontor" className="flex items-center">
                  <Plus className="mr-2 h-4 w-4" /> Lägg till nytt kontorsutrymme
                </Link>
              </Button>
            </TabsContent>

            {/* Bokningar Tab */}
            <TabsContent value="bokningar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Exempel på en bokning - Loopa igenom dina bokningar här */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bokning #12345</CardTitle>
                    <CardDescription>Bokat av Användare #789</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <User className="mr-1 inline-block h-4 w-4" /> Användarnamn: Johan Karlsson
                    </p>
                    <p>
                      <Building className="mr-1 inline-block h-4 w-4" /> Kontorsnamn: Kreativa Kontoret
                    </p>
                    <p>
                      <Calendar className="mr-1 inline-block h-4 w-4" /> Datum: 2023-12-01 till 2023-12-05
                    </p>
                    <p>
                      <CreditCard className="mr-1 inline-block h-4 w-4" /> Betalningsstatus: <CheckCircle className="inline-block h-4 w-4 text-green-500" /> Betald
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" /> Kontakta Användare
                    </Button>
                  </CardFooter>
                </Card>
                {/* ... fler bokningar */}
              </div>
            </TabsContent>

            {/* Profil Tab */}
            <TabsContent value="profil">
              <Card>
                <CardHeader>
                  <CardTitle>Din Profil</CardTitle>
                  <CardDescription>Hantera din värdprofil</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://randomuser.me/api/portraits/men/88.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">John Doe</p>
                      <p className="text-sm text-gray-500">john.doe@example.com</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <Users className="mr-2 inline-block h-4 w-4" /> Företagsnamn: Tech Solutions AB
                    </p>
                    <p className="text-gray-700">
                      <Settings className="mr-2 inline-block h-4 w-4" /> Kontoinställningar
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Edit className="mr-2 h-4 w-4" /> Redigera Profil
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HostDashboard;
