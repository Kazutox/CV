# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

### Development
```bash
bun dev          # Start development server with hot reload
bun preview      # Preview production build
```

### Build
```bash
bun build        # Type-check and build for production
bun build-only   # Build without type-checking
bun type-check   # Run TypeScript type checking only
```

## Architecture

This is a Vue 3 + TypeScript CV/Resume application built with Vite. The project uses:

- **Vue 3** with Composition API (`<script setup>`)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Vite** as the build tool
- **Bun** as the package manager

### Key Structure

- `src/App.vue` - Main application component that imports and displays Introduction and Experience components
- `src/assets/data.json` - Contains all CV data (personal info, experience history)
- `src/components/` - Vue components:
  - `Introduction.vue` - Displays personal information
  - `Experience.vue` - Displays work experience
  - `ListItem.vue` - Reusable list component
  - `Icon.vue` - Icon wrapper component

The application follows a data-driven approach where CV content is stored in `data.json` and passed to components as props.