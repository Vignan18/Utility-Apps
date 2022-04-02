const year_val = document.querySelector('#year');
const month_val = document.querySelector('#month');
const date_val = document.querySelector('#date');
const hour_val = document.querySelector('#hour');
const minute_val = document.querySelector('#minute');
const second_val = document.querySelector('#second');
const output_val = document.querySelector('#output_val');
const btn = document.querySelector('#convert-btn');

btn.addEventListener("click",()=>{
   let month = "";
   if(month_val.value == 1){
        month = "January";
   }
   else if(month_val.value == 2){
       month = "February";
   }
   else if(month_val.value == 3){
    month = "March";
}
else if(month_val.value == 4){
    month = "April";
}
else if(month_val.value == 5){
    month = "May";
}
else if(month_val.value == 6){
    month = "June";
}
else if(month_val.value == 7){
    month = "July";
}
else if(month_val.value == 8){
    month = "August";
}
else if(month_val.value == 9){
    month = "Sepetember";
}
else if(month_val.value == 10){
    month = "February";
}
else if(month_val.value == 11){
    month = "November";
}
else if(month_val.value == 12){
    month = "December";
}


let date_str = `${month} ${date_val.value}, ${year_val.value} ${hour_val.value}:${minute_val.value}:${second_val.value}`
let myDate = new Date(date_str);
let myEpoch = myDate.getTime()/1000.0;
output_val.value = myEpoch;
})