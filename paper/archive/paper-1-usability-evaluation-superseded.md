> **ARCHIVED 2026-10-11 — DO NOT SUBMIT.** Superseded by a three-paper split; this manuscript
> carried two incompatible claims (a methodological one and an applied design one) and was split along
> that line.
>
> | Current | File |
> |---|---|
> | C1 (conference) — per-task dispersion, ceiling effects, probe saturation-immunity | [paper-1-dispersion-ceiling.md](../paper-1-dispersion-ceiling.md) |
> | C2 (conference) — price-integrity auditing and its **refutation** | [paper-2-price-integrity.md](../paper-2-price-integrity.md) |
> | J1 (journal, Q2) — friction typology, propositions P1-P5, remediation matrix | [paper-3-jocec-barrier-taxonomy.md](../paper-3-jocec-barrier-taxonomy.md) |
>
> **Two findings in this document were subsequently withdrawn or revised.** The price-integrity defect
> (`total ≠ sum of its own line items`, Critical) was **refuted by reproduction** and is withdrawn. The
> price-transparency theme is restated as an ambiguous tax base. See [C2] §3 and
> [ut-results-integration.md](../ut-results-integration.md) §4.
>
> Retained as the audit trail of what was claimed before those changes.

 of an Indonesian Home-Services Marketplace Prototype: Task Success, a Ceiling Effect, and a Six-Theme Barrier Taxonomy from Ten Participants and Eighty Task Attempts

**Meutia Braniwati, S.Ds., M.Sn.**
BINUS University — *[verify affiliation and postal address before submission]*

**Corresponding author:** *[insert institutional email]**

> **Structure:** IMRaD — §1 Introduction, §2 Methods, §3 Results, §4 Discussion, §5 Conclusion.
> Related work is folded into §1.3; threats to validity into §4.5.
> Traceability: [`ut-results-integration.md`](../ut-results-integration.md). Companion paper: [`paper-2-price-integrity.md`](../paper-2-price-integrity.md).

---

## ABSTRACT

This paper reports a formative usability evaluation of a high-fidelity, Indonesian-language web prototype for on-demand household maintenance services — air-conditioner cleaning, plumbing leaks, pump servicing, and home sanitisation. Ten participants completed eight standardised tasks across two moderated rounds, yielding eighty task attempts, Single Ease Question scores on a 7-point scale, and observer-recorded commentary.

Task success was high at 93.75% (75/80), and mean ease was M = 6.56, SD = 1.05. We argue that this aggregate is close to uninformative. Computing dispersion per task reveals that four of the eight tasks reached a ceiling, with SD ≤ 0.42, meaning they cannot discriminate between a good and a very good design. Only one task, locating the FAQ and contact channel, produced meaningful spread (M = 5.70, SD = 2.11, range 1–7), and it is also the lowest-scoring task. A matched pair of discovery tasks isolates a further effect: participants found a well-labelled category without difficulty (M = 6.80, SD = 0.42) but struggled where two service labels were near-synonymous (M = 6.20, SD = 0.92), isolating a taxonomy defect from a layout defect.

We synthesise six barrier themes with per-corpus denominators, and we report a contradiction between our own sources over which to prioritise. We recommend that formative evaluation report per-task dispersion rather than aggregate success rates, and we publish five provenance defects that constrain the conclusions.

**Keywords:** usability testing, Single Ease Question, ceiling effect, formative evaluation, task success, MSME services, Indonesia, think-aloud

---

## 1. INTRODUCTION

### 1.1 Background and motivation

Household maintenance services in Indonesia — air-conditioner cleaning, plumbing leak repair, pump servicing, septic tank suction — are dominated by micro and small enterprises whose customer acquisition still runs through spanduk (street banners), printed leaflets, and vehicle stickers [15]. The channel has structural properties that are easy to overlook because they are invisible to the firm as well as the customer: a fixed physical area, which caps how much information can be presented; no record of prior work; and no price, which is negotiated privately and therefore unverifiable in advance.

A web interface removes the area constraint. It does not follow that the resulting interface is good, and it certainly does not follow that it is measurable. Most formative evaluations report a headline success rate, and a headline success rate is a lossy summary of a multidimensional, per-task, per-participant result.

