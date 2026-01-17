import { Star } from "lucide-react";

const Reviews = () => {
    const testimonials = [
        { name: 'Rajesh Kumar', rating: 5, text: 'Excellent service! The technician was professional and fixed my chimney in no time. Highly recommended!' },
        { name: 'Priya Sharma', rating: 5, text: 'Very affordable and quick service. My geyser is working perfectly now. Great job!' },
        { name: 'Amit Patel', rating: 4, text: 'Professional team, transparent pricing, and quality work. Will use again for sure.' }
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
                    <p className="text-lg text-gray-600">See what our customers say about us</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                            <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
