const checkYuGiOh = require('./checkYuGiOh');

test('', () => {
  expect(checkYuGiOh(10)).toEqual([
    1,
    'yu',
    'gi',
    'yu',
    'oh',
    'yu-gi',
    7,
    'yu',
    'gi',
    'yu-oh',
  ]);

  expect(checkYuGiOh('5')).toEqual([1, 'yu', 'gi', 'yu', 'oh']);
  expect(checkYuGiOh('fizzbuzz is meh')).toMatch(
    `invalid parameter: "fizzbuzz is meh"`
  );
});
