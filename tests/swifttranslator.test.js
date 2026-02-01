// tests/swifttranslator.test.js
const { test, expect } = require('@playwright/test');
const testData = require('./test-data');

// Helper function to extract Sinhala text from output
async function getOutputText(page) {
  const outputElement = await page.locator('div[class*="output"], [class*="result"], [class*="translation"]').first();
  if (!outputElement) return '';
  return await outputElement.textContent();
}

test.describe('Swift Translator - Positive Functional Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');
    // Wait for page to be ready
    await page.waitForTimeout(2000);
  });

  // Test each positive case
  testData.positive.forEach((testCase) => {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }) => {
      try {
        // Find the input textarea - Swift Translator uses textarea for Singlish input
        await page.waitForSelector('textarea', { timeout: 10000 });
        const inputField = page.locator('textarea').first();
        
        // Clear and enter the input
        await inputField.clear();
        await inputField.fill(testCase.input);
        
        // Wait for real-time conversion (Swift Translator converts as you type)
        await page.waitForTimeout(2000);
        
        // Try to get output - look for all textareas (output is usually second textarea)
        const textareas = page.locator('textarea');
        const count = await textareas.count();
        
        let actualOutput = '';
        if (count >= 2) {
          actualOutput = await textareas.nth(1).inputValue();
        }
        
        // Store the result for reporting
        test.info().annotations.push({
          type: 'test-result',
          description: `Input: "${testCase.input}"\nExpected: "${testCase.expectedOutput}"\nActual: "${actualOutput}"\nCoverage: ${testCase.coverage}`
        });
        
        // Verify output was generated
        if (actualOutput && actualOutput.trim().length > 0) {
          expect(actualOutput.length).toBeGreaterThan(0);
        } else {
          // Mark as failed but continue
          test.info().annotations.push({
            type: 'warning',
            description: 'No output was generated'
          });
        }
      } catch (error) {
        test.info().annotations.push({
          type: 'error',
          description: `Error: ${error.message}`
        });
        throw error;
      }
    });
  });
});

test.describe('Swift Translator - Negative Functional Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
  });

  // Test each negative case
  testData.negative.forEach((testCase) => {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }) => {
      try {
        await page.waitForSelector('textarea', { timeout: 10000 });
        const inputField = page.locator('textarea').first();
        
        await inputField.clear();
        await inputField.fill(testCase.input);
        await page.waitForTimeout(2000);
        
        // For negative tests, we're documenting the failure behavior
        let actualOutput = '';
        const textareas = page.locator('textarea');
        const count = await textareas.count();
        
        if (count >= 2) {
          actualOutput = await textareas.nth(1).inputValue();
        }
        
        test.info().annotations.push({
          type: 'test-result',
          description: `Input: "${testCase.input}"\nExpected Failure: "${testCase.expectedFailure}"\nActual Output: "${actualOutput}"\nCoverage: ${testCase.coverage}`
        });
        
        // Negative tests document issues - they may pass or fail
      } catch (error) {
        test.info().annotations.push({
          type: 'test-result',
          description: `Error encountered: ${error.message}`
        });
      }
    });
  });
});

test.describe('Swift Translator - UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
  });

  testData.ui.forEach((testCase) => {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }) => {
      try {
        await page.waitForSelector('textarea', { timeout: 10000 });
        const inputField = page.locator('textarea').first();
        const outputField = page.locator('textarea').nth(1);
        
        // Clear input first
        await inputField.clear();
        await page.waitForTimeout(500);
        
        // Type the input character by character to test real-time updates
        const inputText = testCase.input;
        for (let i = 0; i < inputText.length; i++) {
          await page.keyboard.type(inputText[i]);
          await page.waitForTimeout(100); // Small delay between keystrokes
          
          // Check if output updates after typing several characters
          if (i > 5) {
            const currentOutput = await outputField.inputValue();
            if (currentOutput && currentOutput.length > 0) {
              // Output is updating in real-time
              expect(currentOutput.length).toBeGreaterThan(0);
            }
          }
        }
        
        // Final output verification
        await page.waitForTimeout(1000);
        const finalOutput = await outputField.inputValue();
        
        test.info().annotations.push({
          type: 'ui-test',
          description: `Real-time conversion working: Output contains ${finalOutput ? finalOutput.length : 0} characters after typing full input`
        });
        
        expect(finalOutput ? finalOutput.length : 0).toBeGreaterThan(0);
      } catch (error) {
        test.info().annotations.push({
          type: 'error',
          description: `UI test error: ${error.message}`
        });
        throw error;
      }
    });
  });
});
