function printOwing(invoice) {
  printBanner();

  // calculate outstanding
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('**************');
  console.log('고객채무');
  console.log('**************');
}

function printDetails(invoice, outstanding) {
  console.log(`customer: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`Due date: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}
function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
