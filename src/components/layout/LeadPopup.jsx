"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const popupClosed = localStorage.getItem("ida_popup_closed");

    if (popupClosed) {
      const lastClosed = parseInt(popupClosed);
      const now = Date.now();

      if (now - lastClosed < 24 * 60 * 60 * 1000) {
        return;
      }
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollPosition / pageHeight) * 100;

      if (scrollPercent > 25) {
        setOpen(true);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closePopup = () => {
    localStorage.setItem("ida_popup_closed", Date.now().toString());
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#071120] shadow-[0_20px_80px_rgba(0,0,0,0.6)] animate-popup">
        <button
          onClick={closePopup}
          className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative hidden md:block min-h-[650px]">
            <Image
              src="/images/hero/hero-main.webp"
              alt="IDA Classes"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/40 to-transparent" />

            <div className="absolute bottom-10 left-10 right-10 text-white">
              <p className="mb-3 text-sm uppercase tracking-[5px] text-blue-400">
                IDA Classes Jaipur
              </p>

              <h2 className="text-5xl font-bold leading-tight">
                Become Future Defence Officer
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-white/70">
                NDA • Airforce • Navy • SSC GD • Delhi Police • Army-Agniveer •
                Rajasthan Police • CDS
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 md:p-12 text-white">
            <div className="mb-8">
              <p className="mb-3 text-sm uppercase tracking-[5px] text-blue-400">
                Free Demo Class
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Start Your Defence Journey
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/70">
                Book your free counselling session and get complete guidance for
                NDA, Airforce, Navy and Defence exams.
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();

                if (loading) return;

                setLoading(true);

                const formData = new FormData(e.currentTarget);

                const name = formData.get("name");
                const phone = formData.get("phone");
                const course = formData.get("course");

                try {
                  const message = `Hello IDA Classes,

I want to book a free demo class.

Name: ${name}
Mobile: ${phone}
Course: ${course}`;

                  const whatsappURL = `https://wa.me/919667556598?text=${encodeURIComponent(
                    message,
                  )}`;

                  window.dataLayer = window.dataLayer || [];

                  window.dataLayer.push({
                    event: "generate_lead",
                    lead_source: "website_popup_form",
                    course_selected: course,
                  });

                  window.open(whatsappURL, "_blank");

                  closePopup();

                  fetch(
                    "https://script.google.com/macros/s/AKfycbwYgB7ge-6OTmB6raUpeVSKFSNW18w5gp-RYA1rVdU_LrwBEY0_B1xbG4i_lDhk58eBfA/exec",
                    {
                      method: "POST",
                      body: JSON.stringify({
                        name,
                        phone,
                        course,
                      }),
                    },
                  );
                } catch (error) {
                  console.log(error);
                } finally {
                  setLoading(false);
                }
              }}
            >
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all placeholder:text-white/35 focus:border-blue-500 focus:bg-white/[0.05]"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Mobile Number"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all placeholder:text-white/35 focus:border-blue-500 focus:bg-white/[0.05]"
              />

              <select
                name="course"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all focus:border-blue-500 focus:bg-white/[0.05]"
              >
                <option value="" className="text-black">
                  Select Course
                </option>

                <option className="text-black">NDA</option>
                <option className="text-black">Airforce</option>
                <option className="text-black">Navy</option>
                <option className="text-black">SSC GD</option>
                <option className="text-black">Delhi Police</option>
                <option className="text-black">Army-Agniveer</option>
                <option className="text-black">Rajasthan Police</option>
                <option className="text-black">CDS</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="h-14 w-full rounded-2xl bg-blue-600 text-base font-semibold transition-all duration-300 hover:bg-blue-500 shadow-[0_10px_30px_rgba(37,99,235,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Processing..." : "Book Free Demo Class"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
