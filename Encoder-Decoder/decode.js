const input = document.querySelector('#inp-val');

const decode_btn = document.querySelector('#convert-btn');
const output = document.querySelector('#Output');



decode_btn.addEventListener('click',()=>{
    const encodedString = input.value;
    const decodedString  = atob(encodedString);
    output.innerHTML = decodedString;
})