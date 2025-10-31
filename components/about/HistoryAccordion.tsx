// components/about/HistoryAccordion.tsx
"use client";

import { Accordion, AccordionItem } from "@carbon/react";

export default function HistoryAccordion() {
  return (
    <Accordion align="start">
      <AccordionItem title="Foundations & family legacy">
        Built on a family legacy in hydraulic materials and services with a
        focus on cylinder tubes, chrome plated rods, and hydraulic components.
      </AccordionItem>
      <AccordionItem title="Formalization & expansion (2017 →)">
        Consolidated as an LLP in 2017 with stronger inventory programs and
        quality systems.
      </AccordionItem>
      <AccordionItem title="Integrated machining capability">
        Added in-house processes—deep-hole drilling, boring, honing, burnishing
        and grinding— for faster, spec-accurate delivery and traceability.
      </AccordionItem>
    </Accordion>
  );
}
