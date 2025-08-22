const number = 17949087711;
const pin = 1234

document.getElementById('add-money').addEventListener('click',function(e){
    e.preventDefault()
    const selectBank =document.getElementById('bank-name').value;
    const accountNo =(document.getElementById('account-no').value);
   const addAmount = parseInt(document.getElementById('add-amount').value);
  const addPin = (document.getElementById('add-pin').value);
  const totalMoney = parseInt(document.getElementById('money').innerText);
  if(accountNo.length<=11&&accountNo!=number){
    alert("Please Provide a Valid Number")
    return;
  }
  if(addPin.length<=4&&addPin!=pin){
    alert('Invalid Pin!')
  }
  
  const totalBalance = totalMoney+addAmount;
  document.getElementById('money').innerText = totalBalance;
  
})

// cashout
const number1 = 17949087711
const setPin = 6969
document.getElementById('withdraw-money').addEventListener('click',function(e){
    e.preventDefault()
    const agentNumber = document.getElementById('agent-no').value;
    const withdrawAMount = parseInt(document.getElementById('withdraw-amount').value);
    const pinNumber = document.getElementById('pin-number').value;

    if(agentNumber.length<=11 && agentNumber!=number1){
        alert("Invalid Number")
        return;
    }
    if(pinNumber.length<=4 && pinNumber!= setPin){
        alert("Invalid Pin! Please Provide a valid Pin number")
        return;
    }

    const totalAMount = parseInt(document.getElementById('money').innerText)
   
    const finalAmount = totalAMount-withdrawAMount;

    document.getElementById('money').innerText = finalAmount;

    

})

document.getElementById('add-moneyButton').addEventListener('click',function(){
    document.getElementById('cash-outButton').style.display = 'none';
    document.getElementById('money-button').style.display = 'block';


})
document.getElementById('add-cashout').addEventListener('click',function(){
    document.getElementById('money-button').style.display = 'none';
    document.getElementById('cash-outButton').style.display = 'block';


})