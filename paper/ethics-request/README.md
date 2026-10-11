# BINUS Ethical Determination Request — Submission Package

**Prepared:** 2026-10-11 · **For:** Research Ethics Committee, BINUS University (administered through RTT)
**Submission channel:** https://bit.ly/KajiEtikBINUS
**Study:** Formative usability evaluation of an Indonesian home-services marketplace prototype
**Status:** Complete the bracketed fields, sign, and submit. Do not submit with brackets unresolved.

---

## 1. The problem this package solves

BINUS published these guidelines:

> **§4.1 Prior review:** *"All research within the scope of Section 1.2 must be submitted to the
> Committee before participant recruitment or data collection begins. This applies even when the
> researcher believes the study carries only minimal risk."*
>
> **§4.4 No retrospective clearance:** *"The Committee does not issue ethical clearance for data that
> has already been collected. Researchers with this situation should consult RTT on available options,
> such as a **secondary use review** where applicable."*

Data collection is complete. **§4.4 therefore rules out the ordinary retrospective-clearance route.**
Asking for "ethical clearance for this completed study" invites a refusal on the rule's own terms.

But §4.4 also names the alternative: a **secondary use review**. And §6.3 closes the side door:

> *"Even when a target journal accepts a self-assessment checklist, BINUS researchers must still
> register the study with the Committee and obtain the appropriate determination under Section 5."*

So the request must be framed correctly. **This package asks for a determination on the analysis and
publication stage, not an approval of the collection stage.**

## 2. The request to make

Ask the Committee to classify the work under one of these, in this order of preference:

| Track | § | Fit | Outcome | Turnaround |
|---|:---:|---|---|---|
| **Exempted Review** | 5B | **Best fit.** Human participants were involved, but the data are now fully deidentified, and the published work is *"secondary analysis of deidentified data"* — an exemption category the Committee lists verbatim | Exemption determination letter | 15 working days |
| **Secondary use review** | 4.4 | Alternative, named explicitly in the guidelines | Committee determination | Ask RTT |
| **NHSR determination** | 5A | Weaker fit — it requires that the activity *"does not involve human participants"*, and ours did | Letter confirming review was not required | On request |
| **Expedited Review** | 5C | Fallback if the Committee judges 5B ineligible: minimal risk, but identifiable data were collected | Ethical clearance | 30 working days |

**The argument for 5B, in one sentence:** the participants were consented and their data deidentified,
the published output is analysis of deidentified data, and no further participant contact occurs — so
the residual risk the Committee's review exists to manage has already been discharged.

## 3. Package contents

| File | Purpose | Required by |
|---|---|---|
| [`01-surat-permohonan.md`](01-surat-permohonan.md) | Cover letter, bilingual | §7 submission process |
| [`02-formulir-kaji-etik.md`](02-formulir-kaji-etik.md) | The application form | §7(d) |
| [`03-pernyataan-situasi.md`](03-pernyataan-situasi.md) | **Disclosure that data collection preceded review** | §4.4 honesty requirement |
| [`04-rencana-pengelolaan-data.md`](04-rencana-pengelolaan-data.md) | Data management plan, UU PDP compliant | §7(d) |
| [`05-pernyataan-konflik-kepentingan.md`](05-pernyataan-konflik-kepentingan.md) | Conflict of interest | §7(d) |
| [`06-lemmar-komitmen-etik.md`](06-lemmar-komitmen-etik.md) | Ethics commitment | §7(d) |

Plus existing evidence, to attach:

| Attachment | Path | Note |
|---|---|---|
| Research protocol | `UT-plan/01-study-protocol.md` | §7 requires the protocol |
| Participant information & consent | `UT-plan/04-participant-information-and-consent.md` | Blank version for the file |
| Signed consent forms | *[held by corresponding author]* | **Ten signed sets.** Not in this repository — participant signatures must not be committed to a public repo |
| Instruments | `UT-plan/02`, `03`, `07` | Moderator kit, evaluator kit, scenario |
| Data management plan | `04-rencana-pengelolaan-data.md` | Required by §7(d) |
| Supervisor endorsement | *[to obtain]* | Required if the lead researcher is a student |
| Provenance record | `paper/ut-results-integration.md` | Evidence of the data-handling controls described in the DMP |

