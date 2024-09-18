// console.log('home')

//add money to the account

//step -1: add an event handler to the add money btn inside the form
document.getElementById("btn-add-money")
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log('money add')
        //step - 2 
        const addMoneyInput = document.getElementById('input-add-money').value;
        
        // get the number provider
        const pinNumberInput = document.getElementById('input-pin-nember').value;
        
        console.log(typeof addMoneyInput, typeof pinNumberInput);

        //step-3 verfy the pin- this wrong way
        if(pinNumberInput === '1234'){
            console.log('adding Money to your Account');
            //step-4 get the current balance
            const balance = document.getElementById('account-balance').innerText;
            console.log(typeof balance);

            //step-5 add adamoneyInput with balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);

            //step-6 update the balance in thr UI
            document.getElementById('account-balance').innerText = newBalance;

        }
        else{
            alert('Failed to add money! plz try again')
        }
})