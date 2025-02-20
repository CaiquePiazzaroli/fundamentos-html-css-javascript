let titulo = document.querySelectorAll("p");
console.log(titulo[0])
for(i = 0; i<titulo.length; i++){
    titulo[i].addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
    })
}


