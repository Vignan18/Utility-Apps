const year_val = document.querySelector('#year');
const month_val = document.querySelector('#month');
const date_val = document.querySelector('#date');
const hour_val = document.querySelector('#hour');
const minute_val = document.querySelector('#minute');
const second_val = document.querySelector('#second');
const input_val = document.querySelector('#input_val');
const btn = document.querySelector('#convert-btn');

btn.addEventListener("click",()=>{
   let myDate = new Date(input_val.value * 1000);
   year_val.value = myDate.getFullYear();
   month_val.value = myDate.getMonth();
   date_val.value = myDate.getDate();
   hour_val.value = myDate.getHours();
   minute_val.value = myDate.getMinutes();
   second_val.value = myDate.getSeconds();
})