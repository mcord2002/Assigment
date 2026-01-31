# Swift Translator Singlish-to-Sinhala Automation Tests

## Project Overview

This is a comprehensive automated testing project for the **Swift Translator** (https://www.swifttranslator.com/), which converts Singlish (transliterated Sinhala) into Sinhala script.

### Test Scope

This project includes:
- **24 Positive Functional Test Cases** - Testing correct system behavior and accurate conversions
- **10 Negative Functional Test Cases** - Testing system failures and edge cases
- **1 UI Test Case** - Testing real-time output updating functionality

### Coverage Areas

The test cases cover the following requirement areas:
1. **Sentence Structures** - Simple, compound, and complex sentences
2. **Interrogative & Imperative Forms** - Questions and commands
3. **Grammatical Forms** - Tense variations (past, present, future), negation, pronoun variations
4. **Daily Language Usage** - Common greetings, requests, responses, and everyday expressions
5. **Word Combinations & Phrases** - Multi-word expressions and collocations
6. **Input Length Variations** - Short (≤30 chars), Medium (31-299 chars), Long (≥300 chars)
7. **Mixed Language Content** - Singlish with embedded English terms
8. **Punctuation & Formatting** - Currency, time formats, dates, special characters
9. **Informal Language** - Slang and colloquial phrasing
10. **UI Functionality** - Real-time output updating

## Project Structure

```
playwright-tests/
├── playwright.config.js          # Playwright configuration
├── package.json                  # Project dependencies
├── tests/
│   ├── test-data.js             # Test case definitions
│   ├── swifttranslator.test.js  # Playwright test suite
│   └── test-runner.js           # Manual test runner for detailed results
├── test-results/                # HTML reports (generated after test run)
└── README.md                    # This file
```

## Installation & Setup

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

### Installation Steps

1. **Clone or extract the repository**

   ```bash
   cd playwright-tests
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This will install:
   - `@playwright/test` - The Playwright testing framework

3. **Verify installation**

   ```bash
   npx playwright --version
   ```

## Running the Tests

### Option 1: Run All Tests (Automated)

```bash
npm test
```

This will execute all test cases using Playwright's test runner.

### Option 2: Run Tests with UI (Visual Mode)

```bash
npm run test:ui
```

This opens an interactive UI where you can see tests running in real-time.

### Option 3: Run Tests in Headed Mode (See Browser)

```bash
npm run test:headed
```

This runs tests while displaying the browser window.

### Option 4: Debug Mode

```bash
npm run test:debug
```

This opens the Playwright Inspector for step-by-step debugging.

### Option 5: Manual Test Runner (Detailed Results)

For capturing detailed actual vs expected outputs for Excel reporting:

```bash
node tests/test-runner.js
```

This generates a detailed JSON file with test results.

## Test Results

After running tests, results are available in:

1. **HTML Report** - `test-results/index.html`
   - Open in a browser to see detailed test results

2. **JSON Results** - `test-results-detailed.json`
   - Contains all test details in JSON format
   - Used for Excel spreadsheet population

3. **Console Output**
   - Displays pass/fail summary and any errors

## Test Case Categories

### Positive Functional Tests (Pos_Fun_0001 - Pos_Fun_0024)

These tests verify that the system correctly converts valid Singlish input to Sinhala:

| Test ID | Test Name | Input Length |
|---------|-----------|--------------|
| Pos_Fun_0001 | Simple sentence - daily activity | S |
| Pos_Fun_0002 | Simple sentence - eating | S |
| Pos_Fun_0003 | Compound sentence with conjunction | M |
| Pos_Fun_0004 | Complex sentence with condition | M |
| Pos_Fun_0005 | Interrogative - how are you | S |
| Pos_Fun_0006 | Imperative - command to go | S |
| Pos_Fun_0007 | Interrogative - complex question | M |
| Pos_Fun_0008 | Positive sentence - present tense | S |
| Pos_Fun_0009 | Past tense - went home | S |
| Pos_Fun_0010 | Future tense - will go home | S |
| Pos_Fun_0011 | Common greeting - ayuboovan | S |
| Pos_Fun_0012 | Request with politeness | M |
| Pos_Fun_0013 | Plural form - we go | S |
| Pos_Fun_0014 | Third person singular | S |
| Pos_Fun_0015 | Very short input - hi | S |
| Pos_Fun_0016 | Singlish with embedded English brand | S |
| Pos_Fun_0017 | Email and technical terms mixed | M |
| Pos_Fun_0018 | Frequent phrase - I am happy | S |
| Pos_Fun_0019 | Multi-word expression with emphasis | S |
| Pos_Fun_0020 | Input with currency notation | S |
| Pos_Fun_0021 | Input with time format | M |
| Pos_Fun_0022 | Informal greeting - machan | S |
| Pos_Fun_0023 | Informal exclamation | S |
| Pos_Fun_0024 | Medium length daily conversation | M |

### Negative Functional Tests (Neg_Fun_0001 - Neg_Fun_0010)

These tests identify system failures and limitations:

| Test ID | Test Name | Expected Failure |
|---------|-----------|------------------|
| Neg_Fun_0001 | Joined words without spaces | Incomplete or incorrect output |
| Neg_Fun_0002 | Multiple consecutive spaces | Incorrect handling of spacing |
| Neg_Fun_0003 | Invalid Singlish character combination | Invalid characters not handled |
| Neg_Fun_0004 | Mixed valid and invalid Singlish | Partial conversion or errors |
| Neg_Fun_0005 | Very long input - robustness limit | System lag or output truncation |
| Neg_Fun_0006 | Empty or whitespace-only input | No graceful handling |
| Neg_Fun_0007 | Numbers-only input | Unchanged or error |
| Neg_Fun_0008 | Special characters and symbols | Not converted or unexpected |
| Neg_Fun_0009 | Mixed script - partial English input | English not handled correctly |
| Neg_Fun_0010 | Repeated invalid patterns | Failure or errors |

### UI Test (Pos_UI_0001)

| Test ID | Test Name | Focus |
|---------|-----------|-------|
| Pos_UI_0001 | Real-time Sinhala output updates | Verifies automatic conversion as user types |

## Input Length Categories

- **S (Short)** - ≤ 30 characters
- **M (Medium)** - 31–299 characters  
- **L (Long)** - ≥ 300 characters

## Quality Focus Categories

- **Accuracy Validation** - Clean input with expected clear results
- **Robustness Validation** - Messy/unusual input testing edge behavior
- **Formatting Preservation** - Tests text formatting handling
- **Real-time Output Update** - UI behavior during typing
- **Error Handling** - Negative UI and validation

## File Descriptions

### `playwright.config.js`
Playwright configuration file that defines:
- Test directory location
- Browser to use (Chromium)
- Reporter types (HTML, JSON, list)
- Base URL for tests

### `package.json`
Node.js project configuration with:
- Project metadata
- Test scripts
- Dependencies

### `tests/test-data.js`
Contains all 35 test case definitions:
- Input text
- Expected output
- Coverage areas
- Test metadata

### `tests/swifttranslator.test.js`
Main Playwright test suite with three test groups:
- Positive functional tests
- Negative functional tests
- UI tests

### `tests/test-runner.js`
Manual test executor that:
- Captures detailed results
- Generates JSON output
- Provides summary statistics

## Troubleshooting

### Browser Installation Issues

If you see "browsers are not installed" error:

```bash
npx playwright install
```

### Timeout Issues

If tests timeout, increase the timeout in `playwright.config.js`:

```javascript
timeout: 60000, // 60 seconds
```

### Cannot Find Element

The test uses multiple selectors to find the input/output fields. If the app layout changes:
1. Open https://www.swifttranslator.com/ in browser
2. Inspect the input and output elements
3. Update selectors in `swifttranslator.test.js`

### Tests Not Finding Output

If actual output is always empty:
1. Check that the website is loading properly
2. Verify the output CSS selectors match current page structure
3. Increase the wait timeout in test code

## Notes on Test Execution

- Tests run **sequentially** (workers: 1) to avoid race conditions
- Each test waits 1-1.5 seconds for real-time conversion
- Tests use multiple selector patterns to find elements (for robustness)
- HTML reports are generated automatically in the `test-results/` folder

## Extending the Tests

To add more test cases:

1. Add test case to appropriate array in `tests/test-data.js`:
   ```javascript
   {
     id: 'Pos_Fun_0025',
     name: 'Your test name',
     input: 'test input',
     expectedOutput: 'expected sinhala output',
     inputLength: 'S', // or M, L
     coverage: 'Category | Focus | Length | Quality',
     category: 'Category'
   }
   ```

2. Tests will automatically be discovered and run

## Contact & Support

For issues with the test suite, verify:
- Node.js is installed correctly
- All dependencies installed via `npm install`
- Swift Translator website is accessible
- Browser selectors match current page structure

## Assignment Requirements

This project fulfills all assignment requirements:
- ✅ 24 positive functional test cases
- ✅ 10 negative functional test cases
- ✅ 1 UI test case
- ✅ Coverage of all specified requirement areas
- ✅ Playwright automation with execution results
- ✅ Git repository with public access
- ✅ Complete README with instructions
- ✅ Test case template documentation (Excel)

## Test Execution Log

To keep a log of test executions:

```bash
npm test > test-execution-$(date +%Y%m%d-%H%M%S).log 2>&1
```

This creates a timestamped log file of the test run.

---

**Last Updated:** January 2026
**Project Type:** IT3040 - ITPM Assignment 1
**System Under Test:** Swift Translator (https://www.swifttranslator.com/)
