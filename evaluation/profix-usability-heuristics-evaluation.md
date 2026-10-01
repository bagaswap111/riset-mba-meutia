# Usability Heuristic Evaluation — ProFix Prototypes

**Date:** 2026-10-01  
**Scope:** `profix---digital-home-care-&-services` and `profix---professional-home-services`  
**Method:** Code-led evaluation using Nielsen's 10 heuristics and the skill's supplementary accessibility checks (WCAG AA focus). Both apps render screens through in-memory state rather than URL routes; screen names below identify those views. Findings describe the observable prototype UI, not missing backend infrastructure by itself.

## Summary

Counts below are distinct findings. A finding that affects multiple screens is counted once; positive observations and unverified visual checks are not severity findings.

| Prototype | Critical | Major | Minor | Good observations | Manual review |
|---|---:|---:|---:|---|---|
| Digital Home Care & Services | 0 | 4 | 2 | Catalog recovery, checkout processing feedback, confirmation status | Rendered contrast, responsive layout, modal focus behavior |
| Professional Home Services | 1 | 6 | 2 | Catalog filters/empty state, confirmation summary | Rendered contrast, responsive layout, modal focus behavior |

## Digital Home Care & Services

### Per-Screen Results

| Screen | Heuristic | Rating | Finding |
|---|---|---|---|
| Home / all screens | H3 User Control | 🔴 Major | Screen changes only update React state; browser Back/Forward does not represent the user's journey. |
| Home / all screens | H8 Minimalist Design | ⚠️ Minor | The always-visible screen switcher is labeled as a reviewer/demo control and is not part of the customer booking task. |
| Service catalog | H6 Recognition | ✅ Good | Search, categories, result counts, and visible service prices help users find and compare services. |
| Service catalog | H9 Error Recovery | ✅ Good | Empty results explain the problem and offer a filter reset. |
| AC, leak, and pump details | H2 Real-World Match | ✅ Good | Service-specific headings, descriptions, and inclusions support informed selection. The shared browser-history issue still applies. |
| Checkout | H1 System Status | ✅ Good | Processing is shown and the payment button is disabled while the mock action runs. |
| Checkout | H2 Real-World Match / H5 Error Prevention | 🔴 Major | “WhatsApp Pay” is described as payment by chat link, but the same “Confirm and Pay” handler records payment and confirmation reports “Payment Approved.” The method selection does not change the action. [CheckoutScreen.tsx](../profix---digital-home-care-&-services/src/components/screens/CheckoutScreen.tsx#L44) [ConfirmationScreen.tsx](../profix---digital-home-care-&-services/src/components/screens/ConfirmationScreen.tsx#L84) |
| Checkout | H5 Error Prevention | 🔴 Major | If the street address is cleared, submission silently substitutes the seeded address. Users are not asked to verify the destination. [CheckoutScreen.tsx](../profix---digital-home-care-&-services/src/components/screens/CheckoutScreen.tsx#L20) |
| Checkout / confirmation | H8 Minimalist Design | ⚠️ Minor | Customer-facing “Heuristic Evaluation”/“Tinjauan Heuristik” content is unrelated to completing a booking. |
| Sign-in, checkout, and dialogs | Accessibility A11Y-3/A11Y-4 | 🔴 Major | Several labels are not programmatically associated with inputs; payment options are clickable `div`s rather than keyboard-operable radio controls. Dialog role, focus handling, and Escape behavior need live verification. [AuthScreen.tsx](../profix---digital-home-care-&-services/src/components/screens/AuthScreen.tsx#L149) [CheckoutScreen.tsx](../profix---digital-home-care-&-services/src/components/screens/CheckoutScreen.tsx#L278) |

## Professional Home Services

### Per-Screen Results

| Screen | Heuristic | Rating | Finding |
|---|---|---|---|
| Home / all screens | H3 User Control | 🔴 Major | Screen changes are state-only, so browser Back/Forward does not return through the flow. [App.tsx](../profix---professional-home-services/src/App.tsx#L22) |
| Home | H3 User Control / H7 Efficiency | ⚠️ Minor | Desktop “Process,” “Results,” and “FAQ” controls return to Home rather than the named section. Header search opens the catalog but does not carry its query. [Header.tsx](../profix---professional-home-services/src/components/Header.tsx) |
| Home / all screens | H8 Minimalist Design | ⚠️ Minor | The persistent “Pilih Layar Demo” screen switcher exposes prototype navigation in the customer UI. [ScreenSwitcher.tsx](../profix---professional-home-services/src/components/ScreenSwitcher.tsx#L30) |
| Service catalog | H6 Recognition / H9 Error Recovery | ✅ Good | Search, category filters, and an empty-results recovery state are present. |
| Service catalog, checkout | Accessibility A11Y-3/A11Y-4 | 🔴 Major | Service cards are clickable `div`s, and checkout inputs use labels without `htmlFor`/matching IDs; payment choices are also non-semantic click targets. [ServicesCatalogScreen.tsx](../profix---professional-home-services/src/screens/ServicesCatalogScreen.tsx) [CheckoutScreen.tsx](../profix---professional-home-services/src/screens/CheckoutScreen.tsx#L189) |
| Service detail | H2 Real-World Match | 🔴 Major | The detail view uses an AC image and AC-specific inclusions even when another service is selected, so the displayed scope can misrepresent the booking. [ServiceDetailScreen.tsx](../profix---professional-home-services/src/screens/ServiceDetailScreen.tsx#L52) |
| Checkout | H5 Error Prevention | ❌ Critical | Checkout always calculates `$55 + $4.50 + $4.76`, independent of the selected service price. The total can materially disagree with the service the user chose. [CheckoutScreen.tsx](../profix---professional-home-services/src/screens/CheckoutScreen.tsx#L35) |
| Checkout | H1 System Status | ✅ Good | A processing state is displayed and repeat submission is disabled while the mock action runs. |
| Confirmation | H1 System Status | ✅ Good | Order ID and next steps are clearly summarized. Treat payment/dispatch data as mock until backed by live services. |
| Technician tracking | H1 System Status / H2 Real-World Match | 🔴 Major | The view claims real-time GPS but animates a simulated marker; it displays a Dubai map while seeded service details use a Jakarta address. This can mislead users about technician location. [TrackTechnicianScreen.tsx](../profix---professional-home-services/src/screens/TrackTechnicianScreen.tsx#L21) [TrackTechnicianScreen.tsx](../profix---professional-home-services/src/screens/TrackTechnicianScreen.tsx#L54) [TrackTechnicianScreen.tsx](../profix---professional-home-services/src/screens/TrackTechnicianScreen.tsx#L134) |
| WhatsApp dialog | H1 System Status / H3 User Control | 🔴 Major | “Mulai Chat WhatsApp” only shows a local sending state and closes the dialog; it does not open WhatsApp or send the composed message. [WhatsAppModal.tsx](../profix---professional-home-services/src/components/WhatsAppModal.tsx#L25) |
| Sign-in / registration | H2 Real-World Match | 🔴 Major | “Buat Akun” switches the tab label, but does not collect registration details; submitting either mode simply navigates to Home. Label this as a demo or provide a real registration flow. [AuthScreen.tsx](../profix---professional-home-services/src/screens/AuthScreen.tsx) |

## Highest-Priority Fixes

1. **Professional checkout — Critical:** derive the checkout line items and total from the selected service, and carry the same values through confirmation and receipt.
2. **Professional service detail — Major:** render service-specific image, scope, inclusions, and price.
3. **Digital checkout — Major:** distinguish card/wallet payment from WhatsApp booking, and do not mark a chat-based payment as approved.
4. **Professional tracking — Major:** connect the view to accurate location data or explicitly identify it as simulated; use a map matching the service area.
5. **Both apps — Major:** add programmatic labels and native keyboard-operable controls; ensure modal focus and dismissal behavior are accessible.

## Recommendations by Heuristic

- **H1 — Visibility of System Status:** Keep processing feedback. Do not call simulated payment, dispatch, or GPS data “approved,” “live,” or “real-time” unless those states are verified.
- **H2 — Match Between System and Real World:** Keep the chosen service, its detail content, price, payment method, map, and confirmation aligned throughout the journey.
- **H3 — User Control and Freedom:** Support browser history or provide clear, reliable in-app back/cancel navigation. Make section links and external-contact actions perform the action they name.
- **H4 — Consistency and Standards:** Use the same data and interaction pattern for equivalent service and payment choices across screens.
- **H5 — Error Prevention:** Validate required address information and calculate totals from selected service data; never silently substitute a destination or price.
- **H6 — Recognition Rather Than Recall:** Preserve visible selected states and carry search terms into the catalog.
- **H7 — Flexibility and Efficiency:** Make frequent catalog search/filter actions work consistently from both the header and catalog.
- **H8 — Aesthetic and Minimalist Design:** Remove reviewer-only screen switchers and heuristic commentary from customer-facing builds.
- **H9 — Error Recovery:** Keep the catalog's helpful empty state and reset option; provide actionable recovery for contact/payment failures.
- **H10 — Help and Documentation:** Keep support and FAQs discoverable, and put contextual guidance beside booking details that need explanation.
- **Accessibility module:** Associate each label with its input; use buttons/radios with exposed selected state; provide accessible dialog semantics, focus management, and keyboard dismissal.

## Evaluation Limitations

This was a code-led evaluation, not a browser-based usability test. Both app folders lacked installed dependencies, so I did not verify screenshots, actual viewport behavior, computed contrast, image loading, or keyboard/focus behavior at runtime. Recheck those items after the apps can be run. The payment, authentication, WhatsApp, and GPS flows appear prototype-driven; if these are intentionally non-production demos, keep the simulation clearly disclosed in the UI.
