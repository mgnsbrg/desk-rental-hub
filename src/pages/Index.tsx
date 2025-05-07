
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
  CheckCircle2,
  MapPin
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Spaces */}
      <FeaturedSpaces />
      
      {/* Map Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Hitta Kontor Nära Dig</h2>
            <p className="text-gray-600 mt-2">Utforska kontor på kartan för att hitta det perfekta läget</p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-10 w-10 text-gray-500 mx-auto mb-3" />
              <p className="text-gray-600">
                Karta kommer att laddas här <br />
                (Interaktiv karta skulle integreras med Google Maps eller liknande kartleverantör)
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button className="bg-brand-600 hover:bg-brand-700">Visa Alla Kontor på Kartan</Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Hur Det Fungerar</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Hitta och boka tillgängliga kontorsutrymmen med bara några enkla steg
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-50 rounded-full p-4 mb-4">
                <Search className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sök Kontorsutrymmen</h3>
              <p className="text-gray-600">
                Bläddra genom vårt utbud av tillgängliga kontorsutrymmen baserat på din plats och dina önskemål.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-50 rounded-full p-4 mb-4">
                <Calendar className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Boka Direkt</h3>
              <p className="text-gray-600">
                Välj dina datum, välj antal platser du behöver och boka med bara några klick.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-50 rounded-full p-4 mb-4">
                <Building className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Börja Jobba</h3>
              <p className="text-gray-600">
                Anländ till din nya arbetsplats och njut av en produktiv miljö med alla bekvämligheter du behöver.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-brand-600 hover:bg-brand-700" size="lg" asChild>
              <a href="/utforska">Hitta ett Kontor</a>
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
                Det Smartare Sättet att Arbeta
              </h2>
              <p className="text-gray-600 mb-6">
                KontorsDelning kopplar ihop företag med outnyttjade kontorsutrymmen och professionella som behöver en arbetsplats. Vår plattform hjälper företag att generera extra intäkter från sina tomma skrivbord samtidigt som vi erbjuder flexibla arbetsplatslösningar.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0" />
                  <span>
                    <strong className="font-medium">Tjäna Pengar på Outnyttjat Utrymme</strong>
                    <p className="text-gray-600 mt-1">
                      Förvandla dina tomma skrivbord till intäkter genom att hyra ut dem till professionella och team.
                    </p>
                  </span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0" />
                  <span>
                    <strong className="font-medium">Flexibla Alternativ</strong>
                    <p className="text-gray-600 mt-1">
                      Hyr per dag, vecka eller månad. Välj det upplägg som passar ditt företag.
                    </p>
                  </span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0" />
                  <span>
                    <strong className="font-medium">Verifierade Användare</strong>
                    <p className="text-gray-600 mt-1">
                      Vår plattform säkerställer att alla användare är verifierade professionella som du kan lita på.
                    </p>
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
                  alt="Kontorsutrymme" 
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
            Redo att Annonsera Ditt Kontorsutrymme?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Gå med tusentals företag som genererar extra intäkter genom att hyra ut sina oanvända kontorsutrymmen på KontorsDelning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="/utforska">Hitta ett Kontor</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <a href="/lista-kontor">Annonsera Ditt Kontor</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
