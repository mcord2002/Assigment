# Assignment Submission Preparation Guide

## IT3040 - ITPM Assignment 1 - Final Submission Checklist

### What You Need to Submit

According to the assignment requirements, you must submit:

1. ✅ **Complete Playwright Project** (all scripts and configuration files)
2. ✅ **Git Repository Link** (in a text file)
3. ✅ **Excel File** (completed test cases using provided template)

---

## Step-by-Step Submission Preparation

### STEP 1: Upload to GitHub (REQUIRED)

**⚠️ Critical: Repository MUST be publicly accessible**

1. Follow the instructions in `GITHUB_SETUP.md` to create and upload your repository
2. Create the repository link file:

```powershell
# Replace YOUR_GITHUB_USERNAME with your actual username
$repoUrl = "https://github.com/YOUR_GITHUB_USERNAME/singlish-sinhala-translator-tests"
Set-Content -Path "Git_Repository_Link.txt" -Value $repoUrl
```

3. Verify the repository is public by opening the link in an incognito/private browser window

---

### STEP 2: Run Tests and Capture Results

Before filling the Excel template, you should run the tests to capture actual outputs:

#### Option A: Run Automated Tests (Recommended)

```powershell
cd "c:\Users\menuw\OneDrive\Desktop\ASssigment_1\playwright-tests"

# Install Playwright browsers (first time only)
npx playwright install

# Run the test suite
npm test
```

This generates an HTML report in `test-results/` folder.

#### Option B: Run Manual Test Capture (For Excel Data)

```powershell
cd "c:\Users\menuw\OneDrive\Desktop\ASssigment_1\playwright-tests"

# Run the detailed test runner
npm run test:runner
```

This creates `test-results-detailed.json` with all actual vs expected outputs.

---

### STEP 3: Fill Out the Excel Template

The Excel template (`Test_Cases_Template.xlsx`) has been pre-populated with:
- ✅ All 24 positive test cases
- ✅ All 10 negative test cases
- ✅ 1 UI test case
- ✅ Test metadata (ID, name, input, expected output, coverage)

**You need to fill in:**

1. **Actual Output** column
2. **Status** column (Pass/Fail)
3. **Accuracy Justification / Description** column

#### How to Fill Actual Output:

**Option A: Manual Testing** (Most accurate for Sinhala characters)
1. Open https://www.swifttranslator.com/
2. For each test case, enter the input text
3. Copy the Sinhala output
4. Paste into Excel "Actual Output" column

**Option B: Use JSON Results** (If you ran test-runner.js)
1. Open `test-results-detailed.json`
2. Find each test case by TC ID
3. Copy the "actualOutput" value to Excel

#### Guidelines for Status Column:

- **Pass**: Expected output matches actual output (meaning and spelling correct)
- **Fail**: Output is incorrect, incomplete, or causes errors
- **Error**: System error or unexpected behavior

#### Guidelines for Description Column:

**For Positive Tests (PASS):**
```
Example:
· The greeting meaning is preserved.
· Sinhala spelling and punctuation are correct.
· Question mark remains correctly placed.
```

**For Positive Tests (FAIL - if any):**
```
Example:
· Partial conversion occurred.
· One word was not converted correctly.
· Expected "මම" but got "මම්".
```

**For Negative Tests (Expected to FAIL):**
```
Example:
· System did not handle joined words correctly as expected.
· Output is incomplete: only first word converted.
· Missing spaces caused conversion failure.
```

---

### STEP 4: Rename Files with Your Registration Number

According to the assignment:
> "Rename all files with your registration number"

**Example:** If your registration number is `2020CS123`

```powershell
# Go to the assignment folder
cd "c:\Users\menuw\OneDrive\Desktop\ASssigment_1"

# Rename the Excel file
Rename-Item "playwright-tests\Test_Cases_Template.xlsx" "2020CS123_Test_Cases.xlsx"

# Create the repository link file with your reg number
echo "https://github.com/YOUR_GITHUB_USERNAME/singlish-sinhala-translator-tests" > "2020CS123_Git_Repository_Link.txt"
```

---

### STEP 5: Create Submission Folder

```powershell
# Navigate to assignment folder
cd "c:\Users\menuw\OneDrive\Desktop\ASssigment_1"

# Create folder with your registration number (example: 2020CS123)
$regNumber = "2020CS123"  # CHANGE THIS TO YOUR REG NUMBER
New-Item -ItemType Directory -Path $regNumber -Force

# Copy the Playwright project folder
Copy-Item -Path "playwright-tests" -Destination "$regNumber\playwright-tests" -Recurse

# Copy/Move the renamed files
Move-Item "$regNumber\playwright-tests\Test_Cases_Template.xlsx" "$regNumber\${regNumber}_Test_Cases.xlsx"
Copy-Item "${regNumber}_Git_Repository_Link.txt" -Destination "$regNumber\"

# Show folder contents
Get-ChildItem $regNumber -Recurse | Select-Object FullName
```

