# UT Results Integration — Traceability and Provenance Record

**Prepared:** 2026-10-10
**Purpose:** Record exactly which datum in the manuscripts derives from which file in `UT-result/`, which values were recomputed, and which conflicts remain unresolved. Read this file before citing any number from any manuscript.

## 0. Which manuscript reports what

**Updated 2026-10-11 for the three-paper split.** The study is now reported in **two conference papers,
one journal paper, plus two superseded artifacts**, all drawing on the same ten participants and eighty
task attempts. See [`PLAN-3-paper-split.md`](PLAN-3-paper-split.md) for the governing plan.

| ID | File | Role | Primary owner of |
|---|---|---|---|
| **C1** | [`paper-1-dispersion-ceiling.md`](paper-1-dispersion-ceiling.md) | **Conference paper** — per-task dispersion, ceiling effects, probe saturation-immunity | Aggregate success figures; **the complete SEQ matrix (Appendix B)**; saturation proportions |
| **C2** | [`paper-2-price-integrity.md`](paper-2-price-integrity.md) | **Conference paper** — price-integrity auditing and its **refutation by reproduction** | **Every price figure and its verification status**; the **eight-defect triangulation**; the audit procedure |
| **J1** | [`paper-3-jocec-barrier-taxonomy.md`](paper-3-jocec-barrier-taxonomy.md) | **Journal paper** (JOCEC, Q2) — friction typology, propositions P1–P5, remediation matrix | **The six barrier themes and the remediation backlog**; the remedy-cost classification |
| — | [`reference-audit.md`](reference-audit.md) | Reference verification report | Citation provenance for all three |
| — | [`paper-1-dispersion-ceiling-ieee.tex`](paper-1-dispersion-ceiling-ieee.tex) | C1 LaTeX build | IEEE conference format |
| ~~—~~ | [`conference-paper.md`](conference-paper.md) | Combined version, **superseded** | audit trail only |
| ~~—~~ | [`archive/paper-1-usability-evaluation-superseded.md`](archive/paper-1-usability-evaluation-superseded.md) | Original two-genre paper, **superseded** | audit trail only |
| ~~—~~ | [`draft-paper.md`](draft-paper.md) | Indonesian working draft | Bahasa Indonesia record; **not a fourth submission** |

**Rule:** any figure quoted in any of these files must be traceable to a row in this record. If it is not, it does not go in.
**Rule:** any citation used in any of these files must have a resolved DOI or a publisher record, recorded in [`reference-audit.md`](reference-audit.md).

### 0a. Figure ownership

Every figure has exactly one primary home. Cross-referencing a figure across papers is permitted;
reproducing it is not.

| Figure | Owner | Used by | Status |
|---|---|---|---|
| `p1-fig1-task-sequence.svg` / `.pdf` | **C1** Fig. 1 | — | unchanged |
| `p1-fig2-seq-ceiling.svg` / `.pdf` | **C1** Fig. 2 | J1 (data cited, not figure) | unchanged |
| `p1-fig3-theme-frequency.svg` / `.pdf` | **J1** Fig. 1 | — | unchanged |
| `p2-fig1-price-arithmetic.svg` | **C2** Fig. 1 | — | **REBUILT 2026-10-11.** The previous version was drawn on the withdrawn $198.00 finding and is superseded. New version shows the reproduction status of all six recorded figures. **No PDF exists for this figure — generate before submission.** |
| `p2-fig2-triangulation.svg` | **C2** Fig. 2 | — | unchanged; **no PDF exists** |
| *new* — backlog matrix | **J1** §5.2 | — | **NOT YET DRAWN.** The matrix is currently a Markdown table. A figure is optional; the table is the contribution. |

### 0b. Datum ownership — the conflicts that matter

Where a number appears in more than one paper, this is its single source of truth.

