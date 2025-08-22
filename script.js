document.getElementById('loginButton').addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumber = 123456789
    const pinNumber = 1234;
    const mobileNumberAccess = document.getElementById('mobile-number').value;
    const mobileNumberConverted = parseInt(mobileNumberAccess)
   
    const pinNumberAccess = document.getElementById('pin-number').value;
    const pinNumberConverted = parseInt(pinNumberAccess);
   

    if(mobileNumber===mobileNumberConverted&&pinNumber===pinNumberConverted){
        window.location.href="./home.html";
    }
    else{
        alert("invalid")
    }
})