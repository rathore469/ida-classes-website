import {
  Shield,
  Target,
  Plane,
  FileText,
  GraduationCap,
  Dumbbell,
} from "lucide-react";

const courses = [
  {
    title: "NDA",
    description: "Written preparation, SSB guidance and physical training.",
    icon: Shield,
  },
  {
    title: "Army GD",
    description: "Complete Army GD preparation with daily physical practice.",
    icon: Dumbbell,
  },
  {
    title: "Airforce X/Y Group",
    description: "Smart classes and practice sessions for Airforce exams.",
    icon: Plane,
  },
  {
    title: "Rajasthan Police",
    description: "Written coaching and ground training for police selection.",
    icon: Target,
  },
  {
    title: "SSC GD",
    description: "Focused preparation with mock tests and discipline training.",
    icon: FileText,
  },
  {
    title: "NDA Foundation",
    description: "Foundation batch for school students preparing for NDA.",
    icon: GraduationCap,
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Courses We Offer
          </p>

          <h2 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Defence & Government Exam Preparation
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Comprehensive classroom coaching, physical training,
            discipline-focused environment and hostel facilities designed to
            help students achieve selection.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="group rounded-[32px] border border-gray-100 bg-gray-50 p-5 md:p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={24} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-600">
                  {course.description}
                </p>

                <button className="font-semibold text-blue-600 transition group-hover:translate-x-1">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg font-medium text-gray-700">
            And many more preparation programs
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "Delhi Police",
              "Army Clerk",
              "Nursing Assistant",
              "Group D",
              "RPF",
              "Chandigarh Police",
              "SSB",
              "Navy",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
