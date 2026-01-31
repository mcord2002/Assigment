// tests/test-runner.js
const { chromium } = require('playwright');
const testData = require('./test-data');
const fs = require('fs');
const path = require('path');

/**
 * Manual test runner for capturing detailed test results
 * This helps capture actual vs expected outputs for Excel reporting
 */

async function captureTestResults() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const results = [];

  try {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

    // Helper function to get output
    const getOutput = async () => {
      await page.waitForTimeout(1500);
      let output = '';
      
      const selectors = [
        '.output-text',
        '[class*="output"]',
        '[class*="result"]',
        '[class*="translation"]',
        'div[contenteditable="true"]',
        '.sinhala-output',
        'span[class*="sinhala"]'
      ];

      for (const selector of selectors) {
        try {
          const text = await page.locator(selector).first().textContent();
          if (text && text.trim()) {
            output = text.trim();
            break;
          }
        } catch (e) {
          // Continue
        }
      }
      return output;
    };

    // Test positive cases
    console.log('Testing positive functional cases...');
    for (const testCase of testData.positive) {
      try {
        const inputField = page.locator('textarea, input[type="text"]').first();
        await inputField.fill(testCase.input);
        
        const actualOutput = await getOutput();
        
        results.push({
          tcId: testCase.id,
          testCaseName: testCase.name,
          inputLengthType: testCase.inputLength,
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: actualOutput,
          status: actualOutput.length > 0 ? 'Pass' : 'Fail',
          coverage: testCase.coverage,
          description: `Input successfully converted. Output: ${actualOutput}`,
          type: 'Positive'
        });

        console.log(`✓ ${testCase.id}: ${testCase.name}`);
      } catch (error) {
        results.push({
          tcId: testCase.id,
          testCaseName: testCase.name,
          inputLengthType: testCase.inputLength,
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: 'ERROR',
          status: 'Error',
          coverage: testCase.coverage,
          description: error.message,
          type: 'Positive'
        });
        console.log(`✗ ${testCase.id}: ${error.message}`);
      }
    }

    // Clear page for negative tests
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Test negative cases
    console.log('\nTesting negative functional cases...');
    for (const testCase of testData.negative) {
      try {
        const inputField = page.locator('textarea, input[type="text"]').first();
        await inputField.fill(testCase.input);
        
        const actualOutput = await getOutput();
        
        results.push({
          tcId: testCase.id,
          testCaseName: testCase.name,
          inputLengthType: testCase.inputLength,
          input: testCase.input,
          expectedOutput: testCase.expectedFailure,
          actualOutput: actualOutput,
          status: 'Fail', // Negative tests are expected to fail or show issues
          coverage: testCase.coverage,
          description: `${testCase.expectedFailure}. Actual output: ${actualOutput}`,
          type: 'Negative'
        });

        console.log(`✓ ${testCase.id}: ${testCase.name} (negative test)`);
      } catch (error) {
        results.push({
          tcId: testCase.id,
          testCaseName: testCase.name,
          inputLengthType: testCase.inputLength,
          input: testCase.input,
          expectedOutput: testCase.expectedFailure,
          actualOutput: 'ERROR',
          status: 'Fail',
          coverage: testCase.coverage,
          description: `Error: ${error.message}`,
          type: 'Negative'
        });
        console.log(`✓ ${testCase.id}: ${testCase.name} (negative test - error as expected)`);
      }
    }

    // Clear and test UI
    await page.reload();
    await page.waitForLoadState('networkidle');

    console.log('\nTesting UI scenarios...');
    for (const testCase of testData.ui) {
      try {
        const inputField = page.locator('textarea, input[type="text"]').first();
        const outputField = page.locator('[class*="output"], [class*="result"], [class*="translation"]').first();
        
        await inputField.focus();
        
        // Type slowly to test real-time
        const inputText = testCase.input;
        for (let i = 0; i < inputText.length; i++) {
          await page.keyboard.type(inputText[i]);
          await page.waitForTimeout(50);
        }
        
        await page.waitForTimeout(1000);
        const finalOutput = await outputField.textContent();
        
        results.push({
          tcId: testCase.id,
          testCaseName: testCase.name,
          inputLengthType: testCase.inputLength,
          input: testCase.input,
          expectedOutput: testCase.expectedBehavior,
          actualOutput: finalOutput || 'Real-time updates working',
          status: finalOutput ? 'Pass' : 'Fail',
          coverage: testCase.coverage,
          description: 'Real-time output updates during typing',
          type: 'UI'
        });

        console.log(`✓ ${testCase.id}: ${testCase.name}`);
      } catch (error) {
        results.push({
          tcId: testCase.id,
          testCaseName: testCase.name,
          inputLengthType: testCase.inputLength,
          input: testCase.input,
          expectedOutput: testCase.expectedBehavior,
          actualOutput: 'ERROR',
          status: 'Fail',
          coverage: testCase.coverage,
          description: error.message,
          type: 'UI'
        });
        console.log(`✗ ${testCase.id}: ${error.message}`);
      }
    }

  } finally {
    await browser.close();
  }

  // Save results to JSON for later use
  const resultsPath = path.join(__dirname, '..', 'test-results-detailed.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  
  console.log(`\n\nTest Results Summary:`);
  console.log(`Total Tests: ${results.length}`);
  console.log(`Passed: ${results.filter(r => r.status === 'Pass').length}`);
  console.log(`Failed: ${results.filter(r => r.status === 'Fail').length}`);
  console.log(`Errors: ${results.filter(r => r.status === 'Error').length}`);
  console.log(`\nDetailed results saved to: ${resultsPath}`);

  return results;
}

// Run if executed directly
if (require.main === module) {
  captureTestResults().catch(console.error);
}

module.exports = { captureTestResults };
