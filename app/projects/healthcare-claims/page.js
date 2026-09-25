// app/projects/healthcare-claims/page.js

'use client';

import { useEffect, useRef } from 'react';

export default function HealthcareClaims() {
  const tableauRef = useRef(null);

  useEffect(() => {
    const container = tableauRef.current;

    if (!container) return;

    const vizElement = container.getElementsByTagName('object')[0];

    const resizeTableau = () => {
      const width = container.offsetWidth;

      if (width > 800) {
        vizElement.style.width = '1000px';
        vizElement.style.height = '1827px';
      } else if (width > 500) {
        vizElement.style.width = '100%';
        vizElement.style.height = '1827px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '2227px';
      }
    };

    resizeTableau();

    const scriptElement = document.createElement('script');
    scriptElement.src =
      'https://public.tableau.com/javascripts/api/viz_v1.js';
    scriptElement.async = true;

    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    window.addEventListener('resize', resizeTableau);

    return () => {
      window.removeEventListener('resize', resizeTableau);
    };
  }, []);

  return (
    <main className="w-full py-8 px-2 sm:px-4">
      <div className="w-full max-w-[1000px] mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-black">
          Healthcare Claims Intelligence
        </h1>

        <div
          ref={tableauRef}
          className="tableauPlaceholder w-full"
          style={{ position: 'relative' }}
        >
          <noscript>
            <a href="https://public.tableau.com/views/HealthcareClaimsIntelligence/Dashboard1">
              <img
                alt="Healthcare Claims Intelligence Dashboard"
                src="https://public.tableau.com/static/images/He/HealthcareClaimsIntelligence/Dashboard1/1_rss.png"
                style={{ border: 'none' }}
              />
            </a>
          </noscript>

          <object
            className="tableauViz"
            style={{ display: 'none' }}
          >
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />

            <param name="embed_code_version" value="3" />

            <param name="site_root" value="" />

            <param
              name="name"
              value="HealthcareClaimsIntelligence/Dashboard1"
            />

            <param name="tabs" value="no" />

            <param name="toolbar" value="yes" />

            <param
              name="static_image"
              value="https://public.tableau.com/static/images/He/HealthcareClaimsIntelligence/Dashboard1/1.png"
            />

            <param name="animate_transition" value="yes" />

            <param name="display_static_image" value="yes" />

            <param name="display_spinner" value="yes" />

            <param name="display_overlay" value="yes" />

            <param name="display_count" value="yes" />

            <param name="language" value="en-US" />
          </object>
        </div>

      </div>
    </main>
  );
}