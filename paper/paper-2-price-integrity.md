# When the Total Does Not Add Up: Price-Integrity Auditing as a Complement to Usability Evaluation and Heuristic Inspection

**Meutia Braniwati, S.Ds., M.Sn.**
BINUS University — *[verify affiliation and postal address before submission]*

**Corresponding author:** *[insert institutional email]**

> **Structure:** IMRaD — §1 Introduction, §2 Methods, §3 Results, §4 Discussion, §5 Conclusion.
> Related work is folded into §1.3; the audit proposal and threats to validity into §4.
> Traceability: [`ut-results-integration.md`](ut-results-integration.md). Companion paper: [`paper-1-usability-evaluation.md`](paper-1-usability-evaluation.md).

---

## ABSTRACT

We report a defect class that both standard HCI evaluation methods are structurally unable to detect, and we propose a check for it. During a formative usability evaluation of an Indonesian home-services marketplace prototype, two independent test sessions recorded the same figures for one service: a line item of $89.00, a $4.50 service fee, an $18.00 tax line described as 8%, and a displayed total of $198.00. The line items sum to $111.50, leaving $86.50 unexplained. They are also internally inconsistent, since 8% of $89.00 is $7.12. Correctly computed, the total would be ≈$100.62 — and two further sessions independently reported $100.98.

We show that this defect is invisible to both available methods. Code inspection cannot find it because `$` and `198` each render exactly as written; the fault lies in the relation between rendered values, which inspection has no model of. Ease measurement cannot find it because a participant who reaches confirmation *succeeds*, however wrong the number is: our own headline success rate of 93.75% coexisted with this finding. Of eight defects in the prototype, these were the only two that code inspection missed entirely.

We propose price-integrity auditing as a distinct, automatable check — an invariant asserting that every displayed total reconciles with its own line items — and argue that trust-sensitive transactional interfaces must be evaluated on ease and integrity separately.

**Keywords:** price transparency, integrity, heuristic evaluation, formative evaluation, interface trust, auditing, HCI methods

---

## 1. INTRODUCTION

### 1.1 Background and motivation

Household maintenance services in Indonesia are dominated by micro and small enterprises that promote through spanduk (street banners), printed leaflets, and vehicle stickers [15]. Two structural properties of that channel matter here: it is spatially bounded, and it does not display price. The second property is the more consequential. A price negotiated privately is not merely inconvenient; it is **unverifiable in advance**. The customer cannot compare, cannot budget, and cannot detect overcharging, because there is nothing to check the quotation against.

Web interfaces remove the spatial bound. They do not, on their own, remove the unverifiability. And here lies the trap that motivates this paper: **displaying a price and honouring that price are different properties.** A marketplace can display a complete, itemised, professionally typeset price breakdown and still be untrustworthy, if the total does not follow from the items.

The Indonesian e-commerce literature treats interface quality and information presentation as determinants of consumer response [5,7], and MSME digital-marketing work attributes attraction and conversion to how clearly a firm's offering is presented [7,15]. None of these lines of work, as far as we can determine, treats *arithmetic self-consistency of a displayed total* as an object of study. We argue that transparency is a property of **information consistency**, not merely of information presence, and that the distinction is operationally testable.

### 1.2 The gap

Two standard methods are available to a practitioner evaluating a transactional interface:

- **Heuristic inspection** [17], applied to code. It is cheap, fast, and well suited to detecting mismatch *between screens* — a home-page price that disagrees with the catalogue, for example.
- **Usability testing** [16], applied to participants. It is the standard way to learn whether people can complete a transaction.

Neither method has any mechanism for asking a third question: **does the transaction's arithmetic hold?**

Inspection cannot, because the defect is not a coding error. `$` renders correctly. `198` renders correctly. Both are integers formatted as currency by code that does what it was written to do. The fault exists only in the relation between values, and inspection has no model of what that relation ought to be.

Testing cannot, because task completion and correctness are orthogonal. A participant who submits a form and reaches a confirmation screen has *succeeded*, by every conventional definition available to us. **In our own study, a headline success rate of 93.75% coexisted with this defect.** Not one of the five task failures was caused by it.

### 1.3 Related work

