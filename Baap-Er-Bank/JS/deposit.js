// step 1 
document.getElementById('btn-deposit').addEventListener('click',function(){
  //step-2 get amount from input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  
  // step-3 get the previous amount
  const depositTotalElement = document.getElementById('deposit-total')
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString)
  
  // step-4 total deposit amount
  const currentDepositTotal = previousDepositTotal + newDepositAmount; 

  // set-5 deposit 
  depositTotalElement.innerText = currentDepositTotal;


  // step-6 get balance current total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-7 calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;


  //  step-8 clear deposit field
  depositField.value = '';

})