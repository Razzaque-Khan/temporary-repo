import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', service: '', address: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! We'll contact you shortly on ${formData.phone}`);
        setFormData({ name: '', phone: '', service: '', address: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Book Your Service</h2>
                        <p className="text-lg text-blue-100">Fill the details below and we'll reach out within 30 minutes</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Your Name *</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Service Required *</label>
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none"
                                >
                                    <option value="">Select a service</option>
                                    <option value="chimney-cleaning">Chimney Cleaning</option>
                                    <option value="chimney-repair">Chimney Repair</option>
                                    <option value="chimney-installation">Chimney Installation</option>
                                    <option value="geyser-repair">Geyser Repair</option>
                                    <option value="geyser-installation">Geyser Installation</option>
                                    <option value="geyser-maintenance">Geyser Maintenance</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Address *</label>
                                <textarea
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    rows="3"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none resize-none"
                                    placeholder="Enter your complete address"
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition shadow-lg"
                            >
                                Submit Request
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-blue-100 mb-4">Or contact us directly:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+9195656 52635" className="flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                                <Phone className="w-5 h-5" />
                                +91 95656 52635
                            </a>
                            <a href="https://wa.me/9195656 52635" className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
