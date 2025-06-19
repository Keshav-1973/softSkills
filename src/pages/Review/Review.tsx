import Students from "@/assets/images/students.png";

const Review = () => {
  return (
    <div className="min-h-screen bg-[var(--color-binance-gray)] text-[#111827] px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src={Students}
            alt="DevOps Course Illustration"
            className="w-full h-100"
          />
        </div>

        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default Review;
