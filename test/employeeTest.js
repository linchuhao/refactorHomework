const test = require('ava');
const { Employee} = require('../src/employee')

test('employee case1', t=> {
    var employee = new Employee('Lester' ,'engineer');
    const result = 'name: ' + employee.toString();
    t.is('name: Lester (engineer)', result);
});

test('employee case2', t=> {
    var employee = new Employee('Lester' ,'engineer');
    const result = 'name: ' + employee.toString();
    t.is('name: Lester (engineer)', result);
});