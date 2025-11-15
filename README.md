# React Mini-App (Dashboard + Hooks)

## Description

This is a small React application built with **TypeScript** and **Vite**.
It demonstrates a dashboard with:

* A list of projects with a **search filter**
* Project details page via **React Router**
* A **custom hook (`useProjects`)** for fetching data (mocked locally)
* Minimalist styling for better readability
* Accessibility (A11y) with at least one `aria-*` attribute
* Unit tests with **Vitest** and **React Testing Library**

---

## Requirements

* Node.js >= 18
* Yarn >= 1.22

---

## Installation & Run Instructions

### 1. Install dependencies

```bash
yarn install
```

> This will install all required packages, including React, Vite, TypeScript, ESLint, Prettier, Vitest, and Testing Library.

### 2. Run the development server

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.


---

## Running Tests

### Run all tests once

```bash
yarn test
```

### Run tests in watch mode (auto-re-run on changes)

```bash
yarn test:watch
```

> All components have **co-located tests** using **Vitest** and **React Testing Library**.

---

## ESLint & Prettier

Check code with ESLint:

```bash
yarn lint
```

Format code with Prettier:

```bash
yarn format
```

> ESLint + Prettier are configured for **React + TypeScript + tests**.

---

## Project Structure

```
src/
│
├── components/          # React components (e.g., ProjectCard)
├── pages/               # Pages (ProjectsList, ProjectDetails)
├── hooks/               # Custom hooks (useProjects)
├── tests/               # Global test setup for Vitest + RTL
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── types.ts             # Type definitions
```

## Author

* Azamat Badri
