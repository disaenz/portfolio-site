# Daniel Saenz Portfolio Website

Welcome to the **Daniel Saenz Portfolio**, a fully automated, modern web portfolio showcasing my projects and professional experience.

---

## 🚀 Project Overview

This repository powers my personal portfolio site, featuring:

* **Landing sections**: About Me, Projects, Experience, Education, and Skills
* **Projects showcase**: Deep dive projects I've built.
* **Experience timeline**: Highlights of my DevSecOps and Software Engineering roles
* **Contact section**: Email and social links are provided in Hero page

The site is built with React and Chakra UI, deployed to AWS S3 + CloudFront and GitHub Actions for continuous integration and delivery.

---

## 🛠 Technologies

* **Frontend**: React, Vite, Chakra UI
* **CI/CD**: GitHub Actions
* **Hosting**: AWS S3 (static site), CloudFront (CDN)
* **Security & Quality**: ESLint, CI checks, CodeQL, automated CloudFront invalidations

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

4. **Open in browser**
   Visit `http://localhost:5173` to view live-reloading changes.

---

## 🔧 Build & Test

* **Run ESLint**

  ```bash
  npm run lint
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

This project uses a CI/CD pipeline to deploy automatically when code is pushed to `main`:

1. **Build & Lint**: Runs on GitHub Actions, creates a build artifact
2. **Deploy to S3**: Syncs `dist/` to the S3 bucket
3. **Invalidate CloudFront**: Ensures users see the latest content immediately


## 📜 Fork & Attribution

This repository is a personal portfolio maintained by Daniel Saenz. Feel free to fork and adapt it for your own use. If you do, please credit the original author in your project documentation or README.
This project is open source under the [MIT License](./license.md).  

---

© 2025 Daniel Saenz
