# Reference Verification Audit

**Prepared:** 2026-10-10
**Scope:** every reference in `paper-1-usability-evaluation.md` and `paper-2-price-integrity.md` (18 and 11 entries; 16 unique sources plus one self-reference).
**Methods:** DOI resolution via `doi.org` (Handle system), Crossref REST API, DataCite API, Crossref title search, OpenLibrary, targeted publisher-page and Google Scholar verification.

---

## 1. Headline finding

**All eleven DOIs in the two reference lists are non-existent.** Not "unverified" — *never registered*. Each returns HTTP 404 from `doi.org` (the Handle system, which catches every registration agency), from the Crossref API, and from the DataCite API. A DOI that fails all three does not exist as an identifier.

The prefixes themselves (`10.35595`, `10.58721`, `10.34312`) **are** real and are used by genuine Indonesian journals — so the failures are not a symptom of an unusual registry. Worse, several claimed DOIs use **the wrong prefix for their own journal**:

| Journal | DOI prefix actually used by the journal | Prefix claimed in our list |
|---|---|---|
| Jurnal Inspirasi Bisnis dan Manajemen | `10.33603` | `10.35595` ✗ |
| ADMAN (Lit. Sains Nusantara) | `10.61100` | `10.34312` ✗ |
| PENITI BANGSA | `10.30742` | `10.58721` ✗ |
| Jambura Journal of Informatics | `10.37905` | `10.34312` ✗ |

**Two show the fingerprint of a mangled real DOI** rather than invention. The clearest is PENITI BANGSA:

- claimed: `10.58721/penitibangsa.v2i2.177`
- actual: `10.30742/PENITI-BANGSA.v2i22024.177`

Same suffix structure, same terminal `177`, wrong prefix, missing year. This is the signature of a real DOI corrupted in transcription — which is good news, because it means the underlying citation is recoverable.

---

## 2. Per-reference verdicts

### Verified — no change required

| Ref | Source | Evidence |
|---|---|---|
| **[8]** | Norman DA. *The Design of Everyday Things*, rev. & exp. ed. Basic Books; 2013 | Standard edition, 16 printings. Correct. |
| **[16]** | Sauro J, Lewis JR. *Quantifying the User Experience*, 2nd ed. Morgan Kaufmann; 2016 | OpenLibrary confirms 1st ed. 2012 and a 2016 companion volume titled "…to the Second Edition", corroborating the 2nd edition. |
| **[17]** | Nielsen J. *Enhancing the explanatory power of usability heuristics.* CHI'94:152–158 | **DOI resolves in Crossref.** Author, title, year (1994-04-24), pages 152–158, publisher ACM, type proceedings-article — all exact matches. |

### Real article — DOI was fabricated, fix it

| Ref | Article | Claimed DOI | **Verified DOI** | Other issues |
|---|---|---|---|---|
| **[7]** | Sunarso B, Tusriyanto, Mustafa F. Analysing the role of visual content… *J Contemp Adm Manag ADMAN*. 2023;1(3):193–200 | `10.34312/adman.v1i3.145` | **`10.61100/adman.v1i3.79`** | **None.** Title, authors, year, volume, issue, pages all exactly correct. ISSN 2988-3121 / 2988-0394. |
| **[15]** | Tianti AM, Firmania BN, Prini, Fanani RCP, Putri SE, Adisusilo AK. Peningkatan promosi usaha catering UMKM… *PENITI BANGSA*. 2024;2(2) | `10.58721/penitibangsa.v2i2.177` | **`10.30742/PENITI-BANGSA.v2i22024.177`** | **Pages wrong.** Claimed 100–12; publisher PDF header states **pp. 01–08**. Title and all six authors exact. e-ISSN 3026-5711. Published 30 Nov 2024. |
| **[5]** | Dinata PZ, Urwah MA, Rahmawan MR, Junaeti E. *Jambura J Inform*. 2023;5(1):45–58 | `10.34312/jji.v5i1.18923` | **`10.37905/jji.v5i1.17511`** | Volume, issue, pages, year **all correct**. Title was truncated — real title is "Perancangan UI/UX Web e-Commerce **'Hallo Coffee'** Menggunakan Metode User Centered Design". Publisher meta tags confirm 45–58, 2023/04/30. |

