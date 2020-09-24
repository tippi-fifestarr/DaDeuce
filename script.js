import cardsArr from "./cardNames.js"

let cardsArrTwin = [cardsArr];
const cardContainer = document.querySelector('#cards-container');
const cardChoiceContainer = document.querySelector('#card-choice-container')

const colorsArr = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'white']
let isChosen = false;
let twinmode = false;
let chosenCard;

// function
window.onclick = myFunction;
// https://www.w3schools.com/jsref/event_onclick.asp
// If the user clicks in the window, set the background color of <body> to yellow
function myFunction() {
  const randomNum = Math.floor(Math.random() * Math.floor(colorsArr.length))
  document.getElementsByTagName("BODY")[0].style.background = colorsArr[randomNum]
}

// onclick of the SHUFFLE button, we begin shuffling out the cards on the table
document.getElementById("Button").onclick = function() {
  // try to put an icon here
  // document.createElement(<i class="fab fa-accessible-icon"></i>)
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
  // select the play area (including images and selected character) and = copythat
  let copythat = document.querySelector('#play-table');
  // create thatcopy which is a .cloneNode(deep = troo)
  let thatcopy = copythat.cloneNode(true);
  // targets orig cards with card class .card classes in the orig cards container and makes it kids
  const kids = thatcopy.childNodes[3].childNodes
  thatcopy.id = 'twin-copy';
  document.body.appendChild(thatcopy);
  // dans debug solution: delete all the crap and make a cards constant 
  const cards = document.querySelectorAll('.card')
  // target all the bards and loop through them giving them the flip onclick toggle
  for (const el of cards){
    //if the el. with card class doesn't already have an onclick
    if (!el.hasAttribute('onclick')){
      el.classList.add('newtwin')
      // the ! reverses it: IF IT DOESN'T have the onclick! ex: !false = true 
      el.onclick = function(){
        // console.log("works")
        el.classList.toggle("hidden")
        // mark the card somehow
        
      }
    }
  } 
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