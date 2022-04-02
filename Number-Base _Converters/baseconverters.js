let input_value = document.querySelector('#inp-val');
let Output_value = document.querySelector('#Output');
let genarate_btn = document.querySelector('#convert-btn');

function binarytoDecimal(){
    Output_value.innerHTML = parseInt(input_value.value, 2);
}

function binarytoOctal(){
    Output_value.innerHTML = parseInt(input_value.value, 2).toString(8);
}

function binarytoHex(){
    Output_value.innerHTML = parseInt(input_value.value, 2).toString(16);
}

function binarytoBinary(){
    Output_value.innerHTML = input_value.value;
}

function decimaltoBinary(){
    Output_value.innerHTML = parseInt(input_value.value).toString(2);
}

function decimaltoHex(){
    Output_value.innerHTML = parseInt(input_value.value).toString(16);
}

function decimaltoOctal(){
    Output_value.innerHTML = parseInt(input_value.value).toString(8);
}

function decimaltoDecimal(){
    Output_value.innerHTML = input_value.value;
}

function hextoBinary(){
    Output_value.innerHTML = parseInt(input_value.value, 16).toString(2);
}

function hextoDecimal(){
    Output_value.innerHTML = parseInt(input_value.value, 16).toString(10);
}

function hextoHex(){
    Output_value.innerHTML = input_value.value;
}

function hextoOctal(){
    Output_value.innerHTML = parseInt(input_value.value, 16).toString(8);
}
    

function octaltoBinary(){
    Output_value.innerHTML = parseInt(input_value.value, 8).toString(2);
}

function octaltoDecimal(){
    Output_value.innerHTML = parseInt(input_value.value, 8).toString(10);
}

function octaltoHex(){
    Output_value.innerHTML = parseInt(input_value.value, 8).toString(16);
}

function octaltoOctal(){
    Output_value.innerHTML = input_value.value;
}




function onchange_action(){
    let e1 = document.querySelector('#option-value-1');
    let e2 = document.querySelector('#option-value-2');
    if(e1.value === 'Binary' && e2.value === 'Decimal'){
        genarate_btn.addEventListener('click',binarytoDecimal);
    }
    else if(e1.value === 'Binary' && e2.value === 'Octal'){
        genarate_btn.addEventListener('click',binarytoOctal);
    }
    else if(e1.value === 'Binary' && e2.value === 'Hex'){
        genarate_btn.addEventListener('click',binarytoHex);
    }
    else if(e1.value === 'Binary' && e2.value === 'Binary'){
        genarate_btn.addEventListener('click',binarytoBinary);
    }
    //Decimal
    else if(e1.value === 'Decimal' && e2.value === 'Binary'){
        genarate_btn.addEventListener('click',decimaltoBinary);
    }
    else if(e1.value === 'Decimal' && e2.value === 'Decimal'){
        genarate_btn.addEventListener('click',decimaltoDecimal);
    }
    else if(e1.value === 'Decimal' && e2.value === 'Hex'){
        genarate_btn.addEventListener('click',decimaltoHex);
    }
    else if(e1.value === 'Decimal' && e2.value === 'Octal'){
        genarate_btn.addEventListener('click',decimaltoOctal);
    }

    //hex
    else if(e1.value === 'Hex' && e2.value === 'Binary'){
        genarate_btn.addEventListener('click',hextoBinary);
    }
    else if(e1.value === 'Hex' && e2.value === 'Decimal'){
        genarate_btn.addEventListener('click',hextoDecimal);
    }
    else if(e1.value === 'Hex' && e2.value === 'Hex'){
        genarate_btn.addEventListener('click',hextoHex);
    }
    else if(e1.value === 'Hex' && e2.value === 'Octal'){
        genarate_btn.addEventListener('click',hextoOctal);
    }

    //octal
    else if(e1.value === 'Octal' && e2.value === 'Binary'){
        genarate_btn.addEventListener('click',octaltoBinary);
    }
    else if(e1.value === 'Octal' && e2.value === 'Decimal'){
        genarate_btn.addEventListener('click',octaltoDecimal);
    }
    else if(e1.value === 'Octal' && e2.value === 'Hex'){
        genarate_btn.addEventListener('click',octaltoHex);
    }
    else if(e1.value === 'Octal' && e2.value === 'Octal'){
        genarate_btn.addEventListener('click',octaltoOctal);
    }
}