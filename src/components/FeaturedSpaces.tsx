
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getFeaturedSpaces } from "@/data/spaces";
import { Space } from "@/types";
import SpaceCard from "./SpaceCard";

const FeaturedSpaces = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const featuredSpaces = getFeaturedSpaces();
    setSpaces(featuredSpaces);
  }, []);
  
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Workspaces</h2>
            <p className="text-gray-600 mt-1">Discover our handpicked selection of exceptional office spaces</p>
          </div>
          <Link 
            to="/browse" 
            className="hidden md:flex items-center text-brand-600 hover:text-brand-700 font-medium"
          >
            View all spaces
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <SpaceCard key={space.id} space={space} featured={true} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/browse" 
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium"
          >
            View all spaces
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpaces;
