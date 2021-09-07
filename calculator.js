// So we only have to do this once, find these elements in DOM
const calcForm = document.querySelector('#calc-form');
const loanAmount = document.querySelector('#loan-amount');
const loanYears = document.querySelector('#loan-years');
const loanRate = document.querySelector('#loan-rate');
const payment = document.querySelector('#calc-monthly-payment');
// OR:
// const calcForm = document.getElementById("calc-form");
// const loanAmount = document.getElementById('loan-amount');
// const loanYears = document.getElementById('loan-years');
// const loanRate = document.getElementById('loan-rate');

// OR:
// const loanAmount = document.querySelector('input[id="loan-amount"]');
// const loanYears = document.querySelector('input[id="loan-years"]');
// const loanRate = document.querySelector('input[id="loan-rate"]');

/** Retrieves current form values and returns {amount, years, rate}. */
function getFormValues() {
  return { // converting to number
    loanAmt: +loanAmount.value, 
    loanYr: +loanYears.value, 
    loanInt: +loanRate.value};
}

/** Calculate monthly payment and return. */
function calcMonthlyPayment(amount, years, rate) {
  const intRate = (rate/100) / 12;
  const payments = years * 12;
  return ((amount * (intRate))/(1 - (1 + intRate) ** - payments)).toFixed(2); // format string
}

/** Get form values, calculate & update display. */
function getFormValuesAndDisplayResults() {
  const formData = getFormValues();
  const loanAmount = formData.loanAmt;
  const loanYear = formData.loanYr;
  const loanRate = formData.loanInt;

  payment.innerText = `$${calcMonthlyPayment(loanAmount, loanYear, loanRate)}`;
}

/** Set initial form values and show initial results. Called at app start. */
function setInitialValues() {
  // you can decide on some initial values
  loanAmount.value = 100000; 
  loanYears.value = 10; 
  loanRate.value = 5; 
  getFormValuesAndDisplayResults();
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);