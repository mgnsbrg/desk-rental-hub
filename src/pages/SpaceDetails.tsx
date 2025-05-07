
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSpaceById } from "@/data/spaces";
import { Space } from "@/types";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Star, Users, Calendar as CalendarIcon, CheckCircle, ChevronRight, InfoIcon } from "lucide-react";
import { addDays } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const SpaceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [space, setSpace] = useState<Space | null>(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [seats, setSeats] = useState(1);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  
  useEffect(() => {
    if (!id) return;
    
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const spaceData = getSpaceById(id);
      setSpace(spaceData || null);
      setLoading(false);
    }, 500);
  }, [id]);
  
  const handleBooking = () => {
    // Simulate booking process
    console.log("Booking:", { space, date, seats });
    setShowBookingSuccess(true);
  };
  
  const calculateTotalPrice = () => {
    if (!space) return 0;
    return space.price * seats;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-600"></div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!space) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Space not found</h2>
          <p className="text-gray-600 mb-6">The workspace you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/browse">Browse Spaces</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-brand-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
          <Link to="/browse" className="text-gray-500 hover:text-brand-600">Browse</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
          <span className="text-gray-900 font-medium">{space.title}</span>
        </div>
        
        {/* Image Gallery */}
        <div className="relative mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {space.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${space.title} - image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                <span>
                  {space.location.address}, {space.location.city}, {space.location.state}, {space.location.country}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold">{space.title}</h1>
              
              <div className="flex items-center mt-2 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-medium">{space.rating}</span>
                  <span className="text-gray-500 ml-1">
                    ({space.reviewCount} reviews)
                  </span>
                </div>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-gray-500" />
                  <span>
                    <span className="font-medium">{space.availableSeats}</span> of {space.capacity} seats available
                  </span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">About This Space</h2>
              <p className="text-gray-700 leading-relaxed">{space.description}</p>
            </div>
            
            {/* Host Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Hosted by</h2>
              <div className="flex items-center">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={space.hostAvatar} alt={space.hostName} />
                  <AvatarFallback>{space.hostName.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="font-medium">{space.hostName}</h3>
                </div>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                {space.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-600 mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reviews Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">Reviews</h2>
                <Badge variant="secondary" className="font-medium">
                  <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
                  {space.rating} · {space.reviewCount} reviews
                </Badge>
              </div>
              
              <div className="space-y-5">
                {/* Mock reviews - in a real app, these would come from an API */}
                <div className="border-b pb-5">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Jane Doe</p>
                      <p className="text-gray-500 text-sm">2 weeks ago</p>
                    </div>
                    <div className="ml-auto flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${
                            star <= 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Great space with all the amenities I needed. The location was perfect and the host was very responsive.
                  </p>
                </div>
                
                <div className="border-b pb-5">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback>MM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Michael Miller</p>
                      <p className="text-gray-500 text-sm">1 month ago</p>
                    </div>
                    <div className="ml-auto flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star 
                          key={star} 
                          className="h-4 w-4 text-yellow-500 fill-yellow-500" 
                        />
                      ))}
                      {[5].map((star) => (
                        <Star 
                          key={star} 
                          className="h-4 w-4 text-gray-300" 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">
                    The WiFi was a bit spotty at times, but otherwise this was a comfortable workspace with a nice view.
                  </p>
                </div>
                
                <Button variant="outline" className="w-full">
                  View All {space.reviewCount} Reviews
                </Button>
              </div>
            </div>
          </div>
          
          {/* Booking Card */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Book this space</CardTitle>
                <CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${space.price}/{space.priceUnit}</span>
                    <Badge variant="outline">
                      {space.availableSeats} seats available
                    </Badge>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? date.toDateString() : "Pick a date"}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Select Date</DialogTitle>
                          <DialogDescription>
                            Choose when you'd like to use the workspace
                          </DialogDescription>
                        </DialogHeader>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Number of Seats</label>
                    <Select defaultValue="1" onValueChange={(value) => setSeats(parseInt(value))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select seats" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: space.availableSeats }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "seat" : "seats"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col">
                <div className="w-full mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>${space.price} x {seats} {seats === 1 ? "seat" : "seats"}</span>
                    <span>${calculateTotalPrice()}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${calculateTotalPrice()}</span>
                  </div>
                </div>
                
                <Dialog open={showBookingSuccess} onOpenChange={setShowBookingSuccess}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-brand-600 hover:bg-brand-700" onClick={handleBooking}>
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Booking Confirmed!</DialogTitle>
                      <DialogDescription>
                        Your workspace has been successfully booked.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="rounded-lg bg-green-50 text-green-700 p-4 flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Booking details:</p>
                          <ul className="mt-2 text-sm space-y-1">
                            <li><strong>Space:</strong> {space.title}</li>
                            <li><strong>Date:</strong> {date?.toDateString()}</li>
                            <li><strong>Seats:</strong> {seats}</li>
                            <li><strong>Total:</strong> ${calculateTotalPrice()}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button asChild>
                        <Link to="/">Return to Home</Link>
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <div className="flex items-center justify-center text-xs text-gray-500 mt-2">
                  <InfoIcon className="h-3 w-3 mr-1" />
                  You won't be charged yet
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SpaceDetails;
