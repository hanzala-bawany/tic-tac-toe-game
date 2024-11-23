let player1Name = prompt("Player 1 Give Name");
let player2Name = prompt("Player 2 Give Name");
let sign = 'x'
let value;
let wining = false;
let a = new Audio("./assets/mp3 1.mp3")
let winAudio = new Audio("./assets/mp3 win.mp3")

let playerTurnsName = document.body.querySelector(".turnChanger")
playerTurnsName.innerHTML = `${player1Name} your turn`




// reset
let reset = document.body.querySelector(".reset")
reset.addEventListener("click",function(){
   let boxText = document.body.querySelectorAll(".box_text")
   boxText.forEach(function(items){
       items.innerHTML = ""
   })

   player1Name = prompt("Player 1 Give Name");
   player2Name = prompt("Player 2 Give Name");
   playerTurnsName.innerHTML = `${player1Name} your turn`

   sign = 'x'
   wining = false;
})


// close modal
function closeModal(){
    document.body.querySelector(".parentOfWinImgContainer").classList.toggle("openModal")
    
        let boxText = document.body.querySelectorAll(".box_text")
        boxText.forEach(function(items){
            items.innerHTML = ""
        })
     
        player1Name = prompt("Player 1 Give Name");
        player2Name = prompt("Player 2 Give Name");
        playerTurnsName.innerHTML = `${player1Name} your turn`     

        sign = 'x'
        wining = false;
}


//  for changing turn of players
function playerTurn(){
   
    if(sign==="x"){
        value = "x"
        sign = "0";
        playerTurnsName.innerHTML = `${player2Name} your turn`
    }
    else{
        value = "0" 
        sign = "x";  
        playerTurnsName.innerHTML = `${player1Name} your turn`
    }
  return  value;
}


//  check wining 
function checkWining(){

    let winNum = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

let boxText = document.body.querySelectorAll(".box_text")

winNum.forEach(function(items){
    let value0 = boxText[items[0]].innerHTML;
    let value1 = boxText[items[1]].innerHTML;
    let value2 = boxText[items[2]].innerHTML;

if( value0 === value1 && value1 === value2 && value0 !== ""){
    wining = true;
    if(value0 == "x"){
document.body.querySelector(".winnerName").innerHTML = player1Name 
console.log("hanzala bawany win");
    }
    else{
        document.body.querySelector(".winnerName").innerHTML = player2Name
        console.log("ali win"); 
     }
    winAudio.play()
    document.body.querySelector(".parentOfWinImgContainer").classList.toggle("openModal")
    return;
}
})

}


// for apply sign of players
document.body.querySelectorAll(".box").forEach(function(items){

    items.addEventListener("click",function(){
        items.querySelector(".box_text").innerHTML =  playerTurn();
        checkWining();
        if(!wining){
           a.play() 
        // a.pause() 
        }
    })

})
























// let a = Array.from(document.body.getElementsByClassName("box"))
// a.forEach(function(items){

// })


// console.log(playerSign);
























// function playerInput1(){
    
//     if(player1Turn){
//         document.body.querySelector(".b1").querySelector(".box_text").innerHTML = "o"
//         player1Turn = false;
//         player2Turn = true;
//         playerTurnsName.innerHTML = `${player2Name} your turn`

//     }
//     else if(player2Turn){
//         document.body.querySelector(".b1").querySelector(".box_text").innerHTML = "x" 
//         player1Turn = true;
//         player2Turn = false;   
//         playerTurnsName.innerHTML = `${player1Name} your turn`
  
//     }

// }

// function playerInput2(){
    
//     if(player1Turn){
//         document.body.querySelector(".b2").querySelector(".box_text").innerHTML = "o"
//         player1Turn = false;
//         player2Turn = true;
//         playerTurnsName.innerHTML = `${player2Name} your turn`

//     }
//     else if(player2Turn){
//         document.body.querySelector(".b2").querySelector(".box_text").innerHTML = "x" 
//         player1Turn = true;
//         player2Turn = false;  
//         playerTurnsName.innerHTML = `${player1Name} your turn`
    
