export default function FAQ() {
  const faqs = [
    { q: "How often should chimney cleaning be done?", a: "Every 6–12 months depending on usage." },
    { q: "Do you offer warranty?", a: "Yes, 30-day service warranty." },
    { q: "Do you install new geysers?", a: "Yes, we handle mounting, testing, and plumbing." },
  ];

  return (
    <section id="faq" className="max-w-6xl mx-auto p-6">
      <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
      <div className="mt-6 space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white p-4 border rounded-lg">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="text-gray-600 mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
