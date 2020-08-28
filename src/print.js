function printOwing (invoice) {
  let outstanding = 0;
  let Owing = '***********************\n**** Customer Owes ****\n***********************\n'
  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // record due date
  recordDueDate(invoice);

  // print details
  Owing += ` name:${invoice.customer}\n`
  Owing += ` amount:${outstanding}\n`
  Owing += ` amount:${invoice.dueDate.toLocaleDateString()}`
  return Owing
}

module.exports = {
  printOwing,
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
