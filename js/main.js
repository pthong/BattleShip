console.log("Game is loaded");

const boatsInHarbour = document.querySelectorAll(".harbour .boat");
const myField = document.querySelector(".my-field");

let lastClickedBoat;

for (let i = 0; i < boatsInHarbour.length; i++) {
    console.log(i);
    const boat = boatsInHarbour[i];
    boat.addEventListener("click", (event) =>{
        lastClickedBoat = event.target;
        console.log(lastClickedBoat);
    });
}


myField.addEventListener("click", function(event){
    if(lastClickedBoat){
        myField.appendChild(lastClickedBoat);
    }
});
