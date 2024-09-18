// console.log('login from')

// search: form submit reloding the page;

// step-1 set event Handler
// document.getElementById("btn-login").addEventListener("click", function(event){
//     //step-2: prevent default behavior (reloding browser)
//     event.preventDefault(); 
//     // console.log("login btn clicked")
//     //step-3 get the phone number
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     console.log(phoneNumber, pinNumber);

//     //step-4-valodate  phone or pim
//     //this is temporary
//     if(phoneNumber === '5' && pinNumber === "1234"){
//         console.log('you are logged in');
//         //step-5- allow user to use the wevsite
//     }
//     else{
//         alert('wrong phone number or pin');
//     }
    
// })


document.getElementById('btn-login')
    .addEventListener('click', function(event){
        event.preventDefault();

    //get phone number & pin

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    if(phoneNumber === "5" && pinNumber === "1234"){
        console.log('you are log in')
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong phone number or pin');
    }
})