
export type User = {
  id: string;
  name: string;
  email: string;
  company: string;
  avatar?: string;
};

export type Space = {
  id: string;
  title: string;
  description: string;
  price: number;
  priceUnit: 'day' | 'week' | 'month';
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
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
};

export type Booking = {
  id: string;
  spaceId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
};

export type SearchFilters = {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  minCapacity?: number;
  amenities?: string[];
  startDate?: Date;
  endDate?: Date;
};
