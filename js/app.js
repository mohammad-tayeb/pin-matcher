// generate pin
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    console.log(pin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

// pin matcher module
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const removeNumber = previousTypedNumber.split('');
            removeNumber.pop();
            const remainingNumber = removeNumber.join('');
            typedNumberField.value = remainingNumber;
        }
    }
    else{
        const newtypedNumber = previousTypedNumber + number;
        typedNumberField.value = newtypedNumber;
    }
});

document.getElementById('submit').addEventListener('click',function(){
    const generatedPinField = document.getElementById('display-pin');
    const generatedPin = generatedPinField.value;
    
    const typedPinField = document.getElementById('typed-numbers');
    const typedPin = typedPinField.value;
    const pinFailedMessage = document.getElementById('pin-failed');
    const pinSuccessMessage = document.getElementById('pin-success');
    
    if(generatedPin === typedPin){
        pinSuccessMessage.style.display = 'block';
        pinFailedMessage.style.display = 'none';
    }
    else{
        pinFailedMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }

    // Add a timeout to hide messages after 2 seconds
    setTimeout(function(){
        pinFailedMessage.style.display = 'none';
        pinSuccessMessage.style.display = 'none';
    }, 2000);
});
