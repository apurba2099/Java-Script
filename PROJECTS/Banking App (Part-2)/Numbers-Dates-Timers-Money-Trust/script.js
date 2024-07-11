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

//Transaction date format
const formatTransactionDate = function (day, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), day);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const date = `${day.getDate()}`.padStart(2, 0);
  // const month = `${day.getMonth() + 1}`.padStart(2, 0);
  // const year = day.getFullYear();
  const options = {
    day: '2-digit',
    month: '2-digit', // numeric, long, 2-digit
    year: 'numeric', // numeric, 2-digit
  };

  return new Intl.DateTimeFormat(locale, options).format(day);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};

//Display transaction
const displayTransactions = function (acc, sort = false) {
  containerTransactions.innerHTML = '';

  const movs = sort
    ? acc.transactions.slice().sort((a, b) => a - b)
    : acc.transactions;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const day = new Date(acc.transactionsDates[i]);
    const displayDate = formatTransactionDate(day, acc.locale);

    // formatCur function call /
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="transaction_row">
        <div class="transaction_type transaction_type--${type}">
            ${i + 1} ${type}
        </div>
        <div class="transaction_date">${displayDate}</div>
        <div class="transaction_value">${formattedMov}</div>
      </div>
      `;

    containerTransactions.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.transactions.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const income = acc.transactions
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = formatCur(income, acc.locale, acc.currency);

  const outcome = acc.transactions
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = formatCur(
    Math.abs(outcome),
    acc.locale,
    acc.currency
  );

  const interest = acc.transactions
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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
  displayTransactions(acc);

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
let currentAccount, timer;

// //Fake Always Logged In
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    //When 0 seconds, stop timer and logout users
    if (time === 1) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log In To Get Started';
      containerApp.style.opacity = 0;
    }
    //Decrease 1s
    time--;
  };
  //Working process:-
  // set time to 5 minute
  let time = 120;
  tick();

  // call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};

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

    // display date
    const now = new Date();
    // const date = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${date}/${month}/${year}, ${hour}:${min}`;

    const options = {
      day: 'numeric',
      month: '2-digit', // numeric, long, 2-digit
      year: 'numeric', // numeric, 2-digit
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    debitOwner.textContent = `${currentAccount.owner}`;
    debitValidity.textContent = `${currentAccount.cardValidity}`;
    debitNumber.textContent = `${maskDebitCard(currentAccount.cardNumber)}`;

    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // logout function call
    // Logout timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
  // console.log(currentAccount);
});

// OPERATION: Transfer money
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

    // Ad trasfer date
    currentAccount.transactionsDates.push(new Date().toISOString());
    receiverAcc.transactionsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }

  // Clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';
});

// OPERATION: LOAN
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 1000 &&
    currentAccount.transactions.some(mov => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add Transactions
      currentAccount.transactions.push(amount);
      // Add loan date
      currentAccount.transactionsDates.push(new Date().toISOString());
      //Update UI
      updateUI(currentAccount);
    }, 3500);
  }
  clearInterval(timer);
  timer = startLogOutTimer();

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

  displayTransactions(currentAccount, !sorted);

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
