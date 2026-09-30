// app/components/Welcome.js

import Link from 'next/link';

export default function Welcome() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center md:m-8 lg:m-12">
      <img src="/images/mlogo.svg" alt="Logo" className="w-80 h-auto animate-pulse transition-transform transform hover:scale-110 duration-1000" />
      <h2 className="text-3xl font-semibold text-center">
        Welcome to my{' '}
        <Link href="#projects" className="text-lime-500">
          <span className="hover:scale-105 inline-block transform transition-transform duration-300">
            portfolio
          </span>
        </Link>
      </h2>
      <p className="mt-2 mb-4 text-center text-gray-500">
        Data. Insights. Better Decisions.
      </p>
      <Link
        href="#projects"
        aria-label="Scroll to Projects section"
        className="mt-4 inline-flex items-center justify-center text-gray-500 hover:text-lime-500 animate-bounce transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Link>
    </section>
  );
}
