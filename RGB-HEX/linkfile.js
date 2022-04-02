
function onchange_action(){
    let e = document.querySelector('#option-value');
  if(e.value === 'rgb-hex' ){
        window.open('rgbtohex.html',  '_self');
    }
    else if(e.value === 'hex-rgb'){
        window.open('hextorgb.html','_self');
    }
}