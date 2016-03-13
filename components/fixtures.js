var fixtures = {};




fixtures.DEMO = [
  {w: 1, h: 1, x: 0, y: 0}
];


// Enable Node module
if (typeof(require) == 'function') {
  for (var k in fixtures) {
    exports[k] = fixtures[k];
  }
}