This paper's contribution is to show, on real data from a real study, **how much a headline success rate can hide.** We evaluate a prototype through ten participants and eighty task attempts and find that a 93.75% success rate coexists with (a) four saturated tasks that can no longer generate evidence, (b) one task whose ratings span the entire scale, and (c) a service taxonomy that misleads participants who are otherwise fluent. Our practical recommendation follows directly: **formative evaluation should report per-task dispersion and defect-probe results, not just totals.**

We report our data honestly, including five provenance defects that constrain what may be claimed (§4.5). A companion paper [Br18] treats the study's price-integrity finding separately, because it raises a distinct methodological question that this paper deliberately sets aside.

### 1.2 Research questions

- **RQ1.** With what ease do young adult users complete a standardised service-discovery and booking task sequence?
- **RQ2.** Which tasks discriminate between participants, and which are saturated?
- **RQ3.** What are the characteristic barriers, and how frequently does each occur?
- **RQ4.** Where do participant observation and independent code inspection converge, and where does each uniquely contribute?

### 1.3 Related work

**Interface design for Indonesian MSME services.** Task-based design and evaluation of e-commerce interfaces is well established in the Indonesian literature [5], and Tianti et al. [15] demonstrate a small-business website raising promotional reach for a catering MSME. Sunarso et al. [7] provide evidence that visual content raises attraction and conversion in MSME digital marketing. We adopt the underlying premise — consistent visual identity and legible service information signal operational capability — while declining to import effect sizes measured on different stimuli. *Claims about transparency-to-trust effects in Indonesian service businesses, and about MSME underinvestment in branding, were attributed in the earlier proposal to two sources that could not be verified. Those attributions have been withdrawn; see "Removed from the numbered list" below and [reference-audit.md](../reference-audit.md).*

**Cognitive principles as rationale, not as measured effects.** Our design drew on Norman's three levels of design [8], Hick's Law for navigation depth [9], Miller's Law for grouping [10], and Von Restorff isolation for action prominence [11]. These function as *rationale*. None was manipulated as an independent variable, and we make no claim that any principle caused any observed outcome.

**Formative evaluation instruments and their limits.** Single Ease Question (SEQ) is a widely adopted post-task instrument: one 7-point item administered immediately after each task attempt, whose only requirement is that the task be defined in terms the participant can recognise [16]. We adopt it for breadth — one comparable number per attempt — while noting a trade-off that our own data exposes sharply (§3.2): SEQ is a *mean* measure, and means conceal precisely the information a formative study needs. Reporting the mean alone would have led us to describe this prototype as uniformly easy, which §3.3 shows it is not.

Heuristic inspection [17] and its Indonesian applications [13,14] are complementary but operate on a different object: the code, not the experience. §3.5 compares what each method caught.

### 1.4 Scope and contributions

This is a *formative* evaluation of a single prototype build. No variable measuring conversion, revenue, bounce rate, cognitive load, or trust change was instrumented, and we make no claim about any of them. Our contributions are: a per-task dispersion analysis of a complete evaluation; a matched-pair design that converts a vague complaint into a specific diagnosis; a six-theme barrier taxonomy with explicit denominators; and a candid account of five provenance defects that constrain the conclusions.

## 2. METHODS

### 2.1 Prototype under test

A high-fidelity React prototype, localised into Indonesian, implementing service discovery with search and category filtering, service detail pages, a four-stage checkout (summary → schedule → address → payment), a confirmation/invoice view, technician tracking, and an FAQ/contact area. Two properties were left unchanged during the study because they are the subject of the research questions: prices render in **USD** while the interface is Indonesian-language, and service descriptions include **technician-internal procedure content** intended for engineers rather than customers.

### 2.2 Participants

Ten participants were recruited and tested in two rounds of five. Participants are identified only by anonymous codes (P01–P05, P06–P10).

**Disclosure on demographics.** No source record contains age, gender, occupation, or any other demographic attribute. The study protocol defined participants as Gen Z users aged 18–26, but that criterion **cannot be verified from the data collected**, and one session record reports readability difficulty "for the 40-and-over age range," which is inconsistent with it. We therefore describe the sample as *young adult users recruited purposively* and make **no representativeness claim** for Indonesian Gen Z or any wider population.

### 2.3 Tasks

Eight tasks spanning the booking flow (Figure 1). T1 and T2 are *matched* discovery tasks differing only in service category; their contrast isolates the effect of taxonomy on search difficulty. T6 and T7 are *defect probes* with explicit failure criteria.