Your folder structure should be:
```
2020CS123/
├── 2020CS123_Test_Cases.xlsx
├── 2020CS123_Git_Repository_Link.txt
└── playwright-tests/
    ├── README.md
    ├── package.json
    ├── playwright.config.js
    ├── tests/
    │   ├── test-data.js
    │   ├── swifttranslator.test.js
    │   └── test-runner.js
    └── ... (other project files)
```

---

### STEP 6: Zip the Folder

```powershell
# Compress the folder
$regNumber = "2020CS123"  # YOUR REGISTRATION NUMBER
Compress-Archive -Path $regNumber -DestinationPath "${regNumber}.zip" -Force

# Verify the zip file was created
Get-Item "${regNumber}.zip"
```

---

### STEP 7: Final Verification Before Submission

**Before uploading to CourseWeb, verify:**

#### GitHub Repository:
- [ ] Repository is PUBLIC (can access without login)
- [ ] All files are visible on GitHub
- [ ] README.md displays correctly
- [ ] Repository URL is correct in the text file

#### Excel File:
- [ ] Contains 24 positive test cases
- [ ] Contains 10 negative test cases
- [ ] Contains 1 UI test case
- [ ] All "Actual Output" columns filled
- [ ] All "Status" columns filled (Pass/Fail/Error)
- [ ] All "Description" columns filled with justifications
- [ ] File renamed with your registration number

#### Zip File:
- [ ] Named with your registration number (e.g., 2020CS123.zip)
- [ ] Contains folder with same registration number
- [ ] Folder contains:
  - [ ] Excel file (renamed with reg number)
  - [ ] Git repository link text file (renamed with reg number)
  - [ ] Complete playwright-tests folder

#### Test Coverage (Excel file should cover):
- [ ] Sentence structures (simple, compound, complex)
- [ ] Interrogative and imperative forms
- [ ] Positive and negative sentences
- [ ] Greetings, requests, responses
- [ ] Polite vs informal phrasing
- [ ] Tense variations (past, present, future)
- [ ] Pronoun variations and plural forms
- [ ] Input length variations (S, M, L)
- [ ] Mixed language (Singlish + English)
- [ ] Punctuation and formatting
- [ ] Informal/slang language
- [ ] UI functionality

---

## Important Reminders

### ⚠️ Plagiarism Check
> "Submitted Excel files will be checked for plagiarism. Any submission with a similarity score greater than 10% will be considered plagiarized."

**To avoid plagiarism:**
- Write your own test justifications/descriptions
- Don't copy sample test cases from the assignment
- Use different test inputs than the examples
- Write unique descriptions for each test case

### ⚠️ Repository Accessibility
> "Ensure that the Git repository is publicly accessible. Repositories that cannot be accessed during marking will not be evaluated."

**Test your repository:**
```powershell
# Test cloning without authentication
git clone https://github.com/YOUR_USERNAME/singlish-sinhala-translator-tests.git test-clone
cd test-clone
npm install
npm test
```

If this works without asking for credentials, your repository is correctly public.

---

## Submission Deadline

> "Upload the zipped folder to the 'Assignment 1 Answer' link available on CourseWeb before 1st February."

**Submission Location:** CourseWeb → IT3040 - ITPM → Assignment 1 Answer

---

## Quick Command Summary

```powershell
# 1. Navigate to project
cd "c:\Users\menuw\OneDrive\Desktop\ASssigment_1\playwright-tests"

# 2. Run tests
npm test

# 3. Capture detailed results
npm run test:runner

# 4. Set your registration number
$regNumber = "2020CS123"  # CHANGE THIS

# 5. Navigate to parent folder
cd ..

# 6. Create submission folder
New-Item -ItemType Directory -Path $regNumber -Force

# 7. Copy project
Copy-Item -Path "playwright-tests" -Destination "$regNumber\playwright-tests" -Recurse

# 8. Create/copy renamed files
# (Fill Excel manually, then rename and move)

# 9. Create zip
Compress-Archive -Path $regNumber -DestinationPath "${regNumber}.zip" -Force

# 10. Verify
Get-Item "${regNumber}.zip"
```

---

## Need Help?

### Common Issues:

**Q: Tests are failing**
- Check internet connection
- Verify Swift Translator website is accessible
- Increase timeout in playwright.config.js

**Q: Can't generate Excel file**
- Run: `npm install`
- Verify xlsx package installed
- Check generate-excel.js for errors

**Q: GitHub push fails**
- Use personal access token instead of password
- Verify repository is created
- Check remote URL: `git remote -v`

**Q: Can't view Sinhala characters**
- Install Sinhala Unicode fonts
- Copy text to a Unicode-compatible editor
- Use Google Translate to verify characters

---

## Contact

For technical issues with the test suite:
- Check README.md for troubleshooting
- Review GITHUB_SETUP.md for repository issues
- Verify all dependencies installed: `npm install`

---

**Good luck with your submission!** 🎓
