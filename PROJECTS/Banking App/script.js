'use strict';

// Data
const account1 = {
  owner: 'Bikram Pal',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  cardNumber: '4568712385214789',
  cardValidity: '12/24',
};

const account2 = {
  owner: 'Sharan Hedge',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  cardNumber: '5836124345921003',
  cardValidity: '05/26',
};

const account3 = {
  owner: 'Tanmay Bhat',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  cardNumber: '3968632145782109',
  cardValidity: '11/30',
};

const account4 = {
  owner: 'Antik Mahmud',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  cardNumber: '7563124521405631',
  cardValidity: '08/25',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labelSumOut = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.summary_value--interest');
const labelTimer = document.querySelector('.timer');

const debitOwner = document.querySelector('.debit_card--name');
const debitNumber = document.querySelector('.debit_card--number');
const debitValidity = document.querySelector('.debit_card--date');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transaction');

const btnLogin = document.querySelector('.login_btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const btnLogout = document.querySelector('.logout');

const inputLoginUsername = document.querySelector('.login_user');
const inputLoginPin = document.querySelector('.login_pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
