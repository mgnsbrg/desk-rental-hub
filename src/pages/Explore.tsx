
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/SearchFilters";
import OfficeCard from "@/components/OfficeCard";
import { filterSpaces } from "@/data/spaces";
import { Office } from "@/types";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Explore = () => {
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const location = useLocation();
  
  // Extract search query from URL if present
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");
    const guestCount = queryParams.get("gäster");
    
    // Simulate API call with initial search param
    setLoading(true);
    setTimeout(() => {
      const filteredOffices = filterSpaces({ 
        search: searchQuery || undefined,
        minCapacity: guestCount ? parseInt(guestCount) : undefined
      });
      setOffices(filteredOffices);
      setLoading(false);
    }, 500);
  }, [location.search]);
  
  const handleSearch = (filters: {
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    minCapacity?: number;
    amenities?: string[];
    officeType?: string[];
  }) => {
    setLoading(true);
    setTimeout(() => {
      const filteredOffices = filterSpaces(filters);
      setOffices(filteredOffices);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-gray-50 py-8">
          <div className="container-custom">
            <h1 className="text-2xl md:text-3xl font-bold">Hitta Ditt Perfekta Kontorsutrymme</h1>
            <p className="text-gray-600 mt-2">Bläddra genom vårt utbud av tillgängliga kontorsutrymmen</p>
          </div>
        </div>
        
        {/* Search Filters */}
        <SearchFilters onSearch={handleSearch} />
        
        {/* View Toggle */}
        <div className="container-custom py-4 border-b">
          <div className="flex justify-between items-center">
            <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "grid" | "map")} className="w-full max-w-xs">
              <TabsList className="w-full">
                <TabsTrigger value="grid" className="flex-1">
                  Kortvy
                </TabsTrigger>
                <TabsTrigger value="map" className="flex-1">
                  Kartvy
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            {viewMode === "grid" && offices.length > 0 && (
              <p className="text-gray-600">Hittade {offices.length} kontor</p>
            )}
          </div>
        </div>
        
        {/* Results Section */}
        <div className="container-custom py-8">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-600"></div>
            </div>
          ) : offices.length > 0 ? (
            <>
              <TabsContent value="grid" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {offices.map((office) => (
                    <OfficeCard key={office.id} office={office} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="map" className="mt-0">
                <div className="bg-gray-200 rounded-lg h-[600px] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      Interaktiv karta med kontorsplaceringar kommer att visas här
                    </p>
                    <Button className="bg-brand-600 hover:bg-brand-700">
                      Visa Alla {offices.length} Kontor på Kartan
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Inga kontor hittades</h3>
              <p className="text-gray-600">
                Försök att justera dina sökfilter för att hitta fler resultat.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
