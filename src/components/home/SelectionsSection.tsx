import Image from "next/image";

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
    <section id="selections" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Proven Results
          </p>

          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            500+ Successful Selections
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            NDA, Rajasthan Police, Army GD, Airforce X/Y Group, SSC GD and many
            more successful selections.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
            <h3 className="mb-2 text-3xl font-bold text-blue-600">500+</h3>

            <p className="text-sm text-gray-600">Total Selections</p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
            <h3 className="mb-2 text-3xl font-bold text-blue-600">Weekly</h3>

            <p className="text-sm text-gray-600">Mock Test</p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
            <h3 className="mb-2 text-3xl font-bold text-blue-600">Ground</h3>

            <p className="text-sm text-gray-600">Physical Training</p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
            <h3 className="mb-2 text-3xl font-bold text-blue-600">Hostel</h3>

            <p className="text-sm text-gray-600">Facilities</p>
          </div>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {selections.map((student, index) => (
            <div
              key={index}
              className="min-w-[85%] snap-center overflow-hidden rounded-[32px] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:min-w-0"
            >
              <div className="relative h-[260px] md:h-[300px] w-full overflow-hidden">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  sizes="(max-width: 768px) 85vw,
                        (max-width: 1024px) 50vw, 
                        33vw"
                  className="object-cover object-top transition duration-500 hover:scale-105"
                />
              </div>

              <div className="space-y-3 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {student.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Successful Selection
                    </p>
                  </div>

                  <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {student.exam}
                  </div>
                </div>

                <div className="h-px w-full bg-gray-100" />

                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-600">
                    IDA Classes Jaipur
                  </p>

                  <button className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="rounded-2xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600">
            View More Selections
          </button>
        </div>
      </div>
    </section>
  );
}
