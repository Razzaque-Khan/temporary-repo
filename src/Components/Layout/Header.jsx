import { Menu, Wrench } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <Wrench className="w-6 h-6 text-blue-900" />
            </div>
            <span className="text-2xl font-bold">HomeServe Pro</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#process" className="hover:text-yellow-400 transition">How It Works</a>
            <a href="#testimonials" className="hover:text-yellow-400 transition">Reviews</a>
            <a href="#contact" className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">Book Now</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#services" className="block hover:text-yellow-400 transition">Services</a>
            <a href="#process" className="block hover:text-yellow-400 transition">How It Works</a>
            <a href="#testimonials" className="block hover:text-yellow-400 transition">Reviews</a>
            <a href="#contact" className="block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold text-center hover:bg-yellow-300 transition">Book Now</a>
          </div>
        )}
      </nav>
    </header>
  );
}
