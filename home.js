let homeTop=document.createElement("div")
homeTop.className="row justify-content-end"
document.querySelector(".homeBg").appendChild(homeTop)

let homeTopContent=document.createElement("div")
homeTopContent.className="col-10"
homeTop.appendChild(homeTopContent)

let homeP=document.createElement("h2")
homeP.className="text-center mt-5"
homeP.style.fontSize="4rem"
homeP.innerHTML="TOKAT'IN İLK VE TEK ÜRÜN KARŞILAŞTIRMA SİTESİ"
homeTopContent.appendChild(homeP)

let homeC=document.createElement("p")
homeC.className="text-center mx-5 px-5"
homeC.innerHTML="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis facere obcaecati ad. Nobis tenetur fugit fugiat distinctio quisquam a praesentium culpa enim quidem pariatur veritatis, sint, facilis rem eum velit adipisci debitis commodi omnis vitae, aspernatur nemo animi dicta! Ad sit obcaecati velit? Natus, blanditiis nobis odit quod cupiditate aperiam."
homeTopContent.appendChild(homeC)


let homeEnd=document.createElement("div")
homeEnd.className="row justify-content-end mt-5"
document.querySelector(".homeBg").appendChild(homeEnd)

let boxes=document.createElement("div")
boxes.className="col-10 mt-3"
homeEnd.appendChild(boxes)

let cardsRow=document.createElement("div")
cardsRow.className="row justify-content-center"
boxes.appendChild(cardsRow)

//FRUİTS

let box1=document.createElement("div")
box1.className="boxes col-lg-2 col-sm-6"
cardsRow.appendChild(box1)

let box1CP=document.createElement("h5")
box1CP.innerHTML="MEYVELER"
box1.appendChild(box1CP)

let box1C=document.createElement("div")
box1C.classList.add("boxesC")
box1.appendChild(box1C)

box1.addEventListener("click",function(){
    window.location.href="fruits.html"
})



//VEGETABLES

let box2=document.createElement("div")
box2.className="boxes col-lg-2 col-sm-6"
cardsRow.appendChild(box2)
let box2CP=document.createElement("h5")
box2CP.innerHTML="SEBZELER"
box2.appendChild(box2CP)

let box2C=document.createElement("div")
box2C.classList.add("boxesC")
box2.appendChild(box2C)


//

let box3=document.createElement("div")
box3.className="boxes col-lg-2 col-sm-6"
cardsRow.appendChild(box3)

let box3CP=document.createElement("h5")
box3CP.innerHTML="ŞARKÜTERİ"
box3.appendChild(box3CP)


let box3C=document.createElement("div")
box3C.classList.add("boxesC")
box3.appendChild(box3C)

//

let box4=document.createElement("div")
box4.className="boxes col-lg-2 col-sm-6"
cardsRow.appendChild(box4)

let box4CP=document.createElement("h5")
box4CP.innerHTML="ATIŞTIRMALIK"
box4.appendChild(box4CP)


let box4C=document.createElement("div")
box4C.classList.add("boxesC")
box4.appendChild(box4C)

//
let box5=document.createElement("div")
box5.className="boxes col-sm-6 col-lg-2"
cardsRow.appendChild(box5)

let box5CP=document.createElement("h5")
box5CP.innerHTML="KAHVALTILIK"
box5.appendChild(box5CP)


let box5C=document.createElement("div")
box5C.classList.add("boxesC")
box5.appendChild(box5C)