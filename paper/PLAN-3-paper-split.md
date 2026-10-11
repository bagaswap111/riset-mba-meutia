# Publication Plan — Three Papers from One Study

> **Status: active plan.** Created 2026-10-11. Supersedes the two-paper split recorded in
> [`conference-paper.md`](conference-paper.md).
>
> One study — ten participants, eighty task attempts, one prototype — is now planned as three
> distinct outputs: **two conference papers (4 pp each)** and **one Scopus Q2 journal paper
> (~8,000 words)**, targeting the *Journal of Organizational Computing and Electronic Commerce*.

---

## 1. Why the split changed

The original two-paper split failed for two independent reasons.

**Genre collision.** `paper-1-usability-evaluation.md` carried two incompatible claims in one
manuscript: a *methodological* claim (aggregate task success conceals per-task structure) and an
*applied design* claim (a six-theme barrier taxonomy and remediation backlog). Each is a paper;
together they were neither.

**A failed reproduction.** `paper-2-price-integrity.md` rested on a headline finding — a displayed
total of $198.00 whose stated line items sum to $111.50. That finding does not survive inspection of
the prototype source. See §3. It has to be withdrawn, which leaves the paper needing a different
centre of gravity.

The two conference papers are therefore re-cut along genre, and the journal paper takes the applied
design material, reframed for a management-facing venue.

---

## 2. The three outputs

| | File | Claim | Budget | Venue |
|---|---|---|---|---|
| **C1** | `paper-1-dispersion-ceiling.md` | Aggregate task success hides the signal; report per-task dispersion | ~3,400 w / 4 pp | HCI methods track (NUSKA / IC-ISIE / ICONF) |
| **C2** | `paper-2-price-integrity.md` | Price-integrity auditing, and what a failed reproduction teaches | ~3,600 w / 4 pp | HCI methods / software quality (IC-ISIE) |
| **J1** | `paper-3-jocec-barrier-taxonomy.md` | Interface friction as a constraint on market participation for MSME service firms | ~8,000 w | **JOCEC** (T&F), Q2, no APC |

### 1.1 Authorship

Transcribed from [`writer.md`](writer.md) and the study contribution record. Degrees and NIP supplied by
the research team; affiliations are as recorded there.

| Paper | Authors | Schools |
|---|---|---|
| **C1** | Meutia Braniwati, S.Ds., M.Sn. (first) · Bagaskoro Saputro, S.Si., M.Cs. · Aditya Paramananda, S.Kom., M.Kom. · Freysia Chandra Saliman · Stephanie Evangelina Pramudito · Tan, Michael Wilson Setiawan | Design (Visual Comm. Design) ×2 · Computer Science ×2 · Information Systems ×2 |
| **C2** | Bagaskoro Saputro, S.Si., M.Cs. (first) · Yashella Tirana · Freysia Chandra Saliman · Laurentius Ryan Dofani Pradita · Gregory Adrianus Sugiono · Gregorius Andrew Rahardja · Steven Karunia, Liem · Joshua Joyson Kustiadi | Computer Science ×6 · Digital Business ×1 |
| **J1** | Bagaskoro Saputro, S.Si., M.Cs. (first) · Yashella Tirana · Freysia Chandra Saliman · Laurentius Ryan Dofani Pradita · Gregory Adrianus Sugiono · Gregorius Andrew Rahardja · Steven Karunia, Liem · Joshua Joyson Kustiadi | Computer Science ×6 · Digital Business ×1 |

**Study facts confirmed:** collection **1–30 October 2026** in **Semarang, Central Java** · recording
**10 of 10** consented, screen and audio, stored in BINUS OneDrive plus a local copy, deletion
**1 January 2027**, **no encryption, no backup** · NIP Meutia Braniwati **D7003**, Bagaskoro Saputro
**6869233** · academic degrees are **omitted from the manuscript bylines** per house style, but are
retained in the ethics forms.

