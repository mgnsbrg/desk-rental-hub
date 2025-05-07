
export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  avatar?: string;
  isVerified?: boolean;
  isHost?: boolean;
};

export type Office = {
  id: string;
  title: string;
  description: string;
  price: number;
  priceUnit: 'dag' | 'vecka' | 'månad';
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  amenities: string[];
  images: string[];
  capacity: number;
  availableSeats: number;
  hostId: string;
  hostName: string;
  hostAvatar?: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  officeType: 'samarbetsplats' | 'kontorsplats' | 'helt kontor';
  dynamicPricing?: {
    weekendRate?: number;
    weekdayRate?: number;
    seasonalRates?: {
      season: 'vår' | 'sommar' | 'höst' | 'vinter';
      rate: number;
    }[];
  };
};

export type Booking = {
  id: string;
  officeId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  guestCount: number;
  status: 'väntande' | 'bekräftad' | 'avbokad';
  paymentStatus: 'obetald' | 'betald' | 'återbetald';
};

export type Review = {
  id: string;
  officeId: string;
  userId: string;
  rating: number;
  comment: string;
  date: Date;
  categories?: {
    location: number;
    cleanliness: number;
    communication: number;
    value: number;
  };
};

export type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  bookingId?: string;
};

export type SearchFilters = {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  minCapacity?: number;
  amenities?: string[];
  startDate?: Date;
  endDate?: Date;
  officeType?: ('samarbetsplats' | 'kontorsplats' | 'helt kontor')[];
};

export type Notification = {
  id: string;
  userId: string;
  type: 'bokning' | 'meddelande' | 'omdöme' | 'påminnelse';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  link?: string;
  bookingId?: string;
};
