import { readFileSync, writeFileSync } from "node:fs";

const summaryPath = "coverage/coverage-summary.json";
const outputPath = "coverage/summary.md";

const coverage = JSON.parse(readFileSync(summaryPath, "utf8"));
const total = coverage.total;

const rows = [
  ["Lines", total.lines],
  ["Statements", total.statements],
  ["Functions", total.functions],
  ["Branches", total.branches],
];

const format = ({ pct, covered, total }) =>
  `${pct.toFixed(2)}% (${covered}/${total})`;

const markdown = [
  "## Test & Coverage Report",
  "",
  "| Metric | Coverage |",
  "| --- | ---: |",
  ...rows.map(([label, metric]) => `| ${label} | ${format(metric)} |`),
  "",
  "Artifacts include:",
  "",
  "- `coverage-report`: HTML and LCOV coverage output",
  "- `junit-test-report`: JUnit XML test results",
  "",
].join("\n");

writeFileSync(outputPath, markdown);
console.log(markdown);
