# Proposal Alignment Report — ProFix Research

**Prepared:** 2026-10-01  
**Materials compared:** the 2026 BINUS research proposal PDF, `paper/draft-paper.md`, both ProFix app folders, and `evaluation/profix-usability-heuristics-evaluation.md`.

## Executive Summary

The proposal, paper, and apps share a broad subject: visual branding and usability for a household-services website aimed at Gen Z. However, they are not yet aligned as a complete research record. The paper presents detailed design specifications and user-study results not established by the proposal text or the code-led audit. The apps implement some of the proposal's broad intentions, but differ from the paper's specified visual system and contain usability issues that conflict with reported results such as effective error prevention, consistent booking, and accurate pricing.

Treat the apps as interactive prototype artifacts, the PDF as the approved project plan, and the paper's study outcomes as unverified until supported by actual participant records and analysis.

## Alignment Matrix

| Topic | Proposal PDF | Paper draft | Apps / evaluation | Assessment |
|---|---|---|---|---|
| Research topic | Visual branding and usability for household-service UMKM, with Gen Z as the target audience. | Same title and broad focus. | Both prototypes present household services, service discovery, prices, and booking. | Broadly aligned. |
| Research method | Qualitative: observe conventional service advertisements, interview providers, map user journeys, develop a prototype, and evaluate it using Nielsen's 10 heuristics. | Adds 10 Gen Z participants (ages 18–26), 3 UI/UX experts, concurrent think-aloud, post-task interviews, affinity mapping, and impact-effort ranking. | The saved evaluation is code-led; it did not conduct participant sessions or calculate participant scores. The proposal budget mentions analysis of a 10-person sample, but does not specify that this means 10 Gen Z test participants or add the paper's full protocol. | The paper expands the method. Verify the work was conducted and approved before describing it as completed research. |
| Visual design | A professional, informative, consistent website UI is the broad intention; Figma licenses are budgeted. | Specifies `#1E3A5F` navy, `#FF6B35` orange CTA, Poppins/Inter, a three-stage booking flow, three price tiers, and cognitive design principles. | Apps use near-black/blue (`#00000b`, `#0058bf`) and Inter. The professional app uses a four-step checkout. Neither app presents the stated three price tiers. | The apps do not implement the paper's specific visual specification. See [digital styles](../profix---digital-home-care-&-services/src/index.css) and [professional styles](../profix---professional-home-services/src/index.css). |
| Indonesian service context | Describes services including plumbing, drilled wells, AC cleaning, septic-tank pumping (*sedot WC*), and water pumps, in an Indonesian UMKM context. | Discusses Jabodetabek and Gen Z. | The digital app is English-language and seeds a New York address. The professional app is Indonesian-language, but uses USD and shows a Dubai map with a seeded Jakarta address. Neither catalog appears to include *sedot WC*. | Locale and service scope are inconsistent with the proposal. See [digital app state](../profix---digital-home-care-&-services/src/App.tsx), [professional service data](../profix---professional-home-services/src/data/mockData.ts), and [professional tracking](../profix---professional-home-services/src/screens/TrackTechnicianScreen.tsx). |
| Booking quality | The objective is a useful, informative website interface; no detailed payment implementation is specified. | Claims transparent pricing, real-time validation, and improved task performance. | The professional checkout applies a fixed `$55 + fees` regardless of service. The digital checkout can treat WhatsApp Pay as a completed, approved payment; it can also silently substitute a seeded address when the street field is cleared. | Current behavior conflicts with transparency and error-prevention claims. See [professional checkout](../profix---professional-home-services/src/screens/CheckoutScreen.tsx) and [digital checkout](../profix---digital-home-care-&-services/src/components/screens/CheckoutScreen.tsx). |
| Tracking and contact | The proposal focuses on the prototype website and heuristic evaluation; live tracking or payment integrations are not established as research outputs. | Refers to an interactive prototype and discusses digital service experiences. | Professional tracking animates a simulated marker but calls it real-time GPS. Its WhatsApp dialog changes local state and closes without opening WhatsApp. Other payment/auth flows are also simulated. | These are prototype behaviors, not evidence of a production service or verified live-data experience. Clearly label them as simulations or connect them to real services. |
| Research outcomes | This is a one-year 2026 proposal, TKT 1 to 3, with Rp10,000,000 requested. Required outputs include Enrichment submitted, Research Product Video submitted, HD product poster submitted, IP registered, and Scopus publication accepted (PDF pp. 1–2, 16). | States a 12-month timeline and Rp10,000,000 budget, and mentions prototype, poster, video, and IP. It does not clearly report TKT progress or all required output statuses. | The repository contains the two app prototypes, draft paper, and heuristic report. It does not contain evidence of the submitted Enrichment, video/poster delivery, registered IP, or accepted Scopus paper. | Timeline and amount align; attainment of formal targets is not demonstrated by the repository contents. |
| Usability scores | Proposes qualitative work and Nielsen heuristic evaluation; does not state the paper's numerical results in the proposal text inspected. | Abstract says 87.5% and 4.20/5; results and conclusion say 84.6% and 4.23/5. | The audit uses severity categories and code evidence, not a 1–5 participant rating. It reports 0 critical / 4 major / 2 minor findings for Digital Home Care and 1 critical / 6 major / 2 minor for Professional Home Services. | The paper's score is internally inconsistent and cannot be supported by the code audit. Note that 4.20/5 is 84%, while 4.23/5 is approximately 84.6%. |
| References | Uses its own Vancouver-numbered bibliography (PDF pp. 13–14). | Uses a substantially different reference list; for example, proposal reference [1] is Frascara, while draft reference [1] is Darmawan et al. | Apps and code audit do not validate the papers' bibliographic details. | Different lists are not automatically wrong for a later manuscript, but citations must be remapped and every source/DOI verified. The same citation numbers do not identify the same works across these documents. |

