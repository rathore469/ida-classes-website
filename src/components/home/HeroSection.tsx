import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 md:flex-row">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Defence Coaching & Hostel Facilities in Jaipur
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            From Preparation
            <br />
            <span className="text-blue-600">To Selection</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Prepare for success with expert coaching for NDA, Army GD, Navy,
            Airforce X/Y Group, Delhi Police, Rajasthan Police, SSC GD, and more
            — with smart classrooms, focused physical training, hostel
            facilities, and disciplined guidance designed to build confidence,
            fitness, and a winning mindset.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <a href="tel:9667556598">
              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
                Call Now
              </button>
            </a>

            <a href="#courses">
              <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-800 transition hover:bg-gray-100">
                Explore Courses
              </button>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">500+</h2>
              <p className="text-sm text-gray-600">Selections</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">8+</h2>
              <p className="text-sm text-gray-600">Courses</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">Hostel</h2>
              <p className="text-sm text-gray-600">Facilities</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">Ground</h2>
              <p className="text-sm text-gray-600">Training</p>
            </div>
          </div>
        </div>

        <div className="relative h-[320px] w-full max-w-xl overflow-hidden rounded-[40px] md:h-[500px] aspect-[4/5]">
          <Image
            src="/images/hero-section-photo.png"
            alt="IDA Classes"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
