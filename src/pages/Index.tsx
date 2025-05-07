
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedSpaces from '@/components/FeaturedSpaces';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Search, 
  Calendar, 
  Users, 
  CheckCircle2 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Spaces */}
      <FeaturedSpaces />
      
      {/* How It Works Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">How It Works</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Find and book available office spaces in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-50 rounded-full p-4 mb-4">
                <Search className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Spaces</h3>
              <p className="text-gray-600">
                Browse through our collection of available workspaces based on your location and requirements.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-50 rounded-full p-4 mb-4">
                <Calendar className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Instantly</h3>
              <p className="text-gray-600">
                Choose your dates, select the number of seats you need, and book with just a few clicks.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-50 rounded-full p-4 mb-4">
                <Building className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Working</h3>
              <p className="text-gray-600">
                Arrive at your new workspace and enjoy a productive environment with all the amenities you need.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-brand-600 hover:bg-brand-700" size="lg" asChild>
              <a href="/browse">Find a Space</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="md:flex md:items-center md:justify-between md:space-x-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Smarter Way to Work
              </h2>
              <p className="text-gray-600 mb-6">
                DeskRentalHub connects businesses with unused office space to professionals who need a place to work. Our platform helps companies generate additional revenue from their empty desks while providing flexible workplace solutions.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0" />
                  <span>
                    <strong className="font-medium">Monetize Unused Space</strong>
                    <p className="text-gray-600 mt-1">
                      Turn your empty desks into revenue by renting them to professionals and teams.
                    </p>
                  </span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0" />
                  <span>
                    <strong className="font-medium">Flexible Options</strong>
                    <p className="text-gray-600 mt-1">
                      Rent by day, week, or month. Choose the arrangement that works for your business.
                    </p>
                  </span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0" />
                  <span>
                    <strong className="font-medium">Verified Users</strong>
                    <p className="text-gray-600 mt-1">
                      Our platform ensures all users are verified professionals you can trust.
                    </p>
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
                  alt="Office space" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-600 text-white py-12 md:py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to List Your Workspace?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join thousands of companies generating additional revenue by renting their unused office space on DeskRentalHub.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="/browse">Find a Space</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <a href="/list-space">List Your Space</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
