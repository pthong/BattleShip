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
    // console.log("x: ", event.clientX);
    // console.log("y: ", event.clientY);
    let position = -1;


    var searchString = 'position';

    event.target.classList.forEach(classe => {
            if(String(classe).startsWith("position")){
                console.log(classe);
                position = classe.replace("position", "");
                console.log(position);
            }

    });


    console.log(event.target.classList);
    // console.log(event.target.style.gridArea);

    if(lastClickedBoat){
        if(lastClickedBoat.classList.contains("bsm")){
            lastClickedBoat.style.gridArea = `5 / 2 / span 1/ span 2`;
        }else if(lastClickedBoat.classList.contains("bm")){
            lastClickedBoat.style.gridArea = `5 / 2 / span 1/ span 3`;
        }
        myField.appendChild(lastClickedBoat);
    }
});