---

## 2a. Printable PDFs — `pdf/`

Ready to print, generated from the markdown above. Regenerate after any edit:

```powershell
python paper\ethics-request\build_ethics_pdf.py            # packet + per-document
python paper\ethics-request\build_ethics_pdf.py --packet   # merged packet only
python paper\ethics-request\build_ethics_pdf.py --single   # per-document only
python paper\ethics-request\build_ethics_pdf.py --no-pdf   # HTML only, no Edge
```

| File | Pages | Use |
|---|---:|---|
| **`ethics-request-packet.pdf`** | **24** | **The packet to print and submit.** Cover + TOC + all six documents |
| `01-surat-permohonan.pdf` | 4 | Goes to the Committee chair |
| `02-formulir-kaji-etik.pdf` | 6 | The application form |
| `03-pernyataan-situasi.pdf` | 4 | **Read this one before signing anything** |
| `04-rencana-pengelolaan-data.pdf` | 4 | DMP, UU PDP compliant |
| `05-pernyataan-konflik-kepentingan.pdf` | 3 | One signature per researcher |
| `06-lemmar-komitmen-etik.pdf` | 4 | One signature per researcher |

PDFs are generated with headless Microsoft Edge, because neither pandoc nor wkhtmltopdf is installed on
this machine — the same approach [`UT-plan/build/build_doc_pdf.py`](../../UT-plan/build/build_doc_pdf.py)
already uses, so the output matches the study packet's styling. The builder imports that script's markdown
converter and stylesheet rather than reimplementing them; **if you edit the shared stylesheet, both
packets change.**

**The bracketed fields are still bracketed in the PDF.** Fill them in the markdown, rebuild, then print —
or print and write by hand, which is what these documents are for.

> If PDFs are stale, they were not rebuilt. The markdown is the source of truth; the PDF is a rendering of
> it. Do not edit the PDFs.

## 4. Fields you must fill before submitting

Bracketed placeholders throughout. The ones that change the request:

| Placeholder | Why it matters |
|---|---|
| ~~`[KONTRIBUSI]`~~ | **Resolved** — six-person team, contributions recorded in §A |
| ~~`[JUMLAH]`~~ | **Resolved: 10 of 10** |
| ~~`[STATUS_AKTUAL_REKAMAN]`~~ | **Resolved: files stored, not yet deleted** |
| ~~`[AFFILIASI]`~~ | **Removed** |
| ~~`[STATUS_ENKRIPSI]`, `[STATUS_BACKUP]`~~ | **Resolved: none of each** |
| ~~`[PERIODE]`, `[STATUS]`, coordinator~~ | **Resolved** |
| ~~`[TANGGAL_PENGAJUAN]`~~ | **Resolved: 1 Oktober 2026** |
| `[NOMOR]`, `[JENIS]` in 06 | Filled in by the Committee on determination |
| **No supervisor fields** | Removed. All seven researchers are BINUS **Faculty Member**, so the student-supervisor requirement does not apply |

### Filled in

| Field | Value |
|---|---|
| Lead researcher | Meutia Braniwati, S.Ds., M.Sn. — Faculty Member, NIP **D7003** |
| Contact | **meutia.braniwati@binus.ac.id** · **+62 898-0982-999** |
| Committee address | BINUS University @ Semarang, POJ Avenue No. Kav. 3, Tawangsari, Semarang Barat, Semarang City, Central Java 50144 |
| City / location | **Semarang, Jawa Tengah** |
| Collection period | **1 Oktober – 30 Oktober 2026** |
| Recording | **Layar dan suara** — **10 of 10** consented |
| Recording storage | **OneDrive BINUS (akun BINUSian) dan penyimpanan lokal** |
| Recording access | **Tim peneliti terkait** |
| Recording status | **Tersimpan, belum dihapus** |
| Recording deletion | **1 Januari 2027** |
| Encryption | **Tidak ada** |
| Backup | **Tidak ada** |
| Retention (other data) | 3 years |
| Target conference | **ICICYTA** — 6th Int. Conf. on Intelligent Cybernetics Technology & Applications, Telkom University (Bali; IEEE Xplore review) |
| Target journal | *J. Organizational Computing and Electronic Commerce* (T&F) — Scopus Q2, $0 APC |
| Author list | **Seven researchers.** Yashella Tirana (usability-test analysis and heuristic evaluation) is on the J1 byline and signs these forms |

