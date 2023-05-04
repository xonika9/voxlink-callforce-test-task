const { isValidSubsequence } = require('./question1_isValidSubsequence');

[
  // Test 1: Array with duplicate values, valid subsequence
  {
    array: [1, 2, 1, 2, 3, 4, 1, 2, 3, 4],
    sequence: [1, 2, 3, 4],
  },
  // Test 2: Array with duplicate values, invalid subsequence
  {
    array: [1, 2, 1, 2, 3, 4, 1, 2, 3, 4],
    sequence: [1, 2, 3, 4, 5],
    result: false,
  },
  // Test 3: Negative numbers, valid subsequence
  {
    array: [-5, -1, -22, 25, -6, 1, 8, 10],
    sequence: [-5, -1, 25, -6, 1],
  },
  // Test 4: Negative numbers, invalid subsequence
  {
    array: [-5, -1, -22, 25, -6, 1, 8, 10],
    sequence: [-5, -1, 25, -7, 1],
    result: false,
  },
  // Test 5: Array with large numbers, valid subsequence
  {
    array: [100000, 250000, 500000, 1000000],
    sequence: [100000, 500000, 1000000],
  },
  // Test 6: Array with large numbers, invalid subsequence
  {
    array: [100000, 250000, 500000, 1000000],
    sequence: [100000, 300000, 1000000],
    result: false,
  },
  // Test 7: Array with consecutive values, valid subsequence
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sequence: [1, 3, 5, 7, 9],
  },
  // Test 8: Array with consecutive values, invalid subsequence
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sequence: [1, 3, 5, 8, 9, 11],
    result: false,
  },
  // Test 9: Array with the same repeated value, valid subsequence
  {
    array: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    sequence: [7, 7, 7],
  },
  // Test 10: Array with the same repeated value, invalid subsequence
  {
    array: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    sequence: [7, 7, 8],
    result: false,
  },
].forEach((test) => {
  const { result = true } = test;

  if (isValidSubsequence(test.array, test.sequence) !== result) {
    console.log('ТЕСТ НЕ ПРОШЕЛ \n');
    throw new Error('Test failed');
  }

  console.log('ТЕСТ ПРОШЕЛ \n');
});
