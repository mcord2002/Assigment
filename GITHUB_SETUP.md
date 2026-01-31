# GitHub Repository Setup Instructions

## Create a New Public Repository on GitHub

Follow these steps to upload your project to GitHub and make it publicly accessible:

### Step 1: Create Repository on GitHub

1. Go to https://github.com
2. Click the **+** icon (top-right) → **New repository**
3. Fill in the details:
   - **Repository name**: `singlish-sinhala-translator-tests` (or your preferred name)
   - **Description**: "Playwright automation tests for Swift Translator Singlish-to-Sinhala converter - IT3040 ITPM Assignment 1"
   - **Visibility**: **Public** ✓ (Important: Must be public for assignment submission)
   - **Initialize**: Do NOT check any boxes (no README, gitignore, or license)
4. Click **Create repository**

### Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you instructions. Follow these commands:

```powershell
# Navigate to your project folder
cd "c:\Users\menuw\OneDrive\Desktop\ASssigment_1\playwright-tests"

# Add the remote repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/singlish-sinhala-translator-tests.git

# Rename branch to main (if needed)
git branch -M main

# Push the project to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

### Step 3: Verify Repository is Public

1. Go to your repository URL: `https://github.com/YOUR_USERNAME/singlish-sinhala-translator-tests`
2. Make sure you can see it without logging in (open in incognito/private window)
3. Verify all files are visible:
   - README.md
   - package.json
   - playwright.config.js
   - tests/ folder
   - Test_Cases_Template.xlsx

### Step 4: Create Repository Link File for Submission

Create a text file with your repository URL:

```powershell
# Create a text file with your GitHub repository link
echo "GitHub Repository Link: https://github.com/YOUR_USERNAME/singlish-sinhala-translator-tests" > Git_Repository_Link.txt
```

**Remember to replace YOUR_USERNAME!**

## Example Repository URL Format

```
https://github.com/studentname123/singlish-sinhala-translator-tests
```

## Troubleshooting

### Authentication Issues

If you get authentication errors, you need to use a personal access token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **Generate new token (classic)**
3. Give it a name (e.g., "ITPM Assignment Upload")
4. Select scopes: `repo` (full control)
5. Click **Generate token**
6. **Copy the token** (you won't see it again!)
7. When pushing, use:
   ```
   Username: your-github-username
   Password: paste-your-token-here
   ```

### Repository Already Exists

If you see "repository already exists" error:

```powershell
git remote set-url origin https://github.com/YOUR_USERNAME/singlish-sinhala-translator-tests.git
git push -u origin main
```

### Permission Denied

Make sure:
1. Repository is created under your account
2. You're logged into the correct GitHub account
3. You have write permissions to the repository

## Files to Include in GitHub

These files should be visible in your repository:
- ✓ README.md (project documentation)
- ✓ package.json (dependencies)
- ✓ playwright.config.js (test configuration)
- ✓ tests/test-data.js (test case definitions)
- ✓ tests/swifttranslator.test.js (Playwright tests)
- ✓ tests/test-runner.js (manual test runner)
- ✓ generate-excel.js (Excel generator)
- ✓ Test_Cases_Template.xlsx (test cases template)
- ✓ .gitignore (ignored files list)

## What NOT to Upload

These are automatically excluded by .gitignore:
- node_modules/ (dependencies - too large)
- test-results/ (generated after running tests)
- package-lock.json (auto-generated)
- .playwright/ (cached browsers)

## Verification Checklist

Before submitting, verify:
- [ ] Repository is PUBLIC (not private)
- [ ] README.md is visible and formatted correctly
- [ ] All test files are present in tests/ folder
- [ ] Test_Cases_Template.xlsx is included
- [ ] Repository URL is saved in Git_Repository_Link.txt
- [ ] You can clone the repository without authentication:
  ```
  git clone https://github.com/YOUR_USERNAME/singlish-sinhala-translator-tests.git
  ```

## Final Repository Structure on GitHub

```
singlish-sinhala-translator-tests/
├── .gitignore
├── README.md
├── package.json
├── playwright.config.js
├── generate-excel.js
├── Test_Cases_Template.xlsx
└── tests/
    ├── test-data.js
    ├── swifttranslator.test.js
    └── test-runner.js
```

## Need Help?

- GitHub Documentation: https://docs.github.com/en/get-started/quickstart/create-a-repo
- Git Tutorial: https://git-scm.com/docs/gittutorial

---

**Important for Assignment Submission:**
1. Repository MUST be public
2. Save the repository URL in `Git_Repository_Link.txt`
3. Include this text file in your submission folder
4. Repositories that cannot be accessed will not be evaluated
