function printOwing (invoice) {
  let outstanding = 0;
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
  let Owing = '***********************\n**** Customer Owes ****\n***********************\n'
  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
  Owing += ` name:${invoice.customer}\n`
  Owing += ` amount:${outstanding}\n`
  Owing += ` amount:${invoice.dueDate.toLocaleDateString()}`
  return Owing
}

module.exports = {
  printOwing,
}