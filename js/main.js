console.log("Game is loaded");

const boatsInHarbour = document.querySelectorAll(".harbour .boat");
const myField = document.querySelector(".my-field");

let lastClickedBoat;

initPositions();

for (let i = 0; i < boatsInHarbour.length; i++) {
    console.log(i);
    const boat = boatsInHarbour[i];
    boat.addEventListener("click", (event) =>{
        lastClickedBoat = event.target;
        console.log(lastClickedBoat);
    });
}


myField.addEventListener("click", function(event){
    let position = -1;

    event.target.classList.forEach(classe => {
            if(String(classe).startsWith("position")){
                position = classe.replace("position", "");
                console.log(position);
            }
    });

    let x,y;
    x = position%10;
    y = 2;

    console.log(event.target.classList);
    if(lastClickedBoat){
        if(lastClickedBoat.classList.contains("bsm")){
            lastClickedBoat.style.gridArea = `5 / ${x} / span 1/ span 2`;
        }else if(lastClickedBoat.classList.contains("bm")){
            lastClickedBoat.style.gridArea = `5 / ${x} / span 1/ span 3`;
        }
        myField.appendChild(lastClickedBoat);
    }
});



function initPositions(){
    const myPlaces = document.querySelectorAll(".my-field .place");
    for (let index = 0; index < myPlaces.length; index++) {
        const element = myPlaces[index];
        const position = index+1;
        let x = index % 10 + 1;//hier is 10 blokken breed (denk ik)
        let y = position % 10 != 0 ? (position - x) / 10 : (position - x) / 10 ; // hier is 10, 10 blokken hoog. (denk ik)
        y++;
        // console.log(`position = ${position}, x = ${x}, y = ${y}`);
        element.style.gridArea = `${y} / ${x} / span 1/ span 1`;
    }
}