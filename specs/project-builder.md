# Project Builder

## Purpose

Add a programming project to the portfolio through a short interview, then
turn the answers into an accurate, visually supported case study on the
Projects page.

This spec is intended to be reused whenever another project is added.

## Workflow

### 1. Inspect the current site

- Check the current Git branch and working tree before making changes.
- Preserve unrelated user changes.
- Review the existing Projects page, shared navigation, and established visual
  patterns.
- Create a focused `feature/<description>` branch when branch creation is
  available.

### 2. Interview the portfolio owner

Interview one project at a time. Ask short follow-up questions instead of
presenting one large questionnaire.

Capture:

- Project name.
- One-sentence description.
- The problem or client need.
- The intended users.
- The portfolio owner's responsibilities and personal contribution.
- Design or client collaboration.
- Frontend, backend, database, infrastructure, and third-party services.
- Important technical decisions and why they were made.
- The most difficult or interesting challenge and how it was solved.
- Constraints, trade-offs, or limitations.
- Outcome and current project status.
- Year built or launched.
- Live-site and public source-code links.

Do not invent missing claims, outcomes, metrics, or responsibilities. Ask for
clarification when a missing detail would materially affect the case study.

### 3. Prepare the project content

Turn the interview into concise portfolio copy containing:

- Project title and year.
- Project type, such as client, personal, or collaborative work.
- A short value-focused summary.
- Technology tags.
- A brief explaining the original need.
- An approach section explaining the solution and the owner's contribution.
- A challenge section covering a meaningful technical decision or trade-off.
- Live-site and source links when available.

Use plain language. Explain why a technology mattered rather than listing tools
without context.

### 4. Gather project imagery

When a live site is available:

- Capture a representative landing or primary view.
- Capture up to two supporting views that demonstrate distinct functionality.
- Use a consistent desktop viewport and crop treatment.
- Inspect every capture for loading failures, overlays, private information,
  or unintended content.
- Store optimized WebP files under
  `public/images/projects/<project-slug>/`.
- Write meaningful alternative text describing what each screenshot
  demonstrates.

If screenshots cannot be captured, request suitable images from the portfolio
owner rather than substituting unrelated artwork.

### 5. Implement the entry

- Follow the repository's Vue, Nuxt UI, and Tailwind conventions.
- Keep the page semantic, accessible, and usable with a keyboard.
- Reuse existing components and patterns where practical.
- Ensure external links are clearly labelled and open safely.
- Build responsively from a minimum width of 320px.
- Keep `App.vue` focused on composition.
- Extract reusable project components when multiple entries make repetition
  significant; avoid premature abstraction for a single entry.
- Do not add dependencies unless the existing stack cannot reasonably support
  the required behaviour.

## Acceptance criteria

A project is complete when:

- The published copy accurately reflects the interview.
- The owner's contribution is clear.
- The project explains the user or client problem, solution, and a meaningful
  engineering challenge.
- All provided links render correctly.
- Screenshots load, have useful alternative text, and remain legible across
  responsive layouts.
- The page has no horizontal overflow at 320px.
- Navigation remains usable at 320px and larger widths.
- Focus states and colour contrast remain visible.
- No unrelated working-tree changes were overwritten.

## Validation

Run:

1. `yarn lint`
2. `yarn build`
3. `git diff --check`

For visual changes, also:

- Start the site with `yarn dev`.
- Inspect the Projects page at desktop width.
- Inspect it at an exact 320px viewport and confirm the document has no
  horizontal overflow.
- Test every live-site and source-code link.
- Review the complete project card, including content below the initial
  viewport.

Report the files changed, validation results, and any limitation that could not
be checked.
