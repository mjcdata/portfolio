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
    </section>
  );
}




