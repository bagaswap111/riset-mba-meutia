# Price Transparency without Price Integrity: A Formative Usability Evaluation of an Indonesian Home-Services Marketplace Prototype

> **STATUS: SUPERSEDED — SPLIT INTO TWO SUBMISSION-READY PAPERS (2026-10-10).**
>
> This document is the combined version. It is retained for the audit trail and as a fallback for
> venues with a single-track format. **Do not submit this file** where a 5–6 page limit applies.
>
> | Submission file | Argument | Length | Figures |
> |---|---|---|---|
> | [`paper-1-usability-evaluation.md`](paper-1-usability-evaluation.md) | Task success, a ceiling effect, and a six-theme barrier taxonomy. Methodological claim: report per-task dispersion, not aggregate success rates. | ~4,170 words (~5.2 pp) | 3 |
> | [`paper-2-price-integrity.md`](paper-2-price-integrity.md) | A total that does not reconcile with its own line items, and the division of labour between inspection and testing. Methodological claim: price integrity is a distinct check requiring neither method. | ~4,000 words (~5.0 pp) | 2 |
>
> Both draw on the same ten participants and eighty task attempts, and cross-reference each other
> via `[Br18]`. **The split is thematic, not evidential:** the datasets are identical and no figure
> in either paper is unique to it. Every number here appears in one or both of them; no number was
> dropped in the split.
>
> Figures live in [`figures/`](figures/). Full figure-to-source traceability, including the
> arithmetic derivations and the list of permanently barred figures, is in
> [`ut-results-integration.md`](ut-results-integration.md).

---

**Meutia Braniwati, S.Ds., M.Sn.**
BINUS University — *[verify affiliation and postal address before submission]*

> **Corresponding author:** *[insert institutional email]*

---

## ABSTRACT

Micro, small, and medium enterprises (MSMEs) providing household maintenance services in Indonesia still rely on conventional promotional media — banners, leaflets, and printed stickers — which offer no price transparency and no record of prior work. This paper reports a formative usability evaluation of an interactive, Indonesian-language web prototype built to address that gap. Ten participants completed eight standardised tasks in two moderated rounds (80 task attempts), yielding Single Ease Question scores on a 7-point scale and observer-recorded qualitative commentary.

Task success was high: **93.75% (75/80)** after applying the study auditors' own re-coding rules, against 98.75% (79/80) as initially recorded; both figures are reported. Mean ease was **M = 6.56, SD = 1.05** (n = 80). However, the aggregate masks a strongly non-uniform picture. Four of eight tasks reached a ceiling (SD ≤ 0.42), while support-channel discoverability produced the widest dispersion in the entire study (**M = 5.70, SD = 2.11**, range 1–7) and emerged as the single largest usability deficit.

The study's most consequential finding is not a low score but an **integrity failure**. Participants independently reported a service line item of $89 accompanied by a displayed total of $198.00. The stated line items sum to $111.50, so the displayed total exceeds its own breakdown by $86.50 (77.6%); the stated line items are themselves inconsistent, since 8% of $89.00 is $7.12, not the $18.00 shown. Correctly computed, the total would be ≈$100.62 — within $0.36 of the $100.98 two other sessions reported for that service. In a product whose stated purpose is *transparent pricing*, a total that cannot be reconciled with its own line items is a categorical failure that no ease-of-use metric captures. We frame this as a candidate defect requiring reproduction against the build, and we argue that price-integrity auditing should be a mandatory complement to ease-of-use measurement in trust-sensitive transactional interfaces.

We conclude with a six-theme taxonomy of barriers and a prioritised remediation backlog. We also report five unresolved provenance defects — participant-roster mismatch, absent build identifiers, unrecorded demographics, missing ethics evidence, and a variance collapse between rounds — that constrain the conclusions, and specify what must be done before these findings can support stronger claims.

**Keywords:** usability testing, Single Ease Question, price transparency, interface trust, formative evaluation, MSME services, Indonesia, think-aloud

---

## 1. INTRODUCTION

### 1.1 Background

Household maintenance services in Indonesia — air-conditioner cleaning, plumbing leak repair, pump servicing, septic tank suction — are dominated by micro and small enterprises whose customer acquisition still runs through spanduk (street banners), printed leaflets, and vehicle stickers [1,15]. This channel has structural properties that are easy to overlook because they are invisible to the firm as well as to the customer: a fixed physical area, which caps the amount of information presented; no display of prior work; and no price, which is negotiated privately and therefore unverifiable in advance. Each property removes information the customer would need in order to choose.

Digital distribution removes the area constraint. It does not, by itself, create transparency. Transparency requires that the price a customer sees before committing equal the price that appears on the invoice, and that the difference between them be explicable. This distinction — *visibility* versus *integrity* — organises the argument of this paper.

### 1.2 Problem statement

Prior Indonesian MSME web-design studies report that poor transparency and weak interface design reduce customer trust in service businesses [2], and that younger consumers in particular expect to research, compare, and read reviews before committing to a service purchase [3]. The literature on visual branding supplies strong evidence that consistent identity acts as a quality signal in digital service contexts [6,7], and the cognitive-design literature supplies a well-developed vocabulary for interface rationale — Norman's levels of design, Hick's Law, Miller's Law, and the aesthetic-usability effect [8–11].

