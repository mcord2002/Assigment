// tests/test-data.js
const testData = {
  // POSITIVE TEST CASES (24 total)
  positive: [
    // Sentence Structures (Simple, Compound, Complex)
    {
      id: 'Pos_Fun_0001',
      name: 'Simple sentence - daily activity',
      input: 'mama gedhara yanavaa',
      expectedOutput: 'මම ගෙදර යනවා',
      inputLength: 'S',
      coverage: 'Daily language usage | Simple sentence | S (≤30 characters) | Accuracy validation',
      category: 'Sentence structures'
    },
    {
      id: 'Pos_Fun_0002',
      name: 'Simple sentence - eating',
      input: 'mata bath oonee',
      expectedOutput: 'මට බත් ඕනේ',
      inputLength: 'S',
      coverage: 'Daily language usage | Simple sentence | S (≤30 characters) | Accuracy validation',
      category: 'Sentence structures'
    },
    {
      id: 'Pos_Fun_0003',
      name: 'Compound sentence with conjunction',
      input: 'mama gedhara yanavaa saha oyaa enavadha',
      expectedOutput: 'මම ගෙදර යනවා සහ ඔයා එනවාද',
      inputLength: 'M',
      coverage: 'Daily language usage | Compound sentence | M (31–299 characters) | Accuracy validation',
      category: 'Sentence structures'
    },
    {
      id: 'Pos_Fun_0004',
      name: 'Complex sentence with condition',
      input: 'oya enavaanam mama balaa innavaa',
      expectedOutput: 'ඔයා එනවනම් මම බලා ඉන්නවා',
      inputLength: 'M',
      coverage: 'Daily language usage | Complex sentence | M (31–299 characters) | Accuracy validation',
      category: 'Sentence structures'
    },
    
    // Interrogative and Imperative
    {
      id: 'Pos_Fun_0005',
      name: 'Interrogative - how are you',
      input: 'oyaata kohomadha?',
      expectedOutput: 'ඔයාට කොහොමද?',
      inputLength: 'S',
      coverage: 'Greeting / request / response | Interrogative (question) | S (≤30 characters) | Accuracy validation',
      category: 'Interrogative and imperative'
    },
    {
      id: 'Pos_Fun_0006',
      name: 'Imperative - command to go',
      input: 'vahaama enna',
      expectedOutput: 'වහාම එන්න',
      inputLength: 'S',
      coverage: 'Greeting / request / response | Imperative (command) | S (≤30 characters) | Accuracy validation',
      category: 'Interrogative and imperative'
    },
    {
      id: 'Pos_Fun_0007',
      name: 'Interrogative - complex question',
      input: 'meeka hariyata vaeda karanavaadha?',
      expectedOutput: 'මේක හරියට වැඩ කරනවාද?',
      inputLength: 'M',
      coverage: 'Daily language usage | Interrogative (question) | M (31–299 characters) | Accuracy validation',
      category: 'Interrogative and imperative'
    },
    
    // Positive and Negative Forms
    {
      id: 'Pos_Fun_0008',
      name: 'Positive sentence - present tense',
      input: 'mama ehema karanavaa',
      expectedOutput: 'මම එහෙම කරනවා',
      inputLength: 'S',
      coverage: 'Daily language usage | Present tense | S (≤30 characters) | Accuracy validation',
      category: 'Positive and negative forms'
    },
    
    // Tense Variations
    {
      id: 'Pos_Fun_0009',
      name: 'Past tense - went home',
      input: 'mama iiyee gedhara giyaa',
      expectedOutput: 'මම ඉයේ ගෙදර ගියා',
      inputLength: 'S',
      coverage: 'Daily language usage | Past tense | S (≤30 characters) | Accuracy validation',
      category: 'Grammatical forms'
    },
    {
      id: 'Pos_Fun_0010',
      name: 'Future tense - will go home',
      input: 'mama gedhara yamu',
      expectedOutput: 'මම ගෙදර යමු',
      inputLength: 'S',
      coverage: 'Daily language usage | Future tense | S (≤30 characters) | Accuracy validation',
      category: 'Grammatical forms'
    },
    
    // Greetings and Requests
    {
      id: 'Pos_Fun_0011',
      name: 'Common greeting - ayuboovan',
      input: 'aayuboovan!',
      expectedOutput: 'ආයුබෝවන්!',
      inputLength: 'S',
      coverage: 'Greeting / request / response | Simple sentence | S (≤30 characters) | Accuracy validation',
      category: 'Daily language usage'
    },
    {
      id: 'Pos_Fun_0012',
      name: 'Request with politeness',
      input: 'mata udhavvak karanna puLuvandha?',
      expectedOutput: 'මට උදවුවක් කරන්න පුළුවන්ද?',
      inputLength: 'M',
      coverage: 'Greeting / request / response | Interrogative (question) | M (31–299 characters) | Accuracy validation',
      category: 'Daily language usage'
    },
    
    // Pronoun Variations
    {
      id: 'Pos_Fun_0013',
      name: 'Plural form - we go',
      input: 'api yanavaa',
      expectedOutput: 'අපි යනවා',
      inputLength: 'S',
      coverage: 'Daily language usage | Plural form | S (≤30 characters) | Accuracy validation',
      category: 'Grammatical forms'
    },
    {
      id: 'Pos_Fun_0014',
      name: 'Third person singular',
      input: 'eyaa gedhara giyaa',
      expectedOutput: 'එයා ගෙදර ගියා',
      inputLength: 'S',
      coverage: 'Daily language usage | Plural form | S (≤30 characters) | Accuracy validation',
      category: 'Grammatical forms'
    },
    
    // Short Input
    {
      id: 'Pos_Fun_0015',
      name: 'Very short input - hi',
      input: 'hari',
      expectedOutput: 'හරි',
      inputLength: 'S',
      coverage: 'Daily language usage | Simple sentence | S (≤30 characters) | Accuracy validation',
      category: 'Input length variation'
    },
    
    // Mixed English with Singlish
    {
      id: 'Pos_Fun_0016',
      name: 'Singlish with embedded English brand',
      input: 'mata Zoom link ekak evanna',
      expectedOutput: 'මට Zoom link එකක් එවන්න',
      inputLength: 'S',
      coverage: 'Mixed Singlish + English | Simple sentence | S (≤30 characters) | Robustness validation',
      category: 'Mixed language'
    },
    {
      id: 'Pos_Fun_0017',
      name: 'Email and technical terms mixed',
      input: 'mata email ekak evanna puLuvandha',
      expectedOutput: 'මට email එකක් එවන්න පුළුවන්ද',
      inputLength: 'M',
      coverage: 'Mixed Singlish + English | Interrogative (question) | M (31–299 characters) | Robustness validation',
      category: 'Mixed language'
    },
    
    // Word Combinations and Phrases
    {
      id: 'Pos_Fun_0018',
      name: 'Frequent phrase - I am happy',
      input: 'mata sukha nisaa',
      expectedOutput: 'මට සුඛ නිසා',
      inputLength: 'S',
      coverage: 'Word combination / phrase pattern | Simple sentence | S (≤30 characters) | Accuracy validation',
      category: 'Word combinations'
    },
    {
      id: 'Pos_Fun_0019',
      name: 'Multi-word expression with emphasis',
      input: 'hari hari samahan',
      expectedOutput: 'හරි හරි සමහරන්',
      inputLength: 'S',
      coverage: 'Word combination / phrase pattern | Simple sentence | S (≤30 characters) | Accuracy validation',
      category: 'Word combinations'
    },
    
    // Punctuation and Numbers
    {
      id: 'Pos_Fun_0020',
      name: 'Input with currency notation',
      input: 'Rs. 5000 dhaanay',
      expectedOutput: 'Rs. 5000 දනයි',
      inputLength: 'S',
      coverage: 'Punctuation / numbers | Simple sentence | S (≤30 characters) | Robustness validation',
      category: 'Punctuation and formatting'
    },
    {
      id: 'Pos_Fun_0021',
      name: 'Input with time format',
      input: 'mama 7.30 AM yanna yaavee',
      expectedOutput: 'මම 7.30 AM යන්න යාවේ',
      inputLength: 'M',
      coverage: 'Punctuation / numbers | Simple sentence | M (31–299 characters) | Robustness validation',
      category: 'Punctuation and formatting'
    },
    
    // Informal/Slang
    {
      id: 'Pos_Fun_0022',
      name: 'Informal greeting - machan',
      input: 'ela machan!',
      expectedOutput: 'එලා මචන්!',
      inputLength: 'S',
      coverage: 'Slang / informal language | Simple sentence | S (≤30 characters) | Robustness validation',
      category: 'Informal language'
    },
    {
      id: 'Pos_Fun_0023',
      name: 'Informal exclamation',
      input: 'adoo! samahan',
      expectedOutput: 'අදෝ! සමහරන්',
      inputLength: 'S',
      coverage: 'Slang / informal language | Simple sentence | S (≤30 characters) | Robustness validation',
      category: 'Informal language'
    },
    
    // Medium length input
    {
      id: 'Pos_Fun_0024',
      name: 'Medium length daily conversation',
      input: 'mama aaja office yanna kalin check karanna oonee. mama lunch eka kaala 1 pm eke yanna puluvan. oyaa enavadha ekka?',
      expectedOutput: 'මම අද office යන්න කලින් check කරන්න ඕනේ. මම lunch එක කාල 1 pm එකේ යන්න පුලුවන්. ඔයා එනවාද එක්ක?',
      inputLength: 'M',
      coverage: 'Daily language usage | Compound sentence | M (31–299 characters) | Accuracy validation',
      category: 'Daily conversations'
    },
  ],

  // NEGATIVE TEST CASES (10 total) - Cases that should fail or behave incorrectly
  negative: [
    {
      id: 'Neg_Fun_0001',
      name: 'Joined words without spaces - stress test',
      input: 'mamagedharayanavaa',
      expectedFailure: 'Output will be incomplete or incorrect due to missing spaces',
      inputLength: 'S',
      coverage: 'Formatting (spaces / line breaks / paragraph) | Simple sentence | S (≤30 characters) | Robustness validation',
      category: 'Input formatting'
    },
    {
      id: 'Neg_Fun_0002',
      name: 'Multiple consecutive spaces',
      input: 'mama    gedhara    yanavaa',
      expectedFailure: 'System may not handle excessive spacing correctly',
      inputLength: 'S',
      coverage: 'Formatting (spaces / line breaks / paragraph) | Simple sentence | S (≤30 characters) | Robustness validation',
      category: 'Input formatting'
    },
    {
      id: 'Neg_Fun_0003',
      name: 'Invalid Singlish character combination',
      input: 'mama gXXdhara yanavaa',
      expectedFailure: 'Invalid characters XX should not convert or cause unexpected output',
      inputLength: 'S',
      coverage: 'Typographical error handling | Simple sentence | S (≤30 characters) | Error handling / input validation',
      category: 'Invalid input'
    },
    {
      id: 'Neg_Fun_0004',
      name: 'Mixed valid and invalid Singlish',
      input: 'mama gedhara yanavaa XYZ',
      expectedFailure: 'Mixed valid/invalid content may cause partial conversion or errors',
      inputLength: 'M',
      coverage: 'Typographical error handling | Compound sentence | M (31–299 characters) | Robustness validation',
      category: 'Invalid input'
    },
    {
      id: 'Neg_Fun_0005',
      name: 'Very long input - robustness limit test',
      input: 'mama gedhara yanavaa. oyaa enavadha? api paasal yanavaa saha passe chithrapatayakuth balanavaa. oya enavaanam mama balan innavaa. vaessa unath api yanna epaeyi. mama sunaQQgu vunee maarga thadhabadhaya nisaa. dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu.',
      expectedFailure: 'Very long input may cause system lag, incomplete conversion, or output truncation',
      inputLength: 'L',
      coverage: 'Daily language usage | Complex sentence | L (≥300 characters) | Robustness validation',
      category: 'Input length limits'
    },
    {
      id: 'Neg_Fun_0006',
      name: 'Empty or whitespace-only input',
      input: '   ',
      expectedFailure: 'System should handle empty input gracefully, but may not',
      inputLength: 'S',
      coverage: 'Empty/cleared input handling | Simple sentence | S (≤30 characters) | Error handling / input validation',
      category: 'Input validation'
    },
    {
      id: 'Neg_Fun_0007',
      name: 'Numbers-only input',
      input: '12345',
      expectedFailure: 'Numeric-only input should either remain unchanged or cause error',
      inputLength: 'S',
      coverage: 'Punctuation / numbers | Simple sentence | S (≤30 characters) | Error handling / input validation',
      category: 'Input validation'
    },
    {
      id: 'Neg_Fun_0008',
      name: 'Special characters and symbols',
      input: '@#$%^&*()',
      expectedFailure: 'Special characters may not convert or may cause unexpected behavior',
      inputLength: 'S',
      coverage: 'Punctuation / numbers | Simple sentence | S (≤30 characters) | Robustness validation',
      category: 'Input validation'
    },
    {
      id: 'Neg_Fun_0009',
      name: 'Mixed script - partial English input',
      input: 'Hello world mama gedhara yanavaa',
      expectedFailure: 'English text mixed with Singlish may not be handled correctly',
      inputLength: 'M',
      coverage: 'Mixed Singlish + English | Compound sentence | M (31–299 characters) | Robustness validation',
      category: 'Language mixing'
    },
    {
      id: 'Neg_Fun_0010',
      name: 'Repeated invalid patterns',
      input: 'qqqq wwww xxxx yyyy zzzz',
      expectedFailure: 'Repeated invalid character patterns should fail or produce errors',
      inputLength: 'M',
      coverage: 'Typographical error handling | Compound sentence | M (31–299 characters) | Robustness validation',
      category: 'Invalid input'
    },
  ],

  // UI TEST CASE
  ui: [
    {
      id: 'Pos_UI_0001',
      name: 'Real-time Sinhala output updates while typing',
      input: 'mama gedhara yanavaa',
      expectedBehavior: 'Sinhala output updates automatically in real-time as each character is typed, without requiring a convert button or manual submission',
      inputLength: 'S',
      coverage: 'Usability flow (real-time conversion) | Simple sentence | S (≤30 characters) | Real-time output update behavior',
      category: 'UI functionality'
    },
  ]
};

module.exports = testData;
