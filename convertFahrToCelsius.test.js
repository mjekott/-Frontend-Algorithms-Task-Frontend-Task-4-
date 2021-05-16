const convertFahrToCelsius = require('./convertFahrToCelsius');

test('', () => {
  expect(convertFahrToCelsius(0)).toMatch('-17.7778');
  expect(convertFahrToCelsius('0')).toMatch('-17.7778');
  expect(convertFahrToCelsius([1, 2, 3])).toMatch(
    '[1,2,3] is not a valid number but a/an array.'
  );
  expect(convertFahrToCelsius({ temp: 0 })).toMatch(
    '{temp: 0} is not a valid number but a/an object.'
  );
});