What the literature does not supply is an evaluation method that would detect a **price-integrity** failure. Nielsen's heuristics can flag a mismatch between two screens [17]; they cannot establish that a displayed total disagrees with its own arithmetic, because inspection of code does not require a user to attempt a transaction. This is the gap this study addresses.

### 1.3 Research questions

**RQ1.** With what ease do young adult users of an Indonesian home-services prototype complete a standardised service-discovery and booking task sequence?

**RQ2.** Which interface regions generate the greatest user difficulty, and what are their characteristic barriers?

**RQ3.** Does the prototype's displayed pricing behave consistently with its own itemised breakdown?

**RQ4.** Do the barriers observed in user testing converge with, extend, or contradict the findings of an independent code-based heuristic inspection?

### 1.4 Contributions

1. A reported formative evaluation (n = 10, 80 task attempts, 8 tasks, 2 rounds) of an Indonesian-language home-services prototype, with per-task dispersion analysis that identifies a ceiling effect invisible in aggregate means.
2. A documented **price-integrity anomaly** with reproducible arithmetic, and an argument for treating price-integrity auditing as a distinct, mandatory check in trust-sensitive transactional interfaces (§4.4).
3. A six-theme taxonomy of barriers with a prioritised remediation backlog.
4. An explicit account of five provenance defects that constrain the study's claims, including a participant-roster mismatch between the narrative and quantitative source records and an absent build identifier.

**Scope claim.** This is a *formative* evaluation of a single prototype build. It makes no claim about conversion, revenue, bounce rate, cognitive load, or measured trust change; none of these variables was instrumented.

---

## 2. RELATED WORK

### 2.1 Interface transparency and trust in service marketplaces

Wijaya and Kuswoyo [2] argue that transparency of information and interface design jointly determine consumer trust in household-service businesses. Transparent marketplace interfaces have been widely theorised as trust-conducive because they let a buyer verify claims before committing to a transaction. Our study operationalises "verify" narrowly and concretely: not *is information present* but *does the arithmetic hold*. We argue this distinction is not pedantic. An interface can be information-dense and still be untrustworthy, if the figures it presents do not reconcile.

### 2.2 Digital identity for MSME service firms

Resti, Suharyati, and Rahmi [6] document that MSMEs frequently underinvest in branding, design, and financial transparency. Pratama, Ardani, and Putri [4] argue that digital platforms can serve simultaneously as marketing channel and branding instrument for Indonesian creative and micro-enterprises. Sunarso, Tusriyanto, and Mustafa [7] provide evidence that visual content raises attraction and conversion in MSME digital marketing. We adopt the underlying premise — consistent visual identity signals operational professionalism in a category often stereotyped as informal — while declining to import their effect sizes, which were measured on different stimuli.

### 2.3 Cognitive principles as design rationale

Our design decisions drew on Norman's three levels of design for the visual, behavioural, and reflective strata [8], Hick's Law for navigation depth [9], Miller's Law for grouping [10], and Von Restorff isolation for action prominence [11]. We also drew on the aesthetic-usability effect for perceived ease [12] and on mental-model consistency for the booking sequence [13,14]. We note honestly that the only source we could locate for the aesthetic-usability effect is unverified (see the reference note), and that [13] and [14] address interface heuristic evaluation rather than mental-model theory; both citations should be replaced with primary sources before submission. All of these function as *rationale*, not as measured effects. None was manipulated as an independent variable, and no claim is made that any principle caused any observed outcome.

### 2.4 Formative evaluation instruments

Single Ease Question (SEQ) is a widely adopted post-task instrument: a single 7-point item, administered immediately after each task, whose only requirement is that the task be defined in terms the participant can recognise [16]. Task-based evaluation of e-commerce interfaces of this general class is well established in the Indonesian literature [5]. We adopt SEQ for breadth — one comparable number per task attempt — while noting the trade-off visible in our own data: SEQ cannot distinguish *difficulty experienced* from *defect encountered*, and a participant who completes a task through a defect may still rate it 7. We address this in §4.4.

### 2.5 Heuristic inspection and its limits

Nielsen's ten heuristics remain an efficient categorical inspection frame [17]. Perdanakusuma et al. [13] and Febriyanthi [14] apply it to Indonesian government and organisational websites respectively. Our source prototype received an independent code-based audit producing 0 Critical, 2 Major, and 4 Minor findings on the audited build. §4.6 compares those findings against user-observed barriers.

---

## 3. METHOD

### 3.1 Prototype under test

The stimulus is a high-fidelity React prototype of an on-demand home-services marketplace, localised into Indonesian, covering air-conditioner cleaning, plumbing/leak services, pump services, and home sanitisation. It implements service discovery with search and category filtering, service detail pages, a four-stage checkout (summary → schedule → address → payment), a confirmation/invoice view, technician-tracking, and an FAQ/contact area.

Two properties of the prototype are directly relevant to our research questions and were left unchanged during the study:

- **Currency is USD.** Prices render as `$`. The prototype is otherwise fully Indonesian-language.
- **Service documentation includes internal operating-procedure content** intended for technicians.

Both became central findings (§4.3, T1).

### 3.2 Participants

Ten participants were recruited and tested in two rounds of five. Per the decision recorded in [`ut-results-integration.md`](ut-results-integration.md) §2(C-1), participants are identified only by anonymous codes (P01–P05, P06–P10); no code is asserted to map to any named individual.

