export default function Packages() {
  const packs = [
    { name: "Kitchen Fresh", price: "₹2299", features: ["Chimney cleaning", "Gas stove tune-up", "Filter check"] },
    { name: "Safety Check", price: "₹1499", features: ["Gas leakage test", "Geyser safety", "Chimney airflow test"] },
  ];

  return (
    <section id="packages" className="max-w-6xl mx-auto p-6">
      <h3 className="text-2xl font-semibold">Popular Packages</h3>
      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        {packs.map((p, i) => (
          <div key={i} className="bg-white border rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold text-lg">{p.name}</h4>
            <p className="text-blue-600 font-bold text-xl mt-2">{p.price}</p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">{p.features.map((f, j) => <li key={j}>• {f}</li>)}</ul>
            <a href="#book" className="inline-block mt-4 text-blue-600">Choose →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
