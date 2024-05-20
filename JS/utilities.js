function getInputFieldValueById(fieldId){
    const InputField = document.getElementById(fieldId)
    const InputFieldString = InputField.value;
    const InputFieldValue = parseFloat(InputFieldString)
    InputField.value = '';
    return InputFieldValue;
}
function getInputBalanceValueById(balanceId){
    const InputBalance = document.getElementById(balanceId)
    const InputBalanceString = InputBalance.innerText;
    const InputBalanceValue = parseFloat(InputBalanceString)    
    return InputBalanceValue;
}

function getFinalBalanceById(balanceId, latestBalance){
    const InputBalance = document.getElementById(balanceId)
    InputBalance.innerText = latestBalance
}