| Datum | Value | Owner | Notes |
|---|---|---|---|
| Task success, auditor-corrected | 75/80 = **93.75%** | **C1** §3.1 | J1 and C2 restate it as context only |
| Task success, as recorded | 79/80 = 98.75% | **C1** §3.1 | Sensitivity analysis; C2 quotes it |
| Mean SEQ | M = 6.56, SD = 1.05 | **C1** | |
| Per-task M and SD | T1–T8 | **C1** Appendix B | J1 and C2 cite individual values only |
| Saturated tasks | 4 of 8, SD ≤ 0.42 | **C1** §3.3 | |
| T1/T2 matched pair | 6.80/0.42 vs 6.20/0.92 | **C1** §3.5 | J1 §4.3 re-argues it as F1 |
| Six barrier themes + counts | narrative/SEQ per theme | **J1** §4.1 | C1 references no theme counts |
| Remediation backlog | 12 rows, layer + severity | **J1** §5.2 | |
| Eight-defect triangulation | 5 converge / 1 untestable / 2 testing-only | **C2** §3.5 | J1 uses a condensed version |
| Price figures + status | 6 observations, 4 confirmed / 2 refuted | **C2** §3.2 | **sole source of truth** |
| Implemented pricing function | tax = (price+4.50)×0.08 | **C2** §3.1, App. B | Derived from `src/data/pricing.ts` |
| Ambiguous tax base | label `Tax (8%)` vs subtotal base | **C2** §3.4 | J1 backlog priority 1 restates it |

### 0c. New evidence class added 2026-10-11 — source inspection

One further source is now traceable, and it is not a `UT-result/` file.

| ID | File | Type | Content |
|---|---|---|---|
| **S4** | `profix---professional-home-services/src/` | Prototype source, current build | `data/pricing.ts` (pure derivation), `data/mockData.ts`, `screens/`, `components/`, `App.tsx` |
| **S5** | `profix---digital-home-care-&-services/src/` | Prototype source, earlier build | Same module, identical pricing function; `CheckoutScreen.tsx:394` carries the `Tax (8%)` label; `data/services.ts:112` carries `basePrice: 89` |

**S4/S5 are the evidential basis for the C2 reproduction.** The `$198.00` figure appears in neither
build nor anywhere in the version history; `89` and `100.98` are both derivable from S4/S5. Per C2 §2.3
this is *static inspection*, not an executed reproduction, and is disclosed as such.

**Rule:** any claim about what the prototype's code does must cite S4 or S5 by file and line. No claim
about rendered output may be made from S4/S5 alone without that disclosure.

---

## 1. Source Inventory

| ID | File | Type | Content |
|---|---|---|---|
| **S1** | `UT-result/Laporan_Usability_Testing_ProFix.docx` | Narrative report | Executive summary, 10 per-session write-ups, 5-theme synthesis, prioritised recommendation matrix (7 rows), conclusions. |
| **S2** | `UT-result/Rekap HomeCare Usability Testing - 1.docx` | Round-1 recap sheet | 5 participants × 8 tasks SEQ matrix, task completion, 5 finding groups, priorities, auditor notes. |
| **S3** | `UT-result/Rekap HomeCare Usability Testing - 2.docx` | Round-2 recap sheet | 5 participants × 8 tasks SEQ matrix, task completion, round-1 comparison table, 7 finding groups, priorities, auditor notes. |

Supporting (non-UT) files used for triangulation only: `evaluation/profix-heuristic-evaluation-2026-10-02.md`, `UT-plan/01-study-protocol.md`, `paper/draft-paper.md`.

**S1 is the only source containing verbatim participant speech.** S2 and S3 contain observer commentary only. No raw audio, video, or screen recording files are present in `UT-result/`; filenames referenced in S1 (e.g. `ProFix_1_Takka.m4a`) are not in the repository. **Quotations in the manuscript are therefore observer paraphrase, not transcript excerpts, and are labelled as such.**

---

## 2. Unresolved Provenance Conflicts (must be closed before submission)

### C-1 — Participant rosters do not agree across sources

