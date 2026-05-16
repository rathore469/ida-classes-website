export default function LocationSection() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Defence Coaching in Jaipur
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            NDA Coaching &
            <br />
            Hostel Facilities
            <br />
            in Jaipur
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            IDA Classes Jaipur provides disciplined classroom preparation,
            physical training, boys and girls hostel facilities, library access
            and focused mentorship for defence and government exam aspirants.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Near Hathoj Bus Stand, Kalwar Road, Jaipur
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.317252438137!2d75.67797887540017!3d26.95685095819242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d47cadb02b1%3A0x4f3acfa1c9ce35a1!2sIDA%20Classes%20Jaipur!5e0!3m2!1sen!2sin!4v1778949062498!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[260px] w-full border-0 md:min-h-[420px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Institute Address
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  Shop No. 2, Main Hathoj Stand, Kalwar Road, Jaipur, Rajasthan
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Facilities Available
                </h3>

                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    "Boys Hostel",
                    "Girls Accommodation",
                    "Library Facility",
                    "Physical Training",
                    "RO Water",
                    "Homely Food",
                    "Study Environment",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://maps.app.goo.gl/fhDkf3HSvY65zEqV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Open in Maps
                </a>

                <a
                  href="tel:9667556598"
                  className="rounded-2xl border border-slate-300 px-7 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