**Seven-person research team:** Meutia Braniwati (chair, visual branding) · Bagaskoro Saputro (usability
evaluation) · Aditya Paramananda (prototype) · Freysia Chandra Saliman (usability evaluation,
administration) · Stephanie Evangelina Pramudito (administration, visual design) · Tan, Michael Wilson
Setiawan (prototype, documentation) · **Yashella Tirana (usability-test analysis and heuristic
evaluation)**. Recorded in
[`ethics-request/02-formulir-kaji-etik.md`](ethics-request/02-formulir-kaji-etik.md) §A.

**Unresolved, blocking submission:**

1. **J1's byline is three of the seven researchers.** Yashella Tirana's analytical contribution satisfies
   COPE authorship; the other four team members — Meutia Braniwati, Aditya Paramananda, Stephanie
   Evangelina Pramudito, Tan, Michael Wilson Setiawan — collected data but are not on the byline. Decide
   whether they belong in the Acknowledgements.
2. **NIP for five team members is unknown.** Corresponding authors are now designated in all three papers.
3. **Date coherence:** the packet is dated 1 October 2026, the same day collection begins, while it
   states collection is complete. Consistent only if collection actually concluded on 1 October.

### 2.1 Journal target

**Journal of Organizational Computing and Electronic Commerce** — Taylor & Francis, `hoce20`.

| Property | Value |
|---|---|
| Quartile | **Q2** — Information Systems; Computational Theory & Mathematics (CS Applications Q3) |
| Metrics | CiteScore 3.3 · SJR 0.419 · h-index 56 · ABDC A |
| APC | **$0** on the subscription route. Hybrid (Open Select); do not select gold OA at submission |
| Review | Double-anonymized, 2–4 referees, initial suitability screening |
| Language | English only |

**Scope caveat — load-bearing.** JOCEC's aims page states: *"Its focus is not on computing as it
relates to individuals."* A straightforward usability report will be desk-rejected. J1 is viable only
because the journal also lists **e-commerce**, *the many facets of electronic business*, and
**behavioral aspects of organizational computing**, and currently publishes behavioural e-commerce
work (delivery platforms, e-commerce returns). J1 must therefore be framed at the level of the
**MSME service firm and its platform-mediated transaction**, not the individual participant.

**Alternative if desk-rejected:** Journal of Systems and Information Technology (Emerald), Q2
CiteScore 4.4, same $0 subscription route, applied-IS scope.

### 2.2 JOCEC's no-APC route

Confirmed from the publisher: *"If you choose not to publish open access in this journal, there is no
APC."* Emerald states the same for all titles. IGI Global was eliminated — it converted to full Gold
OA in 2021 at **USD 4,500**. Open-access-only titles (*Advances in HCI*, i-com, Frontiers) were
eliminated on the same basis.

*Open question for BINUS:* whether the university holds a T&F Read & Publish agreement. If so, even
the OA route is free and the constraint is moot. Check with the library before submission.

---

## 3. The reproduction finding (drives C2)

Static inspection of both prototype builds in the repository. No dev server was run; this is source
reading, and C2 states that limitation explicitly.

| Reported figure | Source | Status under the code |
|---|---|---|
| $89.00 line item | `src/data/services.ts:112` (`basePrice: 89`) | **Confirmed** |
| $100.98 total | sessions R08, SEQ-P08 | **Confirmed exactly.** `tax = (89 + 4.50) × 0.08 = 7.48`; `total = 89 + 4.50 + 7.48 = 100.98` |
| $198.00 total | sessions R05, R07 | **Not reproducible.** Absent from both builds and all git history. Both builds derive totals purely. |
| $18.00 tax, "8%" | session R05 | **Impossible.** Implies a tax base of $225.00, i.e. a $220.50 line item; the catalogue holds only 55, 65, 75, 89, 120, 150 |
| — | new finding | **Real defect.** The older build renders the label `Tax (8%)` (`CheckoutScreen.tsx:394`) while computing tax on `price + fee` — the stated base is ambiguous |
| USD, no IDR | `src/data/pricing.ts:5–9` comment | **Confirmed.** "Partner-confirmed IDR pricing has not been supplied" |

**Consequence.** The `Tax (8%)` label is the genuine defect. The `$198.00` finding fails the
decision rule the old Appendix A itself specified and must be **withdrawn**.

