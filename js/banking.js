// get deposit
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //   clear the input field
    inputField.value = '';
    return amountValue;
}
function getCurrentBalance() {
    const initialBalance = document.getElementById('balance-total');
    const initialBalanceText = initialBalance.innerText;
    const previousBalanceTotal = parseFloat(initialBalanceText);
    return previousBalanceTotal;
}
function updateTotalField(totalFiled, amount) {
    const totalElement = document.getElementById(totalFiled);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal;
}
function updateBalance(amount, isAdd) {
    const initialBalance = document.getElementById('balance-total');
    /*
   const initialBalanceText = initialBalance.innerText;
   const previousBalanceTotal = parseFloat(initialBalanceText); */
    const previousBalanceTotal = getCurrentBalance()
    if (isAdd == true) {
        initialBalance.innerText = amount + previousBalanceTotal;
    }
    else {
        initialBalance.innerText = previousBalanceTotal - amount;
    }
}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// withdraw balance  part
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert('You can not Withdraw More Money  Than you Have In Your Account')
    }

    // 2nd part 

    // reduce total balance
    /* const totalBalanceReduce = document.getElementById('balance-total');
    const totalBalanceReduceText = totalBalanceReduce.innerText;
    // convert float
    const reduceAmount = parseFloat(totalBalanceReduceText);
    totalBalanceReduce.innerText = reduceAmount - withdrawAmount; */



    // console.log(withdrawInputText);
});



// ----------------------------------------

// practice part
/* document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const newInputBalance = parseFloat(depositAmount);
    // console.log(depositAmount);

    // 2nd step..depost ammount
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    //
    const previousBalance = parseFloat(depositTotalText);
    depositTotal.innerText = newInputBalance + previousBalance;

    // add newDeposit and initial balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    // convert into float
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = newInputBalance + totalBalanceAmount;



    // clear
    depositInput.value = '';


}); */

// withdraw part
/* document.getElementById('withdraw-btn').addEventListener('click', function () {
    // 1st part
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawNewAmount = parseFloat(withdrawInputText);

    // 2nd part
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalInput = withdrawTotal.innerText;
    const withdrawPreviousAmount = parseFloat(withdrawTotalInput);
    withdrawTotal.innerText = withdrawNewAmount + withdrawPreviousAmount;
    // reduce withdraw amount from total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = balanceTotal.innerText;
    const reduceAmount = parseFloat(balanceTotalAmount);
    balanceTotal.innerText = reduceAmount - withdrawNewAmount;
    // clear input
    withdrawInput.value = '';



}) */