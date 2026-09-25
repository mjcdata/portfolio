// app/projects/healthcare-claims/page.js

export default function HealthcareClaims() {
  return (
    <main className="w-full py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">
        Healthcare Claims Intelligence
      </h1>

      <iframe
        src="https://public.tableau.com/views/HealthcareClaimsIntelligence/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        width="100%"
        height="1827"
        style={{ border: "none" }}
        title="Healthcare Claims Intelligence Dashboard"
      />
    </main>
  );
}