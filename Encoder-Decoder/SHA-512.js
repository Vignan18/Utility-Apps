const input = document.querySelector('#inp-val');
const generate_btn = document.querySelector('#convert-btn');
const output = document.querySelector('#Output');

generate_btn.addEventListener('click',()=>{
    const md5HashGeneratedValue = CryptoJS.SHA512(input.value);
    output.innerHTML = md5HashGeneratedValue;
})