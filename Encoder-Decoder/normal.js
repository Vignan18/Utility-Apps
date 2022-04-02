
function onchange_action(){
    let e = document.querySelector('#option-value');
  if(e.value === 'Encode'){
        window.open('encode.html',  '_self');
    }
    else   if(e.value === 'Decode'){
        window.open('decode.html',  '_self');
    }
    else if(e.value === 'MD5'){
        window.open('md5.html','_self');
    }
    else if(e.value === 'SHA-1'){
       
        window.open('SHA-1.html','_self');
    }
    else if(e.value === 'SHA-256'){
      
        window.open('SHA-256.html','_self');
    }
    else if(e.value === 'SHA-512'){
       
        window.open('SHA-512.html','_self');
    }

}