import type { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import fs from 'fs';
import path from 'path';

type ReportRow = {
  title: string;
  status: string;
  duration: number;
  file: string;
};

class CustomReporter implements Reporter {
  private rows: ReportRow[] = [];
  private summary = {
    total: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    duration: 0,
  };

  onBegin(_config: FullConfig, suite: Suite): void {
    this.rows = [];
    this.summary = {
      total: suite.allTests().length,
      passed: 0,
      failed: 0,
      skipped: 0,
      duration: 0,
    };
    console.log(`Custom reporter started. Total tests: ${this.summary.total}`);
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    const row: ReportRow = {
      title: test.title,
      status: result.status,
      duration: result.duration,
      file: test.location.file,
    };

    this.rows.push(row);
    this.summary.total += 1;

    if (result.status === 'passed') this.summary.passed += 1;
    if (result.status === 'failed') this.summary.failed += 1;
    if (result.status === 'skipped') this.summary.skipped += 1;
    this.summary.duration += result.duration;

    console.log(`Completed test: ${test.title} -> ${result.status}`);
  }

  onEnd(_result: FullResult): void {
    const reportDir = path.join(process.cwd(), 'custom-report');
    fs.mkdirSync(reportDir, { recursive: true });

    const reportPath = path.join(reportDir, 'index.html');
    const rowsHtml = this.rows
      .map(
        (row) => `
          <tr>
            <td>${row.title}</td>
            <td><span class="badge ${row.status}">${row.status}</span></td>
            <td>${row.duration} ms</td>
            <td>${row.file}</td>
          </tr>`
      )
      .join('');

    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom Playwright Report</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 24px; background: #f4f7fb; color: #1f2937; }
      .container { max-width: 1100px; margin: 0 auto; }
      .cards { display: flex; gap: 16px; margin-bottom: 24px; }
      .card { flex: 1; background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
      .label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.08em; }
      .value { font-size: 28px; font-weight: bold; margin-top: 8px; }
      table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border-radius: 12px; overflow: hidden; }
      th, td { padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: left; }
      th { background: #eef2ff; }
      .badge { display: inline-block; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: bold; }
      .passed { background: #dcfce7; color: #166534; }
      .failed { background: #fee2e2; color: #991b1b; }
      .skipped { background: #fef3c7; color: #92400e; }
      .timedOut { background: #f3e8ff; color: #6b21a8; }
      h1 { margin-bottom: 16px; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Custom Playwright Report</h1>
      <div class="cards">
        <div class="card">
          <div class="label">Total</div>
          <div class="value">${this.summary.total}</div>
        </div>
        <div class="card">
          <div class="label">Passed</div>
          <div class="value">${this.summary.passed}</div>
        </div>
        <div class="card">
          <div class="label">Failed</div>
          <div class="value">${this.summary.failed}</div>
        </div>
        <div class="card">
          <div class="label">Skipped</div>
          <div class="value">${this.summary.skipped}</div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Status</th>
            <th>Duration</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || '<tr><td colspan="4">No tests executed.</td></tr>'}
        </tbody>
      </table>
    </div>
  </body>
</html>`;

    fs.writeFileSync(reportPath, html, 'utf-8');
    console.log(`Custom HTML report generated at: ${reportPath}`);
  }
}

export default CustomReporter;
