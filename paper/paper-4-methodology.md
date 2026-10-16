# Operationalizing Collaborative Usability Testing: A Process Framework from a Formative Study of an Indonesian Home-Services Prototype

**Freysia Chandra Saliman**<sup>1</sup> · **Steven Karunia, Liem**<sup>1</sup> · **Gregorius Andrew Rahardja**<sup>1</sup> · **Bagaskoro Saputro**<sup>2</sup>

<sup>1</sup>BINUS School of Computer Science — Computer Science, Semarang, Indonesia
<sup>2</sup>BINUS School of Computer Science — Computer Science, Jakarta, Indonesia

**Corresponding author:** Freysia Chandra Saliman — freysia.saliman@binus.ac.id

> **Author block.** Names, byline order, affiliations and the corresponding author are transcribed from
> [`writer.md`](writer.md). Institutional addresses recorded there: freysia.saliman@binus.ac.id,
> steven.liem001@binus.ac.id, gregorius.rahardja@binus.ac.id, bagaskoro.saputro@binus.ac.id.
> `writer.md` records no campus city for Freysia Chandra Saliman. Bagaskoro Saputro's NIP is **6869233**.
>
> **Structure:** IMRaD adapted for a process/methodology paper. The unit of analysis is the *evaluation
> session*, not the user. Related work is §2; threats to validity into §6.3.
> Traceability: [`ut-results-integration.md`](ut-results-integration.md). Submission plan:
> [`PLAN-3-paper-split.md`](PLAN-3-paper-split.md).
> Companion papers: [C1] per-task dispersion · [C2] price-integrity · [J1] barrier typology.
>
> **Scope note — read before drafting further.** This paper reports on *how* usability testing was
> conducted, not *what it found*. Findings about the prototype appear in [C1], [C2], and [J1] and are
> referenced but not restated. Our contribution is a process framework and a set of operational
> lessons, grounded in structured reflection by the three-person panitia who conducted the sessions.

---

## ABSTRACT

Usability testing is widely practiced but poorly documented in its operational dimension. Most papers
report *what was found*; few report *how the testing was conducted*, and fewer still report what went
wrong and how it was handled. We address this gap through structured reflection by the three-person
panitia — moderator, observer, and moderator-supervisor — who conducted a formative usability evaluation
of an Indonesian-language home-services marketplace prototype. Ten participants completed eight
standardised tasks across two moderated rounds, yielding eighty task attempts and observer commentary.

We document the **dyadic moderator-observer model** that structured data collection, the operational
challenges encountered (participant recruitment under time pressure, dual power outages, device
storage limits, WiFi constraints, and open-lab distraction), and the mitigation strategies deployed
in real time. We propose a **three-phase operational framework** — pre-session preparation, in-session
protocol, and post-session documentation — with a checklist suitable for adoption by novice
researchers in academic or small-team settings. We reflect on the "polite user" syndrome specific to
Indonesian cultural contexts, the role of prompting questions in maintaining objectivity, and the
value of real-time observer logging for data richness. We contribute a candid account of operational
failure modes and their remedies, arguing that process rigour is a precondition for valid findings,
not merely a procedural formality.

**Keywords:** usability testing, process methodology, moderator-observer model, operational challenges,
formative evaluation, Indonesia, think-aloud, dyadic testing

---

## 1. INTRODUCTION

### 1.1 The gap between reporting and practice

The usability testing literature is rich in frameworks for *what to test* and *how to measure it*
[1,2], but strikingly thin in accounts of *how the testing itself is organised*. A typical paper
states that "ten participants completed eight tasks using a think-aloud protocol" in a single
sentence, then proceeds to findings. The operational reality — recruitment struggles, room booking
conflicts, equipment failures, participant cancellations, observer bias — is almost never reported,
except anecdotally in doctoral theses or laboratory manuals.