**Transparency and trust in service marketplaces.** The Indonesian e-commerce literature links interface quality and information presentation to consumer response [5,7], and MSME work attributes attraction and conversion to how legibly a firm's offer is presented [7,15]. We treat our position as a refinement rather than a disagreement with that literature: transparency is usually operationalised as *how much information is available*, and we argue the operative question is whether the available information is *mutually consistent*. *(An earlier draft attributed the transparency–trust premise to specific sources that could not be verified; that attribution has been withdrawn. See "Removed from the numbered list" below and [reference-audit.md](reference-audit.md).)*

**Heuristic inspection and its object of study.** Nielsen's heuristics [17] remain an efficient categorical inspection frame, applied in Indonesia to government [13] and organisational [14] websites. Heuristic evaluation is explicitly an inspection of the artefact against a model of intended use. Our finding is that the most common cost of this method is not that it is imprecise, but that **its unit of analysis is the control**; what escapes is the relation *between* controls.

**Formative evaluation instruments.** Single Ease Question (SEQ) [16] yields one comparable ordinal score per task attempt. The companion paper [Br18] reports the study's full usability results and shows that SEQ, aggregated, conceals both a ceiling effect and this defect. Here we note only its specific blind spot: SEQ asks *how easy was this*, and a coherent journey through incoherent arithmetic is, by that measure, easy.

**Displayed price and arithmetic in e-commerce.** Task-based evaluation of e-commerce interfaces is well established in the Indonesian literature [5]. We are not aware of published work treating *arithmetic self-consistency of a displayed total* as a distinct object of HCI evaluation. We treat the absence as the gap this paper fills, and acknowledge it may reflect the field's framing of trust as a perception problem rather than an arithmetic one.

### 1.4 Research questions

- **RQ1.** Can a displayed total be shown to be inconsistent with its own line items, using only observations recorded during usability testing?
- **RQ2.** Which available evaluation methods detect this defect class, and which do not?
- **RQ3.** What check would detect it systematically, and can that check be automated?

### 1.5 Contributions

1. A documented instance of a price-integrity defect detected through user testing, with reproducible arithmetic and independent corroboration across sessions.
2. An empirical account of the division of labour between code inspection and usability testing over eight defects — including the two that *only* testing found.
3. **A price-integrity audit procedure**, framed as a distinct check, with a machine-checkable invariant as its core.

## 2. METHODS

### 2.1 Setting

The stimulus is a high-fidelity React prototype, localised into Indonesian, for on-demand household maintenance. Ten participants completed eight standardised tasks across two moderated rounds (80 task attempts), with per-attempt Single Ease Question scores and observer commentary. Full study method, including the completion-rate coding dispute and all validity threats, is reported in the companion paper [Br18]; we summarise only what bears on this paper.

### 2.2 How the anomaly surfaced

The finding did not emerge from a targeted audit. Participants were completing T3, *read the detailed price breakdown*, and volunteered comments in the ordinary course of think-aloud. Two sessions (R05, R07) independently transcribed **identical figures for the same service**: $89.00 line item, $4.50 service fee, an $18.00 tax line described as 8%, and a displayed total of $198.00.

Because the same figures appeared twice, independently, the transcription was treated as reliable enough to analyse arithmetically. That decision is itself a methodological claim, examined in §4.7.

### 2.3 Provenance constraints

Three constraints bound every claim below, and we state them before presenting results rather than in a limitations section afterward:

1. **The figures are observer transcription, not build inspection.** Recording files are absent from the repository.
2. **No build identifier exists.** No session record carries a build hash, a date, or a moderator.
3. **The narrative and quantitative corpora have partially disjoint participant rosters.** Counts are reported with explicit denominators and never pooled.

Because of (1) and (2), the finding is presented as a **candidate defect requiring reproduction**, not a confirmed bug. §4.2 specifies the reproduction procedure.

## 3. RESULTS

### 3.1 The arithmetic

![Price arithmetic](figures/p2-fig1-price-arithmetic.svg)

**Figure 1.** Four totals for the same service. The displayed total exceeds the sum of its own stated line items by $86.50.

