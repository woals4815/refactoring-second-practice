function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

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
