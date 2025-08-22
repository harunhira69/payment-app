document.getElementById('add-money').addEventListener('click',function(e){
    e.preventDefault()
    const selectBank =document.getElementById('bank-name').value;
    const accountNo =parseInt(document.getElementById('account-no').value);
   const addAmount = parseInt(document.getElementById('add-amount').value);
  const addPin = parseInt(document.getElementById('add-pin').value);
  const totalMoney = parseInt(document.getElementById('money').innerText);
  
  const totalBalance = totalMoney+addAmount;
  document.getElementById('money').innerText = totalBalance;
  
})