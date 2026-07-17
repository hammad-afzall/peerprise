# Peerprise Cursor Implementation Playbook

## Purpose

This file contains the complete implementation sequence for the Peerprise website. Use the prompts **one at a time and in order**. Do not paste the whole file into Cursor as one request.

The content source of truth is:

`/docs/Peerprise_Website_Master_Spec.md`

The approved visual exception is permanent:

> Preserve the existing homepage hero colour scheme, gradients, visual identity and overall composition. Build the rest of the website around it.

---

# How to use this playbook

1. Copy both files into the repository:
   - `/docs/Peerprise_Website_Master_Spec.md`
   - `/docs/Peerprise_Cursor_Implementation_Playbook.md`
2. Create a new Git branch before starting.
3. Paste **Prompt 1 only** into Cursor Agent mode.
4. Review the changed files and inspect desktop and mobile previews.
5. Fix any issues within the same stage before continuing.
6. Commit the completed stage.
7. Paste the next prompt.
8. Never ask Cursor to implement all stages at once.

Every prompt deliberately tells Cursor to stop after its assigned scope. This protects the approved hero and prevents broad, uncontrolled rewrites.

---

# Shared instruction used by every prompt

Each prompt below already contains the important constraints, but these rules apply throughout:

- Read `/docs/Peerprise_Website_Master_Spec.md` before editing.
- Inspect the current codebase and reuse its framework, conventions and styling system.
- Preserve the existing hero palette and identity.
- Use exact approved copy from the master specification unless a technical limitation requires a minimal adjustment.
- Do not invent services, claims, statistics, clients, testimonials or capabilities.
- Do not add SEO campaigns, analytics services, paid advertising, traffic generation, lead generation or marketing-performance claims.
- Use international British English.
- Make only the changes required by the current prompt.
- Do not proceed to the next stage.
- At the end, report changed files, decisions, unresolved issues and verification performed.

---

# Prompt 1 — Global design foundation

```text
You are implementing Stage 1 of the Peerprise website.

Before editing, read:
/docs/Peerprise_Website_Master_Spec.md

Inspect the repository to identify the framework, styling approach, global layout, existing tokens, fonts, breakpoints, shared components and the files that control the homepage hero.

CRITICAL APPROVED CONSTRAINT
The existing homepage hero colour scheme, gradients, visual identity, artwork and overall composition are approved. Preserve them. Do not convert the hero to a light theme, replace its palette, remove its visual effects or redesign it. Small changes are allowed only to correct a demonstrated accessibility, overflow, responsiveness or content-integrity issue. Report every hero change explicitly.

SCOPE
Implement only the global design foundation:

1. Extract the actual hero colours and visual language into reusable theme variables or tokens.
2. Create a controlled hybrid theme around that palette:
   - existing dark hero as the primary visual anchor;
   - light neutral sections for long-form readability;
   - selective dark sections derived from the hero palette;
   - no unrelated accent colours.
3. Standardise global typography for display headings, H1–H4, body large, body, small text, labels, navigation and buttons.
4. Standardise container widths, page gutters, section spacing, grid gaps, card padding, border radii, shadows and focus styles.
5. Establish semantic colour roles for canvas, surfaces, text, muted text, borders, dark surfaces, accent, hover, focus, success, warning and error.
6. Add or improve global accessibility foundations:
   - visible focus states;
   - WCAG AA contrast;
   - minimum interactive target sizes;
   - reduced-motion support;
   - no horizontal overflow.
7. Keep the existing framework and styling system. Do not introduce a new UI library unless the current project cannot reasonably support a maintainable token system.
8. Apply only safe global consistency changes. Do not rewrite page content or restructure pages in this stage.

ACCEPTANCE CRITERIA
- The hero remains visually recognisable and uses its original approved palette.
- Global tokens are reusable and clearly named.
- Typography and spacing scale responsively.
- No unrelated colours are introduced.
- Existing pages still render without structural regressions.
- Keyboard focus is clearly visible.
- The project builds and passes its available checks.

STOP after this stage. Do not implement navigation, homepage restructuring or new pages.

Return:
- design tokens created or changed;
- files changed;
- exact hero changes, if any, and why;
- checks run;
- remaining inconsistencies for later stages.
```

---

# Prompt 2 — Header, navigation and footer

