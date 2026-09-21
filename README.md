# 🎯 Halo — Test Automation Exercise

End-to-end test automation framework built with **Cypress 15+** and **Cucumber**, including HTML report generation. Developed as a technical exercise over [practice-automation.com](https://practice-automation.com/).

---

## 🛠️ Stack

| Tool | Version | Purpose |
|---|---|---|
| Cypress | 15+ | E2E test runner |
| Cucumber | — | BDD / Gherkin support |
| Cucumber HTML Report | — | Visual test reporting |
| Node.js | — | Runtime |


## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/olguinc/halo-challenge.git
cd halo-challenge

# 2. Install dependencies
npm install
```


## ▶️ Running Tests

```bash
# Run all tests (headless)
npm run cypress:execution

# Run scenarios by Cucumber tags
npm run cypress:tags

# Open Cypress Test Runner (interactive mode)
npm test
```


## 📋 Scenario Selection Criteria

Scenarios were selected based on the following criteria:

- ✅ **Basic E2E** — core flows that a real user would go through
- ✅ **Theoretical regression** — critical scenarios that should be validated on every release
- ✅ **Functional coverage** — variety of interaction types (forms, navigation, dynamic elements)


## 🗂️ Project Structure

```
halo-challenge/
├── cypress/
│   ├── e2e/              # Feature files (Gherkin)
│   ├── pages/            # Page Object Model classes
│   ├── support/          # Step definitions & hooks
│   └── fixtures/         # Test data
├── cypress.config.js
├── cucumber-html-report.js
└── package.json
```


## 📊 Reports

An HTML report is automatically generated at the end of each test run with a full results summary. To generate it:

```bash
npm run cypress:execution
```

The report will be available at `reports/cucumber-htmlreport/index.html`.


## 👩🏻‍💻 Author

**Carolina Olguin** — Senior QA Engineer · [GitHub](https://github.com/olguinc) · [LinkedIn](https://www.linkedin.com/in/carolina-olg/) · [Portfolio](https://olguinc.github.io/)

> *"The best tests don't just find bugs — they document the expected behavior of the system."*
