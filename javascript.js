const body = document.querySelector("body");

const container = document.querySelector(".container");
const btn = document.querySelector("button");
btn.textContent="Resize";
for(let i=1; i<=256;i++){
const box = document.createElement("div");
box.classList.add("box")
container.append(box);
box.addEventListener("mouseenter", ()=>{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let opa = 10;
    opa = opa+10;
    box.style.backgroundColor=`rgb(${red}, ${green}, ${blue}, ${opa}%)`;
    })
    box.addEventListener("mouseleave", ()=>{
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        box.style.backgroundColor= `rgb(${red}, ${green}, ${blue}, ${opa}%)`;
    })
}


btn.addEventListener("click", ()=>{
    container.textContent="";
    const width = 960;
    let size= prompt("Please Enter A Size <100");
    const outcome = width/size;
    const len= size*size;
    for(let j=1; j<=len;j++){
        const box_1 = document.createElement("div");
        box_1.classList.add("box")
        container.append(box_1);
        box_1.addEventListener("mouseenter", ()=>{
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let opa = 10;
            opa = opa+10;
            box_1.style.backgroundColor=`rgb(${red}, ${green}, ${blue}, ${opa}%)`;
        })
        box_1.addEventListener("mouseleave", ()=>{
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let opa = 10;
            opa = opa+10;
            box_1.style.backgroundColor=`rgb(${red}, ${green}, ${blue}, ${opa}%)`;
        })
        box_1.style.width= `${outcome}px`;
        box_1.style.height=`${outcome}px`;
    }

})






