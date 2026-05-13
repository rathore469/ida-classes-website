import Link from "next/link";
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
    slug: "nda",
    description: "SSB guidance and physical training for NDA selection.",
    icon: Shield,
  },
  {
    title: "Army GD",
    slug: "army-gd",
    description: "Army GD preparation with daily physical practice.",
    icon: Dumbbell,
  },
  {
    title: "Airforce X/Y Group",
    slug: "airforce",
    description: "Classes and practice sessions for Airforce exams.",
    icon: Plane,
  },
  {
    title: "Rajasthan Police",
    slug: "rajasthan-police",
    description: "Coaching and physical training for police exams.",
    icon: Target,
  },
  {
    title: "SSC GD",
    slug: "ssc-gd",
    description: "Mock tests and discipline-focused preparation.",
    icon: FileText,
  },
  {
    title: "NDA Foundation",
    slug: "nda-foundation",
    description: "Foundation batch for students preparing for NDA.",
    icon: GraduationCap,
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Courses We Offer
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Defence & Government Exam Preparation
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Classroom coaching, physical training and discipline-focused
            preparation designed to help students achieve selection.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-[32px] md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 md:h-16 md:w-16">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  {course.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 md:mt-4 md:text-base md:leading-7">
                  {course.description}
                </p>

                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-4 inline-flex items-center font-semibold text-blue-600 transition-transform duration-300 hover:translate-x-1"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-[28px] border border-slate-200 bg-gray-50 p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl md:mt-16 md:rounded-[32px] md:p-8">
          <p className="text-2xl font-bold tracking-tight text-gray-900">
            And many more preparation programs
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
              <Link
                key={index}
                href={`/courses/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
