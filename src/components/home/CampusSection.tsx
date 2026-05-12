import Image from "next/image";

export default function CampusSection() {
  return (
    <section id="hostel" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Campus Life & Facilities
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Residential Training Environment
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Comfortable accommodation, disciplined environment, library
            facilities, homely food and physical training designed to support
            focused preparation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* BOYS HOSTEL */}
          <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-[320px] w-full overflow-hidden">
              <Image
                src="/images/campus/boys-hostel.png"
                alt="Boys Hostel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-6 p-8">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                  Boys Hostel
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  Residential hostel facility with disciplined routine, RO
                  water, library access and convenient access to physical
                  training and classrooms.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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
          <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-[320px] w-full overflow-hidden">
              <Image
                src="/images/campus/girls-hostel.png"
                alt="Girls Accommodation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-6 p-8">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                  Secure Girls Accommodation
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  Safe accommodation in Star City with lift, parks, study
                  tables, kitchen facilities, attached washrooms and secure
                  residential environment.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Library Facility",
              description:
                "Dedicated study environment for boys and girls with focused preparation atmosphere.",
            },
            {
              title: "Homely Food",
              description:
                "Nutritious vegetarian meals with fixed meal timings to maintain disciplined daily routine.",
            },
            {
              title: "Physical Training",
              description:
                "Running ground and qualified physical trainer for defence and police preparation.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
