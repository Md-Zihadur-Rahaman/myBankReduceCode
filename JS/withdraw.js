document.getElementById('withdraw-btn').addEventListener('click', function(){
    const lastWithdraw = getInputFieldValueById('withdraw-field');
 
    const existingWithdraw = getInputBalanceValueById('withdraw-total');
    const existingBalance = getInputBalanceValueById('balance-total');
    
  

    const currentWithdraw = existingWithdraw + lastWithdraw;

    getFinalBalanceById('withdraw-total', currentWithdraw);

    const currentBalance = existingBalance - lastWithdraw;

    getFinalBalanceById('balance-total', currentBalance);


});