**Critical disclosure on demographics.** No source record contains age, gender, occupation, or any other demographic attribute. The study protocol defined participants as Gen Z users aged 18–26, but that criterion **cannot be verified from the data collected**. One session record reports readability difficulty "for the 40-and-over age range," which is inconsistent with the protocol's eligibility band. We therefore describe the sample as *young adult users recruited purposively* and make **no representativeness claim** for Indonesian Gen Z or for any wider population.

### 3.3 Tasks

Eight tasks covering the end-to-end booking flow:

| Code | Task |
|---|---|
| T1 | Locate the air-conditioner cleaning service |
| T2 | Locate the leak-detection service |
| T3 | Read the detailed price breakdown |
| T4 | Select a booking date and time slot |
| T5 | Complete the address form |
| T6 | Trigger and identify a validation error |
| T7 | Navigate back without losing entered data |
| T8 | Locate FAQ / contact support |

T1 and T2 are matched *discovery* tasks differing only in category. Their contrast (§4.2) isolates the effect of service taxonomy on search difficulty. T6 and T7 are *defect-probe* tasks with explicit failure criteria; T7 was specified to test state persistence, and its scoring criterion — no data loss — is why the re-coding issue in §3.6 arises.

### 3.4 Measures

- **Task outcome:** completed / completed with assistance / not completed, with a written completion criterion per task.
- **SEQ:** 1 = *very difficult* … 7 = *very easy*, administered after each task attempt.
- **Observer commentary:** per-session notes on confusion, verbalised expectations, and unsolicited suggestions.

### 3.5 Procedure

Moderated sessions with concurrent think-aloud. Participants were observed completing T1–T8 in order, followed by an open debrief. Audio and screen recordings were produced (per filenames referenced in the source report); no recording files are present in the repository, so **all qualitative material available to this analysis is observer paraphrase, not verbatim transcript.** No quotation marks are used for participant speech anywhere in this paper.

### 3.6 Data coding and the completion-rate dispute — a deliberate decision

Completion was coded during sessions and reported in the source recap sheets as 39/40 (round 1) and 40/40 (round 2). Both sheets then append an auditor note that specific task attempts should have been coded as failures:

- Round 1: two T6 attempts were recorded as successes although the criterion was *find the validation message*, and the notes state the participants did not find it.
- Round 2: one T6 attempt was recorded as a success although the note states "user did not find any error"; another proceeded to confirmation with a street address consisting only of the characters `(` and `)`.

We treat this as a genuine interpretive disagreement about whether failure on a *sub-criterion* constitutes task failure, not as an arithmetic error. Rather than silently adopt either position, **we report the auditor-corrected figures as the headline result and present the as-recorded figures as a documented sensitivity analysis** (§4.1). The two differ by four task attempts, which is larger than any other coding uncertainty in this study and would be a legitimate target for reviewer challenge.

---

## 4. RESULTS

### 4.1 Task success

| | Round 1 (n=5) | Round 2 (n=5) | Combined (n=10) |
|---|---:|---:|---:|
| **As recorded** | 39/40 (97.5%) | 40/40 (100%) | 79/80 (**98.75%**) |
| **Auditor-corrected (headline)** | 37/40 (92.5%) | 38/40 (95.0%) | 75/80 (**93.75%**) |

Across 80 task attempts, **93.75%** succeeded. Five attempts failed, all five at T6 (trigger and identify a validation error) or T8 (locate contact support).

A completion rate above 90% would ordinarily indicate a largely successful design. **We argue it does not here**, on three grounds:

1. **The success criterion was permissive for T6.** Four of the five failures are T6 attempts where participants submitted an invalid form and the interface failed to respond. These are counted as failures only because the source auditors chose to hold the sub-criterion strictly.
2. **Success is not integrity.** Participants successfully reached confirmation while the displayed total contradicted its own line items (§4.4). Under a pure task-completion metric this is a *success*.
3. **Completion is ceiling-bound.** Four tasks were near-universally completed (§4.2), leaving the metric unable to discriminate.

### 4.2 Ease of use, and the ceiling effect

Overall Single Ease Question: **M = 6.56, SD = 1.05**, n = 80 task-level ratings, median 7. Distribution: 62 ratings of 7, 10 of 6, 4 of 5, 1 of 4, 2 of 3, 1 of 1.

Per-task:

| Task | M (combined) | SD | Round 1 | Round 2 | Range | Discriminating? |
|---|---:|---:|---:|---:|---:|---|
| T1 Find AC service | 6.80 | 0.42 | 6.80 | 6.80 | 6–7 | **Ceiling** |
| T2 Find leak service | 6.20 | 0.92 | 5.80 | 6.60 | 5–7 | Yes |
| T3 Read price breakdown | 6.80 | 0.42 | 7.00 | 6.60 | 6–7 | **Ceiling** |
| T4 Select date/slot | 6.90 | 0.32 | 7.00 | 6.80 | 6–7 | **Ceiling** |
| T5 Complete address form | 6.90 | 0.32 | 7.00 | 6.80 | 6–7 | **Ceiling** |
| T6 Trigger validation error | 6.50 | 1.27 | 6.20 | 6.80 | 3–7 | Yes |
| T7 Navigate back | 6.70 | 0.95 | 6.40 | 7.00 | 4–7 | Yes |
| **T8 Locate FAQ/contact** | **5.70** | **2.11** | 4.80 | 6.60 | **1–7** | **Strongest** |

