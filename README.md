# Daniel Saenz Portfolio Website

Welcome to the **Daniel Saenz Portfolio**, a fully automated, modern web portfolio showcasing my projects and professional experience.

---

## 🚀 Project Overview

This repository powers my personal portfolio site, featuring:

* **Landing sections**: About Me, Projects, Experience, Education, and Skills
* **Projects showcase**: Deep dive projects I've built.
* **Experience timeline**: Highlights of my DevSecOps and Software Engineering roles
* **AI assistant**: Bilingual chat experience for questions about my professional background
* **Scroll polish**: Responsive reveal animations and a subtle scroll progress indicator
* **Contact section**: Email and social links are provided in Hero page

The site is built with React and Chakra UI, deployed to AWS S3 + CloudFront and GitHub Actions for continuous integration and delivery.

---

## 🛠 Technologies

* **Frontend**: React, Vite, Chakra UI
* **Animation**: Framer Motion
* **Testing**: Vitest, React Testing Library, JSDOM, V8 coverage
* **CI/CD**: GitHub Actions
* **Hosting**: AWS S3 (static site), CloudFront (CDN)
* **Security & Quality**: ESLint, CI checks, test coverage reports, automated CloudFront invalidations

---

## 💻 Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/disaenz/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**

   ```bash
   npm ci
   ```

3. **Run in development mode**

   ```bash
   npm run dev
   ```

4. **Configure environment variables**

   Create a local `.env` file from `.env.example` and set:

   ```env
   VITE_API_BASE_URL=https://api.daniel-saenz.com
   VITE_GA_MEASUREMENT_ID=G-E0WK4XLM0P
   ```

   Google Analytics is disabled automatically when `VITE_GA_MEASUREMENT_ID` is not set.

5. **Open in browser**
   Visit `http://localhost:5173` to view live-reloading changes.

---

## 🔧 Build & Test

* **Run ESLint**

  ```bash
  npm run lint
  ```

* **Run unit tests**

  ```bash
  npm run test
  ```

* **Run tests with coverage**

  ```bash
  npm run test:coverage
  ```

* **Run the CI test command**

  ```bash
  npm run test:ci
  ```

  This generates coverage output plus a JUnit XML report at `coverage/junit.xml`.

* **Generate a local coverage summary**

  ```bash
  npm run coverage:summary
  ```

* **Build for production**

  ```bash
  npm run build
  ```

* **Preview production build**

  ```bash
  npm run preview
  ```

---

## 🚀 Deployment

This project separates CI and CD workflows:

* **CI checks** (`.github/workflows/ci.yml`): Runs on pull requests to `main`
  * `Lint` and `Unit Tests & Coverage` run in parallel
  * `Build` runs after lint and tests pass
  * Coverage and JUnit reports are uploaded as GitHub Actions artifacts
  * Coverage totals are added to the GitHub Actions job summary
* **CD deploy** (`.github/workflows/cd.yml`): Runs when code is pushed to `main`
  * Builds the production site
  * Uploads the `dist/` artifact
  * Syncs `dist/` to S3
  * Invalidates CloudFront so users see the latest content immediately

### GitHub Actions Variables

The production build reads Vite environment values during GitHub Actions:

* **Repository secret**: `VITE_API_BASE_URL`
* **Repository variable**: `VITE_GA_MEASUREMENT_ID`

Use `G-E0WK4XLM0P` for `VITE_GA_MEASUREMENT_ID`. This value is safe as a repository variable because GA4 Measurement IDs are included in the public browser bundle.


## 📜 Fork & Attribution

This repository is a personal portfolio maintained by Daniel Saenz. Feel free to fork and adapt it for your own use. If you do, please credit the original author in your project documentation or README.
This project is open source under the [MIT License](./license.md).  

---

© 2025 Daniel Saenz
