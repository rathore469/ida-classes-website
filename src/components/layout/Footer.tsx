import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <h2 className="mb-5 text-3xl font-bold">IDA Classes Jaipur</h2>

          <p className="leading-relaxed text-gray-400">
            Defence and government exam preparation institute focused on
            disciplined learning, <br /> physical training and successful
            selections.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.instagram.com/idaclassesjaipur/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-blue-600 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.youtube.com/@idaclassesjaipur/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-red-600 hover:text-white"
            >
              <FaYoutube size={20} />
            </a>

            <a
              href="https://www.facebook.com/IDAclassesjaipur/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-blue-500 hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-2xl font-semibold">Quick Links</h3>

          <div className="space-y-3 text-gray-400">
            <p>
              <a href="#hostel" className="transition hover:text-blue-600">
                Home
              </a>
            </p>
            <p>
              <a href="#courses" className=" transition hover:text-blue-600">
                Courses
              </a>
            </p>
            <p>
              <a href="#selections" className="transition hover:text-blue-600">
                Selections
              </a>
            </p>
            <p>
              <a href="#hostel" className="transition hover:text-blue-600">
                Hostel Facilities
              </a>
            </p>
            <a
              href="/privacy-policy"
              className="hover:text-blue-500 transition"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-2xl font-semibold">Contact</h3>

          <div className="space-y-4 text-gray-400">
            <p>Shop no. 2, Main Hathoj Stand, Kalwar Rd, Jaipur</p>

            <p>+91 96675 56598</p>

            <p>dev.is.rathore@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 IDA Classes Jaipur. All rights reserved.
      </div>
    </footer>
  );
}