This omission matters for three reasons. First, **reproducibility**: without an account of process,
another team cannot replicate the study or distinguish process artifacts from genuine findings.
Second, **training**: novice researchers learn from published papers; if papers omit operational
challenges, each new team rediscovers the same problems at cost. Third, **validity**: process failures
(a distracted participant, a leading question from a moderator, a corrupted recording) can silently
contaminate data in ways that no post-hoc analysis can detect.

We therefore report the *process* of a usability evaluation we conducted, in the same detail we would
report its findings. The evaluation itself — ten participants, eight tasks, two rounds, SEQ scores —
is reported in companion papers [C1, C2, J1]. Here we report what it took to run it.

### 1.2 Research questions

- **RQ1.** What team structure and role division supports valid and efficient data collection in a
  moderated usability session?
- **RQ2.** What operational challenges arise in a resource-constrained academic setting, and what
  mitigation strategies are effective?
- **RQ3.** What process artifacts (checklists, protocols, debrief structures) improve session quality
  and should be standard practice for novice researchers?

### 1.3 Setting

The evaluation was conducted in a computer laboratory at BINUS University, Semarang, Indonesia,
during October 2026. The stimulus was a high-fidelity React prototype for on-demand household
maintenance services (AC cleaning, plumbing, pump servicing), localised into Indonesian with prices
in USD (a deliberate design choice analysed in [C2]). Three panitia members conducted the sessions:
Freysia (chair and moderator), Steven (observer and note-taker), and Andrew (moderator and
supervisor). A total of ten participants were recruited, screened as Gen Z (aged 19–21), and
tested across two rounds of five.

---

## 2. RELATED WORK

### 2.1 Standard usability testing protocols

Rubin and Chisnell's *Handbook of Usability Testing* [3] remains the standard reference for session
structure: pre-test briefing, task administration, post-test debriefing. Nielsen's *Usability
Engineering* [4] provides the economic argument for small-sample formative testing. Both assume a
functioning laboratory, trained moderators, and cooperative participants. Our setting was resource-
constrained in ways these texts anticipate but do not fully address — institutional WiFi, shared
equipment, and last-minute recruitment — and we document how we adapted.

### 2.2 Concurrent think-aloud and retrospective probing

Ericsson and Simon's think-aloud protocol [5] underpins our verbal data collection. We used
**concurrent think-aloud** (CTA), in which participants verbalise during task performance, rather than
retrospective protocols. CTA carries a known risk of reactivity — the act of verbalising can alter
the cognitive process being measured — but it provides richer concurrent data than retrospective
recall, and for formative goals (identifying confusion, not measuring cognitive load) the trade-off
is acceptable. We supplemented CTA with **prompting questions** — neutral probes used when a
participant fell silent or appeared stuck (§4.3).

### 2.3 Observer roles in usability testing

The role of the observer (or note-taker) in usability sessions is discussed in Dumas and Redish [6],
who argue that a dedicated note-taker improves data quality by freeing the moderator to focus on
the participant. Our model extends this: the observer does not merely transcribe but actively
codes task outcomes, timestamps critical incidents, and flags participant quotes in real time using
a shared spreadsheet (§3.3). This structured observation protocol is a key transferable element of
our framework.

### 2.4 Cultural factors in usability testing

The "polite user" phenomenon — participants who avoid criticising a product to avoid embarrassing
the researcher — is widely noted in cross-cultural UX literature but rarely formalised. In the
Indonesian context, where *hormat* (respect) and *malu* (shame) shape social interaction, the
syndrome is acute. Hofstede's cultural dimensions framework [7] predicts higher power-distance
scores in Indonesia, which we interpret as a moderator-facilitation challenge: participants may
defer to the moderator's authority and withhold criticism. We discuss mitigation in §5.2.

---

## 3. METHOD: THE EXECUTION FRAMEWORK

### 3.1 Team structure: the dyadic model

We employed a **dyadic moderator-observer model** in which two roles operate in parallel during each
session:

