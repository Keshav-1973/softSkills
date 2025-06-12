import { useParams } from "react-router-dom";
import microsoftLogo from "@/assets/images/img1.jpg";
import Devops from "@/assets/images/Devops.jpg";
import { BadgeCheck, CircleCheckBig } from "lucide-react";

const courseContent: Record<
  string,
  {
    title: string;
    description: string;
    price: string;
    bullets: string[];
    image?: string;
    partner?: string;
    overView: { title: string; description: string };
    keyFeatures: Array<string>;
  }
> = {
  "devops-and-cloud-computing-program": {
    title: "DevOps and Cloud Computing Program",
    description:
      "Master DevOps tools, CI/CD, and cloud platforms like AWS, Azure & GCP.",
    price: "$2,999.00",
    bullets: [
      "Interactive, real-time learning with expert DevOps instructors",
      "Hands-on experience with real-world DevOps projects",
      "Optimize LinkedIn profiles for maximum visibility",
      "Showcase DevOps skills to attract potential employers",
      "Simulate DevOps-related interviews and receive expert feedback",
      "Comprehensive coverage of CI/CD pipelines, Docker, Kubernetes, AWS, and advanced DevOps tools",
      "Microsoft Certification in DevOps Engineering",
    ],
    overView: {
      title: "DevOps Training Program Overview",
      description: `Are you ready to kickstart an exciting career in DevOps? Look no
          further! Our company is committed to providing industry-leading
          training in the fast-evolving field of DevOps, and we offer a
          comprehensive 6-month course designed to transform you into a skilled
          DevOps professional. With guidance from experienced trainers and a
          focus on real-world applications, we're your ultimate partner in
          achieving your career aspirations. Plus, our course includes the added
          advantage of Microsoft Azure DevOps certification, powered by
          Microsoft, giving you industry-recognized credentials that will make
          you stand out in the competitive job market.`,
    },
    keyFeatures: [
      "100% Job assistance through our in-house recruitment agency with over 250 hiring partners",
      "Industry-recognized advanced Data Scientist and AI certificate from Shef Solutions LLC",
      "Capstone from Various domains and industry relevant projects",
      "Program crafted to initiate your journey as a Data Scientist",
      "Professional-level training from Microsoft",
      "Industry-recognized certificate from Microsoft",
      "Integrated labs for hands-on learning experience",
      "Dedicated live sessions by faculty of industry experts",
      "Lifetime access to self-paced learning content through our Learning Management System",
      "Small batch sizes to ensure that each student receives personalized attention and tailored instruction",
      "Free access to our Skill Enhancement Program, which offers free self-paced certification courses on emerging industry skills to keep you up-to-date.",
    ],
    image: Devops,
    partner: microsoftLogo,
  },
};

const Course = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const course = courseContent[courseId ?? ""];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Course not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-binance-gray)] text-[#111827] px-4 py-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src={course.image}
            alt="DevOps Course Illustration"
            className="rounded-xl w-full h-100"
          />
        </div>

        <div>
          <h1 className="font-primary text-3xl md:text-4xl font-bold mb-3 text-[var(--color-binance-white)]">
            {course.title}
          </h1>
          <p className="font-primary text-lg mb-4 text-[var(--color-binance-light)]">
            {course.description}
          </p>
          <div className="text-[var(--color-binance-sun)] text-xl font-semibold mb-6">
            {course.price}
          </div>

          <div className="flex flex-col sm:flex-col gap-4 mb-12">
            <button className="h-12 bg-[var(--color-binance-sun)] text-[var(--color-text-primary)] px-6 py-2 rounded-xs font-semibold hover:bg-[var(--color-binance-yellow)]">
              Enroll Now
            </button>
            <button className="h-12 bg-[var(--color-binance-gray)] text-[var(--color-binance-sun)] px-4 py-2 rounded-xs border-2 border-[var(--color-binance-sun)] hover:bg-[var(--color-binance-dark)]">
              Talk to Advisor
            </button>
          </div>

          <ul className="space-y-2 mb-6">
            {course.bullets.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CircleCheckBig
                  className="w-5 h-5 flex-shrink-0"
                  stroke="var(--color-binance-yellow)"
                />
                <span className="text-m text-[var(--color-binance-light)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {course.partner && (
            <div className="mb-6">
              <p className="text-sm text-[var(--color-binance-light)] mb-1">
                In Collaboration with
              </p>
              <img src={course.partner} alt="Partner Logo" className="h-8" />
            </div>
          )}
        </div>
      </div>
      {/* Why Join this Program */}
      <div className="max-w-6xl mx-auto my-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--color-binance-white)]">
          Why Join this Program
        </h2>
        <div className="grid md:grid-cols-2 gap-6 ">
          <div className=" backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl mb-2 text-[var(--color-binance-white)]">
              Microsoft Advantage
            </h3>
            <p className="text-[var(--color-binance-light)]">
              Leverage the power of Microsoft tools and technologies. Gain
              professional-level training, demonstrate your technical expertise,
              and earn an employer-recognized Azure DevOps certification from
              Microsoft.
            </p>
          </div>
          <div className="rounded-xl p-6 border border-white/10">
            <h3 className="font-bold text-xl mb-2 text-[var(--color-binance-white)]">
              Generative AI Edge
            </h3>
            <p className="text-[var(--color-binance-light)]">
              Live sessions on cutting-edge DevOps practices, CI/CD pipelines,
              Kubernetes, cloud infrastructure, and automation tools. Learn how
              to bridge the gap between development and operations effectively.
            </p>
          </div>
          <div className="rounded-xl p-6 border border-white/10">
            <h3 className="font-bold text-xl mb-2 text-[var(--color-binance-white)]">
              Applied Learning
            </h3>
            <p className="text-[var(--color-binance-light)]">
              Our DevOps training program provides live online classes led by
              industry experts, focusing on real-world scenarios, hands-on
              projects, and case studies.
            </p>
          </div>
          <div className="rounded-xl p-6 border border-white/10">
            <h3 className="font-bold text-xl mb-2 text-[var(--color-binance-white)]">
              Placement Support
            </h3>
            <p className="text-[var(--color-binance-light)]">
              Receive 100% placement assistance through our dedicated in-house
              recruitment team. With a network of over 250+ hiring partners, we
              proudly support your career growth.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-24">
        <h1 className="font-primary text-3xl md:text-4xl font-bold mb-3 text-[var(--color-binance-white)] ">
          {course.overView.title}
        </h1>
        <p className="font-primary text-lg mb-4 mt-8 text-[var(--color-binance-light)]">
          {course.overView.description}
        </p>
      </div>
      <div className="max-w-6xl mx-auto my-24">
        <h2 className="font-primary text-3xl md:text-3xl font-bold mb-12 text-[var(--color-binance-white)]  ">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {course.keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CircleCheckBig className="text-green-500 w-5 h-5 flex-shrink-0" />
              <p className="text-base text-[var(--color-binance-light)]">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
