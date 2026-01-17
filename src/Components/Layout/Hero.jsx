import { CheckCircle, Clock, Phone, Shield, Star } from "lucide-react";
import React from "react";

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                    Expert Chimney & Geyser Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    Professional Repair, Installation & Maintenance at Your Doorstep
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#contact" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition shadow-lg">
                        Book Service Now
                    </a>
                    <a href="tel:+9195656 52635" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition shadow-lg flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call Now
                    </a>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { icon: <Shield />, text: '100% Verified Technicians' },
                        { icon: <Clock />, text: 'Same Day Service' },
                        { icon: <Star />, text: '4.8★ Customer Rating' },
                        { icon: <CheckCircle />, text: '30-Day Warranty' }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-2">
                                {React.cloneElement(item.icon, { className: 'w-6 h-6 text-yellow-400' })}
                            </div>
                            <p className="text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
