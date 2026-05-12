import Image from "next/image";

export default function DirectorSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-blue-100 blur-3xl" />

          <div className="relative h-[420px] w-[88%] overflow-hidden rounded-[40px] sm:h-[500px] sm:w-[80%] lg:h-[620px] lg:w-[85%]">
            <Image
              src="/images/director/director-photo.jpeg"
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Director’s Message
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Discipline, Guidance & Consistent Preparation
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            At IDA Classes Jaipur, our mission is to provide disciplined
            academic preparation, physical training and focused mentorship to
            help students achieve successful selection in defence and government
            services.
          </p>

          <div className="mb-8 h-px w-full bg-gray-200" />

          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Devendra Singh Rathore
            </h3>

            <p className="mt-2 text-blue-600 font-medium">
              Director, IDA Classes Jaipur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
