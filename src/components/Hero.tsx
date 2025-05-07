
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/utforska?search=${encodeURIComponent(searchQuery)}&gäster=${guestCount}`);
  };

  return (
    <div className="relative bg-gradient-to-r from-brand-700 to-brand-500 text-white">
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      <div className="container-custom relative py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Hitta Ditt Perfekta Kontorsutrymme
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-10">
          Upptäck och boka lediga kontorsplatser nära dig
        </p>
        
        <form 
          onSubmit={handleSearch}
          className="w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-200">
              <MapPin className="h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Stad, område eller adress"
                className="flex-1 h-14 text-gray-900 border-none focus-visible:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex h-14 border-r border-gray-200 px-4">
              <Select value={guestCount} onValueChange={setGuestCount}>
                <SelectTrigger className="border-none h-full focus:ring-0 w-[140px]">
                  <SelectValue placeholder="Antal gäster" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 gäst</SelectItem>
                  <SelectItem value="2">2 gäster</SelectItem>
                  <SelectItem value="3">3 gäster</SelectItem>
                  <SelectItem value="4">4 gäster</SelectItem>
                  <SelectItem value="5">5+ gäster</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit"
              size="lg" 
              className="bg-brand-600 hover:bg-brand-700 h-14 rounded-none px-8"
            >
              <Search className="mr-2 h-5 w-5" />
              Sök
            </Button>
          </div>
        </form>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <span className="font-bold mr-2">5,000+</span> Kontorsutrymmen
          </div>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <span className="font-bold mr-2">100+</span> Städer
          </div>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <span className="font-bold mr-2">10,000+</span> Nöjda Användare
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
