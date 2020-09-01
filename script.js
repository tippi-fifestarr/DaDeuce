import cardsArr from "./cardNames.js"

const cardContainer = document.querySelector('#cards-container');
const cardChoiceContainer = document.querySelector('#card-choice-container')
let isChosen = false;
let chosenCard;

// var item = items[Math.floor(Math.random() * items.length)]

document.getElementById("Button").onclick = function() {
  // check for an empty array : 
  if (cardsArr.cards.length > 0) {
    if (cardsArr.cards[0].name  == "MJ"){
      var removedE = cardsArr.cards.splice(0, 1);
      console.log("REMOVED", removedE)
      const charCard = document.createElement("div");
      charCard.classList.add("card")
      charCard.id = `${removedE[0].name}`
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
      console.log("REMOVED", removedE)
      const charCard = document.createElement("div");
        charCard.classList.add("card")
        charCard.id = `${removedE[0].name}`
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
      // document.getElementById("Answer").innerHTML = removedE[0];
    }
  
  } else {
    alert("the array is now empty");
    document.querySelector('#Button').remove()

  }
}
// cardsArr.cards.forEach(card => {
//   const charCard = document.createElement("div");
//   charCard.classList.add("card")
//   charCard.id = `${card.name}`
//   charCard.onclick = function(e){
//     charCard.classList.toggle("hidden");
//     isChosen ? null : isChosenFunc(e)
//   }
//   // charCard.ondblclick = function(e){
//   //   // console.log('dblclicked')
//   //   // if chosen is true than null, if chosen is false then :
//   //   // isChosen ? null : isChosenFunc(e)
//   // }
//   charCard.innerHTML = `
//       <h2> ${card.name}</h2>
//       <img src=${card.picture} alt="">
//   `
//   //   
//   cardContainer.appendChild(charCard)

// });

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