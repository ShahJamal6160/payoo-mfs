document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log("cash Oue Btnh")

        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = document.getElementById('input-cash-out-pin').value;
        console.log(cashOut), pinNumber;

        if(pinNumber === '1234'){
            // console.log('money is reducing')
            const balance = document.getElementById('account-balance').innerText;
            // console.log(balance);
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber - cashOutNumber;
            // console.log(newBalance);

            document.getElementById('account-balance').innerText = newBalance;
            
        }
        else{
            alert('Failed, try again')
        }
})