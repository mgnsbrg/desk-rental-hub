
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/SearchFilters";
import SpaceCard from "@/components/SpaceCard";
import { filterSpaces } from "@/data/spaces";
import { Space } from "@/types";

const Browse = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Extract search query from URL if present
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");
    
    // Simulate API call with initial search param
    setLoading(true);
    setTimeout(() => {
      const filteredSpaces = filterSpaces({ 
        search: searchQuery || undefined 
      });
      setSpaces(filteredSpaces);
      setLoading(false);
    }, 500);
  }, [location.search]);
  
  const handleSearch = (filters: {
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    minCapacity?: number;
    amenities?: string[];
  }) => {
    setLoading(true);
    setTimeout(() => {
      const filteredSpaces = filterSpaces(filters);
      setSpaces(filteredSpaces);
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
            <h1 className="text-2xl md:text-3xl font-bold">Find Your Perfect Workspace</h1>
            <p className="text-gray-600 mt-2">Browse through our collection of available office spaces</p>
          </div>
        </div>
        
        {/* Search Filters */}
        <SearchFilters onSearch={handleSearch} />
        
        {/* Results Section */}
        <div className="container-custom py-8">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-600"></div>
            </div>
          ) : spaces.length > 0 ? (
            <>
              <p className="text-gray-600 mb-6">Found {spaces.length} spaces</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {spaces.map((space) => (
                  <SpaceCard key={space.id} space={space} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No spaces found</h3>
              <p className="text-gray-600">
                Try adjusting your search filters to find more results.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Browse;
