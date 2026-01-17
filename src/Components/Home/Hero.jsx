export default function Hero() {
  return (
    <section className="bg-blue-50 p-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold">Professional Chimney & Geyser Service at Your Doorstep</h2>
          <p className="mt-3 text-gray-600">Fast, safe and affordable repair, installation & cleaning.</p>
          <a href="#book" className="inline-block mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg">Book Service</a>
        </div>
        <div>
          <div className="h-56 bg-white rounded-xl shadow flex items-center justify-center text-gray-400">Image placeholder</div>
        </div>
      </div>
    </section>
  );
}
