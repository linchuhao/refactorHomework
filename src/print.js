function printOwing (invoice) {
  return getOwing(invoice)
}

module.exports = {
  printOwing,
}

function getOwing(invoice) {
  const outstanding = caculateOutStanding(invoice);
  recordDueDate(invoice);
  let Owing = '***********************\n**** Customer Owes ****\n***********************\n';
  Owing += ` name:${invoice.customer}\n`;
  Owing += ` amount:${outstanding}\n`;
  Owing += ` amount:${invoice.dueDate.toLocaleDateString()}`;
  return Owing;
}

function caculateOutStanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
