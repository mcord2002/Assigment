# 🚀 Quick Start Guide - IT3040 ITPM Assignment 1

## What This Project Contains

This is a complete automated testing solution for the Swift Translator Singlish-to-Sinhala conversion system.

**✅ Included:**
- 24 Positive Functional Test Cases
- 10 Negative Functional Test Cases  
- 1 UI Test Case
- Complete Playwright automation
- Excel test case template
- Git repository (ready to push to GitHub)

---

## 📋 Quick Setup (3 Steps)

### Step 1: Install Dependencies

```powershell
cd playwright-tests
npm install
```

### Step 2: Run Tests

```powershell
# Run all tests
npm test

# Or run with visual UI
npm run test:ui
```

### Step 3: View Results

- Open `test-results/index.html` in your browser for detailed results

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `README.md` | Complete project documentation |
| `SUBMISSION_GUIDE.md` | Step-by-step submission instructions |
| `GITHUB_SETUP.md` | How to upload to GitHub |
| `Test_Cases_Template.xlsx` | Excel template (pre-filled with 35 test cases) |
| `tests/test-data.js` | All test case definitions |
| `tests/swifttranslator.test.js` | Playwright automation |

---

## ⚡ Quick Commands

```powershell
# Install everything
npm install

# Run tests (automated)
npm test

# Run tests with browser visible
npm run test:headed

# Run manual test runner (captures outputs for Excel)
npm run test:runner

# Generate/regenerate Excel template
npm run generate:excel
```

---

## 📝 What You Need to Do

1. **Run the tests** to see them working
2. **Upload to GitHub** (follow `GITHUB_SETUP.md`)
3. **Fill the Excel file** with actual test results
4. **Prepare submission** (follow `SUBMISSION_GUIDE.md`)

---

## 🎯 Test Coverage Summary

All requirements covered:

| Category | Test Cases | Status |
|----------|------------|--------|
| Sentence Structures | 4 | ✅ |
| Interrogative/Imperative | 3 | ✅ |
| Grammatical Forms | 4 | ✅ |
| Daily Language | 4 | ✅ |
| Mixed Language | 2 | ✅ |
| Punctuation/Formatting | 2 | ✅ |
| Informal/Slang | 2 | ✅ |
| Input Length Variations | All | ✅ |
| Negative Tests | 10 | ✅ |
| UI Tests | 1 | ✅ |
| **Total** | **35** | **✅** |

---

## 🔧 Troubleshooting

### "Browsers not installed"
```powershell
npx playwright install
```

### "Cannot find module"
```powershell
npm install
```

### "Tests failing"
- Check internet connection
- Verify https://www.swifttranslator.com/ is accessible
- Try increasing timeout in `playwright.config.js`

---

## 📚 Documentation Files

1. **README.md** - Full project documentation with:
   - Installation instructions
   - How to run tests
   - Test case descriptions
   - Troubleshooting

2. **SUBMISSION_GUIDE.md** - Complete submission preparation:
   - How to run and capture test results
   - How to fill Excel template
   - How to prepare submission folder
   - Verification checklist

3. **GITHUB_SETUP.md** - GitHub repository setup:
   - Create repository
   - Push code
   - Make it public
   - Verify accessibility

---

## 🎓 Assignment Requirements Met

- ✅ 24 positive functional test cases
- ✅ 10 negative functional test cases
- ✅ 1 UI test case
- ✅ All coverage areas included
- ✅ Playwright automation implemented
- ✅ Excel template provided
- ✅ Git repository initialized
- ✅ README with clear instructions
- ✅ No sample test cases used

---

## 📞 Next Steps

1. **First**: Run `npm install` and `npm test` to verify everything works
2. **Then**: Follow `GITHUB_SETUP.md` to create your public repository
3. **Next**: Run tests and fill out the Excel file
4. **Finally**: Follow `SUBMISSION_GUIDE.md` to prepare your submission

---

## ⏰ Before Submission

- [ ] Tests run successfully
- [ ] GitHub repository is public and accessible
- [ ] Excel file filled with all actual outputs
- [ ] All files renamed with registration number
- [ ] Folder zipped with registration number as name
- [ ] Verified no plagiarism (unique descriptions)

---

**Need detailed help?** Check the three main documentation files:
- `README.md` - Technical documentation
- `SUBMISSION_GUIDE.md` - Submission preparation
- `GITHUB_SETUP.md` - GitHub upload

**Good luck!** 🎓✨
