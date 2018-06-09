const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf8')
  .split('\n')
  .map(line => line.split('  '))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    });
    return customers;
  }, {})

console.log(JSON.stringify(data, null, 2));