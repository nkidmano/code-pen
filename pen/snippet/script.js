const address = {
  street: 'Nguyen Lam',
  city: 'Ho Chi Minh',
  zipCode: 700000,
  findAddress() {
    console.log(`${this.street} ${this.city}`);
  }
};

// Factory Function
function createAddress(street, city, zipCode, number) {
  return {
    street,
    city,
    zipCode,
    number,
    findAddress() {
      console.log(`${this.street} ${this.city}`);
    }
  };
}

// Constructor Function
function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
  this.findAddress = function() {
    console.log(`${this.street} ${this.city}`);
  };
}

const address1 = new CreateAddress('Thach Lam', 'Saigon', 700000);
const address2 = new CreateAddress('Ly Thai To', 'Saigon', 700000);

// Compare object
function areEqual(address1, address2) {
  return JSON.stringify(address1) === JSON.stringify(address2);
}

// Default parameters
function CreatePost(title, body, author) {
  this.title = title,
  this.body = body,
  this.author = author,
  this.views = 0,
  this.comments = [],
  this.isLive = false
}

// const priceRanges = [
//   { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
//   { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
//   { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
// ];

// Arguments objects
function sum() {
  let total = 0;
  for (let value of arguments)
    total += value;
  return total;
}

// Getter and Setter
const person = {
  firstname: 'ThanhTan',
  lastname: 'Duong',
  get fullName() {
    console.log(`${this.lastname} ${this.firstname}`);
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.lastname = parts[0];
    this.firstname = parts[1];
  }
};