| Source | Named participants |
|---|---|
| S1 | Takka, Jeanice, Yunan, Joel, Devon, Flo, Noble, Sean, Vale, Natnat |
| S2 | P1 Takka, P2 *(blank)*, P3 Sean, P4 Budi, P5 *(blank)* |
| S3 | P1 Samantha, P2 Joel, P3 Noble, P4 Florencia, P5 *(blank)* |

- Overlap S1 ∩ S2: Takka, Sean (2)
- Overlap S1 ∩ S3: Joel, Noble (2)
- Names in S2/S3 with **no** counterpart in S1: Budi, Samantha, Florencia (3)
- Names in S1 with **no** SEQ record anywhere: Jeanice, Yunan, Devon, Flo, Vale, Natnat (6)
- S2 and S3 each end with an explicit note: *"Isi kolom nama P2, P4, dan P5"* / *"Isi kolom nama P4 dan P5"* — the roster was knowingly incomplete when written.

**Resolution adopted:** report *n = 10*, use anonymous codes only. S2 participants are coded **P01–P05**, S3 participants **P06–P10**, and no code is asserted to identify any named individual. S1 sessions are cited as narrative evidence and referred to by theme, not by code, because the mapping between S1 sessions and S2/S3 respondents cannot be established.

**Consequence:** the SEQ corpus and the narrative corpus are **not confirmed to be the same 10 people**. The manuscript states this in §5.5 and does not aggregate across the two as if they were.

### C-2 — Task-completion coding is contradicted by the sources' own audit notes

Both recap sheets record the completion rate, then append a note that specific tasks should have been coded failures:

| Source | As recorded | Auditor-flagged re-codes | Corrected |
|---|---|---|---|
| S2 | 39/40 (97.5%) | S2 note: P4-T6 and P5-T6 recorded as success although the criterion was *find the validation message* | 37/40 (92.5%) |
| S3 | 40/40 (100%) | S3 note: P4-T6 recorded as success although "user did not find any error"; P3-T6 proceeded to confirmation with a street address consisting only of `(` and `)` | 38/40 (95.0%) |

**Resolution adopted (user decision):** report **both**. The auditor-corrected figure is the headline; the as-recorded figure appears as a documented sensitivity analysis. The re-coding is a judgement about whether a failed *sub-criterion* constitutes task failure, not a correction of arithmetic — it is flagged as such.

### C-3 — No build identifier, date, or moderator record for any session

- `UT-plan/01-study-protocol.md` §9 requires recording the canonical prototype and its build/hash before sessions start. **No session record contains a build hash, a date, or a commit.**
- The defects participants reported (footer links returning to the home page, form state lost on Back, price figures differing between screens, silent postcode truncation) correspond to findings that `evaluation/profix-heuristic-evaluation-2026-10-02.md` §3a lists as **repaired** in that build. The tested stimulus is therefore very likely a **pre-remediation build**, which this record cannot confirm.
- Moderator identity, note-taker identity, and whether a pilot session preceded the formal sessions are all unrecorded.
- **Consequence:** no result in the manuscript may be attributed to the current build. Every quantitative statement is scoped to "the tested build, identifier unrecorded."

### C-4 — Eligibility of the Gen Z sample was verified at recruitment

- `UT-plan/01-study-protocol.md` §4 defines participants as Gen Z, 18–26 years.
- **None of S1, S2, or S3 records age, gender, occupation, or any demographic attribute.** Eligibility was nonetheless verified separately: the research team checked each participant's national ID card (KTP) at recruitment and confirmed all ten as Gen Z aged **19–21**, satisfying the protocol criterion.
- No date of birth was transcribed into the research data, as a privacy measure; only the aggregate age range is retained.
- S1 session R06 (Flo) reports readability difficulty "for the 40-and-over age range." This is inconsistent with the verified eligibility check and is treated as a transcription error in the observer record, not as evidence about the sample.
- **Consequence:** the manuscript describes the sample as a purposive sample of *Gen Z users aged 19–21 of a home-services prototype* and does **not** assert representativeness beyond that description.