![Booking sequence and task coverage](../figures/p1-fig1-task-sequence.svg)

**Figure 1.** The eight-task instrument mapped onto the prototype's booking sequence. Six sequential screens carry T1–T6; T7 and T8 probe behaviour available from any point in the flow.

| Code | Task | Type |
|---|---|---|
| T1 | Locate the air-conditioner cleaning service | discovery |
| T2 | Locate the leak-detection service | discovery (matched to T1) |
| T3 | Read the detailed price breakdown | comprehension |
| T4 | Select a booking date and time slot | selection |
| T5 | Complete the address form | data entry |
| T6 | Trigger and identify a validation error | **defect probe** |
| T7 | Navigate back without losing entered data | **defect probe** |
| T8 | Locate FAQ / contact support | findability |

### 2.4 Measures and procedure

- **Task outcome:** completed / completed with assistance / not completed, against a written criterion per task.
- **SEQ:** 1 = *very difficult* … 7 = *very easy*, immediately after each attempt.
- **Observer commentary:** notes on confusion, verbalised expectations, and unsolicited suggestions.

Sessions were moderated with concurrent think-aloud. Recording evidently occurred, but **no recording files are present in the repository**; all qualitative material available to this analysis is therefore observer paraphrase, not verbatim transcript. We use quotation marks in this paper only for source documents, never for participant speech.

### 2.5 The completion-rate dispute, and how we resolved it

Completion was coded during sessions and recorded as 39/40 (round 1) and 40/40 (round 2). Both source recap sheets then appended an auditor note that specific attempts should have been coded failures:

- **Round 1:** two T6 attempts recorded as successes although the criterion was *find the validation message*, and the notes state the participants did not find it.
- **Round 2:** one T6 attempt recorded as a success although the note reads "user did not find any error"; another reached confirmation with a street address consisting only of the characters `(` and `)`.

This is a genuine interpretive disagreement about whether failure on a *sub-criterion* constitutes task failure, not an arithmetic error. Rather than adopt either position silently, **we report the auditor-corrected figures as the headline and present the as-recorded figures as a sensitivity analysis** (§3.1). The two differ by four attempts, which is larger than any other coding uncertainty in this study.

## 3. RESULTS

### 3.1 Task success

| | Round 1 (n=5) | Round 2 (n=5) | Combined (n=10) |
|---|---:|---:|---:|
| **As recorded** | 39/40 (97.5%) | 40/40 (100%) | 79/80 (**98.75%**) |
| **Auditor-corrected (headline)** | 37/40 (92.5%) | 38/40 (95.0%) | 75/80 (**93.75%**) |

All five failures occurred at T6 or T8. A rate above 90% would ordinarily indicate a largely successful design. **We do not read it that way**, for three reasons: the T6 success criterion was permissive; success is not the same as integrity, since participants reached confirmation while the interface's own figures were internally inconsistent (a finding developed in the companion paper [Br18]); and, decisively, success is *ceiling-bound* — four tasks were near-universally completed, so the metric cannot discriminate (§3.2).

### 3.2 Ease, and why the mean is not the finding

Overall SEQ: **M = 6.56, SD = 1.05** (n = 80 task-level ratings), median 7. Distribution: 62 ratings of 7, 10 of 6, 4 of 5, 1 of 4, 2 of 3, 1 of 1.

![Per-task ease scores with dispersion](../figures/p1-fig2-seq-ceiling.svg)

**Figure 2.** Mean SEQ per task with ±1 SD whiskers. Four tasks sit against the scale ceiling with SD ≤ 0.42. T8 has both the lowest mean and the widest dispersion, spanning the full 1–7 range.

Two observations follow, and **neither is visible in the aggregate mean.**

**(a) Four of eight tasks are saturated.** T1, T3, T4, and T5 have SD ≤ 0.42 on a 7-point scale; for T4 and T5 no participant rated below 6. These tasks cannot separate a good design from a very good one, and further iterations must not rely on them for evidence. Reporting only the mean would have hidden this entirely — and would have invited us to keep iterating on tasks that had already stopped producing signal.

**(b) T8 is the study's real signal.** Support-channel discoverability has the lowest mean (*M* = 5.70) *and* by far the widest dispersion (SD = 2.11), spanning the full usable range from 1 to 7. Individual comments locate the cause precisely: participants found the WhatsApp control and read it as a *booking* action rather than a *support* channel; some located help only in the footer; one found no direct contact number at all. Two participants rated T8 at 7; one rated it 1.

