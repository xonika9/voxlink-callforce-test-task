const { validateText } = require('./question2_ReactBannedWords');

[
  {
    text: '123',
    components: ['<BannedWordComponent>123</BannedWordComponent>'],
  },
  {
    text: '321test',
    components: ['<BannedWordComponent>321</BannedWordComponent>', 'test'],
  },
  {
    text: 'test123',
    components: ['test', '<BannedWordComponent>123</BannedWordComponent>'],
  },
  {
    text: '123456321123',
    components: [
      '<BannedWordComponent>123</BannedWordComponent>',
      '456',
      '<BannedWordComponent>321</BannedWordComponent>',
      '<BannedWordComponent>123</BannedWordComponent>',
    ],
  },
  {
    text: '123test321example123test',
    components: [
      '<BannedWordComponent>123</BannedWordComponent>',
      'test',
      '<BannedWordComponent>321</BannedWordComponent>',
      'example',
      '<BannedWordComponent>123</BannedWordComponent>',
      'test',
    ],
  },
  {
    text: 'testing1234',
    components: [
      'testing',
      '<BannedWordComponent>123</BannedWordComponent>',
      '4',
    ],
  },
  {
    text: 'test 123 test',
    components: [
      'test ',
      '<BannedWordComponent>123</BannedWordComponent>',
      ' test',
    ],
  },
  {
    text: 'test-123-test',
    components: [
      'test-',
      '<BannedWordComponent>123</BannedWordComponent>',
      '-test',
    ],
  },
  {
    text: '$%^123&*(',
    components: [
      '$%^',
      '<BannedWordComponent>123</BannedWordComponent>',
      '&*(',
    ],
  },
  {
    text: '123321',
    components: [
      '<BannedWordComponent>123</BannedWordComponent>',
      '<BannedWordComponent>321</BannedWordComponent>',
    ],
  },
  {
    text: ' 12332114444123 ',
    components: [
      ' ',
      '<BannedWordComponent>123</BannedWordComponent>',
      '<BannedWordComponent>321</BannedWordComponent>',
      '14444',
      '<BannedWordComponent>123</BannedWordComponent>',
      ' ',
    ],
  },
].forEach((test) => {
  const { text, components } = test;
  console.log('В функцию передается text:', text);
  console.log('Должно получиться components:', components);
  const result = validateText(text);
  console.log('Что получилось result:', result);

  if (components.join('|') !== result.join('|')) {
    console.log('ТЕСТ НЕ ПРОШЕЛ \n');
    throw new Error('Test failed');
  }

  console.log('ТЕСТ ПРОШЕЛ \n');
});
