
import { Space } from '../types';

export const spaces: Space[] = [
  {
    id: "1",
    title: "Modern Office Space in Tech Hub",
    description: "Bright, open-concept office space with 3 available desks in a bustling tech hub. High-speed internet, 24/7 access, and complimentary coffee.",
    price: 25,
    priceUnit: "day",
    location: {
      address: "123 Tech Lane",
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    amenities: ["High-speed WiFi", "Standing desks", "Meeting rooms", "Kitchen", "Printing services", "24/7 access"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    ],
    capacity: 10,
    availableSeats: 3,
    hostId: "101",
    hostName: "TechCorp Inc.",
    hostAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    reviewCount: 24,
    featured: true
  },
  {
    id: "2",
    title: "Creative Coworking Space Downtown",
    description: "Stylish coworking space in a renovated warehouse. Perfect for creatives and entrepreneurs looking for an inspiring environment.",
    price: 20,
    priceUnit: "day",
    location: {
      address: "456 Design Avenue",
      city: "Portland",
      state: "OR",
      country: "USA"
    },
    amenities: ["WiFi", "Coffee bar", "Lounge area", "Bike storage", "Events space", "Shower facilities"],
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174"
    ],
    capacity: 25,
    availableSeats: 8,
    hostId: "102",
    hostName: "Design Collective",
    hostAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.6,
    reviewCount: 36,
    featured: true
  },
  {
    id: "3",
    title: "Executive Office Suite with City Views",
    description: "Premium executive suite with panoramic city views. Private office space with access to shared amenities and conference facilities.",
    price: 45,
    priceUnit: "day",
    location: {
      address: "789 Financial District",
      city: "New York",
      state: "NY",
      country: "USA"
    },
    amenities: ["Premium furniture", "Private meeting room", "Executive lounge", "Mail handling", "IT support", "Catering options"],
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174"
    ],
    capacity: 4,
    availableSeats: 2,
    hostId: "103",
    hostName: "Empire Offices LLC",
    hostAvatar: "https://randomuser.me/api/portraits/men/59.jpg",
    rating: 4.9,
    reviewCount: 18,
    featured: true
  },
  {
    id: "4",
    title: "Startup-Friendly Shared Office",
    description: "Affordable shared space perfect for startups and small teams. Collaborative environment with all essential amenities.",
    price: 15,
    priceUnit: "day",
    location: {
      address: "321 Innovation Road",
      city: "Austin",
      state: "TX",
      country: "USA"
    },
    amenities: ["WiFi", "Shared kitchen", "White boards", "Free parking", "Game room", "Monthly networking events"],
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    ],
    capacity: 20,
    availableSeats: 12,
    hostId: "104",
    hostName: "Startup Hub",
    hostAvatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 4.5,
    reviewCount: 42,
    featured: false
  },
  {
    id: "5",
    title: "Quiet Suburban Office Space",
    description: "Peaceful office space in a suburban setting. Escape the hustle of downtown while still having access to great amenities.",
    price: 18,
    priceUnit: "day",
    location: {
      address: "567 Willow Lane",
      city: "Minneapolis",
      state: "MN",
      country: "USA"
    },
    amenities: ["WiFi", "Ample parking", "Coffee & tea", "Outdoor seating", "Printing services", "Meeting room"],
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
    featured: false
  },
  {
    id: "6",
    title: "Industrial Loft Workspace",
    description: "Stylish loft space with industrial design elements. Open plan with dedicated desks and plenty of natural light.",
    price: 22,
    priceUnit: "day",
    location: {
      address: "890 Warehouse District",
      city: "Chicago",
      state: "IL",
      country: "USA"
    },
    amenities: ["High-speed WiFi", "Standing desks", "Lounge area", "Beer on tap", "Phone booths", "Event space"],
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76"
    ],
    capacity: 30,
    availableSeats: 10,
    hostId: "106",
    hostName: "Urban Works",
    hostAvatar: "https://randomuser.me/api/portraits/women/74.jpg",
    rating: 4.7,
    reviewCount: 33,
    featured: true
  }
];

export const getSpaceById = (id: string): Space | undefined => {
  return spaces.find(space => space.id === id);
};

export const getFeaturedSpaces = (): Space[] => {
  return spaces.filter(space => space.featured);
};

export const filterSpaces = (filters: {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  minCapacity?: number;
  amenities?: string[];
}): Space[] => {
  return spaces.filter(space => {
    // Filter by search term
    if (filters.search && 
      !space.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      !space.description.toLowerCase().includes(filters.search.toLowerCase()) &&
      !space.location.city.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Filter by price range
    if (filters.minPrice !== undefined && space.price < filters.minPrice) {
      return false;
    }
    
    if (filters.maxPrice !== undefined && space.price > filters.maxPrice) {
      return false;
    }
    
    // Filter by capacity
    if (filters.minCapacity !== undefined && space.availableSeats < filters.minCapacity) {
      return false;
    }
    
    // Filter by amenities
    if (filters.amenities && filters.amenities.length > 0) {
      for (const amenity of filters.amenities) {
        if (!space.amenities.includes(amenity)) {
          return false;
        }
      }
    }
    
    return true;
  });
};
