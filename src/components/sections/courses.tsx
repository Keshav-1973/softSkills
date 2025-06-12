import DsGif from "@/assets/gifs/dsGif.gif";

const courses = [
  {
    title: "Data Science & AI Program",
    description:
      "Learn how to design and implement effective AI strategies for business growth.",
    link: "/courses/data-science-ai",
    key: "1",
  },
  {
    title: "Cyber Security & Ethical Hacking",
    description:
      "Protect systems and data with our comprehensive cybersecurity course.",
    link: "/courses/cyber-security",
    key: "2",
  },
  {
    title: "DevOps and Cloud Computing Program",
    description:
      "Become a proficient full stack developer with our hands-on training.",
    link: "/courses/devops-and-cloud-computing-program",
    key: "3",
  },
];

const Courses = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-binance-white)]">
        Our Top Courses
      </h2>
      <div className="grid md:grid-cols-3 gap-8 ">
        {courses.map((course) => (
          <a
            key={course.key}
            href={course.link}
            className="p-6 rounded-2xl shadow bg-[var(--color-binance-gray)] border border-[var(--color-binance-border-gray)]"
          >
            <img
              src={DsGif}
              alt="Data Structures Preview"
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h3 className="text-xl font-primary mb-2 text-[var(--color-binance-white)]">
              {course.title}
            </h3>
            <p className=" mb-4 text-[var(--color-binance-text-light)]">
              {course.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-[var(--color-binance-yellow)]">
                $3000
              </span>
              <a
                href={course.link}
                className="bg-[var(--color-binance-yellow)] text-[var(--color-binance-dark)] px-4 py-2 rounded  transition-colors"
              >
                Enroll Now
              </a>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
