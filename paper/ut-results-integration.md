# UT Results Integration — Traceability and Provenance Record

**Prepared:** 2026-10-10
**Purpose:** Record exactly which datum in the manuscripts derives from which file in `UT-result/`, which values were recomputed, and which conflicts remain unresolved. Read this file before citing any number from any manuscript.

## 0. Which manuscript reports what

The study is reported in **two submission papers plus a combined fallback**, all drawing on the same ten participants and eighty task attempts.

| File | Role | Key sections mapped to this record |
|---|---|---|
| [`paper-1-usability-evaluation.md`](paper-1-usability-evaluation.md) | **Paper 1** — formative usability evaluation | §3.1 (§4.1), §3.2 (§3.3), §3.3 (§3.3), §4.2 (§3.2–3.3), §4.4 (§5), §4.5 (§4.5), §6 (§2, §6) |
| [`paper-2-price-integrity.md`](paper-2-price-integrity.md) | **Paper 2** — price-integrity defect and audit procedure | §4 (§4), §4.5 (§4.5), §5 (§4, §5), §6 (T-1, T-2, T-3, T-4) |
| [`reference-audit.md`](reference-audit.md) | **Reference verification report** — DOI/metadata provenance for every citation | applies to all |
| [`conference-paper.md`](conference-paper.md) | Combined version, superseded | all |
| [`draft-paper.md`](draft-paper.md) | Indonesian working draft | all |
| [`figures/`](figures/) | 5 publication SVGs | §3.2, §4, §5 |

**Rule:** any figure quoted in any of these files must be traceable to a row in this record. If it is not, it does not go in.
**Rule:** any citation used in any of these files must have a resolved DOI or a publisher record, recorded in [`reference-audit.md`](reference-audit.md).

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

### C-4 — Eligibility of the Gen Z sample cannot be verified

- `UT-plan/01-study-protocol.md` §4 defines participants as Gen Z, 18–26 years.
- **None of S1, S2, or S3 records age, gender, occupation, or any demographic attribute.**
- S1 session R06 (Flo) reports readability difficulty "for the 40-and-over age range," which is inconsistent with an 18–26 sample or indicates the modifier was speaking for others.
- **Consequence:** the manuscript describes the sample as a purposive sample of *young adult users of a home-services prototype* and explicitly does **not** assert Gen Z representativeness.

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
## 4. Price-Integrity Finding — Traceable Arithmetic

S1 sessions R05 and R07 independently report the **same** figures: a $89 service line item, a $4.50 service fee, an 8% tax, and a displayed total of **$198.00**.

### 4.1 Baseline A — the stated line items

| Component (as reported) | Value |
|---|---:|
| Service line item | 89.00 |
| Service fee | 4.50 |
| Tax line, described as 8% | 18.00 |
| **Sum of stated line items** | **111.50** |
| **Displayed total** | **198.00** |
| **Unexplained difference** | **+86.50** (+77.6%) |

### 4.2 Baseline B — the stated *rate*

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

### 4.3 Corroboration from other sessions

- S1 R08 (Sean) and S3 P08 record a total of **$100.98** for the $89 service — within **$0.36** of Baseline B.
- S3 P08 explicitly notes the confusion of "total $100.98" alongside "harga servis $89."

**Interpretation:** for the $89 service, the correctly-computed total is ≈ $100.6–101.0, and $100.98 appears repeatedly. The $198.00 figure exceeds even the inconsistent line-item sum by 77.6%. This is the signature of the fixed-checkout-total defect class previously recorded in `evaluation/profix-usability-heuristics-evaluation.md` as **C-1** ("checkout always $55 + $4.50 + $4.76"). It is presented in the manuscript as a *candidate defect requiring reproduction*, not as a confirmed bug, because:

1. The figures reach us through observer transcription, not a build inspection.
2. S1 R06 (Flo) reports a second, smaller discrepancy: 60.00 + 4.50 + 5.56 = 70.06 against a stated total of 75.06 (delta exactly +5.00), which may be a transcription slip.
3. No build identifier is available (C-3).

**Required action before submission:** open the tested build, add an $89 service to the cart, and record the rendered total. If it renders $198.00, this becomes a confirmed Critical finding.

**Reporting rule:** manuscripts must state the baseline explicitly. Citing "96%" without naming Baseline B, or "$86.50" without naming Baseline A, is ambiguous — and mixing the two within one table (as an earlier draft of this integration did) produces an arithmetic contradiction, since 198.00 − 100.62 = 97.38, not 86.50.

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

The following are also prohibited:

- Any SUS score (only one questionnaire was issued; no responses recorded — C-6).
- Any conversion, bounce-rate, cognitive-load, or trust claim. No such variable was measured.
- Any claim that the tested build equals the current build (C-3).
- Any statement that the sample is representative of Indonesian Gen Z (C-4).
- Any direct quotation. S1 contains observer paraphrase only; verbatim transcript files are absent from the repository.

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