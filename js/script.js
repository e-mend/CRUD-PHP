const animation = document.querySelector("img");
const inputLgn = document.querySelector("#user");
const inputPass = document.querySelector("#pass")

const form = document.querySelector("form");

const inputs = document.querySelectorAll("input");

console.log(inputs);


function animationCharger(){
    let imgAnimation = animation.src;
    let innerLgn = inputLgn.innerHTML;
    let innerPass = inputPass.innerHTML;

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


