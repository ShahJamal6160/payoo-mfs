/**
 * 1. add event listener to the money btn (form submit)
 * make sure to preventDefault so that page dosen't reloads
 * 2. get the money user wants to add
 * also get the pin Number Provider
 * 3. verify then pin number, for wrong pin number  ==> failed to add,
 * for right pin number , allow to add the number to account balance
 * 4.  get the current balabnce 
 * 
 * 5. add money to be added with the currenat balance
 * 6. display/ update the balance in the DOM
 * 
 * 
 */
//step 1 
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log("added event")

        // get  money and the pin number

        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-nember').value;
        console.log(addMoney, pinNumber);

        if(pinNumber === '1234'){
            //add money to the acount
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber + addMoneyNumber;
            console.log(newBalance);
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('try again')
        }
})