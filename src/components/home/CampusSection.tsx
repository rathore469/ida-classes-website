import Image from "next/image";

export default function CampusSection() {
  return (
    <section id="hostel" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Campus Life & Facilities
          </p>

          <h2 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Residential Training Environment
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Comfortable accommodation, disciplined environment, library
            facilities, homely food and physical training designed to support
            focused preparation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[36px] bg-white shadow-sm">
            <div className="relative h-[320px] w-full">
              <Image
                src="/images/campus/boys-hostel.png"
                alt="Boys Hostel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div className="p-8">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                Boys Hostel
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600">
                Residential hostel facility with disciplined routine, RO water,
                library access and convenient access to physical training and
                classrooms.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Library Access",
                  "RO Water",
                  "Training Ground",
                  "Homely Food",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] bg-white shadow-sm">
            <div className="relative h-[320px] w-full">
              <Image
                src="/images/campus/girls-hostel.png"
                alt="Girls Accommodation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div className="p-8">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                Secure Girls Accommodation
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600">
                Safe accommodation in Star City with lift, parks, study tables,
                kitchen facilities, attached washrooms and secure residential
                environment.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Security",
                  "Lift Facility",
                  "Study Tables",
                  "Attached Washrooms",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              Library Facility
            </h3>

            <p className="leading-relaxed text-gray-600">
              Dedicated study environment for boys and girls with focused
              preparation atmosphere.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              Homely Food
            </h3>

            <p className="leading-relaxed text-gray-600">
              Nutritious vegetarian meals with fixed meal timings to maintain
              disciplined daily routine.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              Physical Training
            </h3>

            <p className="leading-relaxed text-gray-600">
              Running ground and qualified physical trainer for defence and
              police preparation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
