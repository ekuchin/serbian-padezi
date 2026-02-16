# Serbian Padezi (Cases) Reference

An interactive reference tool for Serbian noun cases (padezi), built with Vue 3, TypeScript, and Vite.

## Features

- **Interactive Selector**: Choose gender (masculine, feminine, neuter), number (singular, plural), and case (nominative, genitive, dative, accusative, locative, instrumental)
- **Real-time Display**: View endings, typical prepositions, and example words based on your selection
- **Clean UI**: Simple, responsive interface with gradient background

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Code Quality

Lint code:

```bash
npm run lint
```

Format code:

```bash
npm run format
```

## Project Structure

- `/src/components/` — Vue components (CaseSelector, ResultDisplay)
- `/src/data/` — Serbian grammar data for all cases
- `/src/App.vue` — Main app component
- `/src/main.ts` — Application entry point

## Technologies

- **Vue 3** — Progressive JS framework
- **TypeScript** — Type-safe development
- **Vite** — Next-gen build tool
- **ESLint** — Code linting
- **Prettier** — Code formatting
