# AGENTS.md

## Project overview

This repository is a minimal portfolio frontend built with Vue 3 and Vite. It uses Nuxt UI v4 as its component library and Tailwind CSS v4 for styling.

Key files:

* `src/App.vue` contains the application shell and root view.
* `src/main.js` creates the Vue application, installs the Nuxt UI plugin, and imports the global styles.
* `src/assets/main.css` contains the Tailwind and Nuxt UI imports, along with global base styles.
* `vite.config.js` configures Vue and Nuxt UI. Nuxt UI routing is disabled.

## Git workflow

* Before making implementation changes, inspect the current branch and working tree so existing user changes are preserved.
* When Git branch creation is available, create a separate branch for each piece of work.
* Name branches using a short, lowercase, kebab-case description:

  * `feature/x` for new functionality, such as `feature/project-gallery`.
  * `fix/x` for bug fixes, such as `fix/mobile-navigation`.
  * `chore/x` for maintenance or tooling changes.
* If the environment manages branches externally or does not permit branch creation, continue on the provided branch.
* Do not commit, amend, push, force-push, merge, rebase, or open pull requests. The repository owner handles commits and remote Git operations.
* Do not discard, overwrite, or revert unrelated working-tree changes.
* If existing changes overlap with the requested work, inspect and preserve their intent. If the changes cannot be integrated safely, stop before modifying the affected files and explain the conflict.

## Development conventions

* Use Vue 3 Single-File Components (`.vue`) and the Composition API for new interactive components.
* Prefer `<script setup>` when a component requires script logic.
* Do not add a script block when the template and styles are sufficient.
* Keep `App.vue` focused on application composition.
* Put reusable UI in `src/components/`, creating the directory when it is first needed.
* Name Vue component files in PascalCase, such as `ProjectCard.vue`.
* Keep component props and emitted events explicit.
* Use one-way data flow and avoid hidden shared mutable state.
* Follow the existing JavaScript style:

  * ES modules.
  * Single quotes.
  * No semicolons.
* Keep changes focused on the requested work.
* Avoid unrelated refactors, abstractions, formatting changes, and new dependencies.

## UI and styling

* Reuse Nuxt UI components before building custom equivalents.
* Nuxt UI is installed through `@nuxt/ui/vue-plugin`, and its Vite plugin is configured in `vite.config.js`.
* Nuxt UI components are auto-imported and use names such as `UApp`, `UButton`, `UCard`, and `UContainer`.
* Use Tailwind CSS utility classes for layout, spacing, responsive behaviour, and routine visual styling.
* Reserve `src/assets/main.css` for global resets, theme-level rules, and styles genuinely shared across the application.
* Keep component-specific CSS in scoped `<style>` blocks when utilities are insufficient.
* Preserve the existing global font stack and neutral light-page defaults unless the requested feature explicitly changes the visual direction.
* Build responsive layouts from a minimum viewport width of 320px upward.
* Use semantic HTML and accessible labels.
* Ensure keyboard usability, visible focus states, meaningful alternative text, and sufficient colour contrast.
* Avoid using colour alone to communicate state or meaning.

## Validation

* Run `npm run build` after implementation. This is the repository's current compile-time validation.
* For visual or interactive changes, also inspect the result using `npm run dev` when browser preview is supported.
* There are currently no configured lint or test scripts.
* Do not claim that linting or automated tests were run unless the relevant tooling has been added and the commands were executed.
* Do not edit generated declaration files such as `auto-imports.d.ts` or `components.d.ts` manually. Allow the configured tooling to regenerate them.
* If validation fails, determine whether the failure was introduced by the current changes.
* Report unresolved failures clearly, including the command that failed and a concise summary of the error.

## Dependency policy

* Use the existing Vue, Nuxt UI, Tailwind CSS, and browser capabilities before adding a package.
* Add a dependency only when the requested behaviour cannot reasonably be implemented using the existing stack.
* When a dependency is required, explain why it is necessary.
* Keep changes to `package.json` and `package-lock.json` together.
* Use npm because the repository is npm-based and includes `package-lock.json`.
* Do not use Yarn, pnpm, or Bun, and do not create their lockfiles.
* Do not upgrade existing dependencies unless the requested work requires it.

## Completion report

After completing the work:

* Summarize the behaviour implemented.
* List the files that were changed.
* State which validation commands were run and whether they passed.
* Mention any assumptions, limitations, or validation steps that could not be completed.
