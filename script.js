/**
 * 
 * Need to remove existing content whenever the submit button is clicked so it doesn't continually 
 * append onto itself; - Soft fix - memory leaks possible(?)
 * 
 * Need to create the card-body thing so that the card's info displays if the card is blank
 * 
 * Need to create a carousel
 * 
 * Need to do the media queries
 * 
 * Need to do the append to a list
 * 
 * Need to allow to download to user storage
 */


async function accessDatabase(name) {
  //const datatypes should be all-caps
  //test URL to return the card 'Lightning Bolt'
  const URL = `https://api.magicthegathering.io/v1/cards?name=${name}`

  //axios to access the URL above
  axios.get(URL)
    .then(res => {
      //console log the result to verify information
      console.log(res.data.cards);
      //assigns the returned cardArray to a const
      /** because many cards are re-printed in mutliple sets the cardArray often
       * contains copies of the same card with alternate artwork or with a unique
       * set identifier. We only care that the names are the same as 'card names'
       * are unique for each creature even when re-printed
      */
      const cardArray = res.data.cards;

      //create an array of uniqueCards
      let uniqueCards = [];
      //iterate through the cardArray for each card returned
      cardArray.forEach(card => {
        /**make a boolean exists const; uniqueCards compares the name of
         * cards within it to each card found within cardArray. If the cardname
         * does not exist within uniqueCard the if() statement will append it to
         * uniqueCards
        */
        const exists = uniqueCards.find(Ucard => Ucard.name === card.name);
        if (!exists) {
          uniqueCards.push(card);
        }
      })

      console.log(uniqueCards);
      showToUser(uniqueCards);

    })
    .catch(error => {
      console.error(error);
    })

}

const searchButton = document.querySelector(`#searchButton`);


searchButton.addEventListener('click', () => {

  // removeCards(cardGallery);
  cardGallery.innerHTML = '';

  const searchInput = document.querySelector(`#searchBar`);
  let searchValue = searchInput.value;
  console.log(searchValue);

  accessDatabase(searchValue);


})



const cardGallery = document.querySelector('#cardGallery');

// const word = 'arquimides';

function showToUser(returnedUniqueCards) {
  const image = 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest/scale-to-width-down/250?cb=20140813141013'

  for (let i = 0; i < returnedUniqueCards.length; i++) {
    const chosenCard = returnedUniqueCards[i].name;
    const output =
      `
      <div class='card' onclick="clickedCard('${chosenCard}')" style="background-image: url('${returnedUniqueCards[i].imageUrl}')"></div>
      `
    if (`${returnedUniqueCards[i].imageUrl}` == 'undefined') {
      const imagelessOutput =
      `
      <div class='card' onclick="clickedCard('${chosenCard}')" style="background-image: url('${image}')"></div>
      `
      // console.log('within imageless')
      cardGallery.insertAdjacentHTML('afterbegin', imagelessOutput);
      
    } else {
      cardGallery.insertAdjacentHTML('afterbegin', output);
      // console.log('within images')
    }

  }
}

function clickedCard(name) {
  document.getElementById("form").style.display = "block";
  alert(name);
}


// function removeCards(cardGallery) {
//   while (cardGallery.lastChild) {
//     return cardGallery.removeCards(cardGallery.lastChild);
//   }
// }

//copy working for cardGallery
// function removeCards() {
//   while (cardGallery.lastChild) {
//     cardGallery.removeCards(cardGallery.lastChild);
//   }
// }


//original function if errors result recomment this back in

// function showToUser(returnedUniqueCards) {
//   const image = 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest/scale-to-width-down/250?cb=20140813141013'
//   for (let i = 0; i < returnedUniqueCards.length; i++) {
//     const output =
//       `
//     <div class='oCard'>
//       <p>${returnedUniqueCards[i].name}</p>
//       <img src=${returnedUniqueCards[i].imageUrl}>
//     </div>
//     `
//     if (`${returnedUniqueCards[i].imageUrl}` == 'undefined') {
//       const imagelessOutput =
//       `
//       <div class='oCard'>
//         <p>${returnedUniqueCards[i].name}</p>
//         <img class="noImage" src=${image}>
//       </div>
//       `
//       document.querySelector(`#picture`).insertAdjacentHTML('afterbegin', imagelessOutput);
      
//     } else {
//       document.querySelector(`#picture`).insertAdjacentHTML('afterbegin', output);
//     }

//   }
// }
  
