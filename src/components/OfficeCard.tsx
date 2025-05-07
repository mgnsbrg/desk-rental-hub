
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Users } from "lucide-react";
import { Office } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OfficeCardProps {
  office: Office;
  featured?: boolean;
}

const OfficeCard = ({ office, featured }: OfficeCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const officeTypeLabel = {
    'samarbetsplats': 'Co-working',
    'kontorsplats': 'Kontorsplats',
    'helt kontor': 'Helt kontor'
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        {/* Image Carousel */}
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={office.images[currentImageIndex]} 
            alt={office.title}
            className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
          />
          
          {/* Image Navigation Dots */}
          {office.images.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {office.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index ? "bg-white" : "bg-white/60"
                  }`}
                  aria-label={`Visa bild ${index + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Price Badge */}
          <div className="absolute top-2 right-2">
            <Badge className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-2 py-1">
              {office.price} kr/{office.priceUnit}
            </Badge>
          </div>
          
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-2 py-1">
                Populär
              </Badge>
            </div>
          )}
          
          {/* Office Type Badge */}
          <div className="absolute bottom-2 right-2">
            <Badge variant="outline" className="bg-white/80 text-gray-800 font-medium">
              {officeTypeLabel[office.officeType]}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          {/* Location */}
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
            <span>
              {office.location.city}, {office.location.state}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-semibold line-clamp-1 mb-1">
            {office.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {office.description}
          </p>
          
          {/* Available Seats */}
          <div className="flex items-center text-sm font-medium">
            <Users className="h-4 w-4 mr-1 text-brand-500" />
            <span>
              <span className="text-brand-600">{office.availableSeats}</span> av {office.capacity} platser tillgängliga
            </span>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex items-center justify-between border-t border-gray-100">
          {/* Rating */}
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium">{office.rating}</span>
            <span className="text-gray-500 text-sm ml-1">
              ({office.reviewCount} omdömen)
            </span>
          </div>
          
          {/* Book Link */}
          <Link
            to={`/kontor/${office.id}`}
            className="text-brand-600 hover:text-brand-700 font-medium text-sm"
          >
            Visa Detaljer
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default OfficeCard;
