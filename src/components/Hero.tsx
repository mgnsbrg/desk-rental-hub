
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="relative bg-gradient-to-r from-brand-700 to-brand-500 text-white">
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      <div className="container-custom relative py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Find Your Perfect Workspace
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-10">
          Discover and book available desks and office spaces near you
        </p>
        
        <form 
          onSubmit={handleSearch}
          className="w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-xl flex"
        >
          <Input
            type="text"
            placeholder="City, neighborhood, or address"
            className="flex-1 h-14 text-gray-900 border-none focus-visible:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button 
            type="submit"
            size="lg" 
            className="bg-brand-600 hover:bg-brand-700 h-14 rounded-none px-8"
          >
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </form>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <span className="font-bold mr-2">5,000+</span> Workspaces
          </div>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <span className="font-bold mr-2">100+</span> Cities
          </div>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <span className="font-bold mr-2">10,000+</span> Happy Users
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
