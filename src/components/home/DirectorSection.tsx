import Image from "next/image";

export default function DirectorSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-blue-100 blur-3xl" />

          <div className="relative h-[420px] w-[88%] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl sm:h-[500px] sm:w-[80%] lg:h-[620px] lg:w-[85%]">
            <Image
              src="/images/director/director-photo.webp"
              alt="Director"
              fill
              sizes="(max-width: 640px) 88vw,
              (max-width: 1024px) 80vw,
              42vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Director’s Message
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Discipline, Guidance & Consistent Preparation
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            At IDA Classes Jaipur, our mission is to provide disciplined
            academic preparation, physical training and focused mentorship to
            help students achieve successful selection in defence and government
            services.
          </p>

          <div className="my-8 h-px w-full bg-slate-200" />

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Devendra Singh Rathore
            </h3>

            <p className="mt-2 font-medium text-blue-600">
              Director, IDA Classes Jaipur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
