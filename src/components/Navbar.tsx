
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-brand-600" />
            <span className="text-xl font-bold text-brand-600">DeskRentalHub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-600 font-medium">
              Home
            </Link>
            <Link to="/browse" className="text-gray-700 hover:text-brand-600 font-medium">
              Find Spaces
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-brand-600 font-medium">
              How It Works
            </Link>
            <Link to="/list-space" className="text-gray-700 hover:text-brand-600 font-medium">
              List Your Space
            </Link>
          </div>
          
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" className="border-brand-500 text-brand-600 hover:bg-brand-50">
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-brand-600 hover:bg-brand-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/browse" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Spaces
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/list-space" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                List Your Space
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-brand-500 text-brand-600">
                    Log In
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
