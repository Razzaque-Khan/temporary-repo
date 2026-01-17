const Working = () => {
    const process = [
        { step: '1', title: 'Book Service', desc: 'Call or book online instantly' },
        { step: '2', title: 'Expert Arrives', desc: 'Technician reaches within 60 mins' },
        { step: '3', title: 'Inspection', desc: 'Thorough diagnosis & quote' },
        { step: '4', title: 'Service Complete', desc: 'Quality work with warranty' }
    ];

    return (
        <section id="process" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-lg text-gray-600">Simple steps to get your appliances fixed</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {process.map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="relative mb-6">
                                <div className="relative z-1 w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-lg">
                                    {item.step}
                                </div>
                                {i < process.length - 1 && (
                                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-blue-200"></div>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Working;