Two observations follow, and neither is visible in the aggregate mean.

**(a) Four of eight tasks are ceiling-bound.** T1, T3, T4, and T5 have SD ≤ 0.42 on a 7-point scale; for T4 and T5, no participant rated below 6. These tasks cannot discriminate between a good and a very good design, and further iterations should not rely on them for evidence.

**(b) T8 is the study's real signal.** Support-channel discoverability has the lowest mean (*M* = 5.70) *and* by far the widest dispersion (SD = 2.11), spanning the full usable range from 1 to 7. Individual comments locate the cause precisely: participants found the WhatsApp control and interpreted it as a *booking* action rather than a *support* channel; some located help only in the footer; one found no direct contact number at all. Two participants rated T8 at 7; one rated it 1. **A task with such dispersion is under-served by a design, not merely unfamiliar.**

**(c) T1 vs T2 isolates a taxonomy failure.** T1 (find AC cleaning) reached 6.80 with SD 0.42. T2 (find leak detection) reached 6.20 with SD 0.92 — a 0.60-point drop on an otherwise identical task. Participants attributed this to near-synonymous service labels ("smart leak detection" versus pipe inspection) that the interface did not differentiate, and to the booking control sitting below the fold. This is a labelling problem, not a layout problem: the category was reachable, but participants could not determine *which* entry addressed their problem.

### 4.3 Barrier taxonomy

Six themes emerged, cross-referenced between the narrative report and the two quantitative recap sheets. Counts are of distinct sessions/respondents recording the theme; denominators differ because the two corpora are not confirmed to overlap (§5.5).

| # | Theme | Narrative corpus | SEQ corpus | Observed barrier |
|---|---|---:|---:|---|
| **T1** | Currency & technical register | 3 named (synthesis asserts unanimity) | 2 (both round 2; **0 in round 1**) | USD on an Indonesian-language site; jargon ("precision diagnostic", "internal evaporator", "indoor–outdoor unit relation") over-excludes lay users |
| **T2** | Price transparency & total integrity | 3 | 1 (+1 currency remark) | Total inconsistent with line items; breakdown not collapsible; unit scope (which AC, indoor/outdoor) unstated |
| **T3** | Scheduling rigidity | 6 | 5 | Date selected twice with **disagreeing** options; 3–5 day window read as weekday-only; no calendar widget; no custom-time request; no arrival range |
| **T4** | Address capture & validation | 7 | 5 | No map, no geocoding, no autocomplete; no saved address; mandatory-field markers absent; postal code validated but street address not; apartment field confusing; "service address" label misread as provider's office |
| **T5** | Navigation & state persistence | 6 | 8 | Form data lost on Back/header navigation and on reload; footer links return to home page; search query persists after clearing; confirmation button stuck in "processing"; custom-instructions field silently blocks ordering |
| **T6** | Support, confirmation clutter, accessibility | 4 / 1 / 2 | 4 / 1 / 1 | Support buried in footer; FAQ has 3 items; invoice shows duplicate WhatsApp, duplicate print, and two tracking bars plus an unexplained QR code; type size below 12 pt and low-contrast grey text |

Two findings warrant emphasis because they **narrow** rather than merely repeat earlier complaints:

- **T3 is not "double date entry."** One respondent explicitly stated that seeing the schedule twice is *acceptable* if it functions as a cross-check — but only if the two instances agree. The defect is therefore **disagreement between two date pickers**, which is materially easier to fix (single source of truth) than removing one of them.
- **T6c is an accessibility finding with a defined population.** Participants aged 40+ reported difficulty reading small, low-contrast grey text. Because no participant ages were recorded, we cannot size this group; but the finding is consistent and specific enough to justify remediation on its face.

**A contradiction between sources.** The narrative report's recommendation matrix rates support/contact remediation as **Low** priority. Both recap sheets rate it **High**. The narrative's own session data contradicts its own prioritisation, since four of its sessions record difficulty locating support. We adopt the recap sheets' rating, on the grounds that it is supported by the largest weight of recorded evidence and by the dispersion analysis in §4.2(b).

### 4.4 Price integrity: the central finding

Two participants, in separate sessions, independently reported the same figures for the same service: a line item of **$89**, a service fee of **$4.50**, tax described as 8%, and a displayed total of **$198.00**.

| Component (as reported by participants) | Value |
|---|---:|
| Service line item | 89.00 |
| Service fee | 4.50 |
| Tax line, described as 8% | 18.00 |
| **Sum of the stated line items** | **111.50** |
| **Displayed total** | **198.00** |
| **Unexplained difference** | **+86.50** (+77.6%) |

The displayed total exceeds the sum of its own line items by $86.50, and stands 122.5% above the line item itself.

**The stated line items are also internally inconsistent.** A tax described as 8% of an $89.00 line item is $7.12, not the $18.00 displayed. Computed at the stated rate, the total should be ≈$100.62. Either the rate or the amount is wrong — but neither reading produces $198.00.

Two further sessions, again independently, reported a total of **$100.98** for the $89 service — within **$0.36** of the correctly-computed prediction. A third participant explicitly reported being confused by encountering "$100.98" alongside "harga servis $89."

