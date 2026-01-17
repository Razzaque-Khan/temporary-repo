export default function Services() {
  const items = [
    { title: "Chimney Deep Cleaning", price: "₹999" },
    { title: "Chimney Repair", price: "₹299 Inspection" },
    { title: "Geyser Repair", price: "₹199 Inspection" },
    { title: "Geyser Installation", price: "₹799" },
    { title: "Gas Stove Repair", price: "₹299" },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto p-6">
      <h3 className="text-2xl font-semibold">Our Services</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {items.map((s, i) => (
          <div key={i} className="p-5 border rounded-xl bg-white shadow-sm">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{s.price}</p>
            <a className="mt-4 inline-block text-blue-600" href="#book">Book Now →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
