
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
            <span className="text-xl font-bold text-brand-600">KontorsDelning</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-600 font-medium">
              Hem
            </Link>
            <Link to="/utforska" className="text-gray-700 hover:text-brand-600 font-medium">
              Hitta Kontor
            </Link>
            <Link to="/hur-det-fungerar" className="text-gray-700 hover:text-brand-600 font-medium">
              Hur Det Fungerar
            </Link>
            <Link to="/lista-kontor" className="text-gray-700 hover:text-brand-600 font-medium">
              Annonsera Ditt Kontor
            </Link>
          </div>
          
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/logga-in">
              <Button variant="outline" className="border-brand-500 text-brand-600 hover:bg-brand-50">
                Logga In
              </Button>
            </Link>
            <Link to="/registrera">
              <Button className="bg-brand-600 hover:bg-brand-700 text-white">
                Registrera Dig
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
                Hem
              </Link>
              <Link 
                to="/utforska" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Hitta Kontor
              </Link>
              <Link 
                to="/hur-det-fungerar" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Hur Det Fungerar
              </Link>
              <Link 
                to="/lista-kontor" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Annonsera Ditt Kontor
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Link to="/logga-in" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-brand-500 text-brand-600">
                    Logga In
                  </Button>
                </Link>
                <Link to="/registrera" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white">
                    Registrera Dig
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
