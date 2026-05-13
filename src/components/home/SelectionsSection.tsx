import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const selections = [
  {
    name: "Siwani Yadav",
    exam: "Airforce X Group",
    image: "/images/selections/x-group-selection-1.png",
  },
  {
    name: "Hemant Dhakad",
    exam: "NDA",
    image: "/images/selections/nda-selection-1.png",
  },
  {
    name: "Sanjay kumar",
    exam: "RPF",
    image: "/images/selections/rpf-selection-1.png",
  },
  {
    name: "Preety Godara",
    exam: "Chandigarh Police",
    image: "/images/selections/chandigarh-police-selection-1.png",
  },
  {
    name: "Manisha Meena",
    exam: "Delhi Police",
    image: "/images/selections/delhi-police-selection-1.png",
  },
  {
    name: "Sheetal",
    exam: "Rajasthan Police & RPF & Delhi Police",
    image: "/images/selections/delhi-police&rpf-selection1.png",
  },
  {
    name: "Pimlesh Meena",
    exam: "Delhi Police",
    image: "/images/selections/delhi-police-selection-2.png",
  },
  {
    name: "Kajal Verma",
    exam: "Airforce X Group",
    image: "/images/selections/x-group-selection-2.png",
  },
  {
    name: "Aditya Chaudary",
    exam: "President Body Guard",
    image: "/images/selections/president-bodyguard-selection-1.png",
  },
  {
    name: "Sangita Kumari",
    exam: "Delhi Police",
    image: "/images/selections/delhi-police-selection-4.png",
  },
  {
    name: "Mohit Kumar",
    exam: "RPF",
    image: "/images/selections/rpf-selection-2.png",
  },
  {
    name: "Priyanka Kumari",
    exam: "Delhi Police",
    image: "/images/selections/delhi-police-selection-3.png",
  },
];

export default function SelectionsSection() {
  return (
    <section id="selections" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Proven Results
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            500+ Successful Selections
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            NDA, Rajasthan Police, Army GD, Airforce X/Y Group, SSC GD and many
            more successful selections.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { title: "500+", subtitle: "Total Selections" },
            { title: "Weekly", subtitle: "Mock Test" },
            { title: "Ground", subtitle: "Physical Training" },
            { title: "Hostel", subtitle: "Facilities" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="mb-2 text-3xl font-bold tracking-tight text-blue-600">
                {item.title}
              </h3>

              <p className="text-sm font-medium text-gray-600">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
            {selections.map((student, index) => (
              <div
                key={index}
                className="group min-w-[85%] snap-center overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-w-0"
              >
                <div className="relative h-[260px] w-full overflow-hidden md:h-[320px]">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    sizes="(max-width: 768px) 85vw,
                    (max-width: 1024px) 50vw,
                    33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-6 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                        {student.name}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        Successful Selection
                      </p>
                    </div>

                    <div className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                      {student.exam}
                    </div>
                  </div>

                  <div className="h-px w-full bg-slate-100" />

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-600">
                      IDA Classes Jaipur
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent md:hidden" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent md:hidden" />

          {/* LEFT ARROW */}
          <ChevronLeft className="absolute left-4 top-1/2 z-20 h-10 w-10 -translate-y-1/2 animate-pulse text-slate-400 md:hidden" />

          {/* RIGHT ARROW */}
          <ChevronRight className="absolute right-4 top-1/2 z-20 h-10 w-10 -translate-y-1/2 animate-pulse text-slate-400 md:hidden" />
        </div>

        <div className="mt-16 flex justify-center">
          <button className="rounded-2xl border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg">
            View More Selections
          </button>
        </div>
      </div>
    </section>
  );
}
