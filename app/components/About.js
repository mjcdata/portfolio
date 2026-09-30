'use client';
import { faPython, faJsSquare, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import AboutItems from './AboutItems';

export default function About() {
  return (
    <section id="about" className="mb-8 p-6 bg-white rounded-lg shadow-md pt-14">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4 border-b-2 border-lime-500 pb-2">About</h2>
      <p className="mt-2 text-black leading-relaxed">
        I am a data professional who enjoys using technology to solve problems
        and make information easier to understand. I have experience working
        with data across healthcare and financial services, using tools like
        <strong> SQL</strong>, <strong>Python</strong>, <strong>Power BI</strong>, <strong>Tableau</strong>, and <strong>Excel</strong> to analyze data, improve
        processes, and support better decisions.
    </p>

    <p className="mt-4 text-black leading-relaxed">
        I enjoy working on problems that do not always have an obvious answer.
        I like starting with a question, exploring the data, finding patterns,
        and turning what I learn into a useful solution. My projects give me
        a chance to work across areas like business intelligence, forecasting,
        cybersecurity, and web development.
    </p>

    <p className="mt-4 text-black leading-relaxed">
        I am also someone who enjoys learning and building new things. Technology
        is always changing, and I like finding new ways to use it in my work.
        Whether I am learning a new tool, building a data project, or improving
        something I have already created, I am always looking for ways to grow
        my skills and create better solutions.
    </p>

    <p className="mt-4 text-black leading-relaxed">
        Some of the programming tools and technologies I have worked with include:
    </p>
        
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
        <AboutItems
          iconName="logos:tableau-icon"
          iconClass="text-slate-900"
          title="Tableau"
          description="Experienced in building interactive dashboards and visualizations to communicate business insights."
        />
        <AboutItems
          iconName="logos:microsoft-power-bi"
          iconClass="text-slate-900"
          title="Power BI"
          description="Experienced in building business intelligence dashboards and reports to analyze performance and support decision-making."
        />
        <AboutItems
          icon={faPython}
          iconClass="text-slate-900"
          title="Python"
          description="Proficient in Python for data analysis and visualization."
        />
        <AboutItems
          icon={faJsSquare}
          iconClass="text-slate-900"
          title="JavaScript"
          description="Experience using front end libraries like React and Next for web development."
        />
        <AboutItems
          icon={faDatabase}
          iconClass="text-slate-900"
          title="SQL"
          description="Proficient in creating complex queries to extract insights from databases."
        />
        <AboutItems
          icon={faLinux}
          iconClass="text-slate-900"
          title="Linux"
          description="Proficient in using Linux for development and other tech hobbies like Cybersecurity and IoT."
        />
      </div>
    </section>
  );
}