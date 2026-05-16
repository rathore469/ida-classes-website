import Image from "next/image";

export default function CampusSection() {
  return (
    <section id="hostel" className="bg-gray-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Campus Life & Facilities
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Residential Training Environment
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Comfortable accommodation, disciplined environment, library
            facilities, homely food and physical training designed to support
            focused preparation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* BOYS HOSTEL */}
          <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-[32px]">
            <div className="relative h-[240px] w-full overflow-hidden sm:h-[300px]">
              <Image
                src="/images/campus/boys-hostel.webp"
                alt="Boys Hostel"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Boys Hostel
              </h3>

              <p className="mt-4 text-base leading-8 text-gray-600">
                Residential hostel with disciplined routine, RO water, library
                access and physical training support.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Library Access",
                  "RO Water",
                  "Training Ground",
                  "Homely Food",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GIRLS HOSTEL */}
          <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-[32px]">
            <div className="relative h-[240px] w-full overflow-hidden sm:h-[300px]">
              <Image
                src="/images/campus/girls-hostel.webp"
                alt="Girls Accommodation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Secure Girls Accommodation
              </h3>

              <p className="mt-4 text-base leading-8 text-gray-600">
                Safe accommodation with lift facility, study tables, attached
                washrooms and secure environment.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Security",
                  "Lift Facility",
                  "Study Tables",
                  "Attached Washrooms",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
          {[
            {
              title: "Library Facility",
              description:
                "Dedicated study environment with focused preparation atmosphere.",
            },
            {
              title: "Homely Food",
              description:
                "Nutritious vegetarian meals with disciplined meal timings.",
            },
            {
              title: "Physical Training",
              description:
                "Running ground and expert trainer for defence preparation.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:rounded-[32px] md:p-8"
            >
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
