import { useEffect, useState } from "react";

export default function Contact() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBookings() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:4000/api/bookings");
        const data = await res.json();
        setBookings(data.bookings || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  return (
    <section id="contact" className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold">Contact & Recent Bookings</h2>
      <p className="text-gray-600 mt-2">Phone: +91 98765 43210 • Email: support@homerepair.com</p>

      <div className="mt-6">
        <h3 className="font-semibold">Recent Bookings</h3>
        {loading ? (
          <p>Loading...</p>
        ) : bookings.length ? (
          <ul className="mt-3 space-y-3">
            {bookings.map((b) => (
              <li key={b.id} className="bg-white p-3 border rounded">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">{b.service}</div>
                    <div className="text-sm text-gray-600">{b.name} • {b.phone}</div>
                  </div>
                  <div className="text-sm text-gray-500">{new Date(b.createdAt).toLocaleString()}</div>
                </div>
                {b.notes && <div className="mt-2 text-sm text-gray-700">{b.notes}</div>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-gray-600">No bookings yet.</p>
        )}
      </div>
    </section>
  );
}
