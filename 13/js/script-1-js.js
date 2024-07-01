
var heading = document.querySelector('#heading');

heading.onclick = function (){
    if(confirm("클릭하실래요?")){
        heading.style.color = "red";
    }else {
        heading.style.color = "blue";
    }

};