**A task whose ratings span the entire scale is under-served by the design, not merely unfamiliar to the participant.** This distinction matters: a wide spread invites the interpretation "some users need training." The comments refute that reading. The mechanism is not comprehension but *labelling and placement* — a control that is present, visible, and means something other than what it appears to mean.

### 3.3 The matched pair isolates a taxonomy defect

T1 and T2 are the same task with a different category. T1 (find AC cleaning) reached **M = 6.80, SD = 0.42**. T2 (find leak detection) reached **M = 6.20, SD = 0.92** — a 0.60-point drop, with triple the variance, on an otherwise identical task.

Participants attributed the difficulty to near-synonymous service labels ("smart leak detection" versus pipe inspection) that the interface did not differentiate, and in two cases to the booking control sitting below the fold. This is a **labelling** problem, not a **layout** problem: the category was reachable, but participants could not determine *which* entry addressed their problem. The practical consequence is disproportionate — merging two near-synonymous catalogue entries is a data change, while redesigning the discovery screen is a redesign.

### 3.4 Barrier taxonomy

Six themes emerged. Because the narrative corpus and the SEQ corpus are not confirmed to be the same people (§4.5, T-1), counts are reported with explicit denominators rather than pooled.

![Frequency of six barrier themes](../figures/p1-fig3-theme-frequency.svg)

**Figure 3.** Barrier themes across the two corpora. Navigation/state (8 of 10) and address capture (7 of 10) dominate; currency appears only in the second SEQ round.

| # | Theme | Narrative (of 10) | SEQ (of 10) | Observed barrier |
|---|---|---:|---:|---|
| **T1** | Currency & technical register | 3 named (synthesis asserts unanimity) | 2 — both round 2, **none in round 1** | USD on an Indonesian site; jargon ("precision diagnostic", "internal evaporator", "indoor–outdoor unit relation") over-excludes lay users; technician-internal documentation shown to customers |
| **T2** | Price transparency | 3 | 1 (+1 currency remark) | Price breakdown not collapsible; unit scope (which AC, indoor or outdoor) unstated |
| **T3** | Scheduling rigidity | 6 | 5 | Date selected twice with **disagreeing** options; 3–5 day window read as weekday-only; no calendar; no arrival range |
| **T4** | Address capture & validation | 7 | 5 | No map, geocoding, or autocomplete; no saved address; postal code validated but street address not; mandatory fields unmarked; "service address" misread as the provider's office |
| **T5** | Navigation & state persistence | 6 | 8 | Form data lost on Back/header navigation and on reload; footer links return to the home page; search query persists after clearing; confirmation button stuck in "processing" |
| **T6a/b/c** | Support, confirmation clutter, accessibility | 4 / 1 / 2 | 4 / 1 / 1 | Help buried in footer; three-item FAQ; duplicate WhatsApp and print buttons, two tracking bars, unexplained QR code; type size and grey-on-white contrast below threshold |

**One finding narrows rather than repeats an earlier complaint.** On scheduling (T3), a respondent stated that seeing the date *twice* is acceptable if it functions as a cross-check — **provided the two instances agree**. The defect is therefore **disagreement between two date pickers**, not duplication. This matters for remediation: a single source of truth is a smaller change than removing one picker, and a reviewer who treats duplication as the problem would prescribe the wrong fix.

### 3.5 Convergence with code inspection

The prototype received an independent code-based heuristic audit producing 0 Critical, 2 Major, and 4 Minor findings.

| Code-audit finding | Corresponding user-observed barrier | Verdict |
|---|---|---|
| Major: home-page price differs from catalogue/detail | T2 — unexplained total jumps; catalogue pricing confusing | **Converges** |
| Major: no visible keyboard focus indicator | — | **Not testable** by this method |
| Minor: header section links fragile | T5 — footer links returned users to home | **Converges** |
| Minor: stepper icons contradict text | T6b — duplicate tracking status bars | **Converges** |
| Minor: no re-order path | T5 — participants requested order history | **Converges** |
| Minor: postal code silently truncated | T4 — postal code validated, street address not | **Partly converges** |
| — | **T1 — USD currency on a localised site** | **Audit missed; testing found** |
| — | **T2 — total ≠ sum of its own line items** | **Audit missed; testing found** |

