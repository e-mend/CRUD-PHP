const animation = document.querySelector(".charger-animation");
const inputLgn = document.querySelector("#user");
const inputPass = document.querySelector("#pass")

const form = document.querySelector("form");

const inputs = document.querySelectorAll("input");

console.log(inputs);


function animationCharger(){
    let innerAnimation = animation.innerHTML;
    let innerLgn = inputLgn.innerHTML;
    let innerPass = inputPass.innerHTML;

    if(innerLgn == ""){
        innerAnimation = "";
        innerAnimation = '<ion-icon name="battery-half-outline"></ion-icon>';

    }if(innerPass == "") {
        innerAnimation = "";
        innerAnimation = '<ion-icon name="battery-full-outline"></ion-icon>';

    } else {
        innerAnimation = "";
        innerAnimation = '<ion-icon name="battery-charging-outline"></ion-icon>';
    }
}

    inputs[0].addEventListener("input", (event) =>{
        animationCharger();
    });
    
    inputs[1].addEventListener("input", (event) =>{
        animationCharger();
    });
    
    // form.addEventListener("submit", (event) => {
    //     event.preventDefault();
    
        
    

    //         form.submit();
    // });