**Why this is an upgrade, not a downgrade.** C2 becomes a paper that ran a reproduction and reported
what it found — including a null result and two sessions that transcription misread. That is a more
defensible methodological contribution than an unreplicated Critical bug, and it exercises the
paper's own audit procedure on the paper's own evidence.

---

## 4. Section migration

### 4.1 C1 — dispersion and ceiling

Source: `paper-1-usability-evaluation.md` (archived).

Carries over: §1.1 (trimmed) · §1.2 RQ1–RQ2 · §1.3 SEQ paragraph · §2.1–§2.4 · **§3.1, §3.2, §3.3** ·
**§4.4** · threats T-1, T-2, T-3, T-5, T-6 · Appendix A (SEQ instrument) · Appendix B (SEQ matrix —
C1 owns this).

New content required to reach 4 pp:
- A measurement-granularity argument: why aggregation is the reporting default and what it destroys.
- T6/T7 defect probes reframed as the **saturation-immune device** (SD 1.27 / 0.95 against four
  saturated tasks).
- A saturation-threshold count: how many ceiling tasks before a task set stops informing.

### 4.2 C2 — price-integrity auditing

Source: `paper-2-price-integrity.md` (rewritten in place).

Carries over: the §1.2 gap argument · §3.4 division of labour (C2 **owns** the eight-defect
triangulation) · §4.2 invariant · §4.3 six-step procedure · §4.4 / §4.5 "not a special case of"
arguments · Appendix A reproduction procedure, now **executed**.

Rewritten: §2.3 provenance → **§2 static reproduction method** · §3.1/§3.2 arithmetic → §3
**reproduction results with status table** · §3.3 all-price-observations table, annotated
confirmed/unreproducible.

New: grounding the invariant in metamorphic testing and property-based testing. The paper's own claim
— that inspection analyses controls while the defect lives in the *relation between* them — is
precisely what a metamorphic relation encodes. This is the missing theoretical spine.

### 4.3 J1 — friction typology

Source: `paper-1-usability-evaluation.md` (archived).

Carries over: §1.1 · §1.3 (Indonesian MSME + cognitive rationale) · §1.4 · §2.1–§2.4 ·
**§3.4, §3.6** · **§4.1, §4.2, §4.3** · §5 (rewritten) · six themes figure.

Rewritten at the organisational level. Five friction classes, each tied to an IS/HCI construct:

| Class | Construct | Evidence from the study |
|---|---|---|
| Service-concept ambiguity | IR / faceted search quality | T1/T2 matched pair; near-synonymous labels |
| Infrastructure asymmetry | Platform affordance theory | No geocoding, saved address, order history |
| Representational inconsistency | Organisational computing; information consistency | USD on Indonesian site; redundant conflicting surfaces |
| Transaction-state fragility | Process-support systems | Form state lost on Back/reload |
| Support-channel occlusion | Affordance labelling | T8 — lowest mean, widest dispersion |

New content required:
- **Propositions P1–P5** with boundary conditions. The single largest lever between a case report and
  a Q2 contribution.
- Standalone Related Work, **40–60 refs**: digitalisation of Indonesian MSMEs, e-commerce platform
  adoption in emerging markets, technology–organisation fit, digital service innovation. The existing
  reference base is design-principle-heavy and will not carry this paper.
- Implications for MSME service firms and platform designers.
- Backlog recast as an **evidence-linked matrix** — severity × frequency × corroborating source,
  traced to propositions.

**Preserve:** the scheduling finding. A respondent accepted seeing the date twice *provided the two
instances agree*. The defect is **disagreement between two date pickers**, so the fix is a single
source of truth, not removing one picker. This is the sharpest analytic detail in the material and a
reviewer who misses it would prescribe the wrong remediation.

---

## 5. Cross-cutting rules

### 5.1 Ownership of shared material

| Material | Owner | Others |
|---|---|---|
| SEQ matrix (Appendix B) | C1 | C2, J1 report only the values they cite |
| Eight-defect triangulation | C2 | J1 uses a condensed five-row version, cross-referenced |
| Per-task dispersion figures | C1 | J1 *uses* dispersion to select which barriers are real |
| Six-theme taxonomy, backlog | J1 | C1 refers to findings; C2 excludes the arithmetic themes |