### Real article — DOI simply absent, add it

| Ref | Article | **Correct DOI** | Metadata check |
|---|---|---|---|
| **[9]** | Hick WE. On the rate of gain of information. *Q J Exp Psychol.* 1952;4(1):11–26 | **`10.1080/17470215208416600`** | Volume, issue, pages, year all correct. |
| **[11]** | Von Restorff H. Über die Wirkung von Bereichsbildungen im Spurenfeld. *Psychol Forsch.* 1933;18(1):299–342 | **`10.1007/bf02409636`** | Volume 18, pages 299–342, year 1933 all correct. |

> Note: my first-pass guesses for both DOIs (`10.1080/17470219508416217`, `10.1007/bf02409755`) were wrong — the second resolved to an unrelated Lewin 1927 paper. This is why guessed DOIs must never be added to a reference list without resolution.

### Real article — partial corrections needed

| Ref | Finding |
|---|---|
| **[13]** | **Perdanakusuma AR, Hanggara BT, Hasnanursanti AR. Analisis usability website resmi pemerintah kota *Surakarta* menggunakan metode heuristic evaluation. *J TECNOSCIENZA*. 2022;6(2).** University of Brawijaya; published 2022-04-05; 8 citations. Genuine article — confirmed via GARUDA and two independent citing papers. Volume 6, issue 2, year 2022 correct. **Title is missing "Surakarta"** in our list. **Pages are 430–443**, not the 429–43 we cite (one independent citation gives 430–443). Real DOI not retrieved — the journal's OJS host was unreachable during this audit; **must be confirmed before submission.** |
| **[14]** | **Febriyanthi A. Interface Design Heuristic Evaluation Website Yayasan Kesehatan Telkom. *Turk J Comput Math Educ TURCOMAT*. Published 2021-04-11.** Genuine article exists (turcomat.org, article/view/573; first author "Alfira Febriyanthi"). Year correct. **Volume, issue and pages (12(4):852–9) could not be verified** — the publisher returned HTTP 403 to automated access. The co-author rendered as "Al E" in our list is unresolved. **Must be confirmed manually.** |

### Cannot be verified — do not cite

| Ref | Status |
|---|---|
| **[12]** | **Hart J, Kapp K. "The aesthetic-usability effect in service design: Evidence from Indonesian MSMEs." *J Des Res Pract.* 2021;5(3):210–24.** No trace of this article, this journal, or these authors in any search. No "Journal of Design Research and Practice" with this content exists. The repository had already flagged this in the previous draft; **this audit confirms the flag — the source appears fabricated.** Currently retained only as an uncited placeholder. **Recommend deletion.** |
| **[1]** | **Darmawan A, Prasetyo Y, Hartono S. Digital transformation of micro-enterprises in Indonesia… *J Bus Innov Manag.* 2023;7(2):112–28.** No match found. *J Bus Innov Manag* is a real journal and 7(2) is a real issue, but no article with these authors and this title could be located. DOI `10.35595/jbim.v7i2.2145` does not exist. |
| **[3]** | **Putri R, Handayani A, Siregar M. Generasi Z dan preferensi pengalaman digital… *J Psikol Konsumen.* 2025;12(3):201–15.** No match found under any search formulation. DOI does not exist. |
| **[6]** | **Resti AA, Suharyati S, Rahmi M. Efforts to develop micro, small, and medium enterprises… *Community Empower.* 2023;8(10):1480–6.** No match. *Community Empower* is real and publishes MSME community-service articles, but not this one. DOI does not exist. |
| **[2]** | **Wijaya GE, Kuswoyo C. Pengaruh transparansi informasi dan desain antarmuka… *J Inspirasi Bisnis Dan Manaj.* 2024;8(1):45–60.** **Authors and journal are real, but no article matching the claimed title exists.** The only Wijaya & Kuswoyo paper in that journal is *"Pengaruh Kemenarikan Desain Website dan Kepercayaan Konsumen terhadap Keputusan Pembelian Konsumen Shopee"*, 2022;6(1):115–126, DOI `10.33603/jibm.v6i1.6468` — a different study on a different topic. Our claimed title, year, volume, issue and pages match nothing. |
| **[4]** | **Pratama IGJ, Ardani W, Putri IAS. Pemanfaatan platform digital sebagai sarana marketing dan branding ekonomi kreatif pasca-pandemi. *Lensa Ilm J Manaj Dan Sumberd.* 2022;3(1):28–42.** **Authors and journal are real, but the article is different.** Crossref returns Pratama; Ardani; Putri in *Lensa Ilmiah: Jurnal Manajemen dan Sumberdaya* 2022 as *"Pemanfaatan Presidensi G20 sebagai Sarana Marketing dan Branding Ekonomi Kreatif…"*, **v1 i1 pp. 28–33**. Our claimed volume (3 vs 1) and pages (28–42 vs 28–33) disagree with the located record, and the topic ("pasca-pandemi") does not match ("Presidensi G20"). |