**Baseline A — the line items as stated.** The participants transcribed a service line item of $89.00, a service fee of $4.50, and a tax line of $18.00 described as 8%.

| Component (as reported) | Value |
|---|---:|
| Service line item | 89.00 |
| Service fee | 4.50 |
| Tax line, described as 8% | 18.00 |
| **Sum of the stated line items** | **111.50** |
| **Displayed total** | **198.00** |
| **Unexplained difference** | **+86.50** (+77.6%) |

The displayed total exceeds the sum of its own line items by $86.50, and stands 122.5% above the line item itself. **This conclusion requires no assumption about tax rates, fee policy, or pricing logic.** It uses only the numbers the interface displayed beside one another, and observes that one does not follow from the others.

**Baseline B — the stated rate.** The line items are themselves inconsistent. A tax described as 8% of an $89.00 line item is $7.12, not the $18.00 shown; conversely, $18.00 on $89.00 implies a rate of 20.2%. Computed at the stated rate, the total should be ≈$100.62.

| Component | Value |
|---|---:|
| Service line item | 89.00 |
| Service fee | 4.50 |
| Tax @ 8% | 7.12 |
| **Correctly-computed total** | **100.62** |
| **Displayed total** | **198.00** |
| **Difference** | **+97.38** (+96.8%) |

**Either the rate label or the amount is wrong. Neither reading produces $198.00.**

*Reporting note.* Both baselines must be named when citing a percentage. Quoting "96%" without saying it is measured against the stated *rate*, or "$86.50" without saying it is measured against the stated *items*, is ambiguous — and mixing them within one table produces an arithmetic contradiction, since 198.00 − 100.62 = 97.38, not 86.50.

### 3.2 Independent corroboration

Two further sessions, again independently, reported a total of **$100.98** for the $89 service — within **$0.36** of the correctly-computed prediction. A third participant explicitly reported being confused by encountering "$100.98" alongside "harga servis $89" (*total $100.98* alongside *service price $89*).

The pattern is internally consistent. For the $89 service, the correctly-computed total is ≈$100.6–101.0, and $100.98 appears repeatedly. The $198.00 figure exceeds even the inconsistent line-item sum by 77.6% and the correctly-computed total by 96.8%. It does not follow from that service's arithmetic under any combination of the stated fee and tax lines, and is consistent with a total belonging to a different service.

### 3.3 Every price observation in the study

Because a single anomalous figure invites over-reading, we tabulate **all** monetary observations recorded during the study, with the uplift each participant's own figures imply. This permits the reader to judge the anomaly against the baseline rather than taking our word for it.

| Session | Service line item | Fee | Tax as stated | Stated total | Uplift on line item | Reconciles? |
|---|---:|---:|---:|---:|---:|---|
| R05 | 89.00 | 4.50 | 18.00 (8%) | **198.00** | **+122.5%** | **No — $86.50 unexplained** |
| R07 | 89.00 | — | — | **198.00** | **+122.5%** | **No — same figures as R05** |
| R03 | 150.00 | not given | not given | 166.86 | +11.2% | Consistent with fee + tax |
| R08 | not given | — | — | 100.98 | — | Consistent with $89 base |
| SEQ-P08 | 89.00 | — | — | 100.98 | +13.5% | **Yes — within $0.36 of correct** |
| R06 | 60.00 | 4.50 | 5.56 | 75.06 | +25.1% | **No — $5.00 unexplained** |
| SEQ-P1 | — | — | — | — | — | Reported currency as *rupiah* |

Two patterns emerge.

**(a) The uplift is otherwise ordinary.** Across the remaining observations the uplift ranges from +11.2% to +25.1% — plausible magnitudes for a service fee plus tax. Only the $89 service at +122.5% is anomalous. The defect is therefore not a systematic pricing-policy disagreement between the prototype and its users; it is specific to at least one total.

**(b) The two anomalies are not the same anomaly.** The $198.00 figure appears twice and is large. The $75.06 figure appears once and is exactly $5.00 out — a suspiciously round delta, more consistent with a transcription slip than with a pricing rule. We therefore **exclude it from the corroboration chain** and use it instead as a caution: not every numeric inconsistency in a transcript is a defect, and the discipline required to tell them apart is precisely why the invariant of §4.2 is preferable to manual reading.

