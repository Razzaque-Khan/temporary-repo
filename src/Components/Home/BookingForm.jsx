import useForm from "../../hooks/useForm";
import { useState } from "react";

export default function BookingForm() {
  const { values, handleChange, resetForm } = useForm({
    service: "Chimney Cleaning",
    name: "",
    phone: "",
    date: "",
    notes: ""
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch("http://localhost:4000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ loading: false, success: null, error: data.error || "Failed to submit" });
        return;
      }

      setStatus({ loading: false, success: "Booking requested — we will call to confirm.", error: null });
      resetForm();
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: null, error: "Network error" });
    }
  };

  return (
    <form onSubmit={submit} className="bg-white border p-6 rounded-xl shadow space-y-4">
      <h3 className="text-xl font-semibold">Book a Service</h3>

      <div>
        <label className="text-sm font-medium">Service</label>
        <select name="service" value={values.service} onChange={handleChange} className="w-full p-2 border rounded mt-1">
          <option>Chimney Cleaning</option>
          <option>Chimney Repair</option>
          <option>Geyser Repair</option>
          <option>Geyser Installation</option>
          <option>Gas Stove Repair</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium">Name</label>
        <input name="name" value={values.name} onChange={handleChange} className="w-full p-2 border rounded mt-1" placeholder="Your name" />
      </div>

      <div>
        <label className="text-sm font-medium">Phone</label>
        <input name="phone" value={values.phone} onChange={handleChange} className="w-full p-2 border rounded mt-1" placeholder="+91 XXXXXXXX" />
      </div>

      <div>
        <label className="text-sm font-medium">Preferred Date</label>
        <input name="date" type="date" value={values.date} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
      </div>

      <div>
        <label className="text-sm font-medium">Notes (optional)</label>
        <textarea name="notes" value={values.notes} onChange={handleChange} className="w-full p-2 border rounded mt-1" rows="3" />
      </div>

      {status.error && <div className="text-red-600 text-sm">{status.error}</div>}
      {status.success && <div className="text-green-600 text-sm">{status.success}</div>}

      <button disabled={status.loading} className="w-full bg-blue-600 text-white py-3 rounded-lg">
        {status.loading ? "Sending..." : "Request Service"}
      </button>
    </form>
  );
}
