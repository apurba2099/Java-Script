'use strict';

// Data
const account1 = {
  owner: 'Bikram Pal',
  transactions: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  cardNumber: '4568712385214789',
  cardValidity: '12/24',

  transactionsDates: [
    '2023-09-18T21:31:17.178Z',
    '2023-11-23T07:42:02.383Z',
    '2023-12-28T09:15:04.904Z',
    '2024-01-01T10:17:24.185Z',
    '2024-03-08T14:11:59.604Z',
    '2024-03-27T17:01:17.194Z',
    '2024-05-11T23:36:17.929Z',
    '2024-05-12T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account2 = {
  owner: 'Emma Wilson',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  cardNumber: '5836124345921003',
  cardValidity: '05/26',

  transactionsDates: [
    '2023-09-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-11-25T06:04:23.907Z',
    '2023-12-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-03-10T14:43:26.374Z',
    '2024-04-25T18:49:59.371Z',
    '2024-04-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Serkan Bolat',
  transactions: [200, -400, 3400, -300, -20, 5000, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  cardNumber: '3968632145782109',
  cardValidity: '11/30',

  transactionsDates: [
    '2023-02-01T13:15:33.035Z',
    '2023-05-30T09:48:16.867Z',
    '2023-06-25T06:04:23.907Z',
    '2023-08-25T14:18:46.235Z',
    '2023-08-05T16:33:06.386Z',
    '2023-12-10T14:43:26.374Z',
    '2024-02-25T18:49:59.371Z',
    '2024-04-26T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'it-IT', // de-DE
};

const account4 = {
  owner: 'Isabella Thomas',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  cardNumber: '7563124521405631',
  cardValidity: '08/25',

  transactionsDates: [
    '2024-01-01T13:15:33.035Z',
    '2024-02-30T09:48:16.867Z',
    '2024-03-25T06:04:23.907Z',
    '2024-04-25T14:18:46.235Z',
    '2024-05-05T16:33:06.386Z',
  ],

  currency: 'RUB',
  locale: 'ru-RU',
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

const displayTransactions = function (transactions, sort = false) {
  containerTransactions.innerHTML = '';

  const movs = sort ? transactions.slice().sort((a, b) => a - b) : transactions;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="transaction_row">
        <div class="transaction_type transaction_type--${type}">
            ${i + 1} ${type}
        </div>
        <div class="transaction_date">3 days ago</div>
        <div class="transaction_value">${mov.toFixed(2)}₹</div>
      </div>
      `;

    containerTransactions.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.transactions.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}₹`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.transactions
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income.toFixed(2)}₹`;

  const outcome = acc.transactions
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcome.toFixed(2))}₹`;

  const interest = acc.transactions
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}₹`;
};

// OPERATION: Creating Usernames
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

// OPERATION: Updating UI
const updateUI = function (acc) {
  // Display Transactions
  displayTransactions(acc.transactions);

  // Display Balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

// OPERATION: Masking Debit card
const maskDebitCard = function (number) {
  const last = number.slice(-4).padStart(number.length, '*').split('');
  const indexes = Array.from({ length: last.length / 4 }, (_, i) => i * 4);
  const groupedArr = indexes.map(i => last.slice(i, i + 4).join(''));
  const formattedStr = groupedArr.join('  ');
  return formattedStr;
};

// OPERATION: Login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc =>
      acc.username === inputLoginUsername.value &&
      acc.pin === +inputLoginPin.value
  );

  if (currentAccount) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    debitOwner.textContent = `${currentAccount.owner}`;
    debitValidity.textContent = `${currentAccount.cardValidity}`;
    debitNumber.textContent = `${maskDebitCard(currentAccount.cardNumber)}`;

    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
  // console.log(currentAccount);
});

// OPERATION: Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.transactions.push(-amount);
    receiverAcc.transactions.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  // Clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';
});

// OPERATION: Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 1000 &&
    currentAccount.transactions.some(mov => mov >= amount * 0.1)
  ) {
    // Add Transactions
    currentAccount.transactions.push(amount);

    //Update UI
    updateUI(currentAccount);
  }

  // Clear input fields
  inputLoanAmount.value = '';
});

// OPERATION: Close
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI and message
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log In To Get Started`;
  }

  // Clear Input Fields
  inputCloseUsername.value = inputClosePin.value = '';
});

// OPERATION: Sorting
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayTransactions(currentAccount.transactions, !sorted);

  sorted = !sorted;
});

// OPERATION: Logout
btnLogout.addEventListener('click', function () {
  labelWelcome.textContent = 'Log In To Get Started';
  containerApp.style.opacity = 0;
});

/////////////////////////////////////////
// SESSIONS

/////////////////////////////////////////