### Research team and contributions

Seven researchers. Six ran the sessions; Yashella Tirana joined at the analysis stage.

| Role | Name | NIP | School | Contribution |
|---|---|---|---|---|
| **Chair** | Meutia Braniwati | D7003 | Design Visual Communication Design | Visual branding strategy — design and analysis |
| Member | Bagaskoro Saputro | 6869233 | Computer Science | Usability evaluator |
| Member | Aditya Paramananda | — | Information Systems | Prototype design |
| Member | Freysia Chandra Saliman | — | Computer Science | Usability evaluator and administration |
| Member | Stephanie Evangelina Pramudito | — | Design Visual Communication Design | Administration and visual design |
| Member | Tan, Michael Wilson Setiawan | — | Information Systems | Prototype design and documentation |
| Member | Yashella Tirana | — | Digital Business | **Usability-test analysis and heuristic evaluation** |

> Academic degrees (S.Ds., M.Sn., S.Si., M.Cs., S.Kom., M.Kom.) are **omitted from the manuscript
> bylines** by house style but **retained in these ethics forms**, where they help identify researchers.

The signature tables in [`05`](05-pernyataan-konflik-kepentingan.md) and
[`06`](06-lemmar-komitmen-etik.md) carry the same seven names. `writer.md` records three different
author lists across outputs; these forms cover the full research team.
| Letter number | **Blank** — not required for an internal BINUS letter |

### Two consequences of "recordings saved"

**1. The three manuscripts have been corrected.** They previously read *"recording evidently occurred,
but no recording files are present in the repository,"* which invited the wrong inference. They now
state that screen and audio recording was conducted with all ten participants' consent, is held under
institutional control, is scheduled for deletion on 1 January 2027, and **was not used in the analysis** —
which is why the qualitative corpus is observer paraphrase and why no direct quotation appears anywhere.

**2. Retention without encryption or backup is fragile.** If the files are lost before 1 January 2027,
the evidence needed to answer a participant's correction or objection is gone permanently. DMP §3 says
so plainly. Enabling local encryption and one backup before submission costs nothing and removes the
gap.

## 5. One task to do regardless of the outcome

**§4.4 is silent on recordings, and UU PDP No. 27/2022 has criminal sanctions for mishandling
personal data.** The recordings **exist** and are held in BINUS OneDrive plus a local copy, accessible
to the research team.

1. **Confirm the files are where the DMP says** — OneDrive BINUS and the local copy.
2. **Delete both copies on 1 January 2027**, and keep a record of doing so.
3. **Consider enabling encryption and one backup before submission.** Neither is currently in place, and
   DMP §3 records that honestly. Without them, a loss before the deletion date is permanent — including
   the evidence needed to answer a participant's correction or objection.

**Do not state in any submission that recordings were destroyed if they were not.** An accurate
statement of their current status is what makes the rest of the package credible.

**Note the gap that no deletion can close.** The 1 January 2027 date was set now, not at the point of
consent. Participants were never told it. §2.1 of the DMP says so explicitly.

## 6. Also required by §6.3 — register the study

Even if the Committee determines no review was required, BINUS researchers must register. Submit this
package regardless of the outcome you are requesting, and keep the Committee's letter.

## 7. If the answer is refusal or silence

Requesting a determination is the right step regardless. If the Committee declines, or does not respond
within 30 days, the ethics declaration in all three papers proceeds on **path C** as drafted — consent
evidenced, safeguards documented, **no institutional review conducted, disclosed as a limitation**.
Requesting the determination and being refused is a materially different position from never asking.

Record the outcome in `paper/ethics-statement.md` either way.
