## Test Coverage Overview

This project explores how to collect and report code coverage across both unit and end-to-end (E2E) tests in a modern frontend stack. While tools like Jest and Vitest offer built-in coverage reporting for unit tests, Playwright can also trigger coverage collection during E2E tests — provided the app is instrumented using Istanbul. Instrumentation means injecting tracking hooks into the app’s source code (e.g., via `vite-plugin-istanbul`) so that coverage data can be recorded as users interact with the app. By combining unit-level coverage with real-world usage coverage from Playwright, we gain a more complete picture of which parts of the codebase are tested, used, and potentially under-tested.


Looking into Fr
### 🧭 Coverage & Instrumentation Resources

| Name | Description | Link |
|------|-------------|------|
| Playwright Coverage API | Official docs on Playwright’s JS/CSS coverage collection | [playwright.dev/docs/api/class-coverage](https://playwright.dev/docs/api/class-coverage) |
| Playwright + vite-plugin-istanbul Example | GitHub repo showing Playwright + Vite + Istanbul integration | [github.com/mxschmitt/playwright-test-coverage](https://github.com/mxschmitt/playwright-test-coverage) |
| Istanbul GitHub Discussion | Community thread on extracting coverage from browser context | [github.com/microsoft/playwright/issues/20459](https://github.com/microsoft/playwright/issues/20459) |
| vite-plugin-istanbul | Plugin to instrument Vite apps for coverage | [github.com/posva/vite-plugin-istanbul](https://github.com/posva/vite-plugin-istanbul) |

### 🧪 Jest Coverage Resources

| Name | Description | Link |
|------|-------------|------|
| Jest Coverage Tutorial | Step-by-step guide to generating coverage reports with Jest | [dnmtechs.com/getting-the-code-coverage-report-with-jest-a-step-by-step-tutorial](https://dnmtechs.com/getting-the-code-coverage-report-with-jest-a-step-by-step-tutorial) |
| Improving Jest Coverage | Practical tips to boost coverage from 0% to 80% | [moldstud.com/articles/p-from-0-to-80-essential-steps-to-improve-code-coverage-with-jest](https://moldstud.com/articles/p-from-0-to-80-essential-steps-to-improve-code-coverage-with-jest) |
| Jest Coverage Video | YouTube walkthrough of Jest coverage setup | [youtube.com/watch?v=9MrAqQnUMQI](https://www.youtube.com/watch?v=9MrAqQnUMQI) |

### ⚡ Vitest Coverage Resources

| Name | Description | Link |
|------|-------------|------|
| Vitest Coverage Guide | Official Vitest docs on coverage setup | [vitest.dev/guide/coverage.html](https://vitest.dev/guide/coverage.html) |
| Vitest Coverage Tutorial | Comprehensive guide to configuring Vitest coverage | [machinet.net/tutorial-eng/vitest-coverage-comprehensive-guide](https://www.machinet.net/tutorial-eng/vitest-coverage-comprehensive-guide) |
| Vitest Coverage Video | ViteConf video on Vitest coverage | [youtube.com/watch?v=UOdgx2Mm3X8](https://www.youtube.com/watch?v=UOdgx2Mm3X8) |
