const input_val = document.querySelector('#inp-val');
const count_btn = document.querySelector('#convert-btn');
const output = document.querySelector('#Output');

count_btn.addEventListener('click',()=>{
    const sentence = input_val.value;
    const wordCount = sentence.split(' ');
    output.innerHTML = `Number of words: ${wordCount.length}`;``
})