```text
You are implementing Stage 2 of the Peerprise website.

Read:
/docs/Peerprise_Website_Master_Spec.md

Review the result of Stage 1 before editing. Preserve the approved homepage hero and its palette.

SCOPE
Implement the global header, navigation and footer described in Sections 3 and 4 of the master specification.

HEADER
- Use the approved desktop navigation and exact labels.
- Add a structured Services dropdown containing all five service routes plus the overview.
- Use “Start a Conversation” as the primary header CTA.
- Add a visible active-page state.
- Make the header accessible by keyboard and screen reader.
- Use a restrained sticky state after scroll if consistent with the current implementation.
- Derive colours from the Stage 1 token system and the existing hero identity.

MOBILE NAVIGATION
- Use the same information architecture.
- Services opens as an accessible accordion.
- Include the primary CTA clearly at the bottom.
- Provide large tap targets, focus management and escape/close behaviour.
- Prevent background scrolling while open where appropriate.

FOOTER
- Implement the exact brand text, column headings, links, closing line and copyright text from Section 4.
- Use the approved contact email.
- Use a dark treatment derived from the hero palette.
- Do not add newsletter signup, social follower counters or marketing claims.

ROUTING
- Reuse existing routes where possible.
- Where planned routes do not yet exist, link to the intended route without building the page in this stage, or use the project’s established safe placeholder routing mechanism in development only.
- Do not create public placeholder copy.

ACCEPTANCE CRITERIA
- Header and footer are shared globally.
- Desktop dropdown and mobile navigation are fully keyboard operable.
- No duplicated navigation implementations remain unnecessarily.
- All current links resolve or are reported as pending routes.
- The hero is not recoloured or restructured.
- The project builds and available checks pass.

STOP after this stage. Do not redesign the homepage body or build service pages.

Return:
- files changed;
- navigation routes used;
- accessibility behaviours implemented;
- unresolved links or route decisions;
- checks run.
```

---

# Prompt 3 — Shared reusable components

```text
You are implementing Stage 3 of the Peerprise website.

Read:
/docs/Peerprise_Website_Master_Spec.md

Inspect existing components before creating new ones. Preserve the approved homepage hero.

SCOPE
Create or standardise the reusable component system described in Section 21, without rebuilding completed header/footer work and without implementing full page content yet.

Prioritise reusable components for:
- PageHero
- SectionHeader
- ServiceCard
- AudienceCard
- ProcessSteps
- CapabilityGrid
- PricingCard
- PlanComparison
- CaseStudyCard
- TestimonialCard
- FAQAccordion
- CTASection
- DisclosureNote
- TagList
- IllustrativeWorkspace or the existing hero visual component
- shared form controls and validation presentation

REQUIREMENTS
- Reuse existing components where they are structurally sound.
- Avoid an unnecessary component abstraction for one-off markup.
- Support light and dark section variants derived from the approved palette.
- Use semantic HTML.
- Cards must not rely on hover to reveal essential content.
- FAQ accordions must be keyboard accessible and expose correct ARIA state.
- Components should accept content through props/data rather than embedding page-specific copy.
- Put repeated service names, CTA labels, plans, contact details and navigation data in shared data/configuration where practical.
- Do not introduce fabricated icons, statistics or client logos.
- Do not change the hero palette or replace its artwork.

ACCEPTANCE CRITERIA
- Components have consistent spacing, typography and interactive states.
- Light and dark variants are coherent.
- No major page content is rewritten in this stage.
- Existing pages continue to render.
- The project builds and available checks pass.

STOP after this stage.

Return:
- components created, reused or removed;
- shared data/configuration introduced;
- files changed;
- checks run;
- page-specific work intentionally deferred.
```

---

# Prompt 4 — Homepage

