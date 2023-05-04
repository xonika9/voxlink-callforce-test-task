const bannedWords = ['123', '321'];

function validateText(text) {
  if (text === '') {
    return [text];
  }
  const regex = new RegExp(bannedWords.join('|'), 'g');
  // console.log('regex', regex);

  const parts = text.split(regex);
  // console.log('parts', parts);

  const bannedParts = text.match(regex) || [];
  // console.log('bannedParts', bannedParts);

  return parts
    .flatMap((part, i) => [
      part,
      ...(bannedParts[i]
        ? [`<BannedWordComponent>${bannedParts[i]}</BannedWordComponent>`]
        : []),
    ])
    .filter(Boolean);
}

module.exports = {
  validateText,
};
