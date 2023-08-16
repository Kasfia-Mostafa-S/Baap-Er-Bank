document.getElementById("btn-deposit").addEventListener('click',function(){
   const depositField = document.getElementById('deposit-field');
   const newDepositAmountString = depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString);
   console.log(newDepositAmount)
   
 depositField.value ='';

 const depositTotalElement = document.getElementById('balance-total');
 const previousDepositTotalString = depositTotalElement.innerText;
 const previousDepositTotal = parseFloat(previousDepositTotalString);

 const newDepositTotal = previousDepositTotal + newDepositAmount;
 depositTotalElement.innerText = newDepositTotal;


//  balance part
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotalAmount = parseFloat(previousDepositTotalString); 
const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
balanceTotalElement.innerText = newBalanceTotal;


})