**Four of six audited defects were independently rediscovered by participants without prompting**, which supports heuristic inspection's continued use as a cheap pre-test filter. The two misses motivate the companion paper [Br18]. For completeness: because the audit records these defects as *repaired* while the tested sessions reported all of them, and no session record carries a build identifier, the tested build is probably pre-remediation (§4.5, T-2).

### 3.6 A contradiction between our own sources

The narrative report's recommendation matrix rates support/contact remediation **Low** priority. Both recap sheets rate it **High**. The narrative's own session data contradicts its own prioritisation, since four of its sessions record difficulty locating support. We adopt the recap sheets' rating, on the grounds that it is supported by the largest weight of recorded evidence and by the dispersion analysis in §3.2(b). We report the disagreement rather than suppressing it, because a reader checking our recommendation against the primary documents should be able to see that we noticed.

## 4. DISCUSSION

### 4.1 What worked

The prototype's *structure* is sound. Four tasks sit at or near ceiling with almost no dispersion. The booking flow follows an expected mental model — browse, detail, schedule, address, pay, confirm — and participants navigated it without instruction. Participants with e-commerce familiarity recognised the checkout pattern immediately.

Note the asymmetry in T5: the address form reached ceiling (*M* = 6.90, SD = 0.32) **while generating the most frequently requested features in the entire study** — geocoding, autocomplete, saved addresses. The form is easy to fill and wrong in design. **Ease of completion and fitness for purpose are independent properties, and SEQ measures only the first.**

### 4.2 Three patterns behind the failures

**Pattern 1 — Presentation locale not matched to content locale.** An Indonesian-language interface renders prices in dollars and service descriptions in technician-level English. No individual string is wrong; the locale as a whole is incoherent. Participants read this as evidence the product was not built for them.

**Pattern 2 — Missing infrastructure treated as an acceptable default.** No map, no autocomplete, no saved address, no order history, no re-order, no calendar, no custom-time request, no chatbot. Each request was individually reasonable; collectively they describe a checkout that asks the user to do work the platform could do, and to do it again next booking.

**Pattern 3 — Redundant, conflicting surfaces.** Two date pickers that disagree; a home-page price differing from the catalogue; two tracking bars and an unexplained QR code; duplicate action buttons. Redundancy is normally benign. Here it is actively harmful: when two copies of a fact disagree, the user cannot tell which to trust — and in a pricing context, they will trust neither.

### 4.3 Prioritised remediation backlog

| P | Finding | Recommendation | Sev |
|---|---|---|---|
| **1** | Total inconsistent with its own line items | Reproduce; add a build-time invariant asserting `total == service + fee + tax` for every service. | **Critical** |
| **2** | USD on an Indonesian site; technician jargon | Localise to IDR; rewrite service taxonomy in operational lay register; merge near-synonymous entries; remove technician-internal documentation from customer pages. | **High** |
| **3** | Support channel undiscoverable | Persistent, explicitly labelled support action in the header, not the footer; label it as support, not booking; add direct contact; add FAQ search and per-service FAQ. | **High** |
| **4** | Form state lost on Back/reload | Persist checkout state; warn before destructive navigation; offer resume of an incomplete booking. | **High** |
| **5** | Street address unvalidated; mandatory fields unmarked | Validate street address on the same terms as postal code; mark required and optional fields; make apartment/unit optional; relabel "service address" as "home address". | **High** |
| **6** | Two date pickers that disagree | Single source of truth for available dates; one picker; retain a read-only cross-check guaranteed identical. | **High** |
| **7** | Footer links return to home; query persists | Fix footer routing; reset search query on clear and navigation. | **Medium** |
| **8** | Confirmation-page clutter | Collapse to a static transaction summary; move tracking to order history; remove duplicate actions; label or remove the QR code. | **Medium** |
| **9** | Type size and contrast below threshold | Minimum 12 pt; secondary text to WCAG AA; verify rendered contrast in a real browser. | **Medium** |
| **10** | No geocoding, saved address, order history | Map pin selection and address autocomplete; store addresses by label; order history with re-order. | **Medium** |
| **11** | No path for a missing service; rigid scheduling | "Other service" request path; full calendar; arrival-time range; custom-time request. | **Low** |

### 4.4 Methodological recommendations

