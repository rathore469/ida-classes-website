"use client";

import Image from "next/image";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

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
    <section
      id="selections"
      className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-sm">
            Proven Results
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            500+ Successful Selections
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            NDA, Rajasthan Police, Army GD, Airforce X/Y Group, SSC GD and many
            more successful selections.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-2 gap-4 md:mb-16 md:grid-cols-4 md:gap-6">
          {[
            { title: "500+", subtitle: "Total Selections" },
            { title: "Weekly", subtitle: "Mock Test" },
            { title: "Ground", subtitle: "Physical Training" },
            { title: "Hostel", subtitle: "Facilities" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[24px] border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:rounded-[32px] md:p-6"
            >
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 md:text-3xl">
                {item.title}
              </h3>

              <p className="text-xs font-medium text-gray-600 md:text-sm">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.12,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {selections.map((student, index) => (
            <SwiperSlide key={index}>
              <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-[32px]">
                <div className="relative h-[240px] w-full overflow-hidden md:h-[320px]">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    sizes="
                      (max-width: 768px) 90vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-5 p-5 md:space-y-6 md:p-6">
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <div>
                      <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        {student.name}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        Successful Selection
                      </p>
                    </div>

                    <div className="rounded-full bg-blue-50 px-3 py-2 text-[11px] font-semibold leading-tight text-blue-700 md:px-4 md:text-xs">
                      {student.exam}
                    </div>
                  </div>

                  <div className="h-px w-full bg-slate-100" />

                  <p className="text-sm font-medium text-gray-600">
                    IDA Classes Jaipur
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
