
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SearchFiltersProps {
  onSearch: (filters: {
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    minCapacity?: number;
    amenities?: string[];
  }) => void;
}

const commonAmenities = [
  "High-speed WiFi",
  "Meeting rooms",
  "Kitchen",
  "24/7 access",
  "Standing desks",
  "Printing services",
  "Coffee bar",
  "Bike storage",
  "Parking",
];

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [minSeats, setMinSeats] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };
  
  const applyFilters = () => {
    onSearch({
      search: searchTerm,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minCapacity: minSeats,
      amenities: selectedAmenities.length ? selectedAmenities : undefined,
    });
  };
  
  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setPriceRange([0, 50]);
    setMinSeats(1);
    setSelectedAmenities([]);
    onSearch({});
  };
  
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="container-custom py-4">
        {/* Desktop Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by location, space name or description"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Mobile Filter Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  {/* Mobile Price Filter */}
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Price Range</h3>
                    <Slider
                      value={priceRange}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  {/* Mobile Capacity Filter */}
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Minimum Seats</h3>
                    <Slider
                      value={[minSeats]}
                      min={1}
                      max={20}
                      step={1}
                      onValueChange={(value) => setMinSeats(value[0])}
                    />
                    <div className="mt-2 text-sm text-gray-600">
                      <span>At least {minSeats} seats</span>
                    </div>
                  </div>
                  
                  {/* Mobile Amenities Filter */}
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Amenities</h3>
                    <div className="space-y-2">
                      {commonAmenities.map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox
                            id={`mobile-${amenity}`}
                            checked={selectedAmenities.includes(amenity)}
                            onCheckedChange={() => toggleAmenity(amenity)}
                          />
                          <Label htmlFor={`mobile-${amenity}`}>{amenity}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={clearFilters}
                    >
                      Clear Filters
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        applyFilters();
                        document.body.click(); // Close the sheet
                      }}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Desktop Filter Options */}
          <div className="hidden md:flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Price:</span>
              <div className="w-48">
                <Slider
                  value={priceRange}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Min Seats:</span>
              <div className="w-24">
                <Slider
                  value={[minSeats]}
                  min={1}
                  max={20}
                  step={1}
                  onValueChange={(value) => setMinSeats(value[0])}
                />
                <div className="text-center text-xs text-gray-500">
                  {minSeats}+
                </div>
              </div>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="text-sm">
                  Amenities ({selectedAmenities.length})
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Amenities</SheetTitle>
                </SheetHeader>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  {commonAmenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={`desktop-${amenity}`}
                        checked={selectedAmenities.includes(amenity)}
                        onCheckedChange={() => toggleAmenity(amenity)}
                      />
                      <Label htmlFor={`desktop-${amenity}`}>{amenity}</Label>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <Button
                    onClick={() => {
                      applyFilters();
                      document.body.click(); // Close the sheet
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            
            <Button type="button" variant="ghost" onClick={clearFilters} className="text-sm">
              Clear
            </Button>
          </div>
          
          <Button type="submit">Search</Button>
        </form>
      </div>
    </div>
  );
};

export default SearchFilters;