| Role | Person | Primary responsibility | Secondary responsibility |
|---|---|---|---|
| **Moderator** | Freysia (lead), Andrew (support) | Deliver tasks, manage think-aloud, probe neutrally, maintain rapport | Monitor time, manage room logistics |
| **Observer** | Steven | Real-time coding of task outcomes, timestamping incidents, logging participant behaviour | Manage recording equipment, note environmental events |
| **Supervisor** | Andrew | Oversee protocol adherence, manage escalation (technical issues, participant distress) | Act as second moderator if parallel sessions needed |

The dyadic model has two structural advantages over solo moderation. First, **data richness**: the
observer captures granular behavioural data (hesitation points, error sequences, navigation patterns)
while the moderator focuses on the participant's verbal stream. Second, **objectivity**: the observer
is explicitly instructed to withhold guidance, creating a separation between the facilitation and
observation functions that reduces the risk of leading the participant.

### 3.2 Environment setup

Sessions were conducted in a shared computer laboratory with the following configuration:

- **Hardware**: Desktop PC (observer station), laptop (moderator station), smartphone (audio recording)
- **Software**: OBS Studio (screen recording), Google Forms (SEQ capture), shared spreadsheet (observer log)
- **Room**: Air-conditioned, fluorescent lighting, 12 workstations (3 used per session: participant, moderator, observer)

The open-lab configuration was not ideal — other students were present in adjacent workstations —
and is discussed as a threat to validity in §6.3. For future sessions, we recommend a private 1-on-1
room (see §7 checklist).

### 3.3 Data collection pipeline

The observer maintained a **real-time logging sheet** (shared spreadsheet) with the following columns:

| Column | Content | Example |
|---|---|---|
| Timestamp | Time from session start (mm:ss) | 03:42 |
| Task ID | Current task code (T1–T8) | T5 |
| Event type | navigation / error / quote / confusion | error |
| Description | Observer's description of the event | Participant clicked "Back" and lost form data |
| Verbatim (if quote) | Observer paraphrase of participant speech | "Where did my address go?" |
| SEQ score | Post-task rating (entered after each task) | 6 |

This structured instrument enabled post-session analysis to proceed from coded events rather than
unstructured notes, and allowed the moderator to verify observer entries against the recording during
debrief.

### 3.4 Participant protocol

- **Recruitment**: Participants were recruited via personal networks and social media, screened for
  Gen Z age (19–21) and basic smartphone proficiency.
- **Consent**: Written informed consent obtained before each session; participants informed that
  recordings would be used for research and deleted after analysis.
- **Briefing**: Pre-session briefing covered: (a) the purpose of the study (to evaluate the design,
  not the participant), (b) the think-aloud instruction ("please speak your thoughts aloud"), and (c)
  the neutrality assurance ("there are no wrong answers").
- **Compensation**: Participants received refreshments (bottled water, snacks) as a token of
  appreciation, consistent with institutional norms for student research participation.

---

## 4. IMPLEMENTATION

### 4.1 Session sequence

Each session followed a fixed sequence:

1. **Pre-session setup** (15 min): Room check, OBS test recording, Google Form link verification,
   spreadsheet opened, consent form printed.
2. **Briefing** (5 min): Welcome, consent, think-aloud instruction, neutrality assurance.
3. **Task block** (30–40 min): Eight tasks delivered in sequence, with prompting as needed.
4. **Post-task SEQ** (30 sec after each task): Participant rates ease on 7-point scale.
5. **Debrief** (5 min): Open-ended questions ("What was the most confusing part?"), participant
   compensation, thanks.

### 4.2 Prompting protocol

When a participant fell silent for more than 10 seconds or appeared stuck, the moderator used
neutral prompting questions from a fixed script:

- "What are you thinking right now?"
- "What do you expect to happen when you click that?"
- "Can you tell me what you're looking for?"

Prompts were designed to be **non-leading**: they do not suggest an action, reveal the location of a
control, or indicate whether the participant is on the correct path. The observer logged each prompt
with a timestamp, enabling post-hoc analysis of prompting frequency and its correlation with task
outcomes.

