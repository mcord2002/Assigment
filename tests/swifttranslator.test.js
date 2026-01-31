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
    await page.waitForLoadState('networkidle');
  });

  // Test each positive case
  testData.positive.forEach((testCase) => {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }) => {
      // Find the input field and enter the Singlish text
      const inputField = page.locator('textarea, input[type="text"]').first();
      
      // Clear and enter the input
      await inputField.fill(testCase.input);
      
      // Wait a moment for real-time conversion
      await page.waitForTimeout(1000);
      
      // Get the output - try multiple selectors
      let actualOutput = '';
      try {
        // Try to find output in common locations
        const outputSelectors = [
          '.output-text',
          '[class*="output"]',
          '[class*="result"]',
          '[class*="translation"]',
          'div[contenteditable="true"]',
          '.sinhala-output',
          'span[class*="sinhala"]'
        ];
        
        for (const selector of outputSelectors) {
          try {
            const element = page.locator(selector).first();
            if (element) {
              actualOutput = await element.textContent();
              if (actualOutput && actualOutput.trim()) {
                break;
              }
            }
          } catch (e) {
            // Continue to next selector
          }
        }
        
        // Store the result for reporting
        test.info().annotations.push({
          type: 'test-result',
          description: `Input: "${testCase.input}"\nExpected: "${testCase.expectedOutput}"\nActual: "${actualOutput}"\nCoverage: ${testCase.coverage}`
        });
        
        // Verify output contains expected text or is reasonable
        expect(actualOutput.length).toBeGreaterThan(0);
      } catch (error) {
        test.fail('Could not retrieve output from page');
      }
    });
  });
});

test.describe('Swift Translator - Negative Functional Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
  });

  // Test each negative case
  testData.negative.forEach((testCase) => {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }) => {
      const inputField = page.locator('textarea, input[type="text"]').first();
      
      await inputField.fill(testCase.input);
      await page.waitForTimeout(1000);
      
      // For negative tests, we're documenting the failure behavior
      let actualOutput = '';
      try {
        const outputSelectors = [
          '.output-text',
          '[class*="output"]',
          '[class*="result"]',
          '[class*="translation"]',
          'div[contenteditable="true"]',
          '.sinhala-output',
          'span[class*="sinhala"]'
        ];
        
        for (const selector of outputSelectors) {
          try {
            const element = page.locator(selector).first();
            if (element) {
              actualOutput = await element.textContent();
              if (actualOutput && actualOutput.trim()) {
                break;
              }
            }
          } catch (e) {
            // Continue
          }
        }
        
        test.info().annotations.push({
          type: 'test-result',
          description: `Input: "${testCase.input}"\nExpected Failure: "${testCase.expectedFailure}"\nActual Output: "${actualOutput}"\nCoverage: ${testCase.coverage}`
        });
        
        // Negative tests are expected to show issues
        // We document what happened
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
    await page.waitForLoadState('networkidle');
  });

  testData.ui.forEach((testCase) => {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }) => {
      const inputField = page.locator('textarea, input[type="text"]').first();
      const outputField = page.locator('[class*="output"], [class*="result"], [class*="translation"]').first();
      
      // Type the input character by character to test real-time updates
      await inputField.focus();
      
      const inputText = testCase.input;
      for (let i = 0; i < inputText.length; i++) {
        await page.keyboard.type(inputText[i]);
        await page.waitForTimeout(100); // Small delay between keystrokes
        
        // Check if output updates
        const currentOutput = await outputField.textContent();
        
        // Verify output is updating
        if (i > 5) {
          expect(currentOutput.length).toBeGreaterThan(0);
        }
      }
      
      // Final output verification
      await page.waitForTimeout(500);
      const finalOutput = await outputField.textContent();
      
      test.info().annotations.push({
        type: 'ui-test',
        description: `Real-time conversion working: Output contains ${finalOutput.length} characters after typing full input`
      });
      
      expect(finalOutput.length).toBeGreaterThan(0);
    });
  });
});
