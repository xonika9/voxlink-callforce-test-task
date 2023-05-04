const bannedWords = ['123', '321'];

const validateText = (text) => {
  if (text === '') {
    return [text];
  }

  const regex = new RegExp(bannedWords.join('|'), 'g');
  const [parts, bannedParts] = [text.split(regex), text.match(regex) || []];

  return parts
    .flatMap((part, i) => [
      part,
      ...(bannedParts[i]
        ? [`<BannedWordComponent>${bannedParts[i]}</BannedWordComponent>`]
        : []),
    ])
    .filter(Boolean);
};

module.exports = {
  validateText,
};
