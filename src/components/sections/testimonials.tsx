// src/components/Testimonials.tsx
const testimonials = [
  {
    name: "Jane Doe",
    feedback:
      "The Data Science course was comprehensive and the instructors were top-notch.",
    key: "1",
  },
  {
    name: "John Smith",
    feedback:
      "I landed a job within a month of completing the cybersecurity program!",
    key: "2",
  },
];

const Testimonials = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-primary text-center mb-8">
        What Our Students Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.key} className="bg-gray-100 p-6 rounded shadow">
            <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
            <p className="text-gray-900 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