- **Report per-task dispersion, not just aggregate success.** A 93.75% success rate coexisted here with a Critical pricing defect and a task rated as low as 1/7. The dispersion analysis is what surfaced both.
- **Separate tasks that can discriminate from tasks that are saturated.** Four of our eight tasks could no longer produce evidence. Continuing to iterate against them would consume budget for no return.
- **Prefer matched task pairs to isolate causes.** The T1/T2 contrast converted a vague complaint ("search is hard") into a specific, cheap-to-fix diagnosis (taxonomy, not layout).
- **Treat effortful completion as a smell.** The address form was easy to fill and wrong. Comfort is not fitness.

### 4.5 Threats to validity

**T-1 — Participant rosters do not agree across source records. [Severe]** The narrative corpus names ten participants; the two quantitative recap sheets name a partly different set — four names overlap, three appear only in the recap sheets, and six narrative participants have no SEQ record anywhere. Both recap sheets end with a note that missing names be filled in. **Consequence:** the SEQ and narrative corpora cannot be confirmed to be the same ten people. We never aggregate across them as though they were, and every count in §3.4 carries an explicit denominator.

**T-2 — No build identifier, date, or moderator record. [Severe]** The protocol required recording the canonical prototype and its build hash before sessions began; no session record contains one. As §3.5 shows, the tested build probably predates the recorded audit remediation. **Consequence:** no result may be attributed to the current prototype.

**T-3 — Demographics unrecorded; Gen Z eligibility unverifiable. [Severe]** **Consequence:** for a paper framed around young users, the sample's composition is unestablished.

**T-4 — Ethics and consent unevidenced. [Severe]** The protocol required approved consent and institutional clearance before recruitment; no consent record, approval reference, or clearance number appears in any source report. **Consequence:** an unresolved compliance gap that must be closed before publication of this data.

**T-5 — Ceiling effect limits four tasks. [Moderate]** T1, T3, T4, T5 (SD ≤ 0.42) cannot discriminate between design states. Later iterations will need harder tasks, a more complex stimulus, or different measures.

**T-6 — Variance collapse between rounds. [Moderate]** Round-2 per-task SD (0.49) is 2.8× smaller than round-1 (1.39), with three participants returning near-uniform maximum scores. Possible causes — differing scoring discipline, moderator effects, demand characteristics, transcription convention — cannot be distinguished from the available records. We therefore report the round comparison descriptively and draw **no** design-effect conclusion from it; the build did not change between rounds.

**T-7 — Qualitative corpus is observer paraphrase, not transcript. [Moderate]** **Consequence:** no direct quotation is used anywhere in this paper.

**T-8 — Transcription gaps. [Low]** One recap sheet notes that a participant's comments were truncated in a screenshot and should be checked against the original sheet. Not performed.

**T-9 — References partly unverified. [Low]** See the note below.

## 5. CONCLUSION

We evaluated an Indonesian-language home-services marketplace prototype with ten participants across eight tasks and two rounds. Task success was 93.75% and mean ease 6.56/7 — and the most useful result of the study is that **neither number characterises the design.**

Beneath the aggregate sit four saturated tasks that can no longer generate evidence, one task whose ratings span the entire scale because a help channel is present but mislabelled, and a matched pair of discovery tasks that isolates a taxonomy defect from a layout defect. The failures are concentrated and diagnosable: a locale that is Indonesian in language and American in currency, a checkout that discards state on navigation, and two date pickers that disagree with each other.

The methodological lesson generalises beyond this prototype. **A formative study that reports only aggregate success rates will systematically under-report exactly the problems that matter most**, because the tasks that discriminate are outnumbered by the tasks that have saturated. We recommend publishing per-task dispersion as a matter of course, and we have published ours — including the five provenance defects that constrain them.

---

## REFERENCES

> **Reference verification notice — read before submitting.** Every reference below was checked on 2026-10-10 against `doi.org`, the Crossref API, the DataCite API, and the publisher's own article page. Method and full evidence are in [`reference-audit.md`](../reference-audit.md).
>
> - **Verified:** the DOI resolves and the metadata matches the citation.
> - **Corrected:** the citation was real but the DOI (or a title/page detail) was wrong; the corrected value was taken from the publisher, not inferred.
> - **[PARTIAL]:** the article is confirmed to exist, but volume, issue, pages or DOI could not be verified automatically. **Must be checked by hand.**
> - Bracketed numbers are **stable identifiers**, deliberately not renumbered after deletions, so that cross-references in earlier drafts still resolve.
> - **Six sources cited in the earlier proposal could not be verified at all** and have been removed from the numbered list and from the body text. They are listed separately at the end. **Claims that depended on them have been withdrawn.**