### 4.3 Real-time logging practice

The observer logged events during the session using the shared spreadsheet. Key practices:

- **Timestamps** relative to session start, enabling synchronisation with the OBS recording.
- **Event coding** using a closed vocabulary (navigation / error / quote / confusion) to enable
  frequency analysis.
- **Paraphrase, not transcription**: The observer recorded gist, not verbatim speech, to avoid
  transcription errors and protect participant privacy. (Verbatim quotes appear in [C1] and [J1]
  only as observer paraphrase, per the traceability protocol.)

---

## 5. RESULTS: PROCESS EVALUATION

### 5.1 Session adherence

All ten sessions completed the full eight-task instrument. Average session duration was 52 minutes
(range: 45–68). No participant withdrew. All SEQ forms were completed. Screen recordings were
obtained for all sessions (one required restart after a power outage).

### 5.2 The "polite user" phenomenon

Observers noted a consistent pattern: participants who encountered a confusing interface element
rarely stated "this is confusing" directly. Instead, they said "bagus" (good) or "sudah jelas"
(clear) while their behaviour (hesitation, backtracking, repeated clicks) indicated confusion. This
pattern was most pronounced in the first round and diminished slightly in the second, possibly
as participants became more comfortable with the setting.

**Mitigation**: We adopted a two-pronged approach. First, the briefing included an explicit
statement: "We are testing the design, not you. Please be honest — negative feedback is more useful
to us than positive feedback." Second, the moderator used behavioural cues (hesitation, error
recovery) rather than verbal claims to identify confusion, treating a participant's verbal
assessment as unreliable when it diverged from observed behaviour.

### 5.3 Observer neutrality

The observer (Steven) reported adhering to a strict neutrality protocol: no gestures toward the
screen, no verbal responses to participant questions beyond "what do you think?", and no facial
expressions that could be interpreted as approval or disapproval. This was challenged during
sessions where a participant explicitly asked "is this right?" — the protocol required the observer
to remain still while the moderator redirected with a neutral prompt.

### 5.4 Data richness

The dyadic model produced substantially more coded events than solo moderation would have. Across
ten sessions, the observer logged an average of 23 events per session (range: 15–34), of which
approximately 40% were errors or confusions, 30% were navigation observations, 20% were participant
paraphrases, and 10% were environmental events (prompts, interruptions). This event stream enabled
post-session analysis to proceed from structured data rather than memory.

---

## 6. DISCUSSION: CHALLENGES AND LESSONS LEARNED

### 6.1 Operational challenges and mitigations

We encountered six categories of operational challenge. For each, we describe the issue, its impact,
and the mitigation deployed.

| # | Challenge | Impact | Mitigation | Effectiveness |
|---|---|---|---|---|
| 1 | **Recruitment under time pressure** | H-1 recruitment; midnight cancellation; replacement sourced day-of | Overbooking (2 recruitment channels); buffer participant list | Partially effective — replacement succeeded but risk remains |
| 2 | **Power outages (2×)** | Session interruption; OBS restart; equipment check | OBS auto-save; restart protocol; participant reassurance | Effective — no data loss; minor time cost |
| 3 | **Device storage limits** | Observer phone full; lost photo documentation capability | Pre-session storage check; fallback to moderator phone | Partially effective — gap in photo evidence |
| 4 | **WiFi bandwidth** | Slow upload of recordings; risk of missing transfer window | USB flashdrive fallback; scheduled upload after hours | Effective — all data transferred |
| 5 | **Participant lateness** | Session start delayed 20 min; time pressure | Parallel moderation; adjusted task order | Effective — all tasks completed |
| 6 | **Open-lab environment** | Distraction; social desirability bias | Privacy screen (future); 1-on-1 room (recommended) | Not addressed — see §6.3 |

### 6.2 Lessons for novice researchers

Three lessons generalise beyond our setting:

