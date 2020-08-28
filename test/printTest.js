const test = require('ava');
const {printOwing} = require('../src/print');

test('print case1.', t=> {
    const invoice = {
        'customer': 'BigCo',
        'borderSpacing': [{
          'amount': 5},
          {'amount': 6},
          {'amount': 7},
          {'amount': 8}
        ]
      };
    const result = printOwing(invoice);
    t.is(result,`***********************\n**** Customer Owes ****\n***********************\n name:BigCo\n amount:26\n amount:2020-9-27`);
});