The pattern is internally consistent: for the $89 service, the correctly-computed total is ≈$100.6–101.0, and $100.98 appears repeatedly. The $198.00 figure exceeds even the inconsistent line-item sum by 77.6% and the correctly-computed total by 96.8%. It does not correspond to that service's arithmetic under any combination of the stated fee and tax lines, and is consistent with a total belonging to a different service.

This matters because of what the product is for. A user-facing marketplace for a trust-averse purchase — sending a stranger into your home — cannot afford a total that contradicts its own arithmetic. A user who notices this has been given a reason to distrust every other number on the screen, permanently and at zero cost to the attacker.

**We report this as a candidate defect requiring reproduction, not a confirmed bug,** for three reasons: the figures reach us through observer transcription rather than build inspection; a second session (R06) reports a smaller discrepancy — $60.00 + $4.50 + $5.56 = $70.06 against a stated $75.06, a delta of exactly $5.00 — which may be a transcription slip; and no build identifier exists (§5.5). **Reproduction procedure:** open the tested build, add the $89 service, and record the rendered total.

### 4.5 Convergence with code-based heuristic inspection

The prototype received an independent code audit before this study, producing 0 Critical, 2 Major, and 4 Minor findings on the audited build. Comparing against user-observed barriers:

| Code-audit finding | Corresponding user-observed barrier | Verdict |
|---|---|---|
| Major: home page price differs from catalogue/detail | T2 — participants saw unexplained total jumps; catalogue pricing reported as confusing | **Converges** |
| Major: no visible keyboard focus indicator | — | **Untestable** by this method |
| Minor: header section links fragile | T5 — footer/section links returned users to the home page | **Converges** |
| Minor: conflicting stepper icons vs text | T6b — duplicated tracking status bars on confirmation | **Converges** |
| Minor: no re-order path | T5 — participants asked for order history and re-order | **Converges** |
| Minor: postal code silently truncated | T4 — postal code validated but street address not | **Partially converges** |
| — | **T1 — USD currency on a localised site** | **Audit missed; testing found** |
| — | **T2 — total ≠ sum of line items** | **Audit missed; testing found** |

Two conclusions follow.

**(a) Four of six audited defects were independently rediscovered by users without prompting.** Heuristic inspection was substantially predictive. This supports its continued use as a low-cost pre-test filter.

**(b) The two highest-severity defects in this study — currency localisation and total integrity — were missed entirely by code inspection.** Neither is a defect *in* the code: `$` renders correctly, and `198` renders correctly. Each is a defect in the *relationship between* what the code renders and what a user expects. Code inspection has no mechanism to detect this class, because it has no model of the transaction's expected arithmetic. **This is the methodological argument of the paper: price-integrity auditing is not a special case of usability testing — it is a check that neither usability testing nor code inspection performs reliably, and it must be specified explicitly.**

**(c) A caution about build provenance.** The audited document records the header-link, state, stepper-icon, and postcode defects as *repaired*. The tested sessions reported all of them. No session record carries a build hash or a date. **The tested build is therefore probably a pre-remediation build, but this cannot be confirmed** (§5.5). If confirmed, results describe a build that no longer exists; if not confirmed, the audit remediation is incomplete. Both readings require resolution before these findings are cited as characterising the current prototype.

### 4.6 Between-round comparison — and why it supports no design claim