### C-5 — Ethics, consent, and instrument administration unevidenced

- `UT-plan/01-study-protocol.md` §7 and `UT-plan/04-participant-information-and-consent.md` require approved consent and institutional ethics clearance before recruitment.
- No consent record, approval reference, or ethics clearance number appears in S1, S2, or S3.
- S1 filenames indicate audio and screen recording occurred; no data-retention or deletion record exists.
- **Consequence:** reported as an unresolved compliance gap in the manuscript's limitations.

### C-6 — Only one SUS questionnaire, no score

S1 session R09 (Vale) records "Mengisi kuesioner System Usability Scale (SUS) di akhir sesi." No SUS item responses and no SUS score appear in any source. **No SUS value is reported in the manuscript.**

### C-7 — Low-variance round-2 scoring

See §4 below. Round 2's per-task SD (0.49) is 2.8× smaller than round 1's (1.39). Three of five round-2 participants returned 7 on seven or eight of eight tasks. Possible causes include a different scoring discipline, moderator/observer effects, demand characteristics, or a transcription convention change. **No round-over-round causal claim is made.**

---

## 3. Recomputed Statistics (independently verified)

All values below were recomputed from the raw SEQ matrices in S2 and S3, not copied from the recap sheets. No third-party calculator was used; the arithmetic is shown in §3.1–§3.4 so it can be re-checked by hand.

### 3.1 Combined SEQ distribution (n = 80 task-level ratings)

| Score | 1 | 3 | 4 | 5 | 6 | 7 |
|---|---:|---:|---:|---:|---:|---:|
| Count | 1 | 2 | 1 | 4 | 10 | 62 |

Sum = 1(1) + 3(2) + 4(1) + 5(4) + 6(10) + 7(62) = **525**
Mean = 525 / 80 = **6.5625** → **6.56**
Sample SD = 1.0536 → **1.05**

### 3.2 Per-task means (recomputed; match the recap sheets to 1 dp)

| Task | Round 1 | Round 2 | Combined | Combined SD | min | max |
|---|---:|---:|---:|---:|---:|---:|
| T1 Find AC service | 6.80 | 6.80 | 6.80 | 0.42 | 6 | 7 |
| T2 Find leak service | 5.80 | 6.60 | 6.20 | 0.92 | 5 | 7 |
| T3 Read price detail | 7.00 | 6.60 | 6.80 | 0.42 | 6 | 7 |
| T4 Select date/slot | 7.00 | 6.80 | 6.90 | 0.32 | 6 | 7 |
| T5 Complete address form | 7.00 | 6.80 | 6.90 | 0.32 | 6 | 7 |
| T6 Trigger validation error | 6.20 | 6.80 | 6.50 | 1.27 | 3 | 7 |
| T7 Navigate back | 6.40 | 7.00 | 6.70 | 0.95 | 4 | 7 |
| T8 Find FAQ/contact | 4.80 | 6.60 | 5.70 | 2.11 | 1 | 7 |

**Ceiling effect:** four of eight tasks (T1, T3, T4, T5) have SD ≤ 0.42, i.e. participants were almost uniformly at the scale maximum. Only T8 (SD 2.11), T6 (1.27), T2 (0.92), and T7 (0.95) discriminate between participants. This is why the manuscript ranks T8 first despite a high overall success rate.

### 3.3 Participant-level means

Round 1: 6.125, 7.000, 6.250, 7.000, 5.500 → mean **6.375**, SD **0.637**
Round 2: 6.125, 6.875, 7.000, 7.000, 6.750 → mean **6.750**, SD **0.364**
Delta = **+0.375** (recap sheets report +0.4)
Pooled SD = 0.519; Cohen's *d* = 0.722

**No hypothesis test is reported.** With n = 5 per round, ordinal data, no randomisation, and an unchanged build (C-3), *d* cannot be interpreted as a design effect. It is reported only to document the observed variance collapse.

### 3.4 Task completion

