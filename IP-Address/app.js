const content = document.querySelector('.ip');

fetch("https://api.ipify.org/?format=json").then(response => response.json())
.then(function(data){
     content.innerText = data.ip;
});