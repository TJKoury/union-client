var fixtures = {};




fixtures.DEMO = [
  {w: 1, h: 1, x: 0, y: 0},
  {w: 1, h: 1, x: 0, y: 1},
  {w: 1, h: 1, x: 0, y: 2},
  {w: 1, h: 1, x: 0, y: 3}
];


// Enable Node module
if (typeof(require) == 'function') {
  for (var k in fixtures) {
    exports[k] = fixtures[k];
  }
}
