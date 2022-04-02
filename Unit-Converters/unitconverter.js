let input_value = document.querySelector('#inp-val');
let Output_value = document.querySelector('#Output');
let convert_btn = document.querySelector('#convert-btn');

function Kmtom(){
    Output_value.innerHTML = (input_value.value*1000);
}

function Kmtocm(){
    Output_value.innerHTML = (input_value.value*100000);
}

function Kmtomm(){
    Output_value.innerHTML = (input_value.value*1e+6);
}

function KmtoKm(){
    Output_value.innerHTML = input_value.value;
}


//metre to
function mtokm(){
    Output_value.innerHTML = (input_value.value/1000);
}

function mtocm(){
    Output_value.innerHTML = (input_value.value*100);
}

function mtomm(){
    Output_value.innerHTML = (input_value.value*1000);
}

function mtom(){
    Output_value.innerHTML = input_value.value;
}

//centimetre to
function cmtokm(){
    Output_value.innerHTML = (input_value.value/100000);
}

function cmtom(){
    Output_value.innerHTML = (input_value.value/100);
}

function cmtocm(){
    Output_value.innerHTML = (input_value.value);
}

function cmtomm(){
    Output_value.innerHTML = (input_value.value*10);
}

//millimetre to 
function mmtokm(){
    Output_value.innerHTML = (input_value.value/1e+6);
}

function mmtocm(){
    Output_value.innerHTML = (input_value.value/10);
}

function mmtomm(){
    Output_value.innerHTML = (input_value.value);
}

function mmtom(){
    Output_value.innerHTML = (input_value.value/1000);
}






function onchange_action(){
    let e1 = document.querySelector('#option-value-1');
    let e2 = document.querySelector('#option-value-2');
    if(e1.value === 'KM' && e2.value === 'M'){
        convert_btn.addEventListener('click',Kmtom);
    }
    else if(e1.value === 'KM' && e2.value === 'CM'){
        convert_btn.addEventListener('click',Kmtocm);
    }
    else if(e1.value === 'KM' && e2.value === 'MM'){
        convert_btn.addEventListener('click',Kmtomm);
    }
    else if(e1.value === 'M' && e2.value === 'KM'){
        convert_btn.addEventListener('click',mtokm);
    }
    else if(e1.value === 'KM' && e2.value === 'KM'){
        convert_btn.addEventListener('click',KmtoKm);
    }
    else if(e1.value === 'M' && e2.value === 'CM'){
        convert_btn.addEventListener('click',mtocm);
    }
    else if(e1.value === 'M' && e2.value === 'MM'){
        convert_btn.addEventListener('click',mtomm);
    }
    else if(e1.value === 'M' && e2.value === 'M'){
        convert_btn.addEventListener('click',mtom);
    }

    else if(e1.value === 'CM' && e2.value === 'KM'){
        convert_btn.addEventListener('click',cmtokm);
    }
    else if(e1.value === 'CM' && e2.value === 'CM'){
        convert_btn.addEventListener('click',cmtocm);
    }
    else if(e1.value === 'CM' && e2.value === 'MM'){
        convert_btn.addEventListener('click',cmtomm);
    }
    else if(e1.value === 'CM' && e2.value === 'M'){
        convert_btn.addEventListener('click',cmtom);
    }

    else if(e1.value === 'MM' && e2.value === 'KM'){
        convert_btn.addEventListener('click',mmtokm);
    }
    else if(e1.value === 'MM' && e2.value === 'CM'){
        convert_btn.addEventListener('click',mmtocm);
    }
    else if(e1.value === 'MM' && e2.value === 'MM'){
        convert_btn.addEventListener('click',mmtomm);
    }
    else if(e1.value === 'MM' && e2.value === 'M'){
        convert_btn.addEventListener('click',mmtom);
    }
}