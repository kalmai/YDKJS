var threshHold = 350;
var phoneNumber = 0;
var amount = 0;
var xtraBull = 0;
const TAX = 0.8;

function phoneTotal(){
    amount = 0;
    threshHold = 350;
    phoneNumber = 0;
    xtraBull = 0;
do{
    phoneNumber = phoneNumber + 1;
    amount = 99 * phoneNumber;
    xtraBull = 5 * phoneNumber;
    amount = amount + xtraBull;
    }while(amount + 99 < threshHold);
    alert(amount);
}

function phoneTax(){
    amount = 0;
    threshHold = 350;
    phoneNumber = 0;
    xtraBull = 0;
do{
    phoneNumber = phoneNumber + 1;
    amount = 99 * phoneNumber;
    xtraBull = 5 * phoneNumber;
    amount = amount + xtraBull;
    amount = amount * TAX;
    }while(amount + 99 < threshHold);
    alert(amount.toFixed(2), phoneNumber);
}

function phoneTTinput(){
    var promptValue = prompt("how much you got on you?");
    var PthreshHold = Number(promptValue);
    amount = 0;
    phoneNumber = 0;
    xtraBull = 0;
    if (PthreshHold < 112) var wealth = "poor";
    if (PthreshHold > 112) var wealth = "wealthy";
    switch(wealth){
    case "poor":
        alert("get more money");
        break;
    case "wealthy":
    do{
        phoneNumber = phoneNumber + 1;
        amount = 99 * phoneNumber;
        xtraBull = 5 * phoneNumber;
        amount = amount + xtraBull;
        amount = amount * TAX;
        }while((amount + 112) < PthreshHold);
        alert(phoneNumber);
        alert(amount.toFixed(2));
        break;
    default:{
        alert("hehe xd enter a REAL number")
    }}
    }