## Heuristic Evaluation Context

The report at [evaluation/profix-usability-heuristics-evaluation.md](../evaluation/profix-usability-heuristics-evaluation.md) is a code-led review of the two prototypes, not a user study, visual-browser audit, or complete WCAG assessment. It found:

- **Digital Home Care & Services:** 0 critical, 4 major, and 2 minor distinct findings.
- **Professional Home Services:** 1 critical, 6 major, and 2 minor distinct findings.

The professional app's fixed checkout total was rated critical because the amount can be unrelated to the selected service. Both apps have significant accessibility concerns in the reviewed code. Contrast, rendered mobile layout, image rendering, and runtime keyboard/focus behavior were not verified because dependencies were unavailable during that evaluation.

These findings can guide prototype iteration. They cannot be converted into the paper's average Likert score or used to assert what participants experienced.

## Claims Requiring Evidence or Revision

1. **Participant and expert study:** Provide recruitment criteria, sample details, consent/ethics process, task scripts, raw or coded observations, interview records, and evaluator identities/roles. Reconcile the proposal's general 10-person budget line with the paper's specific 10 Gen Z participants plus 3 experts.
2. **Numerical result:** Resolve 87.5%, 4.20/5, 84.6%, and 4.23/5. State the calculation, denominator, aggregation method, and whether the score is from Likert questionnaires, heuristic ratings, or another instrument.
3. **User impact:** Claims about reduced cognitive load, faster decisions, bounce rate, task completion, trust, and conversion need direct measurement or should be reframed as design rationale/expected effects.
4. **Prototype specification:** Either bring the apps into line with the stated palette, three-stage flow, and service tiers, or update the paper to accurately describe the implemented React prototypes.
5. **Market context:** Align language, currency, location, service list, and map with the Indonesian UMKM/Jabodetabek context—or explicitly explain the prototypes' fictional test data and market assumptions.
6. **Research outputs and TKT:** Track each proposal deliverable and its status separately. The presence of a prototype or draft paper is not evidence that the required video, poster, Enrichment, IP registration, Scopus acceptance, or TKT 3 target has been achieved.
7. **References:** Reconcile numbering and bibliography between proposal and manuscript; verify bibliographic metadata and DOI links before submission.

## Suggested Evidence Hierarchy

- **Proposal PDF:** source of approved objectives, scope, duration, TKT targets, budget, and required outputs.
- **App folders:** evidence of the current interface and implemented/simulated interactions only.
- **Heuristic report:** code-derived usability risks and positive observations; not participant feedback or a numeric usability score.
- **Paper draft:** narrative of intended theory and claimed study findings; claims should be supported by research records and checked against the approved proposal and prototype.

## Source Files

- [Research Proposal - Meutia Braniwati, S.Ds., M.Sn..pdf](../Research%20Proposal%20-%20Meutia%20Braniwati,%20S.Ds.,%20M.Sn..pdf)
- [paper/draft-paper.md](../paper/draft-paper.md)
- [evaluation/profix-usability-heuristics-evaluation.md](../evaluation/profix-usability-heuristics-evaluation.md)
