import cardsArr from "./cardNames.js"

let cardsArrTwin = [cardsArr];
// console.log (cardsArrTwin)
// console.log(cardsArr)
const cardContainer = document.querySelector('#cards-container');
const cardChoiceContainer = document.querySelector('#card-choice-container')

const colorsArr = ['red', 'blue', 'green', 'orange', 'purple', 'black','white']
let isChosen = false;
let twinmode = false;
let chosenCard;

// function

// var item = items[Math.floor(Math.random() * items.length)]

window.onclick = myFunction;
// https://www.w3schools.com/jsref/event_onclick.asp
// If the user clicks in the window, set the background color of <body> to yellow
function myFunction() {
  const randomNum = Math.floor(Math.random() * Math.floor(colorsArr.length))
  document.getElementsByTagName("BODY")[0].style.background = colorsArr[randomNum]
  // document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}

document.getElementById("Button").onclick = function() {
  // check for an empty array : 
  if (cardsArr.cards.length > 0) {
    if (cardsArr.cards[0].name  == "MJ"){
      var removedE = cardsArr.cards.splice(0, 1);
      // console.log("REMOVED", removedE)
      const charCard = document.createElement("div");
      charCard.classList.add("card")
      charCard.id = `${removedE[0].name}`
      // make the card flippable
      charCard.onclick = function(e){
        charCard.classList.toggle("hidden");
        isChosen ? null : isChosenFunc(e)
      }
      // charCard.ondblclick = function(e){
      //   // console.log('dblclicked')
      //   // if chosen is true than null, if chosen is false then :
      //   // isChosen ? null : isChosenFunc(e)
      // }
      charCard.innerHTML = `
          <h2> ${removedE[0].name}</h2>
          <img src=${removedE[0].picture} alt="">
      `
      //   
      cardContainer.appendChild(charCard)
    }
    else {
      var optionsE = Math.floor(Math.random() * cardsArr.cards.length);
      var removedE = cardsArr.cards.splice(optionsE, 1);
      // console.log("REMOVED", removedE)
      const charCard = document.createElement("div");
        charCard.classList.add("card")
        charCard.id = `${removedE[0].name}`
        charCard.onclick = function(e){
          charCard.classList.toggle("hidden");
          isChosen ? null : isChosenFunc(e)
        }
        charCard.innerHTML = `
            <h2> ${removedE[0].name}</h2>
            <img src=${removedE[0].picture} alt="">
        `
        //   
        cardContainer.appendChild(charCard)
      // document.getElementById("Answer").innerHTML = removedE[0];
    }
  
  } else {
    alert("the array is now empty");
    document.querySelector('#Button').remove()
  }
}

document.getElementById("twin").onclick = function(){
  let twinmode=true
  // console.log("i let it be true")
  // select the play area (including images and selected character) and = copythat
  let copythat = document.querySelector('#play-table');
  // create thatcopy which is a .cloneNode(deep = troo)
  let thatcopy = copythat.cloneNode(true);
  // for loop through each child element, add the same onclick as up there.
  // document.getElementById("thatcopy") = function()??
  console.log("thatcopychildren",thatcopy.children)
  console.log("thatcopychildnodes", thatcopy.childNodes[3].childNodes)
  // this selects all the .card classes in the and makes it kids
  const kids = thatcopy.childNodes[3].childNodes
  thatcopy.id = 'twin-copy';
  document.body.appendChild(thatcopy);
    
  const cards = document.querySelectorAll(".card")
  // select all the cards and loop through them giving them the flip onclick toggle

  console.log("kids",kids)
    kids.map(kid =>{
      kid.onclick = function(e){
        // console.log("the child works")
        kid.classList.toggle("hidden");
        console.log(tableChild)
      }
    }) 
    
}

const isChosenFunc = (e) => {
  let chosenCardElement;
  console.log("you chose", e.path[1].id)
  chosenCard = e.path[1].id

  console.log(cardsArr)
  //loop over cardsArr
  cardsArr.cards.forEach(card => {
    //find the index of matching object
    if(card.name == chosenCard){
      chosenCardElement = `
      <h2> ${card.name}</h2>
      <img src=${card.picture} alt="">
      `
    }
  })
  const chosenCharCard = document.createElement("div");
  chosenCharCard.innerHTML = `${chosenCardElement}`
  cardChoiceContainer.appendChild(chosenCharCard)
  isChosen = true;
}

