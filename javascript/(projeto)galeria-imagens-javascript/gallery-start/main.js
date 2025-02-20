const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imgArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const imgAlt = ["olho de uma pessoa", "fluido de algo","violetas","egito","borboleta"];

//exibindo todas a imagens
for (var i = 0; i < imgArray.length; i++){
    let img = document.createElement("img");
    img.alt=  imgAlt[i];
    img.src=`images/${imgArray[i]}`;
    thumbBar.appendChild(img);  
}

//alterando a imgem na area principal
thumbBar.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
});

//alterando a claridade da imagem
btn.addEventListener("click", () => {
    if(btn.attributes.class.value==="dark"){
        btn.setAttribute("class", "light");
        btn.textContent="Clarear";
        overlay.style.backgroundColor ="rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent="Escurecer";
        overlay.style.backgroundColor ="rgba(0,0,0,0)";
    }    
});


//  const newImage = document.createElement('img');
//  newImage.setAttribute('src', xxx);
//  newImage.setAttribute('alt', xxx);
//  thumbBar.appendChild(newImage);


