const red_val = document.querySelector("#red");
const green_val = document.querySelector("#green");
const blue_val = document.querySelector("#blue");
const btn = document.querySelector("#convert-btn");
const output = document.querySelector("#hexcode");


  
  function ConvertRGBtoHex(r, g, b) {
    let hr = Math.max(0, Math.min(255, Math.round(r))).toString(16);
    let hg = Math.max(0, Math.min(255, Math.round(g))).toString(16);
    let hb = Math.max(0, Math.min(255, Math.round(b))).toString(16);
    return "#" +
        (hr.length<2?"0":"") + hr +
        (hg.length<2?"0":"") + hg +
        (hb.length<2?"0":"") + hb;
  }


btn.addEventListener("click",()=>{
    const test = ConvertRGBtoHex(red_val.value,green_val.value,blue_val.value);
    console.log(test);
    output.value = test;
})