import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="text-2xl border px-3 py-1 rounded">☰</button>
      {open && (
        <div className="absolute right-4 mt-2 bg-white shadow p-4 rounded-lg w-56">
          <a href="#services" className="block py-2">Services</a>
          <a href="#packages" className="block py-2">Packages</a>
          <a href="#contact" className="block py-2">Contact</a>
          <a href="#book" className="block py-2">Book Now</a>
        </div>
      )}
    </div>
  );
}
