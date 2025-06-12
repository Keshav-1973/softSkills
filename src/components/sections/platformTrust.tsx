import { Speech } from "lucide-react";

const platFormTrust = [
  {
    title: "10K",
    description: "STUDENT ENROLLED",
    key: "1",
  },
  {
    title: "32.4K",
    description: "CLASS HOURS COMPLETED",
    key: "2",
  },
  {
    title: "96.2%",
    description: "SATISFACTION RATE",
    key: "3",
  },
  {
    title: "100+",
    description: "TOP INSTRUCTORS",
    key: "3",
  },
];

const PlatFormTrust = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-binance-white)]">
        A Platform Trusted by Students
      </h2>
      <h2 className="text-xl font-primary text-center mb-8 text-[var(--color-binance-light)]">
        Soft Skills aims to transform not just through words, but provide
        results with numbers!
      </h2>
      <div className="grid md:grid-cols-4 gap-4">
        {platFormTrust.map((elem) => (
          <div
            key={elem.key}
            className="p-6 rounded-2xl shadow bg-[var(--color-card-bg-primary)] border border-[var(--color-binance-border-gray)] flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--color-binance-gray)] mb-4">
              <Speech className="w-8 h-8" stroke="var(--color-icon-gray)" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-center text-[var(--color-binance-white)]">
              {elem.title}
            </h3>
            <p className="text-center mb-4 text-[var(--color-binance-text-light)]">
              {elem.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatFormTrust;
