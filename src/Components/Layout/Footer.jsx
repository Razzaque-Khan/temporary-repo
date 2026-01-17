import { Mail, MapPin, Phone, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-blue-900" />
              </div>
              <span className="text-xl font-bold text-white">HomeServe Pro</span>
            </div>
            <p className="text-sm">Your trusted partner for all chimney and geyser service needs.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#process" className="hover:text-yellow-400 transition">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400 transition">Reviews</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Chimney Cleaning</li>
              <li>Chimney Repair</li>
              <li>Geyser Installation</li>
              <li>Geyser Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+91 95656 52635</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@homeservepro.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Mumbai, Pune, Hyderabad & Bangalore</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 HomeServe Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
