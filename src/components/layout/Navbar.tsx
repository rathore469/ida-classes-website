"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo/ida-logo.webp"
            alt="IDA Classes Logo"
            width={42}
            height={42}
            className="object-contain h-auto w-auto"
          />

          <div>
            <h1 className="text-xl font-bold text-gray-900">IDA Classes</h1>

            <p className="text-[10px] uppercase tracking-[0.25em] text-blue-600">
              Jaipur
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#courses"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Courses
          </a>

          <a
            href="#selections"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            selections
          </a>

          <a
            href="#hostel"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Hostel
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Contact
          </a>

          <a
            data-track="call"
            href="tel:9667556598"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Call Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center md:hidden text-slate-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="#home" className="text-base font-medium text-gray-700">
              Home
            </a>

            <a href="#courses" className="text-base font-medium text-gray-700">
              Courses
            </a>

            <a href="#hostel" className="text-base font-medium text-gray-700">
              Hostel
            </a>

            <a href="#contact" className="text-base font-medium text-gray-700">
              Contact
            </a>

            <a
              data-track="call"
              href="tel:9667556598"
              className="mt-2 rounded-xl bg-blue-600 px-5 py-4 text-center text-base font-semibold text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
