// console.log('login from')

// search: form submit reloding the page;

// step-1 set event Handler
document.getElementById("btn-login").addEventListener("click", function(event){
    //step-2: prevent default behavior (reloding browser)
    event.preventDefault(); 
    console.log("login btn clicked")
    //step-3 get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
})