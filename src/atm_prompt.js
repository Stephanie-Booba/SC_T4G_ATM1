//THE VISUAL ATM WORKFLOW

// These two links allow us to print our final results directly onto the webpage screen
const receiptTitle = document.getElementById("receipt-title");
const receiptText = document.getElementById("receipt-text");

// 1. SET THE INITIAL BALANCE & SECURITY DATA
let userPin = ("2131"); //this is the pin stored for the user
let userBalance = 5600;


// 2. ASK THE USER FOR INPUT (Runs automatically as soon as the page loads)
let enteredPin = prompt("Welcome to MISS BOOBA'S ATM.Please enter your 4-digit-pin");


// 3. VALIDATE / CHECK THE PIN NUMBER
if(enteredPin === userPin){
    let userAmount = prompt(`PIN ACCEPTED! Your current balance is ${userBalance}. Enter amount to withdraw)`)
   // console.log(typeof(userAmount)); //string
    userAmount = Number(userAmount); 
    //console.log(typeof(userAmount)); //number
    if(userBalance >= userAmount){
        let newuserBalance = userBalance - userAmount;
       // userBalance = userBalance - userAmount;
       // userBalance  -= userAmount;

       receiptText.innerText = "TRANSACTION SUCCESSFUL.";
       receiptText.innerText = `Dispensing cash... You withdrew ${userAmount}.
       Your remaining balance is now ${userBalance}.`;
    } else{
        receiptText.innerText = "INSUFFICIENT FUNDS";
        receiptText.innerText = `Transaction declined...You cannot withdraw ${userAmount}, because your balance is ${userBalance}`;
    }

} else{
    receiptText.innerText = "ACCESS DENIED";
    receiptText.innerText = "Invalid security PIN code entered.Account blocked for your protection";
}

    
    
    
    
    // 4. CHECK AVAILABILITY OF FUNDS
    
        
    
        

    
    // TASK 6: Handle the error layout if the PIN was completely wrong