C1 owns the **measurement** argument. J1 owns the **design** argument. Different claims, one dataset,
disclosed in each paper.

### 5.2 Shared-dataset disclosure

Each paper carries a paragraph naming the other two and listing what is unique to it. ACM and IEEE
both require this where one dataset supports several submissions.

### 5.3 Cross-reference scheme

Replace `[Br18]` with `[C1]` / `[C2]` / `[J1]` throughout.

### 5.4 References

- Remove the "Removed from the numbered list" table from all three submission files. It lives in
  [`reference-audit.md`](reference-audit.md) and is editorial scaffolding, costing roughly a page.
- Renumber to contiguous `[1]..[n]` per paper. Retain an old→new mapping in `reference-audit.md`.
- **New:** J1 requires an IS/MSME literature base built from scratch.

### 5.5 Figures

| Figure | Paper | Status |
|---|---|---|
| `p1-fig1-task-sequence` | C1 | Rename `c1-fig1` |
| `p1-fig2-seq-ceiling` | C1 | Rename `c1-fig2` |
| `p2-fig1-price-arithmetic` | C2 | **Rebuild** — drawn on the withdrawn $198 story |
| `p2-fig2-triangulation` | C2 | Rename `c2-fig2` |
| `p1-fig3-theme-frequency` | J1 | Rename `j1-fig1` |
| *new* — reproduction status | C2 | Build |
| *new* — backlog matrix | J1 | Build |

### 5.6 Traceability

`ut-results-integration.md` gains a per-paper figure-ownership table so every number traces to
exactly one primary home.

---

## 6. Blocking items before submission

| # | Blocker | Affects | Status |
|---|---|---|---|
| 1 | Ethics clearance — file the approval, capture reference/date/body, cite in all three papers | All | **User holds the evidence; needs filing.** Closes T-4 |
| 2 | ~~Demographics unrecoverable~~ **RESOLVED** — ages verified via KTP as Gen Z 19–21; no DOB stored. Papers state "Gen Z users aged 19–21"; gender/occupation not collected | All | **Done 2026** |
| 3 | Refs [6], [7] DOIs marked `[PARTIAL]` — verify by hand | All | Outstanding |
| 4 | Corresponding-author designation and institutional email | All | Outstanding — not in `writer.md` |
| 5 | **Four C2 authors have no affiliation; three names possibly truncated** | C2 | Outstanding |
| 6 | **J1 author list does not overlap the data-collection team — authorship vs. acknowledgement** | J1 | Outstanding |
| 7 | No build identifier — `git log --follow` on `src/data/pricing.ts` to date the tested window and partly close T-2 | All | Outstanding |
| 8 | BINUS T&F Read & Publish agreement check | J1 | Outstanding |
| 9 | J1 IS literature base (refs [3]–[6] are placeholders) | J1 | **Largest single weakness in the set** |
| 10 | No LaTeX toolchain on this machine — `.tex` cannot be compiled to PDF here | C1 | Install MiKTeX/TinyTeX or compile elsewhere |
| 11 | Missing PDFs for `p2-fig1` and `p2-fig2` | C2 | Outstanding |
| 12 | `draft-paper.md` — Indonesian manuscript, same study. Left untouched as the Bahasa Indonesia record; it is **not** a fourth submission | — | Decision: no re-split |

---

## 7. Execution order

1. `paper-1-dispersion-ceiling.md` (C1) — leads, because J1's use of dispersion depends on its framing
2. `paper-2-price-integrity.md` (C2) — rewrite in place
3. `paper-3-jocec-barrier-taxonomy.md` (J1) — depends on both
4. Figures, `.tex` build, `reference-audit.md`, `ut-results-integration.md`
5. Archive the superseded manuscript; update `conference-paper.md` status header

---

## 8. Barred figures

Carried forward unchanged from [`ut-results-integration.md`](ut-results-integration.md): **87.5%,
4.20/5, 84.6%, 4.23/5** were never derivable from any source and remain permanently barred from all
three papers.

Additionally barred as of this plan: **$198.00** as a *confirmed* displayed total. It may appear in
C2 only as an unreproducible observation that the paper explicitly withdraws.
