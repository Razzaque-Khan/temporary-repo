import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Packages from "../components/home/Packages";
import FAQ from "../components/home/FAQ";
import BookingForm from "../components/home/BookingForm";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Packages />
      <section id="book" className="max-w-6xl mx-auto p-6">
        <BookingForm />
      </section>
      <FAQ />
    </div>
  );
}