[5] Dinata PZ, Urwah MA, Rahmawan MR, Junaeti E. Perancangan UI/UX web e-commerce 'Hallo Coffee' menggunakan metode *user-centered design*. Jambura J Inform. 2023;5(1):45–58. doi:10.37905/jji.v5i1.17511 **← corrected from 10.34312/jji.v5i1.18923, which does not exist; title and DOI verified at the publisher (ejurnal.ung.ac.id/index.php/jji/article/view/17511).**
[7] Sunarso B, Tusriyanto, Mustafa F. Analysing the role of visual content in increasing attraction and conversion in MSME digital marketing. J Contemp Adm Manag ADMAN. 2023;1(3):193–200. doi:10.61100/adman.v1i3.79 **← corrected from 10.34312/adman.v1i3.145, which does not exist. All other fields verified exact.**
[8] Norman DA. *The design of everyday things: Revised and expanded edition.* New York: Basic Books; 2013. ✓ verified
[9] Hick WE. On the rate of gain of information. Q J Exp Psychol. 1952;4(1):11–26. doi:10.1080/17470215208416600 **← DOI added; it was previously absent.**
[10] Miller GA. The magical number seven, plus or minus two. Psychol Rev. 1956;63(2):81–97. doi:10.1037/h0043158 **← DOI added; verified in Crossref (APA).**
[11] Von Restorff H. Über die Wirkung von Bereichsbildungen im Spurenfeld. Psychol Forsch. 1933;18(1):299–342. doi:10.1007/bf02409636 **← DOI added; it was previously absent.**
[13] Perdanakusuma AR, Hanggara BT, Hasnanursanti AR. Analisis usability website resmi pemerintah kota *Surakarta* menggunakan metode heuristic evaluation. J TECNOSCIENZA. 2022;6(2):430–443. **[PARTIAL]** **← title qualifier "Surakarta" restored; page range corrected from 429–43 to 430–443 per two independent citing works. Article confirmed real (Univ. Brawijaya, published 2022-04-05). The DOI previously given (10.35595/tecnoscienza.v6i2.2341) does NOT exist and the journal host was unreachable during the audit — supply the correct DOI by hand.**
[14] Febriyanthi A. Interface design heuristic evaluation website yayasan kesehatan Telkom. Turk J Comput Math Educ TURCOMAT. 2021;12(4):852–859. **[PARTIAL]** **← article confirmed real at turcomat.org/index.php/turkbilmat/article/view/573, published 2021-04-11. The DOI previously given (10.17762/turcomat.v12i4.1234) does NOT exist; volume, issue, pages and the second author's name ("Al E") remain unverified because the publisher returned HTTP 403. Verify by hand.**
[15] Tianti AM, Firmania BN, Prini, Fanani RCP, Putri SE, Adisusilo AK. Peningkatan promosi usaha catering UMKM melalui pembuatan website berbasis WordPress. PENITI BANGSA. 2024;2(2):01–8. doi:10.30742/PENITI-BANGSA.v2i22024.177 **← DOI corrected from 10.58721/penitibangsa.v2i2.177, which does not exist; page range corrected from 100–12 to 01–8 per the publisher PDF.**
[16] Sauro J, Lewis JR. *Quantifying the user experience: Practical statistics for user research.* 2nd ed. Sebastopol, CA: Morgan Kaufmann; 2016. ✓ verified
[17] Nielsen J. Enhancing the explanatory power of usability heuristics. Proc ACM CHI'94. 1994:152–8. doi:10.1145/191666.191729 ✓ verified — Crossref confirms author, title, year, pages and publisher exactly.
[18] Braniwati M. Formative usability evaluation of an Indonesian home-services marketplace prototype. **Companion paper, same study.** 2026. (Reverse citation — listed for the reader, not an external source.)

### Removed from the numbered list — could not be verified

None of the following could be located in Crossref, DataCite, the DOI Handle system, Google Scholar, GARUDA, or SINTA. Several use plausible real author names and real journal titles, which is why they survived unchallenged until now. **Do not re-add them without retrieving the actual record.**

