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
        
        console.log(addMoneyInput, pinNumberInput);
})