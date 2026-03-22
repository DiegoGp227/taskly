# Taskly

**Taskly** is a full-stack task management web application that lets users organize their work into custom topic boards, each with its own task pipeline — from *To Do* to *Complete*.

Built as a personal project to demonstrate proficiency in modern frontend development with React, TypeScript, and a REST API integration.

---

## Live Demo

> *Coming soon / [add your deploy URL here]*

---

## Screenshots

> *Add screenshots or a GIF demo here*

---

## What it does

Users can sign up, log in, and immediately start organizing their work:

1. **Create topic boards** — group tasks by project, area, or any category you define.
2. **Add tasks with priority** — each task has a title and a priority level so nothing gets lost.
3. **Track progress visually** — tasks live in two clear columns: *To Do* and *Complete*.
4. **Full control** — edit or delete any task or topic at any time.
5. **Persistent sessions** — authentication state is preserved across page refreshes.

---

## Technical highlights

- **React 19 + TypeScript** — strict typing throughout the entire component tree, from props to API responses.
- **React Router 7** — client-side navigation with protected and dynamic routes.
- **Component architecture** — UI split into small, focused, reusable components with clear separation between pages and logic.
- **CSS Modules** — scoped styles per component with zero class name conflicts.
- **REST API integration** — async data fetching with proper loading and error handling, consuming a Node.js backend.
- **Token-based auth** — JWT flow with secure session management on the client side.
- **Vite** — fast build tooling with Hot Module Replacement for an efficient development experience.

---

## Stack

| | |
|---|---|
| Language | TypeScript 5 |
| UI library | React 19 |
| Routing | React Router 7 |
| Build tool | Vite 6 |
| Styling | CSS Modules |
| Backend | Node.js REST API |

---

## Run it locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Requires the backend running at `http://localhost:5000`.

---

## About

Built end-to-end by me as a portfolio project — from UI design and component architecture to API integration and authentication flow.
