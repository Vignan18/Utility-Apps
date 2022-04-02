const input = document.querySelector('#inp-val');
const encode_btn = document.querySelector('#convert-btn');
const output = document.querySelector('#Output');

encode_btn.addEventListener('click',()=>{
    const Stringtobeencoded = input.value;
    const encodedString  = btoa(Stringtobeencoded);
    output.innerHTML = encodedString;
})