### 3.4 Division of labour between the two methods

The prototype received an independent code-based heuristic inspection producing 0 Critical, 2 Major, and 4 Minor findings. Comparing against user-observed barriers:

![Triangulation of code audit and user testing](figures/p2-fig2-triangulation.svg)

**Figure 2.** Code inspection and user testing over eight defects. Five converge; one was not testable; two — the most severe in the study — were found only by testing.

| Finding | Code audit | User testing | Verdict |
|---|:---:|:---:|---|
| Home-page price differs from catalogue/detail | flagged | reported | Convergent |
| No visible keyboard focus indicator | flagged | not testable | Outside this method |
| Header/footer section links fragile | flagged | reported | Convergent |
| Stepper icons contradict their labels | flagged | reported | Convergent |
| No re-order path after booking | flagged | reported | Convergent |
| Postal code silently truncated | flagged | reported | Partly convergent |
| **USD currency on a localised site** | *missed* | reported | **Testing only** |
| **Total ≠ sum of its own line items** | *missed* | reported | **Testing only** |

Two conclusions follow.

**(a) Inspection was substantially predictive.** Five of six flagged defects were independently rediscovered by participants without prompting. For a practitioner deciding where to spend limited evaluation budget, this is a strong result for heuristic inspection as a cheap pre-test filter.

**(b) The two most severe defects were invisible to inspection — and they share a structure.** Neither is a fault *in* a control. `$` is correctly formatted; `198` is correctly formatted. Both defects are in the *relation between* what the code renders and what a user would expect, and neither is expressible as a property of any single component.

We note a caveat rather than a conclusion: because the audit records the other defects as *repaired* while the tested sessions reported all of them, and no build identifier exists, the tested build probably predates remediation. If so, inspection's misses might reflect an earlier state. We cannot determine this, and we therefore do not claim that current code inspection would also miss the price defect — only that it did.

## 4. DISCUSSION

### 4.1 Why this matters disproportionately here

This defect is not a cosmetic error in an ordinary interface. The transaction involves **sending an unfamiliar person into a private home**, and the customer is, by construction, someone with no prior relationship and no independent way to check the quote.

A user who notices an irreconcilable total has been given a reason to distrust *every other number on the screen* — permanently, at zero cost to whoever benefits from the error. The interface's own presentation of rigor is what makes the failure damaging: a total with two decimal places, a percentage tax rate, and a service-fee line communicates that the arithmetic has been done, which makes the arithmetic's failure especially hard to explain away as presentation.

### 4.2 A price-integrity audit: the core invariant

If the defect class is real, the useful question is not "how do I notice this next time" but "how do I make noticing unnecessary."

For every purchasable item *i*, assert at build time:

```
total(i) == price(i) + fee(i) + tax(i, price(i))
```

and, for every screen that displays a total, assert that the displayed total equals the computed total for the item currently in the cart. This is a pure function over the pricing module, requires no UI, and fails the build.

This single assertion would have caught the defect reported here — whichever of the two baselines was correct, the displayed value would not have matched. The complete reproduction procedure for the specific finding is given in Appendix A.

### 4.3 The audit procedure

For teams without a build pipeline capable of running such assertions:

1. **Enumerate every displayed monetary value.** Not just totals: unit prices, subtotals, tax lines, fees, discounts, deposits. The defect was visible in the *relation*, and relations are missed when values are checked individually.
2. **For each screen that shows more than one value, reconstruct each from the others.** Where a total cannot be derived, establish whether an unstated component exists; if it does, is it labelled?
3. **Check internal rate statements.** A displayed percentage must correspond to the displayed amount and base. Here, "8%" and "$18.00" on an $89.00 base are mutually contradictory.
4. **Cross-check screens.** The same service should not render differently on the home page, the catalogue, the detail page, and the invoice. A discrepancy across screens is a strong signal that a total has been hard-coded rather than derived.
5. **Test at cart boundaries.** Add, remove, and swap items; check whether the total responds. A total that fails to change when the cart changes cannot be correct.
6. **Exercise non-default paths.** Discounts, coupons, and multi-item carts are where derived totals most often fall back to defaults.

