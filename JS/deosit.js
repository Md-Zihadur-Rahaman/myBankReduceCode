document.getElementById('deposit-btn').addEventListener('click', function(){
    const lastDeposit = getInputFieldValueById('deposit-field');
  
    const existingDeposit = getInputBalanceValueById('deposit-total');
    const currentDeposit = existingDeposit + lastDeposit;
    

    getFinalBalanceById('deposit-total', currentDeposit);

    const existingBalance = getInputBalanceValueById('balance-total');

    const currentBalance = existingBalance + lastDeposit;
    getFinalBalanceById('balance-total', currentBalance);
});