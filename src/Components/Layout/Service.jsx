import { CheckCircle, Package, Shield, Sparkles, Wrench } from "lucide-react";
import React, { useState } from "react";

const Service = () => {
    const [activeService, setActiveService] = useState('chimney');

    const services = {
        chimney: [
            {
                title: 'Deep Chimney Cleaning',
                price: '₹1,149',
                icon: <Sparkles className="w-6 h-6" />,
                features: ['Complete dismantling & cleaning', 'Filter & blower deep clean', 'Interior & exterior degreasing', 'Suction testing'],
                popular: true
            },
            {
                title: 'Chimney Repair',
                price: '₹199',
                icon: <Wrench className="w-6 h-6" />,
                features: ['Complete inspection', 'Repair quotation', 'Genuine spare parts', 'Expert technicians']
            },
            {
                title: 'Chimney Installation',
                price: '₹599',
                icon: <Package className="w-6 h-6" />,
                features: ['Professional setup', 'Proper alignment', 'Safety checks', 'Post-installation cleanup']
            }
        ],
        geyser: [
            {
                title: 'Geyser Repair Service',
                price: '₹249',
                icon: <Wrench className="w-6 h-6" />,
                features: ['Heating element check', 'Thermostat repair', 'Leak detection', 'Safety valve replacement'],
                popular: true
            },
            {
                title: 'New Geyser Installation',
                price: '₹799',
                icon: <Package className="w-6 h-6" />,
                features: ['Professional mounting', 'Pipe connection', 'Electrical wiring', 'Water testing']
            },
            {
                title: 'Annual Maintenance',
                price: '₹499',
                icon: <Shield className="w-6 h-6" />,
                features: ['Complete servicing', 'Descaling treatment', 'Performance check', '6-month warranty']
            }
        ]
    };

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600">Professional solutions for all your home appliance needs</p>
                </div>

                {/* Service Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 rounded-full p-1 inline-flex">
                        <button
                            onClick={() => setActiveService('chimney')}
                            className={`px-8 py-3 rounded-full font-semibold transition ${activeService === 'chimney'
                                ? 'bg-blue-900 text-white shadow-lg'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Chimney Services
                        </button>
                        <button
                            onClick={() => setActiveService('geyser')}
                            className={`px-8 py-3 rounded-full font-semibold transition ${activeService === 'geyser'
                                ? 'bg-blue-900 text-white shadow-lg'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Geyser Services
                        </button>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services[activeService].map((service, i) => (
                        <div key={i} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden border-2 ${service.popular ? 'border-yellow-400' : 'border-transparent'}`}>
                            {service.popular && (
                                <div className="bg-yellow-400 text-blue-900 text-center py-2 font-bold">
                                    ⭐ MOST POPULAR
                                </div>
                            )}
                            <div className="p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    {React.cloneElement(service.icon, { className: 'w-8 h-8 text-blue-900' })}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-3xl font-bold text-blue-900 mb-6">Starting at {service.price}</p>
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className="block text-center bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                                    Book This Service
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
