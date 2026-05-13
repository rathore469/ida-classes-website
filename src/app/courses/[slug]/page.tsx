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
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
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
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              <ArrowLeft size={18} />
              Back To Home
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-6 pb-20 pt-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-white/90">
                Defence Career Preparation
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
              {course.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
              {course.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:9667556598"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl"
              >
                Enroll Now
                <ArrowRight size={18} />
              </a>

              <Link
                href="#details"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Explore Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Shield size={30} />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Eligibility
            </h2>

            <div className="mt-5 space-y-5 text-slate-600">
              <div>
                <h3 className="font-semibold text-slate-900">Age Limit</h3>

                <p className="mt-1">{course.eligibility.age}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Educational Qualification
                </h3>

                <p className="mt-1">{course.eligibility.education}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Gender</h3>

                <p className="mt-1">{course.eligibility.gender}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Nationality</h3>

                <p className="mt-1">{course.eligibility.nationality}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Physical Standards
                </h3>

                <p className="mt-1">{course.eligibility.height}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Clock3 size={30} />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Duration
            </h2>

            <p className="mt-5 leading-relaxed text-slate-600">
              {course.duration}
            </p>
          </div>

          <div className="rounded-[32px] border border-blue-100 bg-blue-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600">
              <Trophy size={30} />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Career Opportunities
            </h2>

            <div className="mt-5 space-y-6">
              <p className="leading-relaxed text-slate-700">
                {course.salary.starting}
              </p>

              <div className="flex flex-wrap gap-3">
                {course.salary.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-white px-4 py-2 text-sm text-slate-700"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[32px] border border-slate-200 p-10">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Training Facilities at IDA Classes
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {course.idaTraining.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-50 p-6 transition hover:bg-blue-50"
              >
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="mb-8 flex items-center gap-4">
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
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="font-medium text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <BookOpen size={26} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Syllabus
              </h2>
            </div>

            <div className="space-y-5">
              {course.syllabus.map((subject, index) => (
                <div key={index} className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    {subject.subject}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {subject.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="rounded-full bg-white px-4 py-2 text-sm text-slate-700"
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

        <div className="mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-10 md:p-14">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Start Your Defence Journey
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Train With Discipline. Achieve Selection.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Structured classroom coaching, physical preparation, mentorship
              and regular mock practice designed to help students succeed in
              competitive defence examinations.
            </p>

            <div className="mt-10">
              <a
                href="tel:9667556598"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-[1.03]"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 overflow-hidden rounded-[36px] bg-blue-600 p-10 text-white">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-200">
                Admissions Open
              </p>

              <h2 className="max-w-2xl text-4xl font-bold leading-tight">
                Start Your Defence Preparation with IDA Classes Jaipur
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-blue-100">
                Join disciplined classroom preparation, physical training,
                hostel facilities and expert mentorship designed for successful
                selection in defence and government exams.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="tel:9667556598"
                className="rounded-2xl bg-white px-7 py-4 font-semibold text-blue-600 transition hover:scale-[1.02]"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919667556598"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
