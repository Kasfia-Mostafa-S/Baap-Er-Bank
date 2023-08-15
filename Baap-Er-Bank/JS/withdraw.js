// step 1 
document.getElementById('btn-withdraw').addEventListener('click',function(){

  //step-2 get amount from withdraw input field
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step-3 get the previous amount
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-4 total withdraw amount
  const currentWithdraw = previousWithdrawTotal + newWithdrawAmount;

   // set-5 deposit 
   withdrawTotalElement.innerText = currentWithdraw;

   // step-6 get balance current total
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   // step-7 calculate current total balance
   const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotalElement.innerText = currentBalanceTotal;

   //  step-8 clear withdraw field
   withdrawField.value = '';

})