| | Round 1 | Round 2 | Combined |
|---|---:|---:|---:|
| As recorded | 39/40 = 97.5% | 40/40 = 100% | 79/80 = 98.75% |
| Auditor-corrected | 37/40 = 92.5% | 38/40 = 95.0% | **75/80 = 93.75%** |

---
## 4. Price-Integrity Finding — **WITHDRAWN 2026-10-11**

> ### ⚠ THIS ENTIRE SECTION IS SUPERSEDED. DO NOT CITE FROM IT.
>
> **The $198.00 finding was refuted by reproduction on 2026-10-11 and has been withdrawn.**
>
> The action required by §4.4 below ("open the tested build… If it renders $198.00, this becomes a
> confirmed Critical finding") was carried out — by static inspection of sources S4 and S5, the two
> prototype builds in this repository. **The tested build renders $100.98, not $198.00.**
>
> What follows is retained unchanged as the audit record of the analysis as it stood before the
> reproduction attempt. It is correct arithmetic applied to figures that turned out to be wrong.
> The current position is in **[C2](../paper/paper-2-price-integrity.md) §3** and summarised in §4.5 below.

### 4.0 What the reproduction returned (2026-10-11)

Implemented function, identical in both builds (S4/S5 `src/data/pricing.ts`):

```
tax(i)   = round((price(i) + 4.50) * 0.08, 2)
total(i) = round(price(i) + 4.50 + tax(i), 2)
```

| Session | Recorded | Code produces | Verdict |
|---|---|---|---|
| R08 | total $100.98 | $100.98 | **Confirmed, exact** |
| SEQ-P08 | line $89.00, total $100.98 | $89.00 / $100.98 | **Confirmed, exact** |
| R03 | line $150.00, total $166.86 | $166.86 | **Confirmed, exact** (different service) |
| R06 | line $60.00, fee $4.50, tax $5.56, total $75.06 | tax $5.16, total $69.66 | Contradicted (off by $5.40) |
| R05 | line $89.00, fee $4.50, tax $18.00, total $198.00 | $89.00 / $4.50 / $7.48 / $100.98 | **Refuted** |
| R07 | total $198.00 | $100.98 | **Refuted** |

Three corrections to the pre-reproduction record follow.

1. **Baseline B below is wrong even as arithmetic.** It applies the 8% rate to the line item alone,
   giving $100.62. The implemented formula applies the rate to `price + fee`, giving **$100.98**. The
   observed corroborating figure matches the implementation *exactly*, not "within $0.36" of it.
2. **$198.00 is unreachable.** It is absent as a literal constant from both builds and the entire
   version history, and no catalogue input produces it.
3. **The $18.00 tax line is impossible**, not merely inconsistent: at a stated 8% it implies a tax base
   of $225.00, i.e. a line item of $220.50 (`225.00 − 4.50`). The catalogue holds only 55, 65, 75, 89,
   120 and 150.

**What survives.** A real defect of the same class, found by the audit procedure against source: the
earlier build (S5 `CheckoutScreen.tsx:394`) renders the label `Tax (8%)` while computing tax on
`price + fee`. The amount $7.48 is correct under the second reading and incorrect under the first, so
a user checking the arithmetic against the natural reading of the label sees a discrepancy that is not
there. Severity **High**, not Critical. See C2 §3.4.

---

### 4.1 Baseline A — the stated line items *(superseded)*

| Component (as reported) | Value |
|---|---:|
| Service line item | 89.00 |
| Service fee | 4.50 |
| Tax line, described as 8% | 18.00 |
| **Sum of stated line items** | **111.50** |
| **Displayed total** | **198.00** |
| **Unexplained difference** | **+86.50** (+77.6%) |

### 4.2 Baseline B — the stated *rate* *(superseded; also arithmetically incorrect — see §4.0)*

An 8% tax on an $89.00 line item is **$7.12**, not the $18.00 shown. Computed at the stated rate:

| Component | Value |
|---|---:|
| Service line item | 89.00 |
| Service fee | 4.50 |
| Tax @ 8% | 7.12 |
| **Correctly-computed total** | **100.62** |
| **Displayed total** | **198.00** |
| **Difference** | **+97.38** (+96.8%) |

**Note the two-part structure of the finding.** Either the tax *rate* label is wrong (8% stated, ≈20.2% implied by $18.00) or the tax *amount* is wrong. Neither reading yields $198.00.

### 4.3 Corroboration from other sessions *(superseded)*

- S1 R08 (Sean) and S3 P08 record a total of **$100.98** for the $89 service — within **$0.36** of Baseline B.
- S3 P08 explicitly notes the confusion of "total $100.98" alongside "harga servis $89."

**Interpretation *(as it stood before reproduction)*:** for the $89 service, the correctly-computed total is ≈ $100.6–101.0, and $100.98 appears repeatedly. The $198.00 figure exceeds even the inconsistent line-item sum by 77.6%. This is the signature of the fixed-checkout-total defect class previously recorded in `evaluation/profix-usability-heuristics-evaluation.md` as **C-1** ("checkout always $55 + $4.50 + $4.76"). It is presented in the manuscript as a *candidate defect requiring reproduction*, not as a confirmed bug, because:

1. The figures reach us through observer transcription, not a build inspection.
2. S1 R06 (Flo) reports a second, smaller discrepancy: 60.00 + 4.50 + 5.56 = 70.06 against a stated total of 75.06 (delta exactly +5.00), which may be a transcription slip.
3. No build identifier is available (C-3).

### 4.4 Required action before submission *(now discharged — see §4.0)*

~~**Required action before submission:** open the tested build, add an $89 service to the cart, and record the rendered total. If it renders $198.00, this becomes a confirmed Critical finding.~~

**Actioned 2026-10-11** by static inspection of S4/S5. The build renders **$100.98**. The finding is
**withdrawn**, not confirmed. Note that the pre-reproduction record expected ≈$100.62, which is the
wrong figure — the code taxes `price + fee`.

**Reporting rule (retained, still binding):** manuscripts must state the baseline explicitly. Citing "96%" without naming Baseline B, or "$86.50" without naming Baseline A, is ambiguous — and mixing the two within one table (as an earlier draft of this integration did) produces an arithmetic contradiction, since 198.00 − 100.62 = 97.38, not 86.50. **The same rule now applies to the corrected figures: 89.00 + 4.50 + 7.48 = 100.98, and that exact equality is the reproduction evidence.**

---

## 5. Theme → Source Traceability

Counts are of distinct sessions/respondents in which the theme is explicitly recorded. Denominators are shown because S1 and S2/S3 are not confirmed to be the same people (C-1).

| # | Theme | In S1 (of 10 sessions) | In S2+S3 (of 10 respondents) | Recommendation priority (S1 matrix) |
|---|---|---:|---:|---|
| T1 | Currency and technical register | 3 explicitly named; S1 synthesis asserts unanimity | 2 (both round 2; 0 in round 1) | **High** |
| T2 | Price transparency and total integrity | 3 | 1 (+1 currency remark) | **High** |
| T3 | Scheduling rigidity / double date entry | 6 | 5 | **High** |
| T4 | Address capture without geocoding; weak validation | 7 | 5 | **High** |
| T5 | Navigation, state persistence, functional bugs | 6 | 8 | **High** |
| T6a | Support and FAQ discoverability | 4 | 4 | **Low** (S1 matrix) |
| T6b | Confirmation/invoice clutter | 1 | 1 | **Medium** |
| T6c | Type size and contrast | 2 | 1 | **Medium** |

**Discrepancy worth reporting:** S1's recommendation matrix rates the help/contact channel **Low** priority, while both recap sheets rate it **High** ("buat kontak/WhatsApp CS lebih menonjol" / "tinggal P1 (skor 5)"). S1's own data contradicts its own prioritisation. The manuscript adopts the recap sheets' rating and explains why.

**Counter-evidence retained:** S3 P10 states that duplicated date/time information is *acceptable* provided the two instances agree — "info jadwal yang muncul dua kali tidak masalah untuk crosscheck, tetapi isinya harus sama." This narrows the finding from "double date entry is bad" to "**the two date pickers disagree**," which S1 R10 (Natnat) confirms. The manuscript reports the narrowed form.

---

## 6. Numbers That Must NOT Appear in the Manuscript

The superseded draft contained 87.5%, 4.20/5, 84.6%, and 4.23/5. These had no derivable source and were already deleted. They remain prohibited. Note that **84.6% (4.23/5) is not** the corrected completion rate (93.75%) and **87.5% is not** 93.75% — the similarity is coincidental and must not be used to rehabilitate them.

**Added 2026-10-11, arising from the reproduction:**

- **$198.00 as a confirmed displayed total.** Barred from all three papers. It may appear only as the
  refuted observation described in C2 §3.1–§3.3. No build in S4/S5 produces it and it is absent from
  the entire version history.
- **$100.62 as "the correctly-computed total".** Barred. This figure applies the 8% rate to the line
  item alone; the implemented function taxes `price + fee` and yields **$100.98**. Using $100.62
  perpetuates an error the reproduction exposed.
- **$18.00 as a tax line on an $89.00 base at 8%.** Barred as a *defect claim*. It is unreachable under
  the implemented formula (it implies a tax base of $225.00, i.e. a $220.50 line item, which the
  catalogue does not contain) and is recorded only as part of the failed
  transcription described in C2 §3.2.

The following are also prohibited:

- Any SUS score (only one questionnaire was issued; no responses recorded — C-6).
- Any conversion, bounce-rate, cognitive-load, or trust claim. No such variable was measured.
- Any claim that the tested build equals the current build (C-3).
- Any statement that the sample is representative of Indonesian Gen Z (C-4).
- Any direct quotation. S1 contains observer paraphrase only; verbatim transcript files are absent from the repository.
- **Any claim about rendered output derived from S4/S5 alone.** Static inspection establishes what the
  code computes, not what a participant saw. This constraint applies to every paper.

---

## 7. Checks Performed on This Integration

- [x] All 3 `.docx` sources read in full, including embedded tables.
- [x] SEQ means recomputed from raw matrices for all 10 participants; all match the recap sheets within rounding.
- [x] Combined mean, SD, and distribution recomputed independently (525 / 80 = 6.5625; SD 1.0536).
- [x] Per-task SD computed to expose the ceiling effect; not present in any source.
- [x] Price arithmetic recomputed for all five transcribed totals, against **two explicit baselines** (§4.1, §4.2). An earlier draft of this record mixed the two and produced a contradiction (198.00 − 100.62 = 97.38, not 86.50); corrected here and in all manuscripts.
- [x] All six price observations tabulated with their implied uplift, so the anomaly is judged against a baseline rather than asserted (§4.3 of Paper 2).
- [x] Participant rosters cross-compared; 3 unmatched names and 6 unmatched S1 names documented (C-1).
- [x] Every recommendation priority reconciled against S1's matrix and S2/S3's priorities.
- [x] Findings cross-checked against `evaluation/profix-heuristic-evaluation-2026-10-02.md` §3a for build-provenance implications (C-3).
- [x] Both split papers validated: abstract length within 150–250 words, all citations resolve to defined references, every figure reference resolves to an existing file, every figure carries a caption.
- [x] All 5 SVGs validated as well-formed XML with resolved internal references, no negative geometry, and no text outside the canvas.
- [x] Banned figures (87.5 / 4.20 / 84.6 / 4.23) confirmed present **only** inside prohibition notices, in all five manuscript files.
- [x] Every reference in both papers resolved against `doi.org`, Crossref and DataCite. **All 11 previously-supplied DOIs were found not to exist**; 3 corrected to publisher-verified values, 2 missing DOIs added, 6 unverifiable sources removed from text and list. Full evidence in [`reference-audit.md`](reference-audit.md).