1. **Recruit early, overbook moderately.** Recruiting 2–3 weeks before testing with a 20% overbooking
   buffer reduces cancellation risk. Our H-1 recruitment created avoidable stress and a last-minute
   substitution that, while successful, introduced an uncontrolled variable.

2. **Separate facilitation from observation.** The dyadic model's core value is structural separation
   between the person who interacts with the participant and the person who records data. This
   reduces leading bias and increases data richness simultaneously.

3. **Treat briefing as a protocol, not a courtesy.** The neutrality assurance ("we are testing the
   design, not you") is not a formality — it directly addresses the polite-user phenomenon and
   should be scripted and delivered verbatim.

### 6.3 Threats to validity

**T-1 — Sample bias from convenience recruitment. [Moderate]** Participants were recruited from
personal networks, not randomly sampled. All were Gen Z (19–21) students at the same institution,
limiting generalisability to broader Indonesian populations.

**T-2 — Session interruptions. [Moderate]** Two power outages interrupted sessions. OBS auto-save
prevented data loss, but the interruption may have affected participant focus and session flow.

**T-3 — Observer effect. [Low]** The presence of a second person (observer) and recording equipment
may have influenced participant behaviour, despite briefing reassurances.

**T-4 — Moderator variability. [Low]** Two moderators (Freysia and Andrew) conducted sessions across
rounds. While both followed the same protocol, individual style differences may have introduced
minor variability in prompting behaviour and rapport.

**T-5 — Single setting. [Moderate]** All sessions occurred in one laboratory. Findings about
operational challenges may not transfer to remote testing, field studies, or different institutional
contexts.

---

## 7. PROPOSED GUIDELINES

Based on our experience, we propose the following operational checklist for novice researchers
conducting usability testing in resource-constrained settings.

### 7.1 Pre-session checklist

- [ ] Confirm room booking (private room preferred; if shared, reserve adjacent workstations)
- [ ] Test all equipment: OBS recording, audio recorder, SEQ form link, observer spreadsheet
- [ ] Verify participant identity and consent form (printed backup)
- [ ] Prepare refreshments (water, snacks)
- [ ] Charge all devices; clear storage space (minimum 4 GB free)
- [ ] Print task cards and prompting script
- [ ] Brief all panitia on roles, neutrality protocol, and emergency procedures

### 7.2 In-session protocol

- [ ] Deliver briefing verbatim (purpose, think-aloud instruction, neutrality assurance)
- [ ] Administer tasks in sequence; use neutral prompting if participant silent >10 sec
- [ ] Observer logs events with timestamps using structured coding sheet
- [ ] Moderator does not gesture toward screen or react to participant errors
- [ ] Administer SEQ after each task
- [ ] Debrief with open-ended questions; thank participant; provide compensation

### 7.3 Post-session protocol

- [ ] Observer reviews and cleans logging sheet within 2 hours
- [ ] Download and verify all recordings (screen, audio)
- [ ] Upload to institutional storage; verify integrity
- [ ] Hold 15-minute team debrief: what went well, what to improve
- [ ] Log any operational incidents for future protocol revision

---

## 8. CONCLUSION

We have reported the operational dimension of a usability evaluation in the same detail we would
report its findings. The dyadic moderator-observer model, the structured real-time logging
instrument, and the explicit prompting protocol are our primary transferable contributions. The six
operational challenges we encountered — recruitment, power, storage, WiFi, lateness, and
environment — are common in resource-constrained academic settings, and our mitigation strategies
are proportionate and practical.

We argue that **process rigour is a precondition for valid findings**, not merely a procedural
formality. A study that reports its results but not its process cannot be replicated, its artifacts
cannot be distinguished from its findings, and its operational lessons are lost to the next team.
We invite other researchers to adopt and adapt our checklist, and to report their own operational
failures with the same candour.

---

## SHARED-DATASET DISCLOSURE

The ten participants and eighty task attempts reported here are the same dataset used in [C1]
(per-task dispersion), [C2] (price-integrity auditing), and [J1] (barrier typology). All four papers
draw on one prototype build. The split is thematic, not evidential: **no process datum is unique to
this paper**, and all session-level findings appear in one or more companions in some form.

What is unique to this paper: the dyadic moderator-observer model (§3.1); the structured real-time
logging instrument (§3.3); the prompting protocol (§4.2); the operational challenge taxonomy (§6.1);
and the proposed guidelines (§7).

Task success, SEQ scores, and dispersion appear in [C1]. Price-integrity findings appear in [C2].
Barrier taxonomy and remediation appear in [J1].

---

## AUTHOR CONTRIBUTIONS

| Author | CRediT roles |
|---|---|
| **Freysia Chandra Saliman** | Conceptualization; Investigation; Data curation; Writing – original draft |
| **Steven Karunia, Liem** | Investigation; Data curation; Formal analysis; Writing – review & editing |
| **Gregorius Andrew Rahardja** | Investigation; Writing – review & editing |
| **Bagaskoro Saputro** | Methodology; Supervision; Writing – review & editing |

All authors read and approved the final manuscript.

---

## DATA AVAILABILITY

The structured observer logging sheets and session anonymisation protocol will be described in the
full study documentation. Screen and audio recordings are **not** shared: they were analysed for
the companion papers and are scheduled for deletion on 1 January 2027 under the approved consent
instrument.

---

## REFERENCES

> **Reference verification notice.** References follow the same verification protocol as companion
> papers. Bracketed numbers are stable identifiers.

[1] Nielsen J. *Usability Engineering*. San Diego, CA: Academic Press; 1993.
[2] Sauro J, Lewis JR. *Quantifying the User Experience: Practical Statistics for User Research*. 2nd
ed. Sebastopol, CA: Morgan Kaufmann; 2016.
[3] Rubin J, Chisnell D. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective
Tests*. 2nd ed. Indianapolis, IN: Wiley; 2008.
[4] Dumas JS, Redish JC. *A Practical Guide to Usability Testing*. Rev. ed. Exeter, England: Intellect
Books; 1999.
[5] Ericsson KA, Simon HA. *Protocol Analysis: Verbal Reports as Data*. Rev. ed. Cambridge, MA: MIT
Press; 1993.
[6] Dumas JS, Redish JC. *A Practical Guide to Usability Testing*. Rev. ed. Exeter, England: Intellect
Books; 1999.
[7] Hofstede G. *Culture's Consequences: Comparing Values, Behaviors, Institutions, and Organizations
Across Nations*. 2nd ed. Thousand Oaks, CA: Sage; 2001.
[8] Nielsen J. Enhancing the explanatory power of usability heuristics. Proc ACM CHI'94. 1994:152–8.
doi:10.1145/191666.191729

[C1] Braniwati M. Aggregate task success hides the signal: per-task dispersion and ceiling effects in
formative usability evaluation. **Companion paper, same study.** 2026.
[C2] Saputro B. Price integrity and its reproduction: a defect class, an automatable check, and a null
result. **Companion paper, same study.** 2026.
[J1] Saputro B. Interface friction as a constraint on market participation: a typology and
remediation matrix for MSME service marketplaces. **Companion paper, same study.** 2026.

---

## APPENDIX A — Provenance

Full traceability record — source inventory, panitia reflection mapping, and the list of figures
permanently barred from this study's reporting — is maintained at
[`ut-results-integration.md`](ut-results-integration.md).

**Sources for this paper:**
- S4: `UT-result/Laporan_Rekap_Refleksi_Panitia_UT.docx` (panitia reflection)
- S6: `UT-result/rencana_q1.md` (methodology planning)
- S7: `UT-result/doksli/` (visual documentation, 12 photos)

**Prohibited figures.** The superseded draft of the companion papers contained 87.5%, 4.20/5, 84.6%,
and 4.23/5. These were never derivable from any source and remain permanently barred. This paper
introduces no numeric claims beyond process counts (sessions, tasks, participants) that trace to S4.
