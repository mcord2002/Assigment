// generate-excel.js
/**
 * This script generates the Excel file for test case documentation
 * Run: npm install xlsx  (if not already installed)
 * Then: node generate-excel.js
 */

const XLSX = require('xlsx');
const testData = require('./tests/test-data');
const fs = require('fs');
const path = require('path');

function generateExcelFile() {
  // Create workbook
  const wb = XLSX.utils.book_new();

  // ===== POSITIVE TEST CASES SHEET =====
  const posData = testData.positive.map(tc => ({
    'TC ID': tc.id,
    'Test Case Name': tc.name,
    'Input Length Type': tc.inputLength,
    'Input': tc.input,
    'Expected Output': tc.expectedOutput,
    'Actual Output': '', // To be filled after test execution
    'Status': 'Not Run',
    'Accuracy Justification / Description': 'Pending test execution',
    'What is covered by the test': tc.coverage
  }));

  const posSheet = XLSX.utils.json_to_sheet(posData);
  XLSX.utils.book_append_sheet(wb, posSheet, 'Positive Tests');

  // ===== NEGATIVE TEST CASES SHEET =====
  const negData = testData.negative.map(tc => ({
    'TC ID': tc.id,
    'Test Case Name': tc.name,
    'Input Length Type': tc.inputLength,
    'Input': tc.input,
    'Expected Output': tc.expectedFailure,
    'Actual Output': '', // To be filled after test execution
    'Status': 'Not Run',
    'Accuracy Justification / Description': 'Pending test execution',
    'What is covered by the test': tc.coverage
  }));

  const negSheet = XLSX.utils.json_to_sheet(negData);
  XLSX.utils.book_append_sheet(wb, negSheet, 'Negative Tests');

  // ===== UI TEST CASES SHEET =====
  const uiData = testData.ui.map(tc => ({
    'TC ID': tc.id,
    'Test Case Name': tc.name,
    'Input Length Type': tc.inputLength,
    'Input': tc.input,
    'Expected Output': tc.expectedBehavior,
    'Actual Output': '', // To be filled after test execution
    'Status': 'Not Run',
    'Accuracy Justification / Description': 'Pending test execution',
    'What is covered by the test': tc.coverage
  }));

  const uiSheet = XLSX.utils.json_to_sheet(uiData);
  XLSX.utils.book_append_sheet(wb, uiSheet, 'UI Tests');

  // ===== SUMMARY SHEET =====
  const summaryData = [
    ['Test Summary', ''],
    ['', ''],
    ['Test Type', 'Count'],
    ['Positive Functional Tests', testData.positive.length],
    ['Negative Functional Tests', testData.negative.length],
    ['UI Tests', testData.ui.length],
    ['Total Test Cases', testData.positive.length + testData.negative.length + testData.ui.length],
    ['', ''],
    ['Coverage Areas', 'Included'],
    ['Sentence Structures', '✓'],
    ['Grammatical Forms', '✓'],
    ['Daily Language Usage', '✓'],
    ['Word Combinations & Phrases', '✓'],
    ['Input Length Variations', '✓'],
    ['Mixed Language Content', '✓'],
    ['Punctuation & Formatting', '✓'],
    ['Informal Language', '✓'],
    ['UI Functionality', '✓'],
  ];

  const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
  XLSX.utils.book_append_sheet(wb, summarySheet, 'Summary');

  // Set column widths
  const defaultWidth = 15;
  const wideWidth = 40;
  
  posSheet['!cols'] = [
    { wch: 12 },  // TC ID
    { wch: 35 },  // Test Case Name
    { wch: 12 },  // Input Length Type
    { wch: 40 },  // Input
    { wch: 40 },  // Expected Output
    { wch: 40 },  // Actual Output
    { wch: 12 },  // Status
    { wch: 40 },  // Description
    { wch: 50 }   // Coverage
  ];

  negSheet['!cols'] = posSheet['!cols'];
  uiSheet['!cols'] = posSheet['!cols'];

  // Write to file
  const filePath = path.join(__dirname, 'Test_Cases_Template.xlsx');
  XLSX.writeFile(wb, filePath);

  console.log(`✓ Excel file created successfully: ${filePath}`);
  console.log(`\nFile contains:`);
  console.log(`- Positive Tests sheet: ${testData.positive.length} test cases`);
  console.log(`- Negative Tests sheet: ${testData.negative.length} test cases`);
  console.log(`- UI Tests sheet: ${testData.ui.length} test cases`);
  console.log(`- Summary sheet: Overview and coverage`);
  console.log(`\nTotal test cases: ${testData.positive.length + testData.negative.length + testData.ui.length}`);
}

// Check if xlsx is installed
try {
  require('xlsx');
  generateExcelFile();
} catch (e) {
  console.error('Error: xlsx module not found.');
  console.log('Please install it first:');
  console.log('npm install xlsx');
  process.exit(1);
}