```text
You are implementing Stage 4: the Peerprise homepage.

Read Sections 5, 20, 22 and 24 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved homepage copy and section order from Section 5 unless an existing verified testimonial requires preserving its authorised attribution.

CRITICAL HERO CONSTRAINT
Preserve the current hero colour scheme, gradients, artwork, visual identity and overall composition. Do not replace it with a generic light hero. Keep the approved H1 exactly:
“Your entire digital presence, managed by one reliable team.”

Update supporting copy and CTA labels to the exact master-spec content. Refine example dashboard/task content only where needed to remove unsupported metrics or fabricated claims. Any visual-content changes must maintain the current design character.

IMPLEMENT THESE SECTIONS
1. Hero
2. The problem
3. Services
4. Run / Improve / Build / Scale model
5. Audience
6. Engineering credibility
7. Selected team experience preview and disclosure
8. Process
9. Managed plans teaser
10. Testimonials
11. Engineering partnership callout
12. Homepage FAQ
13. Final CTA

REQUIREMENTS
- Follow the hybrid visual rhythm: approved dark hero, readable light sections, selective dark authority sections.
- Keep managed digital presence clearly primary.
- Present custom software and engineering partnerships as high-value secondary routes.
- Use the exact “Selected team experience” disclosure.
- Do not present previous-employment work as Peerprise client work.
- Do not use an auto-rotating testimonial carousel.
- Remove analytics, SEO, traffic, paid marketing and lead-generation wording.
- Do not invent performance numbers.
- Ensure every CTA routes to the approved destination.
- Optimise section composition for mobile, tablet and desktop.

ACCEPTANCE CRITERIA
- The hero retains its approved visual identity.
- All Section 5 content is represented without unnecessary repetition.
- The main offer is immediately understandable.
- The three audience routes are clear.
- Testimonials are visible in a grid on desktop and stacked on mobile.
- No unsupported claims or fake metrics remain.
- The page is fully responsive and keyboard accessible.
- The project builds and available checks pass.

STOP after completing the homepage.

Return:
- files changed;
- section/component mapping;
- any copy deviations and why;
- exact hero changes, if any;
- checks run.
```

---

# Prompt 5 — Services overview page

```text
You are implementing Stage 5: the Services Overview page.

Read Section 6 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved copy. Reuse the global PageHero, service cards, CTA and layout components.

SCOPE
- Build or update the Services Overview page.
- Include the hero, Managed Services section, Engineering Services section, service-progression explanation and final CTA.
- Clearly separate managed support from engineering delivery without making them appear like unrelated companies.
- Link each service card to its correct service route.
- Use visual treatments derived from the existing hero palette.
- Keep long-form areas readable on light neutral surfaces.
- Do not add technologies, statistics, marketing claims or unapproved services.

ACCEPTANCE CRITERIA
- Copy matches Section 6.
- Five service routes are discoverable.
- Managed services remain the primary entry route.
- Custom Software and Engineering Partnerships remain prominent secondary routes.
- Page is responsive, accessible and consistent with the homepage.
- Build and available checks pass.

STOP after this page.

Return files changed, routes used, deviations, unresolved issues and checks run.
```

---

# Prompt 6 — Website Care and Support page

```text
You are implementing Stage 6: Website Care and Support.

Read Section 7 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved copy and reuse existing shared components.

IMPLEMENT
- Hero and both approved CTAs
- What we handle
- Benefits / ownership section
- Supported platforms
- Scope boundaries
- Request workflow
- Service-specific FAQ
- Final CTA

REQUIREMENTS
- Make the service feel technically credible, not like a low-cost maintenance gig.
- Clearly distinguish routine monthly work from redesigns, migrations, integrations and custom development.
- Do not claim formal security audits, 24/7 support or guaranteed completion times.
- Use list and card patterns that remain easy to scan on mobile.
- Link to Digital Review and Plans routes.
- Use British English and exact service terminology.

ACCEPTANCE CRITERIA
- Scope and exclusions are easy to understand.
- No “unlimited changes” claim appears.
- Platform support is conditional on technical review.
- FAQ behaviour is accessible.
- Page matches the established visual system and builds successfully.

STOP after this page and report files, route decisions, copy deviations and checks.
```

---

# Prompt 7 — Social Presence Support page

```text
You are implementing Stage 7: Social Presence Support.

Read Section 8 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved copy.

IMPLEMENT
- Hero
- Included services
- “What this service is—and is not” section
- Client responsibilities
- Brief / Plan / Create / Approve / Publish process
- Service-specific FAQ
- Final CTA

CRITICAL POSITIONING
This is professional presence and publishing support, not performance marketing.

Do not add or imply:
- paid advertising;
- traffic generation;
- lead generation;
- follower growth;
- marketing analytics;
- influencer outreach;
- full community management;
- advanced production unless separately scoped.

REQUIREMENTS
- Emphasise approvals, source material and factual accuracy.
- Keep imagery and icons restrained; do not make the page look like a playful social-media agency template.
- Link to Digital Review and Plans.
- Preserve the site’s engineering-led, premium visual character.

ACCEPTANCE CRITERIA
- Service boundaries are unmistakable.
- No marketing-performance claims remain.
- Process and client responsibilities are clear.
- Page is responsive, accessible and builds successfully.

STOP after this page and report files, deviations and checks.
```

