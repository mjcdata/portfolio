// app/projects/healthcare-claims/page.js

export default function HealthcareClaims() {
  return (
    <main className="w-full py-8">
      <div className="w-full max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Healthcare Claims Intelligence
        </h1>

        <iframe
          src="https://public.tableau.com/views/HealthcareClaimsIntelligence/Dashboard1?:showVizHome=no&:embed=yes"
          width="100%"
          height="1827"
          style={{ border: "none" }}
          title="Healthcare Claims Intelligence Dashboard"
        />
      </div>
    </main>
  );
}