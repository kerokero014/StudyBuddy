"use client";

import { useState } from "react";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Study Buddy📖</h1>
        <button
          className="md:hidden rounded-lg focus:outline-none focus:shadow-outline transition-transform transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 4.293a1 1 0 011.414 0L10 6.586l2.586-2.293a1 1 0 011.414 1.414L11.414 8l2.293 2.586a1 1 0 01-1.414 1.414L10 9.414l-2.586 2.293a1 1 0 01-1.414-1.414L8.586 8 6.293 5.414a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h14v2H3V5zm0 6h14v2H3v-2zm0 6h14v2H3v-2z"
              />
            )}
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto bg-slate-700 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out absolute md:relative top-16 left-0 md:top-0 md:left-0 rounded-md md:rounded-none shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            <li>
              <a
                href="/"
                className="block px-2 py-1 rounded-md hover:bg-slate-600 hover:text-gray-300 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 rounded-md hover:bg-slate-600 hover:text-gray-300 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 rounded-md hover:bg-slate-600 hover:text-gray-300 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors duration-200">
          Login
        </button>
      </div>
    </header>
  );
}