| Former # | Citation as it appeared | Problem |
|---|---|---|
| 1 | Darmawan A, Prasetyo Y, Hartono S. Digital transformation of micro-enterprises in Indonesia… *J Bus Innov Manag.* 2023;7(2):112–28. | Journal and issue exist; **no article by these authors with this title could be found.** DOI does not exist. |
| 2 | Wijaya GE, Kuswoyo C. Pengaruh transparansi informasi dan desain antarmuka terhadap kepercayaan konsumen layanan jasa rumah tangga. *J Inspirasi Bisnis Dan Manaj.* 2024;8(1):45–60. | Authors and journal are real, but **no article matching this title exists.** Their only paper in that journal is a different study (2022;6(1):115–126, doi:10.33603/jibm.v6i1.6468). Note the journal's real DOI prefix is `10.33603`, not the `10.35595` previously claimed. |
| 3 | Putri R, Handayani A, Siregar M. Generasi Z dan preferensi pengalaman digital… *J Psikol Konsumen.* 2025;12(3):201–15. | No match under any search formulation. DOI does not exist. |
| 4 | Pratama IGJ, Ardani W, Putri IAS. Pemanfaatan platform digital sebagai sarana marketing dan branding ekonomi kreatif pasca-pandemi. *Lensa Ilm J Manaj Dan Sumberd.* 2022;3(1):28–42. | Authors and journal real, **article differs.** Crossref returns the same trio in that journal as "Pemanfaatan Presidensi G20 …", 2022;**v1(1):28–33** — different topic, volume and pages. |
| 6 | Resti AA, Suharyati S, Rahmi M. Efforts to develop micro, small, and medium enterprises through education on branding, design, and financial statements. *Community Empower.* 2023;8(10):1480–6. | No match. DOI does not exist. |
| 12 | Hart J, Kapp K. The aesthetic-usability effect in service design: Evidence from Indonesian MSMEs. *J Des Res Pract.* 2021;5(3):210–24. | **No trace of the article, the authors, or the journal anywhere.** The previous draft already flagged this; the audit confirms it. **Appears fabricated.** The aesthetic-usability principle is therefore no longer cited in this paper — §1.3 rests on [8]–[11] instead. |

---

## APPENDIX A — Instrument

> **After completing the task, how easy or difficult was that task for you?**
> 1 = very difficult · 2 · 3 · 4 · 5 · 6 · 7 = very easy

Administered immediately after each of T1–T8. Ordinal scale; mean and SD reported for comparability with common practice, with the caveat in §4.5(T-5).

## APPENDIX B — Complete SEQ matrix

Participants anonymised per §2.2. Round 1 = P01–P05; Round 2 = P06–P10. Values reproduced exactly as recorded in the source sheets; recomputation confirmed every reported mean.

| Participant | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | Mean |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| P01 | 6 | 5 | 7 | 7 | 7 | 7 | 4 | 6 | 6.13 |
| P02 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7.00 |
| P03 | 7 | 5 | 7 | 7 | 7 | 7 | 7 | 3 | 6.25 |
| P04 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7.00 |
| P05 | 7 | 5 | 7 | 7 | 7 | 3 | 7 | 1 | 5.50 |
| P06 | 6 | 6 | 6 | 6 | 6 | 7 | 7 | 5 | 6.13 |
| P07 | 7 | 6 | 7 | 7 | 7 | 7 | 7 | 7 | 6.88 |
| P08 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7.00 |
| P09 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7.00 |
| P10 | 7 | 7 | 6 | 7 | 7 | 6 | 7 | 7 | 6.75 |
| **M** | **6.80** | **6.20** | **6.80** | **6.90** | **6.90** | **6.50** | **6.70** | **5.70** | **6.56** |
| **SD** | 0.42 | 0.92 | 0.42 | 0.32 | 0.32 | 1.27 | 0.95 | 2.11 | 1.05 |

## APPENDIX C — Provenance

Full traceability record — source inventory, roster cross-comparison, recomputed statistics, and the list of figures permanently barred from this study's reporting — is maintained at [`ut-results-integration.md`](../ut-results-integration.md).

**Prohibited figures.** The superseded draft contained 87.5%, 4.20/5, 84.6%, and 4.23/5. These were never derivable from any source and remain permanently barred. Note that 84.6% is **not** the corrected completion rate (93.75%) and 87.5% is **not** any figure in §3.1; the resemblance is coincidental and must not be used to rehabilitate them.