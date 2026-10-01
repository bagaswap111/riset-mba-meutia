# Final Alignment Plan — ProFix Research

**Prepared:** 2026-10-01  
**Controlling document:** `Research Proposal - Meutia Braniwati, S.Ds., M.Sn..pdf`  
**Prototype direction:** Merge both existing ProFix prototypes into one canonical Indonesian-market prototype. Use `profix---professional-home-services` as the base and selectively carry over the clearer catalog, service-specific details, booking summary, and confirmation patterns from `profix---digital-home-care-&-services`. Preserve the second app as a historical/reference prototype; do not present it as a separate tested version.

## 1. Alignment Rules

1. Keep the approved proposal as the fixed scope: one-year 2026 beginner research, qualitative approach, initial TKT 1 and target TKT 3, and approved Rp10,000,000 budget. Do not edit the signed proposal PDF. Any scope, sample, budget, or output change requires the institution's amendment/approval process.
2. Do not claim study completion, participant findings, score improvements, or publication/IP completion until the corresponding evidence exists.
3. Separate three evidence types in all writing: proposal commitments, prototype/code observations, and empirical user-study results.
4. The current paper's claims of 10 Gen Z participants, 3 expert evaluators, think-aloud, post-task interviews, affinity mapping, Likert scores, and impact-effort analysis remain unverified. Only retain those methods if the team confirms approval and completes them with records.
5. Treat `paper/draft-paper.md` as a working draft, not a source of verified results. Preserve the existing file until an evidence-backed revision is approved.

## 2. Canonical Prototype

**Base:** `profix---professional-home-services` because it already uses Indonesian customer-facing copy. **Borrow from:** `profix---digital-home-care-&-services` where its service catalog, service-specific detail pages, booking summary, and confirmation interactions improve the flow.

### Target context

- Target service market: Indonesian household-maintenance UMKM, consistent with the proposal. Use Jabodetabek only if confirmed as the actual field-research area.
- Use Bahasa Indonesia consistently, IDR prices, Indonesian address/postal conventions, and a map/location context that matches the declared study area.
- Align initial catalog content to services named in the proposal: plumbing/ledeng, drilled wells, AC cleaning, septic-tank service (*sedot WC*), and water-pump repair. Confirm the actual partner/provider offering before representing any service as available.
- Do not invent market prices, guarantees, certifications, or service capacity. Use provider-confirmed data; clearly label any remaining sample content as prototype data.

### Required merge and correction work

1. Establish one reusable service-data model as the source of truth for title, category, scope, image, starting price, duration, and availability.
2. Make catalog cards and detail content reflect the same selected service; remove the AC-only content reused for unrelated services.
3. Derive checkout line items, fees, taxes, and total from that service data. Validate required address fields and never silently substitute another address.
4. Use Indonesian Rupiah formatting and provider-confirmed pricing. If price is still unknown, show a transparent estimate/quote state instead of a fixed payable amount.
5. Make payment selection truthful: either implement each method, or present WhatsApp as a contact/booking route rather than an approved payment method. Do not show “paid” without an actual payment result.
6. Label GPS, authentication, WhatsApp, and payment simulations as demos until they use real integrations. Use a study-area map or remove location precision claims from the prototype.
7. Replace clickable non-semantic containers with keyboard-operable controls; associate form labels; expose selected/expanded/loading states; verify dialog focus and keyboard dismissal.
8. Remove reviewer-only screen switchers and embedded heuristic commentary from the customer-facing view. Keep prototype navigation available only in a clearly separate research/demo environment if needed.
9. Retain helpful existing patterns: searchable/filterable catalog, useful empty state, visible booking summary, confirmation next steps, FAQ/support, and service-specific information.

## 3. Research Execution Plan

The proposal specifies observation of conventional home-service advertising, provider interviews, customer-journey work, prototype development, and evaluation with Nielsen's 10 heuristics. Complete and document those activities in sequence:

1. **Protocol and governance:** Confirm the field site, partner/provider permission, target user definition, recruitment, consent/privacy process, and whether user testing requires ethics review. Resolve the sample size and roles before recruitment. The proposal budget's “analysis data 10 people” line is not by itself a complete participant protocol.
2. **Observation:** Record the selected conventional advertising examples and a consistent observation rubric. Retain source/date/context and redact personal information.
3. **Provider research:** Interview participating providers using a documented guide. Record service scope, verified prices/quote rules, geography, scheduling, guarantees, and common customer questions. Store consented notes/transcripts securely.
4. **Customer journey:** Map evidence-backed user needs and booking steps. Do not label users “Gen Z” without a defined eligibility range and recruitment record.
5. **Prototype iteration:** Create wireframes, then the merged high-fidelity prototype. Maintain a dated decision log linking each design decision to proposal goals or observed evidence. Test the full task path, including selection, schedule, address, payment/contact, and confirmation.
6. **Heuristic evaluation:** Evaluate all ten Nielsen heuristics on the canonical version. Record evaluator, date, screen, evidence, rating rubric, severity, and recommendation. Keep accessibility checks as a distinct supplementary checklist.
7. **Participant evaluation:** Run only the user sessions actually approved and recruited. Use a fixed task script and protocol. Record task completion, errors/help requests, observations, and interviews as approved. If the team retains the draft's sample of 10 participants and 3 experts, document approval and role separation; do not assume these values from the proposal.
8. **Analysis:** Use a documented qualitative coding/affinity process. If a Likert scale is retained, define items, anchors, scoring, missing-data handling, aggregation, and denominator in advance. Do not combine heuristic severity ratings with participant Likert scores as though they were the same measure.
9. **Iteration and retest:** Prioritize issues with a documented impact/effort rationale, implement the changes, and retest the affected tasks. Report both unresolved problems and improvements; do not infer causal conversion or cognitive-load effects without suitable measures.

## 4. Manuscript Alignment and Publication Gate

Revise the paper only against the evidence register and protocol above:

- Align title, location, service scope, participants, and timeline with approved work.
- Distinguish planned methods from completed methods, and prototype functionality from live integrations.
- Replace dummy quotes/tables and unsupported claims with actual, consented evidence. If the study is not complete, use a protocol/progress report format and label results as pending; do not submit it as a completed empirical study.
- Reconcile the draft's conflicting 87.5%, 4.20/5, 84.6%, and 4.23/5 values. Retain a score only when its raw data and calculation reproduce it.
- Verify each reference, DOI, citation order, and journal style. The proposal bibliography and draft bibliography differ; renumber references after source verification.
- Report study limitations, dates, recruitment, context, and threats to validity. Do not claim increased conversion, reduced bounce rate, cognitive-load reduction, or population-wide Gen Z preference without direct measurement.
- Confirm target-journal scope, ethics requirements, authorship, data availability, and reporting checklist before submission.

**Publishability condition:** The topic and prototype can support a paper, but the current draft is not ready as an empirical-results manuscript. Publication as a completed study requires actual research records, defensible analysis, consistent scores, verified references, and a functioning/aligned canonical prototype.

## 5. Proposal Deliverables Tracker

Track status against the proposal rather than implying completion from repository files:

| Required output | Proposal target | Evidence to archive | Status as of this plan |
|---|---|---|---|
| Enrichment | Submitted | Submission receipt/status | Not verified |
| Research Product Video | Submitted | Final video and submission receipt | Not verified |
| Product Poster (HD) | Submitted | Final export and submission receipt | Not verified |
| Intellectual Property | Registered | Registration certificate/receipt | Not verified |
| Scopus Publication | Accepted | Acceptance letter and bibliographic record | Not verified |
| TKT | Initial 1; target 3 | Institutional assessment evidence | Not verified |
