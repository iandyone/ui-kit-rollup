# ui-kit-rollup

Small React UI component library built with Rollup and TypeScript.

The project is used to practice package builds, TypeScript declarations,
Storybook documentation, browser tests, visual regression checks, and CI/CD for a
component library.

## Status

This is a training project. The package is not currently published to npm.

## Features

- React components written in TypeScript
- ESM and CommonJS package builds
- Generated `.d.ts` files
- Subpath exports such as `ui-kit-rollup/button`
- Extracted CSS bundle
- Storybook documentation
- Storybook interaction tests with Vitest and Playwright
- Chromatic visual regression checks
- GitHub Actions build, lint, test, and visual regression workflow

## Project Structure

```text
.
├─ .github/workflows/
│  └─ build-tests.yml           # Build, lint, test, and Chromatic checks
├─ .storybook/                  # Storybook configuration
├─ dist/                        # Generated package output
├─ src/                         # Component source code
│  ├─ button/                   # Button component files
│  ├─ input/                    # Input component files
│  ├─ typography/               # Typography component files
│  ├─ global.d.ts               # CSS module declarations
│  └─ index.ts                  # Root public entry point
├─ .nvmrc                       # Local Node.js version
├─ package.json                 # Package metadata, scripts, exports, dependencies
├─ package-lock.json            # npm lockfile
├─ rollup.config.mjs            # JavaScript and CSS bundle configuration
├─ tsconfig.json                # TypeScript config used by Rollup
├─ tsconfig.build.json          # Declaration files build config
├─ README.md                    # Project documentation
├─ eslint.config.mts            # ESLint flat config
├─ vitest.config.ts             # Vitest and Storybook test integration
└─ chromatic.config.json        # Chromatic visual regression config
```

## Components


| Component    | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| `Button`     | Clickable action component with visual variants.                       |
| `Input`      | Controlled text input with label, description, and error states.       |
| `Typography` | Text component for headings, body text, captions, colors, and weights. |


Detailed prop documentation and interactive examples live in Storybook.



## Requirements

- Node.js `>=22.14.0`
- npm
- React and React DOM `^18.0.0 || ^19.0.0` in the consumer application

The project uses `package-lock.json`, so `npm ci` is the recommended install  
command for development and CI.

## Development

Install dependencies:

```bash
npm ci 
```

Run Storybook:

```bash
npm run storybook
```

Available scripts:


| Command                   | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| `npm run build`           | Builds JavaScript, CSS, and TypeScript declarations.     |
| `npm run build:js`        | Runs Rollup and creates ESM, CommonJS, and CSS output.   |
| `npm run build:types`     | Generates declaration files into `dist/types`.           |
| `npm run storybook`       | Starts Storybook locally.                                |
| `npm run build-storybook` | Builds static Storybook output.                          |
| `npm run test`            | Runs Storybook-based tests with Vitest and Playwright.   |
| `npm run lint`            | Runs ESLint for source files.                            |
| `npm pack`                | Creates a local tarball; `prepack` runs the build first. |


## Usage

Import the CSS bundle once in the consumer application:

```tsx
import 'ui-kit-rollup/styles.css';
```

Use components from the root package entry:

```tsx
import { Button, Input, Typography } from 'ui-kit-rollup';

export function Example() {
  return (
    <>
      <Typography variant='h2'>Form</Typography>
      <Input label='Name' placeholder='Enter your name' />
      <Button label='Submit' />
    </>
  );
}
```

Or use subpath imports:

```tsx
import { Button } from 'ui-kit-rollup/button';
import { Input } from 'ui-kit-rollup/input';
import { Typography } from 'ui-kit-rollup/typography';
```

## Package Output

The build creates the package contents in `dist`:


| Path                     | Description                       |
| ------------------------ | --------------------------------- |
| `dist/es`                | ESM build with `.js` files.       |
| `dist/cjs`               | CommonJS build with `.cjs` files. |
| `dist/types`             | TypeScript declaration files.     |
| `dist/assets/styles.css` | Extracted CSS bundle.             |


Public entry points are defined through `package.json` `exports`. Each entry  
maps to ESM, CommonJS, and TypeScript declaration files.

## Testing and Visual Regression

The project uses Storybook stories as the main documentation and testing surface.

- Storybook stores component examples and interaction scenarios.
- Vitest runs Storybook-based tests.
- Playwright provides the browser runtime for those tests.
- Test coverage is written to `coverage/`.
- Chromatic runs visual regression checks against Storybook snapshots.

## Local Package Testing

Use a local tarball to test the library as a real installed dependency.

From this project:

```bash
npm run build
npm pack
```

Then install the generated archive in a local consumer project:

```bash
npm install ../path/to/ui-kit-rollup-1.0.0.tgz
```

This validates the package metadata and generated output that a registry consumer would receive: `files`, `exports`, ESM/CJS entry points, declaration files, and the CSS export.

## CI/CD

The current GitHub Actions workflow is `.github/workflows/build-tests.yml`.

It runs dependency installation, library build, linting, browser tests, Chromatic
visual regression checks, and build/coverage artifact upload.

## Publishing Notes

npm publishing is not configured for this project.

Package preparation details:

- `prepack` runs the build before packing.
- `files: ["dist"]` limits package contents to generated output.
- `exports` defines the public API surface for root and subpath imports.
- The package supports ESM and CommonJS consumers.
- Package name and registry settings should be updated before real publishing.

