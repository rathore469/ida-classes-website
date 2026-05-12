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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Courses We Offer
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Defence & Government Exam Preparation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Comprehensive classroom coaching, physical training,
            discipline-focused environment and hostel facilities designed to
            help students achieve selection.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="group rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 md:h-16 md:w-16">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {course.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {course.description}
                </p>

                <button className="mt-6 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:translate-x-1">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[32px] border border-slate-200 bg-gray-50 p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl">
          <p className="text-lg font-semibold tracking-tight text-gray-900">
            And many more preparation programs
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
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
