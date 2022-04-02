
function onchange_action(){
    let e = document.querySelector('#option-value');
   if(e.value === 'human-ep' ){
        window.open('humantoepoch.html',  '_self');
    }
    else if(e.value === 'ep-human'){
        window.open('epochtohuman.html','_self');
    }
}