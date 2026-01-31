# Test Case Reference Guide

## Complete List of All 35 Test Cases

This document provides a quick reference for all test cases included in this project.

---

## Positive Functional Test Cases (24 tests)

### 1. Sentence Structures (4 tests)

| TC ID | Name | Input | Category |
|-------|------|-------|----------|
| Pos_Fun_0001 | Simple sentence - daily activity | mama gedhara yanavaa | Simple |
| Pos_Fun_0002 | Simple sentence - eating | mata bath oonee | Simple |
| Pos_Fun_0003 | Compound sentence with conjunction | mama gedhara yanavaa saha oyaa enavadha | Compound |
| Pos_Fun_0004 | Complex sentence with condition | oya enavaanam mama balaa innavaa | Complex |

### 2. Interrogative & Imperative Forms (3 tests)

| TC ID | Name | Input | Type |
|-------|------|-------|------|
| Pos_Fun_0005 | Interrogative - how are you | oyaata kohomadha? | Question |
| Pos_Fun_0006 | Imperative - command to go | vahaama enna | Command |
| Pos_Fun_0007 | Interrogative - complex question | meeka hariyata vaeda karanavaadha? | Question |

### 3. Grammatical Forms (7 tests)

| TC ID | Name | Input | Focus |
|-------|------|-------|-------|
| Pos_Fun_0008 | Positive sentence - present tense | mama ehema karanavaa | Present |
| Pos_Fun_0009 | Past tense - went home | mama iiyee gedhara giyaa | Past |
| Pos_Fun_0010 | Future tense - will go home | mama gedhara yamu | Future |
| Pos_Fun_0013 | Plural form - we go | api yanavaa | Plural |
| Pos_Fun_0014 | Third person singular | eyaa gedhara giyaa | Pronoun |

### 4. Daily Language Usage (4 tests)

| TC ID | Name | Input | Category |
|-------|------|-------|----------|
| Pos_Fun_0011 | Common greeting - ayuboovan | aayuboovan! | Greeting |
| Pos_Fun_0012 | Request with politeness | mata udhavvak karanna puLuvandha? | Request |
| Pos_Fun_0015 | Very short input - hi | hari | Short |
| Pos_Fun_0024 | Medium length daily conversation | mama aaja office yanna kalin check karanna oonee... | Conversation |

### 5. Mixed Language Content (2 tests)

| TC ID | Name | Input | Focus |
|-------|------|-------|-------|
| Pos_Fun_0016 | Singlish with embedded English brand | mata Zoom link ekak evanna | Brand terms |
| Pos_Fun_0017 | Email and technical terms mixed | mata email ekak evanna puLuvandha | Technical |

### 6. Word Combinations & Phrases (2 tests)

| TC ID | Name | Input | Type |
|-------|------|-------|------|
| Pos_Fun_0018 | Frequent phrase - I am happy | mata sukha nisaa | Phrase |
| Pos_Fun_0019 | Multi-word expression with emphasis | hari hari samahan | Emphasis |

### 7. Punctuation & Formatting (2 tests)

| TC ID | Name | Input | Format |
|-------|------|-------|--------|
| Pos_Fun_0020 | Input with currency notation | Rs. 5000 dhaanay | Currency |
| Pos_Fun_0021 | Input with time format | mama 7.30 AM yanna yaavee | Time |

### 8. Informal Language (2 tests)

| TC ID | Name | Input | Type |
|-------|------|-------|------|
| Pos_Fun_0022 | Informal greeting - machan | ela machan! | Slang |
| Pos_Fun_0023 | Informal exclamation | adoo! samahan | Exclamation |

---

## Negative Functional Test Cases (10 tests)

These tests demonstrate system limitations and failures:

| TC ID | Name | Input | Expected Failure |
|-------|------|-------|------------------|
| Neg_Fun_0001 | Joined words without spaces | mamagedharayanavaa | Incomplete/incorrect output |
| Neg_Fun_0002 | Multiple consecutive spaces | mama    gedhara    yanavaa | Incorrect spacing handling |
| Neg_Fun_0003 | Invalid Singlish characters | mama gXXdhara yanavaa | Invalid characters not handled |
| Neg_Fun_0004 | Mixed valid and invalid | mama gedhara yanavaa XYZ | Partial conversion |
| Neg_Fun_0005 | Very long input (300+ chars) | mama gedhara yanavaa... (long) | System lag/truncation |
| Neg_Fun_0006 | Empty/whitespace only | "   " (spaces) | No graceful handling |
| Neg_Fun_0007 | Numbers only | 12345 | Unchanged or error |
| Neg_Fun_0008 | Special characters | @#$%^&*() | Not converted properly |
| Neg_Fun_0009 | Mixed English/Singlish | Hello world mama gedhara yanavaa | English not handled |
| Neg_Fun_0010 | Repeated invalid patterns | qqqq wwww xxxx yyyy zzzz | Failure/errors |

---

## UI Test Case (1 test)

