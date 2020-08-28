const test = require('ava');
const { Employee} = require('../src/employee')

test('employee case1', t=> {
    var employee = new Employee('Lester' ,'engineer');
    const result = 'name: ' + employee.toString();
    t.is('name: Lester (engineer)', result);
});

test('employee case2 of throw type exception.', t=> {
    var employee = new Employee('Lester' ,'engineer');
    const result = 'name: ' + employee.toString();
    t.is('name: Lester (engineer)', result);
    try {
        employee.validateType(employee._type);
      }
      catch (e) {
        t.is(e.message, `Employee cannot be of type ${type}`);
      }
});