---

# Prompt 8 — Digital Operations page

```text
You are implementing Stage 8: Digital Operations.

Read Section 9 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved copy.

IMPLEMENT
- Hero
- What we support
- Common situations
- Operational/engineering boundary section
- Review / Stabilise / Document / Improve process
- Service-specific FAQ
- Final CTA

REQUIREMENTS
- Explain forms, email routing, accounts, integrations, workflows and third-party tool ownership in practical language.
- Make clear that complex integrations, large migrations and custom systems are separately scoped.
- Do not add marketing analytics, attribution, SEO or traffic services.
- Do not imply penetration testing or managed cybersecurity.
- Reuse shared components and approved palette.
- Link to Digital Review, Custom Software and relevant managed plans where appropriate.

ACCEPTANCE CRITERIA
- The service is clearly differentiated from website care and custom software.
- Operational support has a visible escalation route to engineering.
- Boundaries and FAQ are accurate.
- Page is responsive, accessible and builds successfully.

STOP after this page and report files, deviations and checks.
```

---

# Prompt 9 — Custom Software page

```text
You are implementing Stage 9: Custom Software.

Read Section 10 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved copy.

IMPLEMENT
- Hero and approved CTAs
- What we build
- When custom software makes sense
- Engineering capabilities
- Six-stage delivery process
- Engagement options
- Estimation inputs
- FAQ
- Final CTA

REQUIREMENTS
- Present software development as serious, experienced and practical, while keeping it secondary to the site’s managed-presence homepage positioning.
- Use capability descriptions rather than a wall of technology logos.
- Do not invent enterprise claims, compliance certifications, team size, delivery guarantees or client relationships.
- Make “we will also say when an existing product is more sensible” visible and credible.
- Link to Selected Work and the software enquiry path.
- Use selective dark sections derived from the approved hero palette to strengthen engineering credibility.

ACCEPTANCE CRITERIA
- The page is credible to a CTO or product owner.
- Engagement models and estimation requirements are clear.
- No unsupported claims appear.
- Responsive, accessible and builds successfully.

STOP after this page and report files, deviations and checks.
```

---

# Prompt 10 — Engineering Partnerships page

```text
You are implementing Stage 10: Engineering Partnerships.

Read Section 11 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved copy.

IMPLEMENT
- Hero
- Who this is for
- Partnership models
- Capabilities
- Partnership delivery process
- Partnership principles
- FAQ
- Final CTA

REQUIREMENTS
- Target agencies, product teams, consultancies and larger organisations.
- Explain white-label delivery, dedicated capacity, defined workstreams and specialist support.
- Make non-solicitation, confidentiality, communication ownership, IP terms and senior oversight visible.
- Do not publish hourly rates or cheap developer pricing.
- Do not imply a larger permanent team than can be substantiated.
- Link to Selected Work and the partnership enquiry path.
- Maintain the premium engineering-led visual character.

ACCEPTANCE CRITERIA
- Agency buyers can understand how Peerprise protects their client relationship.
- Commercial models are clear without publishing unsupported pricing.
- Page is responsive, accessible and builds successfully.

STOP after this page and report files, deviations and checks.
```

---

# Prompt 11 — Managed Plans page

```text
You are implementing Stage 11: Managed Plans.

Read Section 12 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved plan names, starting prices, scope, capacity and explanatory copy unless the repository contains a newer explicitly approved commercial decision.

IMPLEMENT
- Plans hero
- Presence Care card
- Managed Presence card with subtle “Most selected” treatment
- Digital Operations Partner card
- Accessible desktop comparison table
- Stacked mobile comparison cards; do not use forced horizontal scrolling
- Important plan details
- Not included section
- Plans FAQ
- Final CTA

REQUIREMENTS
- Use “From” consistently.
- Do not use “unlimited”.
- Clearly distinguish response targets from completion guarantees.
- Explain onboarding/stabilisation, monthly capacity, additional work, contract terms and business hours.
- Keep software projects separate from managed-plan capacity.
- Do not add SEO, analytics, paid marketing, traffic or lead-generation services.
- Pricing must be stored in shared plan data where practical.

ACCEPTANCE CRITERIA
- Plans are easy to compare on all screen sizes.
- Scope boundaries protect delivery quality.
- No hidden or misleading unlimited-service language remains.
- Table semantics and keyboard accessibility are correct.
- Page builds successfully.

STOP after this page and report files, plan data changes, deviations and checks.
```

