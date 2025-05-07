
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getFeaturedSpaces } from "@/data/spaces";
import { Office } from "@/types";
import OfficeCard from "./OfficeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturedSpaces = () => {
  const [offices, setOffices] = useState<Office[]>([]);
  const [activeTab, setActiveTab] = useState("alla");
  
  useEffect(() => {
    // In a real app, this would be an API call
    const featuredSpaces = getFeaturedSpaces();
    setOffices(featuredSpaces);
  }, []);
  
  // Filter offices based on the selected tab
  const filteredOffices = activeTab === "alla"
    ? offices
    : offices.filter(office => office.officeType === activeTab);
  
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Populära Kontorsutrymmen</h2>
            <p className="text-gray-600 mt-1">Upptäck vårt handplockade urval av exceptionella kontorsutrymmen</p>
          </div>
          <Link 
            to="/utforska" 
            className="hidden md:flex items-center text-brand-600 hover:text-brand-700 font-medium mt-4 md:mt-0"
          >
            Visa alla kontor
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <Tabs defaultValue="alla" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="w-full max-w-md mx-auto">
            <TabsTrigger value="alla" className="flex-1">Alla</TabsTrigger>
            <TabsTrigger value="samarbetsplats" className="flex-1">Co-working</TabsTrigger>
            <TabsTrigger value="kontorsplats" className="flex-1">Kontorsplatser</TabsTrigger>
            <TabsTrigger value="helt kontor" className="flex-1">Hela Kontor</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffices.map((office) => (
            <OfficeCard key={office.id} office={office} featured={true} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/utforska" 
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium"
          >
            Visa alla kontor
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpaces;