//     }

// }
// function playerInput3(){
    
//     if(player1Turn){
//         document.body.querySelector(".b3").querySelector(".box_text").innerHTML = "o"
//         player1Turn = false;
//         player2Turn = true;
//         playerTurnsName.innerHTML = `${player2Name} your turn`

//     }
//     else if(player2Turn){
//         document.body.querySelector(".b3").querySelector(".box_text").innerHTML = "x" 
//         player1Turn = true;
//         player2Turn = false;  
//         playerTurnsName.innerHTML = `${player1Name} your turn`
    
//     }

// }

// function playerInput4(){
    
//     if(player1Turn){
//         document.body.querySelector(".b4").querySelector(".box_text").innerHTML = "o"
//         player1Turn = false;
//         player2Turn = true;
//         playerTurnsName.innerHTML = `${player2Name} your turn`

//     }
//     else if(player2Turn){
//         document.body.querySelector(".b4").querySelector(".box_text").innerHTML = "x" 
//         player1Turn = true;
//         player2Turn = false; 
//         playerTurnsName.innerHTML = `${player1Name} your turn`
     
//     }

// }
// function playerInput5(){
    
//     if(player1Turn){
//         document.body.querySelector(".b5").querySelector(".box_text").innerHTML = "o"
//         player1Turn = false;
//         player2Turn = true;
//         playerTurnsName.innerHTML = `${player2Name} your turn`

//     }
//     else if(player2Turn){
//         document.body.querySelector(".b5").querySelector(".box_text").innerHTML = "x" 
//         player1Turn = true;
//         player2Turn = false;
//         playerTurnsName.innerHTML = `${player1Name} your turn`
     
//     }

// }
// function playerInput6(){
    
//     if(player1Turn){
//         document.body.querySelector(".b6").querySelector(".box_text").innerHTML = "o"
//         player1Turn = false;
//         player2Turn = true;
//         playerTurnsName.innerHTML = `${player2Name} your turn`

//     }
//     else if(player2Turn){
//         document.body.querySelector(".b6").querySelector(".box_text").innerHTML = "x" 
//         player1Turn = true;
//         player2Turn = false;
//         playerTurnsName.innerHTML = `${player1Name} your turn`
      
//     }

// }

// function playerInput7(){
    
//     if(player1Turn){
//         document.body.querySelector(".b7").querySelector(".box_text").innerHTML = "o"
//         player1Turn = false;
//         player2Turn = true;
//         playerTurnsName.innerHTML = `${player2Name} your turn`

//     }
//     else if(player2Turn){
//         document.body.querySelector(".b7").querySelector(".box_text").innerHTML = "x" 
//         player1Turn = true;
//         player2Turn = false;
//         playerTurnsName.innerHTML = `${player1Name} your turn`
      
//     }

// }
// function playerInput8(){
    
//     if(player1Turn){
//         document.body.querySelector(".b8").querySelector(".box_text").innerHTML = "o"
//         player1Turn = false;
//         player2Turn = true;
//         playerTurnsName.innerHTML = `${player2Name} your turn`

//     }
//     else if(player2Turn){
//         document.body.querySelector(".b8").querySelector(".box_text").innerHTML = "x" 
//         player1Turn = true;
//         player2Turn = false;
//         playerTurnsName.innerHTML = `${player1Name} your turn`
      
//     }

// }
// function playerInput9(){
    
//     if(player1Turn){
//         document.body.querySelector(".b9").querySelector(".box_text").innerHTML = "o"
//         player1Turn = false;
//         player2Turn = true;
//         playerTurnsName.innerHTML = `${player2Name} your turn`

//     }
//     else if(player2Turn){
//         document.body.querySelector(".b9").querySelector(".box_text").innerHTML = "x" 
//         player1Turn = true;
//         player2Turn = false;
//         playerTurnsName.innerHTML = `${player1Name} your turn`
      
//     }

// }


















// document.body.querySelector(".parentOfWinImgContainer").classList.toggle("dispbloayIB")

