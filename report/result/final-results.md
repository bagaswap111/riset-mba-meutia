# Current Results — ProFix Research Alignment

**Prepared:** 2026-10-01  
**Status:** Preliminary repository and prototype review. The participant study has **not yet been run**, per project-team confirmation. This file reports verified current-state observations; it is not a final empirical-results section and must not be cited as participant evidence.

## 1. Result Against the Approved Proposal

The 2026 BINUS proposal describes a one-year qualitative study to improve visual branding and website UI for Indonesian household-service UMKM. Its stated activities include observing conventional service advertisements, interviewing providers, mapping user journeys, developing a prototype, and evaluating it against Nielsen's 10 heuristics. It requests Rp10,000,000, sets TKT 1 to TKT 3, and lists Enrichment, a research product video, an HD poster, registered IP, and an accepted Scopus publication as required outputs.

The repository contains two interactive React prototypes, an Indonesian-language paper draft, and a code-led heuristic evaluation. These artifacts show prototype work has begun. The repository does not establish that provider observation/interviews, user sessions, institutional TKT assessment, or required output submissions have been completed.

## 2. Prototype Review Findings

The apps share the household-services theme but do not yet form one consistent Indonesian-market prototype.

### Digital Home Care & Services

- Includes searchable service discovery, service-specific AC/leak/pump detail paths, booking checkout, and a clear confirmation flow.
- Uses English copy, USD, and seeded New York customer/service data.
- The WhatsApp payment choice can pass through the same mock payment-success path as card payment. Clearing the address can result in a seeded fallback address being used.
- The user interface and current code inspection support prototype-level observations, not live service or study outcomes.

### Professional Home Services

- Uses Indonesian UI copy and includes a service catalog, search/filter, checkout, confirmation, and technician tracking.
- Uses a fixed checkout amount regardless of selected service, and the service-detail screen reuses AC-specific imagery/content for other service types.
- Shows a Dubai map while seeded booking context uses a Jakarta address; the marker movement is simulated, despite “real-time GPS” copy.
- Its WhatsApp dialog does not open WhatsApp; it changes a local sending state and closes.

## 3. Code-Led Heuristic Evaluation

The prior report applied Nielsen's heuristics and a lightweight accessibility checklist to code. Its counts are distinct findings, not participant scores:

| Prototype | Critical | Major | Minor | Most consequential findings |
|---|---:|---:|---:|---|
| Digital Home Care & Services | 0 | 4 | 2 | WhatsApp payment presented as approved; cleared address can be replaced silently; keyboard/label semantics need work. |
| Professional Home Services | 1 | 6 | 2 | Fixed checkout price; unrelated service details; simulated/location-mismatched tracking; non-functional WhatsApp action; accessibility issues. |

Both apps also expose prototype/reviewer elements in customer-facing screens and rely on state-only navigation. Contrast, rendered mobile layout, browser-history behavior, and runtime focus/keyboard behavior were not verified. See the detailed [heuristic evaluation](../evaluation/profix-usability-heuristics-evaluation.md).

## 4. What Is Not Yet a Research Result

The following claims in `paper/draft-paper.md` are not verified by the available repository evidence and must remain pending until supported by study records:

- Results from 10 Gen Z participants and 3 UI/UX experts.
- Concurrent think-aloud, post-task interview, affinity-map, and impact-effort findings.
- Average usability results of 87.5%, 4.20/5, 84.6%, or 4.23/5. These figures conflict internally; 4.20/5 is 84%, while 4.23/5 is approximately 84.6%.
- Reduced cognitive load, faster decisions, improved task completion, lower bounce rate, increased conversion, or measured increases in trust.
- WCAG AA compliance, live payments, live GPS tracking, and completed institutional outputs.

The proposal includes a budget line for analysis of 10 people, but that line alone does not verify the draft's exact participant group, expert count, protocol, scores, or findings.

## 5. Current Conclusion

The work is **partially aligned at the topic and prototype-intent level**, but not yet aligned at the implementation or results level. A coherent path is to consolidate the two apps into one Indonesian-market prototype, using the Indonesian app as its base and bringing over the more service-specific booking/detail patterns from the digital app. Service data, pricing, location, payment/contact states, accessibility, and demo labels must then be made consistent and checked against provider-confirmed information.

The empirical results are **pending**. The current code review can be reported as a preliminary prototype inspection, not as a completed user study. Consequently, the current manuscript cannot yet be represented as a publishable empirical-results paper. After the approved research activities are completed and documented, replace the draft's dummy or unsupported claims with reproducible results, resolve the score discrepancy, verify references, and report limitations.

## 6. Evidence Boundary

- **Observed:** repository files and interactions implied by their code; proposal PDF content; prior source-based heuristic findings.
- **Confirmed by project team:** participant study has not yet been run; both prototypes are to be merged as the direction for the canonical prototype.
- **Not observed/verified:** participant experience, field observations, provider interviews, study scores, prototype effects on business/user outcomes, TKT advancement, and required-output completion.