### 4.4 Why this is not a special case of usability testing

Usability testing found this defect — by accident, from unsolicited commentary on a different task. It did not *target* it, could not have quantified it without manual arithmetic on transcribed figures, and would not have found it at all had the participant not happened to read the figure aloud.

More importantly, the testing that found it simultaneously produced a 93.75% success rate. **The two results are not in tension**: participants completed the task and the arithmetic was wrong. Any interpretation of usability testing that treats its success rate as a proxy for transactional correctness is therefore unsound, and the field should say so explicitly.

### 4.5 Why this is not a special case of heuristic inspection

Inspection could in principle be *extended* to check arithmetic, but doing so requires importing a model of the transaction's pricing logic — which is domain knowledge the inspector does not otherwise have, and which changes the activity from inspection into testing. The honest framing is that price integrity requires its own check with its own artefacts.

### 4.6 Applying the procedure to this prototype

The procedure is not hypothetical; applied to the artefacts we can already see, it yields specific findings rather than general advice.

**Step 2 — reconstruct each total.** Applied to the checkout summary, it surfaces the finding of §3. Applied to the invoice, it surfaces a structural problem: the invoice presents a total, a service-fee line, a tax line, **two separate tracking status bars**, and a QR code of unexplained purpose. A page carrying two status indicators invites the same question we apply to two price indicators: *which one is authoritative?* The interface has the redundancy defect we flag in the companion paper, now applied to a currency-adjacent surface.

**Step 3 — check internal rate statements.** The checkout displays a tax line and a platform fee, and the recorded audit confirms these are computed from the selected service. On the evidence available, the tax *line* is derived correctly (which is what makes the $198.00 total more surprising, not less); what is not established is whether every displayed total derives from that line.

**Step 5 — test at cart boundaries.** This step is the one that would have caught the defect directly. The prior code audit recorded an earlier, structurally identical fault — a checkout total that was fixed rather than derived from the selected service. The present finding is consistent with a recurrence of that class. Any total that does not respond to a change of cart contents cannot be correct, and this requires no domain knowledge at all: add an item, watch the number.

**Step 6 — non-default paths.** The prototype permits additional booking instructions and multiple-service orders. These are the paths most likely to bypass derivation, and none of them was exercised by the price audit.

The general observation: **the cheapest and most decisive step in the whole procedure requires no arithmetic expertise at all.** Change the cart, watch the total. Our finding is recorded second-hand precisely because nobody appears to have performed that step.

### 4.7 Threats to validity

**T-1 — The figures are second-hand. [Severe]** The arithmetic rests on observer transcription, not build inspection. Two independent sessions reporting identical figures is suggestive but not conclusive. **Consequence:** the finding is a candidate defect. Reproduction is a single afternoon's work and should precede citation.

**T-2 — No build identifier. [Severe]** No session record carries a build hash, date, or moderator. We cannot confirm which build was tested, and §3.4's inference about inspection's coverage is correspondingly weak.

**T-3 — Participant rosters do not agree. [Moderate]** The narrative and SEQ corpora have partially disjoint rosters. The corroborating $100.98 observations come from different corpora than the $198.00 observations; we treat them as independent because they are separately recorded, but a single reconciled roster could weaken that.

**T-4 — One corroborating observation is self-contradicting. [Moderate]** The $75.06 figure (§3.3) is plausibly a transcription error. We exclude it from the corroboration chain, which leaves the $198.00 anomaly supported by two sessions and the $100.98 by two others, with no third source.

**T-5 — Build defect not isolated to checkout. [Moderate]** We cannot determine whether the anomalous total is a stale hard-coded value, a currency-conversion error, or a cart-state bug. The remediation differs in each case. §4.2's invariant catches all three, which is a further argument for the invariant over manual inspection.

**T-6 — Single study, single domain. [Moderate]** n = 10, one prototype, one category. We claim a defect class and a procedure, not a prevalence rate.

**T-7 — Ethics and consent unevidenced. [Severe]** The protocol required approved consent and institutional clearance before recruitment; no approval reference appears in any source report. Recording evidently occurred, with no retention or deletion record. **This must be closed before publication of the underlying data.**

