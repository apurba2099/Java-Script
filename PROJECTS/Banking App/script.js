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

//Display transactions list
const displayTransaction = function (transaction) {
  containerTransactions.innerHTML = '';
  transaction.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="transaction_row">
              <div class="transaction_type transaction_type--${type}">
                ${i + 1} ${type}
              </div>
              <div class="transaction_date">3 days ago</div>
              <div class="transaction_value">${mov}₹</div>
            </div>`;
    // console.log(html);
    containerTransactions.insertAdjacentHTML('afterbegin', html);
  });
};
// displayTransaction(account1.transactions);

//Create username
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//Display account balance
const calcDisplayBalance = function (transaction) {
  const balance = transaction.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}₹`;
};
// calcDisplayBalance(account1.transactions);

//Total deposit In & Out
const calculateDisplaySummary = function (acc) {
  const income = acc.transactions
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}₹`;
  const outcome = acc.transactions
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}₹`;

  //Calculate Intrest
  const intrest = acc.transactions
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${intrest}₹`;
};
// calculateDisplaySummary(account1.transactions);

//Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc =>
      acc.username === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );
  if (currentAccount) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    //Display UI and Messages
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    //Field Focus remove
    inputLoginPin.blur();
    //Display Transaction
    displayTransaction(currentAccount.transactions);
    //Display balance
    calcDisplayBalance(currentAccount.transactions);
    //Display Summary
    calculateDisplaySummary(currentAccount);
    //Display Username
    debitOwner.textContent = currentAccount.owner;
    //Display valid Date
    debitValidity.textContent = currentAccount.cardValidity;
  }
  // console.log(currentAccount);
});
