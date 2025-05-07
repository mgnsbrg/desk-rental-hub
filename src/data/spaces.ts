
import { Office } from '../types';

export const spaces: Office[] = [
  {
    id: "1",
    title: "Modernt kontorsutrymme i teknikhubb",
    description: "Ljust, öppet kontorsutrymme med 3 tillgängliga skrivbord i en livlig teknikhubb. Höghastighetsinternet, tillgång dygnet runt och gratis kaffe.",
    price: 250,
    priceUnit: "dag",
    location: {
      address: "123 Teknikgatan",
      city: "Stockholm",
      state: "Stockholm",
      country: "Sverige",
      coordinates: {
        lat: 59.334591,
        lng: 18.063240
      }
    },
    amenities: ["Höghastighets-WiFi", "Ståbord", "Mötesrum", "Kök", "Utskriftstjänster", "Tillgängligt dygnet runt"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    ],
    capacity: 10,
    availableSeats: 3,
    hostId: "101",
    hostName: "TechCorp AB",
    hostAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    reviewCount: 24,
    featured: true,
    officeType: "kontorsplats"
  },
  {
    id: "2",
    title: "Kreativ samarbetsplats i centrum",
    description: "Stilfull samarbetsplats i ett renoverat lager. Perfekt för kreativa personer och entreprenörer som söker en inspirerande miljö.",
    price: 200,
    priceUnit: "dag",
    location: {
      address: "456 Designvägen",
      city: "Göteborg",
      state: "Västra Götaland",
      country: "Sverige",
      coordinates: {
        lat: 57.708870,
        lng: 11.974560
      }
    },
    amenities: ["WiFi", "Kaffebar", "Loungeområde", "Cykelförvaring", "Eventsyta", "Duschmöjligheter"],
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174"
    ],
    capacity: 25,
    availableSeats: 8,
    hostId: "102",
    hostName: "Design Kollektivet",
    hostAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.6,
    reviewCount: 36,
    featured: true,
    officeType: "samarbetsplats"
  },
  {
    id: "3",
    title: "Exklusiv kontorssuite med stadsutsikt",
    description: "Premium kontorssuite med panoramautsikt över staden. Privat kontorsutrymme med tillgång till gemensamma bekvämligheter och konferensfaciliteter.",
    price: 450,
    priceUnit: "dag",
    location: {
      address: "789 Finansgatan",
      city: "Stockholm",
      state: "Stockholm",
      country: "Sverige",
      coordinates: {
        lat: 59.330650,
        lng: 18.068580
      }
    },
    amenities: ["Premium möbler", "Privat mötesrum", "Exklusiv lounge", "Posthantering", "IT-support", "Cateringalternativ"],
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174"
    ],
    capacity: 4,
    availableSeats: 2,
    hostId: "103",
    hostName: "Empire Offices AB",
    hostAvatar: "https://randomuser.me/api/portraits/men/59.jpg",
    rating: 4.9,
    reviewCount: 18,
    featured: true,
    officeType: "helt kontor"
  },
  {
    id: "4",
    title: "Startup-vänligt delat kontor",
    description: "Prisvärt delat utrymme perfekt för startups och små team. Samarbetsmiljö med alla väsentliga bekvämligheter.",
    price: 150,
    priceUnit: "dag",
    location: {
      address: "321 Innovationsvägen",
      city: "Malmö",
      state: "Skåne",
      country: "Sverige",
      coordinates: {
        lat: 55.605060,
        lng: 13.001610
      }
    },
    amenities: ["WiFi", "Delat kök", "White boards", "Gratis parkering", "Spelhörna", "Månatliga nätverksträffar"],
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    ],
    capacity: 20,
    availableSeats: 12,
    hostId: "104",
    hostName: "StartupHub",
    hostAvatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 4.5,
    reviewCount: 42,
    featured: false,
    officeType: "samarbetsplats"
  },
  {
    id: "5",
    title: "Lugnt förortskontor",
    description: "Lugnt kontorsutrymme i förortsmiljö. Fly från inner stadens jäkt men ha ändå tillgång till bra bekvämligheter.",
    price: 180,
    priceUnit: "dag",
    location: {
      address: "567 Pilvägen",
      city: "Uppsala",
      state: "Uppsala",
      country: "Sverige",
      coordinates: {
        lat: 59.858560,
        lng: 17.638730
      }
    },
    amenities: ["WiFi", "Gott om parkering", "Kaffe & te", "Utomhussittplatser", "Utskriftstjänster", "Mötesrum"],
    images: [
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
    ],
    capacity: 15,
    availableSeats: 5,
    hostId: "105",
    hostName: "WorkWell Spaces",
    hostAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4.7,
    reviewCount: 29,
    featured: false,
    officeType: "kontorsplats"
  },
  {
    id: "6",
    title: "Industriell loftkontorsmiljö",
    description: "Stilfull loftmiljö med industriell design. Öppen planlösning med dedikerade skrivbord och gott om naturligt ljus.",
    price: 220,
    priceUnit: "dag",
    location: {
      address: "890 Lagerområdet",
      city: "Stockholm",
      state: "Stockholm",
      country: "Sverige",
      coordinates: {
        lat: 59.305490,
        lng: 18.116440
      }
    },
    amenities: ["Höghastighets-WiFi", "Ståbord", "Loungeområde", "Öl på fat", "Telefonrum", "Eventsyta"],
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    ],
    capacity: 12,
    availableSeats: 4,
    hostId: "106",
    hostName: "Urban Workspaces",
    hostAvatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4.4,
    reviewCount: 16,
    featured: false,
    officeType: "kontorsplats"
  }
];

export const getFeaturedSpaces = (): Office[] => {
  return spaces.filter(space => space.featured);
};

export const filterSpaces = (filters: {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  minCapacity?: number;
  amenities?: string[];
  officeType?: string[];
}): Office[] => {
  return spaces.filter(space => {
    // Sökfiltrering
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const matchesSearch = 
        space.title.toLowerCase().includes(searchTerm) ||
        space.description.toLowerCase().includes(searchTerm) ||
        space.location.city.toLowerCase().includes(searchTerm) ||
        space.location.address.toLowerCase().includes(searchTerm);
      
      if (!matchesSearch) return false;
    }
    
    // Prisfiltrering
    if (filters.minPrice !== undefined && space.price < filters.minPrice) return false;
    if (filters.maxPrice !== undefined && space.price > filters.maxPrice) return false;
    
    // Kapacitetsfiltrering
    if (filters.minCapacity !== undefined && space.availableSeats < filters.minCapacity) return false;
    
    // Bekvämlighetssfiltrering
    if (filters.amenities && filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every(amenity => 
        space.amenities.some(a => a.toLowerCase().includes(amenity.toLowerCase()))
      );
      if (!hasAllAmenities) return false;
    }
    
    // Kontorstypsfiltrering
    if (filters.officeType && filters.officeType.length > 0) {
      if (!filters.officeType.includes(space.officeType)) return false;
    }
    
    return true;
  });
};