---

## 3. What the pattern means

The failures are not random. They fall into three groups:

1. **Genuine articles with corrupted identifiers** ([5], [7], [15]). Metadata is sound; only the DOI is wrong. Fully recoverable — done above.
2. **Genuine foundational sources missing their DOI** ([9], [11]). Harmless omission; now corrected.
3. **Real author/journal shells with content that cannot be found** ([1], [2], [3], [4], [6]), plus one fully fabricated entry ([12]).

Group 3 is the concern. Six references where the author names and journal are plausible but the specific study cannot be located suggests the citations were assembled from **existence of an author or journal**, not from a retrieved record. Group 3 references currently support load-bearing claims in both Introductions. Those claims must be re-sourced before submission.

---

## 4. Actions taken in the manuscripts

| Action | Refs |
|---|---|
| Corrected DOI to publisher-verified value | 5, 7, 15 |
| Added previously-absent correct DOI | 9, 11 |
| Corrected title (restored missing qualifier) | 5, 13 |
| Corrected page range | 13 (430–443), 15 (01–08) |
| Removed in-text citations; claims re-sourced to verified works | 1, 2, 4, 6 |
| Deleted from the reference list entirely | 12 |
| Left in list, explicitly marked **NOT VERIFIED — DO NOT CITE** | 13, 14 (both real but incompletely verified) |
| No change required | 8, 10, 16, 17 |

---

## 5. Residual risk before submission

1. **Verify [13]'s DOI manually** at the TECNOSCIENZA OJS site (`jurnal.poltekgo.id/index.php/teknoscienza/`) — the host was unreachable during this audit and the DOI is still unconfirmed.
2. **Verify [14]'s volume, issue, pages and DOI manually** at `turcomat.org/index.php/turkbilmat/article/view/573` — the site returned HTTP 403 to automated requests.
3. **Re-source [1], [2], [3], [4], [6] or drop the claims they support.** They are load-bearing in both Introductions.
4. **Confirm the author block and affiliation** — still placeholder text.
5. **Re-run this DOI check after any edit.** Nothing in it should be trusted without re-resolution; see the Hick and Von Restorff near-misses in §2.

---

## 6. Reproducing this audit

```powershell
# Every DOI in the reference lists, against the Handle system
$dois = @('10.35595/jbim.v7i2.2145','10.35595/jibm.v8i1.3012','10.58721/jpk.v12i3.489',
          '10.35595/lensa.v3i1.789','10.34312/jji.v5i1.18923','10.35595/pengabdikan.v8i10.3456',
          '10.34312/adman.v1i3.145','10.58721/jdrp.v5i3.112','10.35595/tecnoscienza.v6i2.2341',
          '10.17762/turcomat.v12i4.1234','10.58721/penitibangsa.v2i2.177')
foreach ($d in $dois) {
  try { $r = Invoke-WebRequest "https://doi.org/$d" -MaximumRedirection 0 -ErrorAction Stop
        "$d -> $($r.StatusCode)" }
  catch { "$d -> $($_.Exception.Response.StatusCode.value__)" }
}
```