| TC ID | Name | Expected Behavior |
|-------|------|-------------------|
| Pos_UI_0001 | Real-time Sinhala output updates | Output updates automatically as user types, character by character, without clicking convert button |

---

## Test Coverage Matrix

### By Input Length

| Length Type | Count | Percentage |
|-------------|-------|------------|
| S (≤30 chars) | 19 | 54% |
| M (31-299 chars) | 15 | 43% |
| L (≥300 chars) | 1 | 3% |

### By Quality Focus

| Focus | Count |
|-------|-------|
| Accuracy Validation | 17 |
| Robustness Validation | 17 |
| Real-time Update Behavior | 1 |

### By Category

| Category | Tests |
|----------|-------|
| Sentence Structures | 4 |
| Interrogative/Imperative | 3 |
| Grammatical Forms | 7 |
| Daily Language | 4 |
| Mixed Language | 2 |
| Word Combinations | 2 |
| Punctuation/Formatting | 2 |
| Informal Language | 2 |
| Input Validation (Negative) | 10 |
| UI Functionality | 1 |

---

## Assignment Requirements Coverage

### ✅ Sentence Structures
- Simple sentences: Pos_Fun_0001, Pos_Fun_0002
- Compound sentences: Pos_Fun_0003
- Complex sentences: Pos_Fun_0004

### ✅ Interrogative & Imperative
- Questions: Pos_Fun_0005, Pos_Fun_0007
- Commands: Pos_Fun_0006

### ✅ Positive & Negative Forms
- Positive: Pos_Fun_0008
- Negative patterns covered in negative tests

### ✅ Daily Language Usage
- Greetings: Pos_Fun_0011
- Requests: Pos_Fun_0012
- Common expressions: Multiple tests

### ✅ Polite vs Informal
- Polite: Pos_Fun_0012
- Informal: Pos_Fun_0022, Pos_Fun_0023

### ✅ Frequently Used Expressions
- Multiple tests covering everyday phrases

### ✅ Word Combinations
- Pos_Fun_0018, Pos_Fun_0019

### ✅ Grammatical Forms
- Tenses: Pos_Fun_0008, Pos_Fun_0009, Pos_Fun_0010
- Plural: Pos_Fun_0013
- Pronouns: Pos_Fun_0014

### ✅ Input Length Variations
- Short: 19 tests
- Medium: 15 tests
- Long: 1 test

### ✅ Mixed Language Content
- Pos_Fun_0016, Pos_Fun_0017

### ✅ Punctuation & Formats
- Pos_Fun_0020, Pos_Fun_0021

### ✅ Informal Language
- Pos_Fun_0022, Pos_Fun_0023

### ✅ UI Functionality
- Pos_UI_0001

---

## How to Use This Guide

### For Understanding Test Coverage:
1. Use this document to verify all requirements are met
2. Cross-reference with assignment requirements
3. Ensure no categories are missing

### For Excel Template:
1. Reference TC IDs to find test details
2. Use inputs as specified
3. Document actual outputs
4. Compare with expected results

### For Test Execution:
1. Tests run in the order defined in test-data.js
2. Each TC ID maps to specific test case
3. Results appear in HTML report with TC IDs

---

## Test Data Location

All test data is defined in: `tests/test-data.js`

Each test case contains:
- `id`: Test case ID
- `name`: Descriptive name
- `input`: Singlish input text
- `expectedOutput`: Expected Sinhala output (for positive tests)
- `expectedFailure`: Expected failure description (for negative tests)
- `inputLength`: S/M/L
- `coverage`: Coverage areas (pipe-separated)
- `category`: Test category

---

## Adding More Test Cases

If you need to add additional test cases:

1. Open `tests/test-data.js`
2. Add to appropriate array (positive/negative/ui)
3. Follow the existing format
4. Use unique TC ID (e.g., Pos_Fun_0025)
5. Regenerate Excel: `npm run generate:excel`

---

## Excel Template Structure

The generated Excel file (`Test_Cases_Template.xlsx`) contains:

**Sheets:**
1. **Positive Tests** - 24 test cases
2. **Negative Tests** - 10 test cases
3. **UI Tests** - 1 test case
4. **Summary** - Overview and statistics

**Columns:**
- TC ID
- Test Case Name
- Input Length Type
- Input
- Expected Output
- Actual Output (to fill after execution)
- Status (to fill: Pass/Fail/Error)
- Accuracy Justification / Description (to fill)
- What is covered by the test

---

## Notes on Test Execution

### Expected Results:
- **Positive tests**: Should mostly PASS (correct Sinhala output)
- **Negative tests**: Should FAIL or show errors (demonstrating limitations)
- **UI test**: Should PASS (real-time conversion works)

### Common Issues:
- Some Singlish inputs may not convert perfectly
- Special characters may remain unchanged
- Mixed English content may partially convert
- Very long inputs may cause performance issues

These are **expected behaviors** to document in your Excel file.

---

**Last Updated:** January 2026
**Total Test Cases:** 35
**Test Framework:** Playwright
**Target Application:** Swift Translator (https://www.swifttranslator.com/)
