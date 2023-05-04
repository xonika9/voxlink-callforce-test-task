function isValidSubsequence(array, sequence) {
  if (sequence.length === 0) {
    return false;
  }

  const findSequenceIndex = (arr, seq) => {
    let seqIndex = 0;

    for (const value of arr) {
      if (value === seq[seqIndex]) {
        seqIndex++;
      }

      if (seqIndex === seq.length) {
        break;
      }
    }

    return seqIndex;
  };

  return findSequenceIndex(array, sequence) === sequence.length;
}

module.exports = {
  isValidSubsequence,
};
