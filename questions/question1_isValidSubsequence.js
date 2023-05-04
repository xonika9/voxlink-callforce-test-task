function isValidSubsequence(array, sequence) {
  if (sequence.length === 0) {
    return false;
  }
  let seqIndex = 0;
  for (let i = 0; i < array.length && seqIndex < sequence.length; i++) {
    if (array[i] === sequence[seqIndex]) {
      seqIndex++;
    }
  }
  return seqIndex === sequence.length;
}

module.exports = {
  isValidSubsequence,
};