---

# Prompt 12 — Selected Work page

```text
You are implementing Stage 12: Selected Work.

Read Section 13 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved case-study copy and disclosure.

IMPLEMENT
- Hero
- Prominent “Selected team experience” disclosure
- Six approved case studies
- Context, contribution, capability demonstrated and tags for each
- Final software-project and partnership CTAs

CRITICAL EVIDENCE RULES
- Do not describe previous-employment or independent-engagement work as direct Peerprise client work.
- Do not add client logos unless explicit permission is already documented in the repository.
- Do not invent screenshots or confidential product interfaces.
- Where approved visuals are unavailable, use restrained abstract technical panels or simple diagrams derived from the brand system.
- Preserve the documented 65% result only if it is approved and already supported by the source material; otherwise flag it rather than silently changing it.

REQUIREMENTS
- Case studies must be easy to scan but contain meaningful technical context.
- Avoid a generic logo wall or technology-logo filler.
- Keep tags secondary to the business and engineering contribution.

ACCEPTANCE CRITERIA
- Disclosure is unmissable but professionally presented.
- Every case study follows a consistent structure.
- No false Peerprise client attribution appears.
- Responsive, accessible and builds successfully.

STOP after this page and report files, visual placeholders, evidence concerns and checks.
```

---

# Prompt 13 — How We Work page

```text
You are implementing Stage 13: How We Work.

Read Section 14 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved copy.

IMPLEMENT
- Hero
- Managed support process
- Software project process
- Engineering partnership process
- Working standards
- Final CTA

REQUIREMENTS
- Clearly show that delivery changes by engagement type while the operating standards remain consistent.
- Use accessible process-step components.
- Explain access, approvals, documentation, change control and offboarding without excessive legal language.
- Avoid claiming formal certifications or guarantees.
- Use the established hybrid theme and shared components.

ACCEPTANCE CRITERIA
- Visitors can identify the process relevant to them.
- Process numbering and headings remain clear on mobile.
- No duplicate homepage process copy is used unnecessarily.
- Responsive, accessible and builds successfully.

STOP after this page and report files, deviations and checks.
```

---

# Prompt 14 — About page

```text
You are implementing Stage 14: About Peerprise.

Read Section 15 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved copy.

IMPLEMENT
- Hero
- Why Peerprise exists
- Team structure
- Technical leadership
- Principles
- Remote/international working section
- Final CTA

CRITICAL CLAIM RULES
- Use seven years of professional software engineering experience, as approved for this website.
- Do not say “best engineers”.
- Do not invent employee count, office locations, certifications, awards or enterprise relationships.
- Do not make the page a personal founder biography.
- Explain the support-specialist plus engineering-team model credibly.
- Do not publish a physical address unless one is already confirmed as an official business location.

ACCEPTANCE CRITERIA
- Page feels credible and human without exaggeration.
- Team model explains how routine and complex work are handled.
- Principles are concrete rather than generic slogans.
- Responsive, accessible and builds successfully.

STOP after this page and report files, deviations and checks.
```

---

# Prompt 15 — Digital Presence Review page and redirect

