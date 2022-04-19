const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const ur_figure = document.getElementById("ur_figure");
const enemy_figure = document.getElementById("enemy_figure");
const result = document.getElementById("result");
const retur = document.getElementById("return");

const handleReturn =()=>{
    location.href = "index.html";
}

retur.addEventListener("click", handleReturn);

let valuator;
const RockValue =()=>{
    valuator = 1;
}
    
const PaperValue =()=>{
    valuator = 2;
}
    
const ScissorsValue =()=>{
    valuator = 3;
}
rock.addEventListener("click", RockValue);
paper.addEventListener("click", PaperValue);
scissors.addEventListener("click", ScissorsValue);


const handleHide =()=>{
    let value;
    if(valuator == 1){
        value = "kamień";
    }
    else if(valuator == 2){
        value = "papier";
    }
    else if(valuator == 3){
        value = "nożyce";
    }
    ur_figure.innerHTML = value;
    document.getElementById("buttons").style.display = "none";
    document.getElementById("results").style.display = "flex";
    
    let x = Math.random();
    x *= 3;
    const x_int = parseInt(x);
    let enemy;

    if(x_int == 0){
        enemy = "kamień";
    }
    else if(x_int == 1){
        enemy = "papier";
    }
    else if(x_int == 2){
        enemy = "nożyce";
    }
    enemy_figure.innerHTML = enemy;
    if(enemy == value){
        result.innerHTML = "remis";
    }
    else if(enemy == "nożyce" && value == "papier"){
        result.innerHTML = "Przegrałeś";
    }
    else if(enemy == "papier" && value == "kamień"){
        result.innerHTML = "Przegrałeś";
    }
    else if(enemy == "kamień" && value == "nożyce"){
        result.innerHTML = "Przegrałeś";
    }
    else if(enemy == "nożyce" && value == "kamień"){
        result.innerHTML = "Wygrałeś";
    }
    else if(enemy == "papier" && value == "nożyce"){
        result.innerHTML = "Wygrałeś";
    }
    else if(enemy == "kamień" && value == "papier"){
        result.innerHTML = "Wygrałeś";
    }
    
}



rock.addEventListener("click", handleHide);
paper.addEventListener("click", handleHide);
scissors.addEventListener("click", handleHide);
