// src/components/Features.tsx
import { Briefcase, Clock, Star } from "lucide-react";

const features = [
  {
    icon: (
      <Briefcase
        className="w-10 h-10 text-blue-600"
        stroke="var(--color-binance-yellow)"
      />
    ),
    title: "Job Assistance",
    description: "100% job assistance through our in-house recruitment agency.",
    key: "1",
  },
  {
    icon: (
      <Clock
        className="w-10 h-10 text-blue-600"
        stroke="var(--color-binance-yellow)"
      />
    ),
    title: "Flexible Learning",
    description: "Learn at your own pace with our flexible course schedules.",
    key: "2",
  },
  {
    icon: (
      <Star
        className="w-10 h-10 text-blue-600"
        stroke="var(--color-binance-yellow)"
      />
    ),
    title: "Expert Instructors",
    description: "Learn from industry experts with real-world experience.",
    key: "3",
  },
];

const Features = () => (
  <section className="py-16 ">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.key} className="text-center">
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-binance-white)]">
              {feature.title}
            </h3>
            <p className="text-[var(--color-binance-text-light)]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