**T-8 — References partly unverified. [Low]** See the note below.

## 5. CONCLUSION

A marketplace whose stated purpose is transparent pricing displayed a total of $198.00 whose own line items sum to $111.50. The gap is $86.50. Separately, those line items are themselves contradictory: a tax line of $18.00 on an $89.00 base cannot be an 8% tax. Two other sessions reported $100.98 for the same service, within $0.36 of what the arithmetic requires.

The methodological finding is the durable part. **Both standard evaluation methods were blind to this, and blind for principled reasons.** Code inspection analyses controls; the defect is in the relation between them, and each value is individually correct. Usability testing analyses journeys; participants reached confirmation, so by its own definition they succeeded. Our own 93.75% success rate is the clearest evidence that this is not a gap in our execution but a gap in the instruments.

We therefore propose a third check. Price-integrity auditing is a one-line build invariant plus a short manual procedure, and for interfaces where money is displayed, it is not optional. We also propose a change of vocabulary: the field should stop treating *transparency* as a property of information presence and begin treating it as a property of information **consistency**. An interface can be information-dense and still be untrustworthy if the figures it presents do not reconcile — and no measure of ease, however carefully collected, will reveal it.

The immediate action for this prototype is to reproduce the finding, then to keep it from recurring.

---

## REFERENCES

> **Reference verification notice — read before submitting.** Every reference below was checked on 2026-10-10 against `doi.org`, the Crossref API, the DataCite API, and the publisher's own article page. Method and full evidence are in [`reference-audit.md`](reference-audit.md).
>
> - **Verified:** the DOI resolves and the metadata matches the citation.
> - **Corrected:** the citation was real but the DOI (or a title/page detail) was wrong; the corrected value was taken from the publisher, not inferred.
> - **[PARTIAL]:** the article is confirmed to exist, but volume, issue, pages or DOI could not be verified automatically. **Must be checked by hand.**
> - Bracketed numbers are **stable identifiers**, deliberately not renumbered after deletions.
> - **Four sources cited in the earlier proposal could not be verified at all** and have been removed from the numbered list and from the body text. They are listed separately at the end. **Claims that depended on them have been withdrawn.**

[5] Dinata PZ, Urwah MA, Rahmawan MR, Junaeti E. Perancangan UI/UX web e-commerce 'Hallo Coffee' menggunakan metode *user-centered design*. Jambura J Inform. 2023;5(1):45–58. doi:10.37905/jji.v5i1.17511 **← corrected from 10.34312/jji.v5i1.18923, which does not exist; verified at the publisher.**
[7] Sunarso B, Tusriyanto, Mustafa F. Analysing the role of visual content in increasing attraction and conversion in MSME digital marketing. J Contemp Adm Manag ADMAN. 2023;1(3):193–200. doi:10.61100/adman.v1i3.79 **← corrected from 10.34312/adman.v1i3.145, which does not exist. All other fields verified exact.**
[13] Perdanakusuma AR, Hanggara BT, Hasnanursanti AR. Analisis usability website resmi pemerintah kota *Surakarta* menggunakan metode heuristic evaluation. J TECNOSCIENZA. 2022;6(2):430–443. **[PARTIAL]** **← title qualifier restored; pages corrected from 429–43 to 430–443. Article confirmed real (published 2022-04-05). The DOI previously given (10.35595/tecnoscienza.v6i2.2341) does NOT exist — supply the correct DOI by hand.**
[14] Febriyanthi A. Interface design heuristic evaluation website yayasan kesehatan Telkom. Turk J Comput Math Educ TURCOMAT. 2021;12(4):852–859. **[PARTIAL]** **← article confirmed real (published 2021-04-11). The DOI previously given (10.17762/turcomat.v12i4.1234) does NOT exist; volume, issue, pages and the second author remain unverified (publisher returned HTTP 403). Verify by hand.**
[15] Tianti AM, Firmania BN, Prini, Fanani RCP, Putri SE, Adisusilo AK. Peningkatan promosi usaha UMKM melalui pembuatan website berbasis WordPress. PENITI BANGSA. 2024;2(2):01–8. doi:10.30742/PENITI-BANGSA.v2i22024.177 **← DOI corrected from 10.58721/penitibangsa.v2i2.177, which does not exist; pages corrected from 100–12 to 01–8.**
[16] Sauro J, Lewis JR. *Quantifying the user experience: Practical statistics for user research.* 2nd ed. Sebastopol, CA: Morgan Kaufmann; 2016. ✓ verified
[17] Nielsen J. Enhancing the explanatory power of usability heuristics. Proc ACM CHI'94. 1994:152–8. doi:10.1145/191666.191729 ✓ verified — Crossref confirms all fields exactly.
[18] Braniwati M. Formative usability evaluation of an Indonesian home-services marketplace prototype. **Companion paper, same study.** 2026. (Reverse citation.)

