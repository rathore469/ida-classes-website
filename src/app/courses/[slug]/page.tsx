import { courses } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Clock3,
  BookOpen,
  Trophy,
  Home,
} from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | IDA Classes Jaipur`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Course Not Found
        </h1>

        <p className="mt-4 max-w-md text-slate-600">
          The course you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
        >
          <Home size={18} />
          Back To Home
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <section className="relative flex min-h-[78vh] items-end overflow-hidden md:min-h-[92vh]">
        <Image
          src={course.heroImage}
          alt={course.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

        <div className="absolute left-0 top-0 z-20 w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-6 md:px-6 md:pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 md:px-5"
            >
              <ArrowLeft size={18} />
              Back To Home
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-5 pb-14 pt-32 md:px-6 md:pb-20 md:pt-40">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md md:px-5">
              <span className="text-sm font-medium tracking-wide text-white/90">
                Defence Career Preparation
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl">
              {course.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 md:mt-8 md:text-xl">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
              <a
                href="tel:9667556598"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl md:px-7"
              >
                Enroll Now
                <ArrowRight size={18} />
              </a>

              <Link
                href="#details"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 md:px-7"
              >
                Explore Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="details"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24"
      >
        <div className="grid gap-5 md:gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:rounded-[32px] md:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 md:mb-6 md:h-16 md:w-16">
              <Shield size={28} />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Eligibility
            </h2>

            <div className="mt-5 space-y-4 text-slate-600">
              <div>
                <h3 className="font-semibold text-slate-900">Age Limit</h3>

                <p className="mt-1 leading-7">{course.eligibility.age}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Educational Qualification
                </h3>

                <p className="mt-1 leading-7">{course.eligibility.education}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Gender</h3>

                <p className="mt-1 leading-7">{course.eligibility.gender}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Nationality</h3>

                <p className="mt-1 leading-7">
                  {course.eligibility.nationality}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Physical Standards
                </h3>

                <p className="mt-1 leading-7">{course.eligibility.height}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:rounded-[32px] md:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 md:mb-6 md:h-16 md:w-16">
              <Clock3 size={28} />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Duration
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {course.duration}
            </p>
          </div>

          <div className="rounded-[28px] border border-blue-100 bg-blue-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:rounded-[32px] md:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 md:mb-6 md:h-16 md:w-16">
              <Trophy size={28} />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Career Opportunities
            </h2>

            <div className="mt-5 space-y-5">
              <p className="text-base leading-8 text-slate-700">
                {course.salary.starting}
              </p>

              <div className="flex flex-wrap gap-3">
                {course.salary.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-white px-3 py-1.5 text-sm text-slate-700"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-slate-200 p-6 md:mt-12 md:rounded-[32px] md:p-10">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:mb-8">
            Training Facilities at IDA Classes
          </h2>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {course.idaTraining.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-50 p-5 transition hover:bg-blue-50 md:p-6"
              >
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 md:mt-24 md:gap-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:rounded-[40px] md:p-10">
            <div className="mb-6 flex items-center gap-4 md:mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <CheckCircle2 size={26} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Selection Process
              </h2>
            </div>

            <div className="space-y-4">
              {course.selectionProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50 md:px-5 md:py-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white md:h-10 md:w-10">
                    {index + 1}
                  </div>

                  <p className="font-medium text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:rounded-[40px] md:p-10">
            <div className="mb-6 flex items-center gap-4 md:mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <BookOpen size={26} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Syllabus
              </h2>
            </div>

            <div className="space-y-5">
              {course.syllabus.map((subject, index) => (
                <div key={index} className="rounded-2xl bg-slate-50 p-5 md:p-6">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    {subject.subject}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {subject.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="rounded-full bg-white px-3 py-1.5 text-sm text-slate-700"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 md:mt-24 md:rounded-[40px] md:p-14">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Start Your Defence Journey
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Train With Discipline. Achieve Selection.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              Structured classroom coaching, physical preparation, mentorship
              and regular mock practice designed to help students succeed in
              competitive defence examinations.
            </p>

            <div className="mt-8 md:mt-10">
              <a
                href="tel:9667556598"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-[1.03] md:px-7"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[32px] bg-blue-600 p-6 text-white md:mt-16 md:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-200">
                Admissions Open
              </p>

              <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
                Start Your Defence Preparation with IDA Classes Jaipur
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100">
                Join disciplined classroom preparation, physical training,
                hostel facilities and expert mentorship designed for successful
                selection in defence and government exams.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end md:gap-4">
              <a
                href="tel:9667556598"
                className="rounded-2xl bg-white px-6 py-4 font-semibold text-blue-600 transition hover:scale-[1.02] md:px-7"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919667556598"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10 md:px-7"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center md:mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
              More Courses
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Explore Other Preparation Programs
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {courses
              .filter((item) => item.slug !== course.slug)
              .slice(0, 3)
              .map((item, index) => (
                <Link
                  key={index}
                  href={`/courses/${item.slug}`}
                  className="group rounded-[28px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 md:mb-6 md:h-14 md:w-14">
                    →
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 md:mt-8">
                    Explore Course →
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
