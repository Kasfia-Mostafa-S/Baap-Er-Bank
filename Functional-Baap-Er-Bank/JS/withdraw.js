document.getElementById('btn-withdraw').addEventListener('click',function(){
  
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');
  const previousWithdrawAmount = getTextElementValueById('Withdraw-total');
  const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  setTextElementValueById('Withdraw-total',newWithdrawTotal);

  const previousBalanceTotal = getTextElementValueById('balance-total');
  const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
  setTextElementValueById('balance-total', newBalanceTotal);
  

})