Round 2 scored higher than round 1 on every aggregate measure: mean SEQ 6.75 vs 6.38 (Δ = +0.375, Cohen's *d* = 0.72), and the largest task-level gain was T8 (+1.80), followed by T2 (+0.80), T6 (+0.60), and T7 (+0.60).

**We make no causal claim from this difference, for four independent reasons:**

1. **The build did not change.** No remediation was applied between rounds. A design effect requires a design change.
2. **The between-round variance collapsed.** Per-task SD fell from 1.39 (round 1) to 0.49 (round 2) — a 2.8× reduction. Three of five round-2 participants returned 7 on seven or eight of eight tasks. Whatever changed, it was not only the participants' experience; it may equally have been the scoring discipline, the moderator's behaviour, or a transcription convention.
3. **n = 5 per round, ordinal data, no randomisation.** No hypothesis test is reported, and none would be interpretable.
4. **The residual gain has a mundane explanation.** T8, T2, T6, and T7 are precisely the four tasks where round 1 contained the lowest and most variable ratings. A mean pulled up by an outlier floor is expected to rise on replication without any intervention.

The comparison is reported because it was part of the source record and because the variance collapse is itself a data-quality finding worth the research community's attention.

---

## 5. DISCUSSION

### 5.1 What worked

The prototype's *structure* is sound. Four tasks — service discovery for a well-labelled category, price reading, date selection, and address completion — sit at or near ceiling with almost no dispersion. The booking flow follows an expected mental model (browse → detail → schedule → address → pay → confirm), and participants found it navigable without instruction. Participants with e-commerce familiarity recognised the checkout pattern immediately, and one described the price-detail screen as intuitive for exactly that reason.

Notably, **T5 (address form) reached the ceiling (M = 6.90, SD = 0.32) even though the same task generated the most frequently reported *feature requests*** — geocoding, autocomplete, saved addresses (§4.3 T4). The form is easy to fill and wrong in design. Ease of completion and fitness for purpose are independent properties, and only one of them was measured by SEQ.

### 5.2 What failed, and the pattern behind it

The failures cluster into three patterns worth naming, because each implies a different remedy.

**Pattern 1 — Presentation locale not matched to content locale.** An Indonesian-language interface renders prices in dollars and service descriptions in technician-level English. Participants read this as evidence the product is not built for them. This is a localisation defect, not a copy defect: no individual string is wrong; the locale as a whole is incoherent. It is also the cheapest finding in the study to fix and one of the most damaging to leave.

**Pattern 2 — Missing infrastructure treated as acceptable default.** No map, no autocomplete, no saved address, no order history, no re-order, no calendar, no custom time request, no chatbot. Each request was individually reasonable. Collectively they describe a checkout that asks the user to do work the platform could do, and asks them to do it again on the next booking.

**Pattern 3 — Redundant, conflicting surfaces.** Two date pickers that disagree; a home-page price that differs from the catalogue; two tracking bars and a QR code of unexplained purpose on the confirmation page; duplicate WhatsApp and print buttons. Redundancy is normally benign. Here it is actively harmful, because when two copies of a fact disagree, the user cannot tell which to trust — and in a pricing context they will trust neither.

### 5.3 Design implications

Priorities are ordered by severity × frequency across both corpora, consistent with the source recommendation matrices. Severity labels follow the study's audit scale.

| P | Finding | Recommendation | Sev |
|---|---|---|---|
| **1** | Total ≠ sum of line items | Reproduce immediately; add a build-time invariant asserting `total == service + fee + tax` for every service. Block release on failure. | **Critical** |
| **2** | USD on Indonesian site; technician jargon | Localise currency to IDR; rewrite service taxonomy in operational lay register; merge near-synonymous service entries; remove technician-internal documentation from customer-facing pages. | **High** |
| **3** | Support channel undiscoverable | Surface a persistent, explicitly labelled support action in the header, not the footer; label it as support, not booking; add direct contact; add FAQ search and per-service FAQ. | **High** |
| **4** | Form state lost on Back/reload | Persist checkout state; warn before destructive navigation; offer resume of an incomplete booking. | **High** |
| **5** | Street address unvalidated; mandatory fields unmarked | Validate street address on the same terms as postal code; mark required and optional fields explicitly; make apartment/unit optional; relabel "service address" to "home address". | **High** |
| **6** | Two date pickers that disagree | Single source of truth for available dates; render one picker; retain the second instance only as a read-only cross-check that is guaranteed identical. | **High** |
| **7** | Footer links return to home; query persists | Fix footer routing; reset search query on clear and on navigation. | **Medium** |
| **8** | Confirmation-page clutter | Collapse to a static transaction summary; move tracking into order history; remove duplicate actions; label or remove the QR code. | **Medium** |
| **9** | Type size and contrast below threshold | Raise minimum type size to 12 pt; raise contrast of secondary text to WCAG AA; verify rendered contrast in a real browser. | **Medium** |
| **10** | No geocoding, saved address, order history | Add map pin selection and address autocomplete; store addresses by label (home/work); provide order history with re-order. | **Medium** |
| **11** | Support for missing service; scheduling rigidity | Add "other service" request path; full calendar; arrival-time range; custom-time request. | **Low** |

Two methodological recommendations follow directly from this study:

- **Add a price-integrity test to the pre-release pipeline.** An automated assertion over every service (P1) is cheap and catches the defect class that both code inspection and ease-of-use measurement missed.
- **Stop relying on aggregate success rates in formative evaluation.** A 93.75% success rate coexisted with a Critical pricing defect and a support channel rated as low as 1/7. Report per-task dispersion and defect-probe results, not just totals.

### 5.4 What this study does not show

- **No trust, conversion, revenue, or bounce-rate effect.** None was instrumented. No such claim appears.
- **No cognitive-load measurement.** No NASA-TLX or comparable instrument was administered.
- **No causal design effect.** The prototype was not manipulated; there is no condition/control comparison.
- **No SUS score.** One questionnaire was issued; no responses were recorded. No value is reported.
- **No population inference.** n = 10, purposive, demographics unrecorded (§5.5).

### 5.5 Threats to validity

**T-1 — Participant rosters do not agree across source records. [Severe]**
The narrative corpus names ten participants. The two quantitative recap sheets name a partly different set: four names overlap, three appear only in the recap sheets, and six narrative participants have no SEQ record anywhere. Both recap sheets end with a note instructing that missing names be filled in, indicating the roster was knowingly incomplete. **Consequence:** the SEQ corpus and the narrative corpus cannot be confirmed to be the same ten people. We do not aggregate across them as though they were, and every count in §4.3 carries an explicit denominator.

**T-2 — No build identifier, date, or moderator record. [Severe]**
The study protocol required recording the canonical prototype and its build hash before sessions began. No session record contains one. As §4.5(c) shows, the tested build probably predates the recorded audit remediation. **Consequence:** no result may be attributed to the current prototype, and the relationship between these findings and the audited build is unresolved.

**T-3 — Demographics unrecorded; Gen Z eligibility unverifiable. [Severe]**
No source record contains age, gender, or occupation. The protocol's 18–26 eligibility criterion cannot be checked, and one session's comment about the 40-and-over age range conflicts with it. **Consequence:** for a paper whose subject is generational, the sample's generational composition is unestablished.

**T-4 — Ethics and consent unevidenced. [Severe]**
The protocol required approved consent materials and institutional clearance before recruitment. No consent record, approval reference, or clearance number appears in any source report. Recording evidently occurred; no retention or deletion record exists. **Consequence:** an unresolved compliance gap that must be closed before any publication of this data.

**T-5 — Ceiling effect limits four tasks. [Moderate]**
T1, T3, T4, and T5 (SD ≤ 0.42) cannot discriminate between design states. Subsequent iterations will need either harder tasks, a more complex stimulus, or different measures to generate evidence on these paths.

**T-6 — Variance collapse between rounds. [Moderate]**
Round-2 per-task SD (0.49) is 2.8× smaller than round-1 (1.39), with three participants returning near-uniform maximum scores. Possible causes — differing scoring discipline, moderator effects, demand characteristics, transcription convention — cannot be distinguished from the available records.

**T-7 — Qualitative corpus is observer paraphrase, not transcript. [Moderate]**
Recording files are absent from the repository. Every participant statement in this paper is an observer's summary. Direct quotation would misrepresent the evidence and is therefore not used anywhere.

**T-8 — Verbatim participant speech and identity cannot be verified. [Moderate]**
Names appearing in the source reports are treated as unverified; no code is mapped to a name. Where individual scores matter for interpretation (the T8 range 1–7), we refer to codes only.

**T-9 — Price figures are second-hand. [Moderate]**
The §4.4 anomaly rests on observer transcription. Two independent sessions reporting the same anomalous total is suggestive but not conclusive, and one further discrepancy may be a transcription slip. Treated as a candidate defect pending reproduction.

**T-10 — Transcription gaps in the source. [Low]**
One recap sheet notes that a participant's comments were truncated in the screenshot and should be checked against the original sheet. That check has not been performed.

**T-11 — References unverified. [Low]**
See the verification note below.

---

## 6. CONCLUSION

We evaluated an Indonesian-language home-services marketplace prototype with ten participants across eight tasks and two rounds. The prototype is structurally competent: 93.75% task success, mean ease 6.56/7, and a familiar booking flow that participants navigated without instruction.

Its failures are concentrated and diagnosable. The interface is easy to operate but not yet honest: **a displayed total of $198.00 whose own line items sum to $111.50** is the study's defining result, and it is a defect that neither code inspection nor ease-of-use measurement would have caught on its own. Alongside it sit a locale that is Indonesian in language but American in currency, a support channel buried in a footer, a checkout that discards state on navigation, and two date pickers that disagree with each other.

The most useful methodological conclusion is that **ease and integrity are separate properties, and transactional interfaces must be measured on both.** A 93.75% success rate is compatible with a Critical pricing defect. Where the product's purpose is to make a hesitant customer trust a stranger with access to their home, an ease metric alone will certify it as sound long after it has stopped being trustworthy.

We have also reported, in §5.5, five provenance defects that constrain these conclusions — roster mismatch, missing build identifier, unrecorded demographics, absent ethics evidence, and inter-round variance collapse. We regard publishing these alongside the results as part of the finding. Studies that report a 93.75% completion rate without disclosing that they cannot identify their own participants are not more rigorous; they are merely less legible about what they do not know.

### Future work

1. **Reproduce the price anomaly** against the tested build (§4.4). If confirmed, add the build-time invariant of P1 immediately.
2. **Reconcile the participant rosters** and re-issue the source data under a single, auditable participant register.
3. **Record build identifiers and session dates** for all future sessions, and re-run any round intended to serve as a baseline.
4. **Collect demographics** so that generational framing can be either supported or withdrawn.
5. **Complete and document ethics and consent**, including retention and deletion of the recordings already produced.
6. **Run a post-remediation evaluation** against the prioritised backlog in §5.3, using defect-probe tasks (T6, T7) as primary evidence and treating T1/T3/T4/T5 as saturated.
7. **Measure trust directly** with a validated instrument, if the trust claim is to be made at all.

---

## REFERENCES

> **Reference verification notice.** These entries are carried forward unchanged from [`draft-paper.md`](draft-paper.md). The originating proposal and draft used inconsistent numbering for different works, so in-text citations cannot be mapped directly onto the proposal. Entry **[12]** was flagged in the previous draft as unverifiable and is retained here **only** as a placeholder; it must be replaced or removed before submission. Every remaining entry — in particular all DOIs — must be checked against the publisher record before submission.

[1] Darmawan A, Prasetyo Y, Hartono S. Digital transformation of micro-enterprises in Indonesia: barriers and enablers. *J Bus Innov Manag.* 2023;7(2):112–28. doi:10.35595/jbim.v7i2.2145
[2] Wijaya GE, Kuswoyo C. Pengaruh transparansi informasi dan desain antarmuka terhadap kepercayaan konsumen layanan jasa rumah tangga. *J Inspirasi Bisnis Dan Manaj.* 2024;8(1):45–60. doi:10.35595/jibm.v8i1.3012
[3] Putri R, Handayani A, Siregar M. Generasi Z dan preferensi pengalaman digital: studi kasus platform layanan on-demand. *J Psikol Konsumen.* 2025;12(3):201–15. doi:10.58721/jpk.v12i3.489
[4] Pratama IGJ, Ardani W, Putri IAS. Pemanfaatan platform digital sebagai sarana marketing dan branding ekonomi kreatif pasca-pandemi. *Lensa Ilm J Manaj Dan Sumberd.* 2022;3(1):28–42. doi:10.35595/lensa.v3i1.789
[5] Dinata PZ, Urwah MA, Rahmawan MR, Junaeti E. Perancangan UI/UX web e-commerce menggunakan pendekatan user-centered design. *Jambura J Inform.* 2023;5(1):45–58. doi:10.34312/jji.v5i1.18923
[6] Resti AA, Suharyati S, Rahmi M. Efforts to develop micro, small, and medium enterprises through education on branding, design, and financial statements. *Community Empower.* 2023;8(10):1480–6. doi:10.35595/pengabdikan.v8i10.3456
[7] Sunarso B, Tusriyanto, Mustafa F. Analysing the role of visual content in increasing attraction and conversion in MSME digital marketing. *J Contemp Adm Manag ADMAN.* 2023;1(3):193–200. doi:10.34312/adman.v1i3.145
[8] Norman DA. *The design of everyday things: Revised and expanded edition.* New York: Basic Books; 2013.
[9] Hick WE. On the rate of gain of information. *Q J Exp Psychol.* 1952;4(1):11–26.
[10] Miller GA. The magical number seven, plus or minus two. *Psychol Rev.* 1956;63(2):81–97.
[11] Von Restorff H. Über die Wirkung von Bereichsbildungen im Spurenfeld. *Psychol Forsch.* 1933;18:299–342.
[12] **[PLACEHOLDER — REPLACE OR DELETE. UNVERIFIABLE.]** Previously listed as "Hart J, Kapp K. The aesthetic-usability effect in service design: Evidence from Indonesian MSMEs. *J Des Res Pract.* 2021;5(3):210–24. doi:10.58721/jdrp.v5i3.112". Title, journal, and DOI could not be verified. Replace with a verified source before submission.
[13] Perdanakusuma AR, Hanggara BT, Hasnanursanti AR. Analisis usability website resmi pemerintah kota menggunakan metode heuristic evaluation. *J TECNOSCIENZA.* 2022;6(2):429–43. doi:10.35595/tecnoscienza.v6i2.2341
[14] Febriyanthi A, Al E. Interface design heuristic evaluation website yayasan kesehatan Telkom. *Turk J Comput Math Educ TURCOMAT.* 2021;12(4):852–9. doi:10.17762/turcomat.v12i4.1234
[15] Tianti AM, Firmania BN, Prini, Fanani RCP, Putri SE, Adisusilo AK. Peningkatan promosi usaha catering UMKM melalui pembuatan website berbasis WordPress. *PENITI BANGSA.* 2024;2(2):100–12. doi:10.58721/penitibangsa.v2i2.177
[16] Sauro J, Lewis JR. *Quantifying the user experience: Practical statistics for user research.* 2nd ed. Sebastopol, CA: Morgan Kaufmann; 2016.
[17] Nielsen J. Enhancing the explanatory power of usability heuristics. *Proc ACM CHI'94.* 1994:152–8. doi:10.1145/191666.191729

---

## APPENDIX A — Single Ease Question item

> **After completing the task, how easy or difficult was that task for you?**
> 1 = very difficult · 2 · 3 · 4 · 5 · 6 · 7 = very easy

Administered immediately after each of T1–T8. Ordinal scale; mean and SD reported for comparability with common practice, with the caveat noted in §2.4 and §5.5(T-5).

## APPENDIX B — Complete SEQ matrix

Participants anonymised per §3.2. Round 1 = P01–P05 (from `Rekap … - 1.docx`); Round 2 = P06–P10 (from `Rekap … - 2.docx`). Values reproduced exactly as recorded in the source sheets; recomputation confirmed all reported means.

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

## APPENDIX C — Provenance and audit trail

Full traceability record, including the participant-roster cross-comparison, the price arithmetic derivation, and the list of figures prohibited from appearing in this manuscript, is maintained separately in [`ut-results-integration.md`](ut-results-integration.md).

Summary of source files:

| ID | File | Role |
|---|---|---|
| S1 | `UT-result/Laporan_Usability_Testing_ProFix.docx` | Narrative report; 10 session write-ups; 5-theme synthesis; recommendation matrix |
| S2 | `UT-result/Rekap HomeCare Usability Testing - 1.docx` | Round-1 recap; 5 × 8 SEQ matrix; completion count; auditor notes |
| S3 | `UT-result/Rekap HomeCare Usability Testing - 2.docx` | Round-2 recap; 5 × 8 SEQ matrix; round comparison; auditor notes |
| S4 | `evaluation/profix-heuristic-evaluation-2026-10-02.md` | Independent code-based heuristic audit; used only for §4.5 triangulation |
| S5 | `UT-plan/01-study-protocol.md` | Pre-registered protocol; used for deviation analysis in §5.5 |

**Prohibited figures.** The superseded draft contained 87.5%, 4.20/5, 84.6%, and 4.23/5. These were never derivable from any source and remain permanently barred from this study's reporting. Note that 84.6% is **not** the corrected completion rate (93.75%) and 87.5% is **not** either completion figure; the resemblance is coincidental and must not be used to rehabilitate them.