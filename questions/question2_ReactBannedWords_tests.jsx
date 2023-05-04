const { validateText } = require('./question2_ReactBannedWords');

[
  {
    text: '',
    components: [''],
  },
  {
    text: 'example',
    components: ['example'],
  },
  {
    text: 'test321',
    components: ['test', '<BannedWordComponent>321</BannedWordComponent>'],
  },
  {
    text: '123test 321examples 123test',
    components: [
      '<BannedWordComponent>123</BannedWordComponent>',
      'test ',
      '<BannedWordComponent>321</BannedWordComponent>',
      'examples ',
      '<BannedWordComponent>123</BannedWordComponent>',
      'test',
    ],
  },
  {
    text: ' 123321123 ',
    components: [
      ' ',
      '<BannedWordComponent>123</BannedWordComponent>',
      '<BannedWordComponent>321</BannedWordComponent>',
      '<BannedWordComponent>123</BannedWordComponent>',
      ' ',
    ],
  },
].forEach((test) => {
  const { text, components } = test;
  // console.log('В функцию передается text:', text);
  // console.log('Должно получиться components:', components);
  const result = validateText(text);
  // console.log('Что получилось result:', result);

  if (components.join('|') !== result.join('|')) {
    // console.log('ТЕСТ НЕ ПРОШЕЛ \n');
    throw new Error('Test failed');
  }

  // console.log('ТЕСТ ПРОШЕЛ \n');
});