### Removed from the numbered list — could not be verified

| Former # | Citation as it appeared | Problem |
|---|---|---|
| 1 | Darmawan A, Prasetyo Y, Hartono S. Digital transformation of micro-enterprises in Indonesia… *J Bus Innov Manag.* 2023;7(2):112–28. | Journal and issue real; **no article by these authors with this title found.** DOI does not exist. |
| 2 | Wijaya GE, Kuswoyo C. Pengaruh transparansi informasi dan desain antarmuka terhadap kepercayaan konsumen layanan jasa rumah tangga. *J Inspirasi Bisnis Dan Manaj.* 2024;8(1):45–60. | Authors and journal real, but **no article matching this title exists.** Their only paper there is a different study (2022;6(1):115–126, doi:10.33603/jibm.v6i1.6468). The journal's real DOI prefix is `10.33603`, not `10.35595`. |
| 6 | Resti AA, Suharyati S, Rahmi M. Efforts to develop micro, small, and medium enterprises through education on branding, design, and financial statements. *Community Empower.* 2023;8(10):1480–6. | No match. DOI does not exist. |
| 12 | Hart J, Kapp K. The aesthetic-usability effect in service design. *J Des Res Pract.* 2021;5(3):210–24. | **No trace anywhere.** Not cited in this paper. |

---

## APPENDIX A — Reproduction procedure

The finding in §3 is a candidate defect. To confirm or refute it:

1. Identify the build tested during the sessions. If no build identifier was recorded (§2.3), the audit record's remediation timestamps are the only available proxy — note that this is inference, not identification.
2. Open the prototype and add the service whose line item was $89.00 to the cart.
3. Record the rendered subtotal, service-fee line, tax line, and total, exactly as displayed.
4. Compute `price + fee + tax` and compare with the displayed total.
5. If the displayed total is $198.00, the finding is confirmed and should be reclassified **Critical**. If it is ≈$100.62, the sessions' transcription is at fault and the finding should be withdrawn.

**If the build cannot be identified**, the finding cannot be reproduced and must be reported as an unresolved observation. In that case the corrective action is still warranted, because the defect is indistinguishable from correct behaviour to a user either way.

## APPENDIX B — Worked arithmetic

Independent of the framework, from the transcribed figures:

```
Displayed total                       198.00
Stated line items:  89.00 + 4.50 + 18.00 =  111.50
Difference                            198.00 - 111.50   =  86.50   (77.6% above the stated items)

Correct tax at the stated 8%:  89.00 * 0.08         =    7.12   (displayed: 18.00)
Implied rate from the stated amount: 18.00 / 89.00   =   20.2%   (stated: 8%)

Correctly-computed total:  89.00 + 4.50 + 7.12      =  100.62
Independently observed by two other sessions         =  100.98   (difference 0.36)
Difference from the displayed total:  198.00 - 100.62 =  97.38   (96.8%)

Displayed total as a multiple of the line item: 198.00 / 89.00 = 2.22
```

## APPENDIX C — Provenance

Full traceability record — source inventory, roster cross-comparison, recomputed statistics, and the list of figures permanently barred from this study's reporting — is maintained at [`ut-results-integration.md`](ut-results-integration.md).

**Prohibited figures.** The superseded draft contained 87.5%, 4.20/5, 84.6%, and 4.23/5. These were never derivable from any source and remain permanently barred. None corresponds to any figure in this paper.