```text
You are implementing Stage 15: Digital Presence Review.

Read Section 16 of:
/docs/Peerprise_Website_Master_Spec.md

Rename the visible service from “Free Health Check” to “Digital Presence Review”. Use the recommended route `/digital-review` and redirect the old `/health-check` route where the framework supports a proper permanent redirect.

IMPLEMENT
- Hero
- What we review
- What the client receives
- Exact limitation/disclaimer language
- Form with approved fields and options
- Consent statement
- Validation, loading, error and success states
- Route redirect

REQUIREMENTS
- Remove analytics review, SEO scoring, traffic assessment and marketing recommendations.
- Do not call it a formal security audit, penetration test, legal review, accessibility certification or due-diligence exercise.
- Do not promise a fixed turnaround time.
- Never request passwords, API secrets, private keys or credentials.
- Use visible labels and accessible error messages.
- Preserve existing backend/form integration where sound; adapt field names carefully and document any required server-side updates.

ACCEPTANCE CRITERIA
- Old route redirects correctly.
- Form is accessible and behaves correctly for success and failure.
- No “free audit” or marketing-performance wording remains.
- Responsive and builds successfully.

STOP after this page and report files, redirect implementation, form integration changes and checks.
```

---

# Prompt 16 — Contact page

```text
You are implementing Stage 16: Contact.

Read Section 17 of:
/docs/Peerprise_Website_Master_Spec.md

Use the exact approved copy, fields, options, consent text and submit label.

IMPLEMENT
- Hero
- Enquiry form
- “What happens next” process
- General enquiry email
- Introductory-call CTA only if a real working scheduling URL is already configured
- Loading, validation, error and success states

REQUIREMENTS
- Preserve existing form delivery/backend integration where sound.
- Never request passwords or credentials.
- Budget and start-period fields remain optional.
- Do not expose or invent a scheduling link.
- If no valid booking link exists, omit the button and report it as pending.
- Use visible labels, accessible error messaging and a meaningful success state.
- Ensure enquiry types map cleanly to internal handling.

ACCEPTANCE CRITERIA
- Form works end to end in the available environment or reports the exact external dependency preventing verification.
- Consent text is readable.
- No fake booking link appears.
- Responsive, accessible and builds successfully.

STOP after this page and report files, integration details, unverified external dependencies and checks.
```

---

# Prompt 17 — Insights index cleanup

```text
You are implementing Stage 17: Insights.

Read Section 18 of:
/docs/Peerprise_Website_Master_Spec.md

Rename the displayed navigation/page label from “Blog” to “Insights”. The existing `/blog` route may remain if changing it would create unnecessary migration risk.

IMPLEMENT
- Approved Insights hero
- Approved category set
- Consistent article-card format
- Existing article listing adapted to shared components
- Remove newsletter section completely until a real consent-aware mailing service exists
- Remove public placeholder copy

REQUIREMENTS
- Remove categories and copy focused on SEO, analytics, paid marketing or traffic generation.
- Do not rewrite all article bodies in this stage.
- Flag existing articles whose content materially conflicts with the approved service boundaries.
- Preserve publication dates and authorship where accurate.
- Keep the page readable and consistent with the rest of the site.

ACCEPTANCE CRITERIA
- “Insights” is used consistently in visible navigation and headings.
- Newsletter placeholder is gone.
- Article cards include category, date, reading time, title, summary and link where data exists.
- Responsive, accessible and builds successfully.

STOP after this page and report files, conflicting existing articles and checks.
```

---

# Prompt 18 — Privacy and Terms production cleanup

```text
You are implementing Stage 18: Privacy and Terms production cleanup.

Read Section 19 of:
/docs/Peerprise_Website_Master_Spec.md

IMPORTANT
Do not invent legal facts, the registered legal entity, governing jurisdiction, data processors, retention periods or contractual terms.

SCOPE
1. Inspect the existing Privacy and Terms pages.
2. Remove any public text that literally says the page is a placeholder, template or awaiting completion.
3. Preserve substantive existing wording only where it is accurate and does not conflict with known implementation facts.
4. Refactor the pages into clean, readable legal-page layouts using the established design system.
5. Add code comments or an internal documentation checklist—not public UI text—identifying missing legal inputs listed in Section 19.
6. Verify that form, scheduling, hosting, cookie and third-party-tool references match the actual implementation wherever these facts can be confirmed from the repository.
7. If accurate production-ready legal copy cannot be completed from confirmed facts, do not fabricate it. Report the blocking inputs clearly and leave the safest existing substantive text in place for external legal review.

REQUIREMENTS
- No public “placeholder” banner or note.
- No fabricated compliance claims.
- No cookie banner unless the actual site behaviour requires one and the project already has an approved implementation.
- Keep legal pages linked from the footer.

ACCEPTANCE CRITERIA
- Pages look production-standard.
- Public placeholder language is gone.
- Missing legal facts are documented internally and reported.
- Build and available checks pass.

STOP after this stage and report files, confirmed facts, unresolved legal inputs and checks.
```

