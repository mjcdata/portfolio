'use client';
import ProjectItems from './ProjectItems';

export default function Projects() {

  return (

    <section id="projects" className="mb-8 p-6 sm:mb-8 lg:mb-12 bg-lime-500 rounded-lg shadow-md pt-14 w-full">
      <h2 className="text-3xl font-semibold text-black mb-4 border-b-2 border-black pb-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4"> 
         
         <ProjectItems
          title="Healthcare Claims Intelligence"
          description="An interactive Tableau dashboard analyzing synthetic healthcare claims data to identify cost drivers, compare in-network and out-of-network costs, and evaluate opportunities to reduce allowed cost through network utilization shifts."
          link="/projects/healthcare-claims"
          imgSrc="/images/healthcare.png"
          altText="Healthcare Claims Intelligence Tableau Dashboard"
        />

        <ProjectItems
          title="Retail Revenue Intelligence"
          description="An interactive Tableau dashboard analyzing retail revenue performance, customer behavior, product trends, returns, and international market performance using the UCI Online Retail II dataset."
          link="/projects/retail-revenue"
          imgSrc="/images/revenue.png"
          altText="Retail Revenue Intelligence Dashboard"
        />

        <ProjectItems
          title="UMSL Basketball Analysis"
          description="An interactive streamlit dashboard designed for the UMSL basketball team, enabling coaches and analysts to explore player performance metrics through dynamic scatterplots. This tool provides actionable insights for optimizing game strategies."
          link="https://umsl-bball.streamlit.app"
          imgSrc="/images/umsl-bball.png"
          altText="UMSL Basketball Analysis"
        />

        </div>
    </section>
  );
}
