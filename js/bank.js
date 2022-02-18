// 1

/* document.getElementById('button-deposit').addEventListener('click', function () {
    // console.log('this is clicked')

    const depositInput = document.getElementById('input-deposit');

    const depositedAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');

    depositTotal.innerText = depositedAmount

    // clear input box

    depositInput.value = ''
}) */


// 2 deposit and total balance added

document.getElementById('button-deposit').addEventListener('click', function () {
    // console.log('this is clicked')

    // adding deposit
    const depositInput = document.getElementById('input-deposit');

    const newdepositedText = depositInput.value;
    const newdepositedAmount = parseFloat(newdepositedText);

    const depositTotal = document.getElementById('deposit-total');

    const previousDepostedText = depositTotal.innerText;
    const previousDepostedAmount = parseFloat(previousDepostedText);

    const newdepositedTotal = previousDepostedAmount + newdepositedAmount

    depositTotal.innerText = newdepositedTotal

    // clear input box

    depositInput.value = ''

    // update account balance

    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotalText = balanceTotal.innerText;

    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);

    const newBalanceAmount = previousBalanceTotalAmount + newdepositedAmount;

    balanceTotal.innerText = newBalanceAmount
})

// 3 withdraw added and total balance deducted

document.getElementById('button-withdraw').addEventListener('click', function () {
    // console.log('clicked');

    const withdrawInput = document.getElementById('input-withdraw');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText)

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;

    withdrawTotal.innerText = newWithdrawAmount;

    withdrawInput.value = ''


    // update account balance

    const balanceTotal = document.getElementById('balance-total');

    const updateBalanceText = balanceTotal.innerText;

    const updateBalanceAmount = parseFloat(updateBalanceText);

    const updateTotalAmount = updateBalanceAmount - withdrawAmount;

    balanceTotal.innerText = updateTotalAmount;

})








