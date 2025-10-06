## KetoSlim • React + Vite + TypeScript

A modern, accessible React application scaffolded with Vite and refined for strict TypeScript, clean architecture, and maintainability. It implements a multi-step flow: collect inputs on Home, show personalized Results, and present a Sales page.

### Highlights
- TypeScript strict with extra safety flags (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)
- ESLint configured for TypeScript, React Hooks, JSX a11y, Import order, and Prettier
- Tailwind v4 styling; dark mode via `html.dark` class managed by context
- Global form state with session persistence for resilient navigation/reloads
- Runtime validation using Zod; results derived via pure utilities
- ErrorBoundary and NotFound route for graceful failure handling

### Getting Started
1) Install dependencies
```bash
npm i
```
2) Run in development
```bash
npm run dev
```
3) Build and preview
```bash
npm run build && npm run preview
```

### Scripts
- dev: start Vite dev server
- build: production build
- preview: preview built app
- lint: run ESLint
- lint:fix: fix lint issues
- typecheck: run TypeScript without emitting

### Project Structure
```
src/
  components/
    common/          # Shared UI (DarkMode toggle, ErrorBoundary)
    home/            # Home page components (form fields, submit)
    result/          # Result UI (card, dots, nav)
    sales/           # Sales page components
  context/
    DarkModeContext.tsx   # Dark mode state + html class toggle
    FormContext.tsx       # Global form state with session persistence
  pages/
    Home.tsx         # Form collection, Zod validation, store to context
    Result.tsx       # Hydrates static data with user state
    Sales.tsx        # Sales presentation
  utils/
    formValidation.ts # Zod schema and coercion helpers
    results.ts        # Pure hydration logic for results
  types/
    index.ts          # Shared domain types
```

### Accessibility
- Inputs labeled; radio groups wrapped in `fieldset/legend`
- Buttons have semantic attributes; decorative SVGs are `aria-hidden`
- Links with `href="#"` converted to non-interactive controls where applicable

### Styling
- Tailwind utilities favored over inline styles
- Brand colors preserved; dark mode controlled by the `dark` class

### Notes
- If session storage is cleared or Results is opened directly, the app prompts to complete the form first.

### Tech Choices
- Vite for fast dev/build; React 19; Tailwind 4; Zod for runtime validation
- Module resolution tuned for Vite (`moduleResolution: Bundler`)

