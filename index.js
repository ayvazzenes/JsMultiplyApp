const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);
const textMultiply = document.getElementById("question");
const controlButton = document.querySelector(".btn");
const score = document.getElementById("score");
let inputDeger = document.getElementById("input");
textMultiply.innerText = `What is ${num1} multiply by  ${num2} ?`;
let counter = JSON.parse(localStorage.getItem("score"));
let multi = 0;
multi = num1*num2;
if(!counter){
    counter = 0;
}


score.innerText = `score : ${counter}`



controlButton.addEventListener("click" , (e) => {
    
    
    let result = inputDeger.value;
    if(multi==Number(result)){
        counter++
        updateLocalStroge();
        
    }else{
        
        counter--
        
        updateLocalStroge();
        
        
    }

})

function updateLocalStroge() {
    localStorage.setItem("score", JSON.stringify(counter));
}



    