---

# Prompt 19 — Responsive, accessibility and content consistency QA

```text
You are implementing Stage 19: site-wide QA.

Read Sections 20–22 of:
/docs/Peerprise_Website_Master_Spec.md

Do not redesign approved pages. Perform a disciplined quality pass across the completed implementation.

RESPONSIVE QA
Test representative widths for mobile, tablet, laptop and wide desktop. Correct:
- horizontal overflow;
- clipped hero artwork;
- unreadable text widths;
- broken grids;
- cramped cards;
- mobile navigation issues;
- comparison-table behaviour;
- form layout problems;
- footer wrapping;
- inconsistent section spacing.

ACCESSIBILITY QA
Verify and fix:
- semantic heading order;
- landmarks;
- keyboard navigation;
- visible focus;
- dropdown and accordion ARIA state;
- mobile-menu focus management;
- contrast;
- form labels and errors;
- alt text and decorative-image handling;
- minimum target sizes;
- reduced-motion behaviour;
- no essential hover-only content.

CONTENT CONSISTENCY QA
Search the complete repository and correct:
- “Free Health Check” to approved terminology;
- analytics-service claims;
- SEO-service claims;
- traffic/follower/lead-generation claims;
- paid-marketing claims;
- “unlimited” support claims;
- unsupported metrics;
- inconsistent service names;
- inconsistent CTA labels;
- US spellings where the approved copy uses British English;
- previous-employment work presented as direct Peerprise client work;
- public placeholder text.

HERO PROTECTION
Preserve the approved hero palette and identity. Fix only genuine responsive or accessibility defects and report each change.

ACCEPTANCE CRITERIA
- All pages work at representative widths.
- Keyboard-only navigation is usable.
- No known prohibited claim remains in visible content.
- Shared labels and terminology are consistent.
- Build, lint, type checks and tests pass where configured.

STOP after QA. Report every file changed, tests run, unresolved issues and any manual checks still required.
```

---

# Prompt 20 — Final production review

```text
You are implementing Stage 20: final production review for Peerprise.

Read the complete:
/docs/Peerprise_Website_Master_Spec.md

Do not make broad design changes. Treat this as a release-readiness audit followed by focused fixes.

VERIFY
1. Every header, footer, card and CTA link.
2. All service routes, Plans, Work, How We Work, About, Insights, Contact, Digital Review, Privacy and Terms.
3. `/health-check` redirect behaviour.
4. Contact and Digital Review form validation, loading, error and success states.
5. External email and scheduling links.
6. No broken images or missing assets.
7. No public placeholder text, TODOs or development-only labels.
8. No unsupported statistics, client claims or fake dashboards.
9. No SEO, analytics, paid-marketing, traffic, follower-growth or lead-generation service claims.
10. No secrets, credentials or private environment values exposed to the client bundle.
11. Build, lint, type checks and tests.
12. Console errors and warnings on major pages.
13. Basic performance issues caused by oversized assets, unnecessary client JavaScript or broken animation.
14. Correct responsive behaviour on representative screen sizes.
15. Preservation of the approved hero palette, gradients and identity.

FIX
Make only focused, low-risk corrections found during review. Do not add new features or rewrite approved content.

DELIVER A FINAL REPORT WITH
- production-readiness status;
- files changed;
- commands/checks run and results;
- all routes verified;
- form behaviour verified or exact external blockers;
- unresolved legal, content or asset approvals;
- any remaining launch blockers ranked Critical, High, Medium or Low;
- confirmation that the existing hero identity was preserved.

STOP after the final report.
```

---

# Completion checklist

The implementation is complete only when:

- The existing hero still looks like the hero you approved.
- Managed digital presence is clearly the primary offer.
- Custom Software and Engineering Partnerships have credible separate paths.
- All approved pages exist and use the master-spec copy.
- Social support is not presented as traffic, growth or performance marketing.
- Analytics and SEO services are not claimed.
- Managed plans have defined capacity and boundaries.
- Previous work is disclosed as selected team experience where required.
- Forms work and do not request sensitive credentials.
- Public placeholders are removed.
- Mobile, keyboard and accessibility behaviour are reviewed.
- Final links, routes, builds and console output are checked.
