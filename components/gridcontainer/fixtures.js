var fixtures = {};




fixtures.dashboard = [
  {w: 8, h: 1, x: 0, y: 0, el:'<datatable></datatable>'},
  {w: 1, h: 1, x: 0, y: 1, el:'<div>x</div>'},
  {w: 1, h: 1, x: 0, y: 2, el:'<testm></testm>'},
  {w: 1, h: 1, x: 0, y: 3, el:'x'}
];

// Enable Node module
if (typeof(require) == 'function') {
  for (var k in fixtures) {
    exports[k] = fixtures[k];
  }
}
