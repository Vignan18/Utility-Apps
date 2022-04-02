const red_val = document.querySelector("#red");
const green_val = document.querySelector("#green");
const blue_val = document.querySelector("#blue");
const btn = document.querySelector("#convert-btn");
const inputValue = document.querySelector("#input_text");

const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return [ r, g, b ]
}

btn.addEventListener("click", ()=>{
    let colors = hex2rgb(inputValue.value);
    red_val.value = colors[0];
    green_val.value = colors[1];
    blue_val.value = colors[2];
})