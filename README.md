# Code Wallet

> A desktop application for developers to store, organize, and easily retrieve code snippets.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Build](#build)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Code Wallet** is a desktop app built with Electron and React that helps developers efficiently manage their code snippets locally. It supports syntax highlighting, tagging, and clipboard copy features, aiming to improve developer productivity.

---

## Features

- Store and organize code snippets locally (using `localStorage`)
- Add, edit, and delete snippets
- Tag snippets for easy categorization
- Syntax highlighting for multiple languages (JavaScript, HTML, CSS, Python, etc.)
- Copy snippet code to clipboard with one click
- Simple and intuitive multi-page UI (Fragments list, Snippet form, Info page)
- Built-in developer info and legal mentions page

---

## Technologies

- **Electron** – Desktop application framework
- **React** – UI components
- **Vite** – Frontend build tool
- **CodeMirror** – Code editor with syntax highlighting
- **Shiki** – Syntax highlighter for code snippets
- **Tailwind CSS & shadcn UI** – Styling and UI components
- **electron-store** – Optional for local persistent storage (if you want to upgrade from localStorage)
- **React Router** – Page navigation inside the app

---
(the build version doesn't work)
## Installation

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Steps

```bash
# Clone the repo
git clone https://github.com/RDmoonk/code-wallet-everyday-dev.git

# Navigate to project folder
cd electron-vite-code-wallet

# Install dependencies
npm install
# or
yarn install



```
electron-vite-code-wallet
├─ .eslintrc.cjs
├─ components.json
├─ electron
│  ├─ electron-env.d.ts
│  ├─ main.ts
│  └─ preload.ts
├─ electron-builder.json5
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ electron-vite.animate.svg
│  ├─ electron-vite.svg
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ form
│  │  │  ├─ editor.tsx
│  │  │  └─ snippetForm.tsx
│  │  ├─ infos
│  │  │  └─ infos.tsx
│  │  ├─ snippetComponents
│  │  │  ├─ snippet.tsx
│  │  │  └─ snippetPage.tsx
│  │  └─ ui
│  │     ├─ badge.tsx
│  │     ├─ button.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     └─ navigation-menu.tsx
│  ├─ global.css
│  ├─ index.css
│  ├─ lib
│  │  └─ utils.ts
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```