async function accessDatabase(name) {
  //const datatypes should be all-caps
  //test URL to return the card 'Lightning Bolt'
  const URL = `https://api.magicthegathering.io/v1/cards?name=${name}`

  //axios to access the URL above
  axios.get(URL)
    .then(res => {
      //console log the result to verify information
      // console.log(res.data.cards);
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

      showToUser(uniqueCards);

    })
    .catch(error => {
      console.error(error);
    })

}

const searchButton = document.querySelector(`#searchButton`);

/**
 * Listener function to take the user's input from the search field
 */

searchButton.addEventListener('click', () => {
  cardGallery.innerHTML = '';

  const searchInput = document.querySelector(`#searchBar`);
    let searchValue = searchInput.value;
    accessDatabase(searchValue);    

})


/**
 * showToUser function takes the returned array of uniqueCards from
 * the async function. It then iterates through them and formats them to be displayed.
 * Cards without an imageURl are assigned a generic MTG cardback as their .card div
 * and provided with a .card-info div to display infromation
 */
const cardGallery = document.querySelector('#cardGallery');

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
      <div class='card' onclick="clickedCard('${chosenCard}')" style="background-image: url('${image}')">
        <div class='card-info'>
          <p>Unfortunately this card's image cannot be displayed</p>
            <p>${returnedUniqueCards[i].name}</p>
            <p>${returnedUniqueCards[i].type}</p>
            <p>${returnedUniqueCards[i].text}</p>
        </div>
      </div>
      `
      cardGallery.insertAdjacentHTML('afterbegin', imagelessOutput);
      
    } else {
      cardGallery.insertAdjacentHTML('afterbegin', output);
    }

  }
}

/**
 * Listens to the clicked card to pop up the form menu 
 */
function clickedCard(name) {
  const formBehavior = document.getElementById("form");
  formBehavior.style.display = "block"
  
  document.getElementById('cancel').onclick = function () {
    formBehavior.style.display = 'none';
  }

  document.getElementById('confirm').onclick = function () {

    formBehavior.style.display = 'none';
    console.log(name);
    newAPICALL(name);
  }

}

/**
 * Makes the API call for the selected card
 */
async function newAPICALL(name) {
  
  const nURL = `https://api.magicthegathering.io/v1/cards?name=${name}`

  axios.get(nURL)
  .then(res => {

    const searchedCard = res.data.cards[0];

    userDecklist(searchedCard);

  })
  .catch(error => {
    console.error(error);
  })

}

/**
 * Displays to the selectedCardGallery
 */

const currentDecklist = document.querySelector('#selectedCardGallery');
function userDecklist(returnedSearchedCard) {

  const image = 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest/scale-to-width-down/250?cb=20140813141013'

  if (`${returnedSearchedCard.imageUrl}` == 'undefined') {
    const imagelessOutput =
    `
    <div class='card' style="background-image: url('${image}')">
      <div class='card-info'>
        <p>Unfortunately this card's image cannot be displayed</p>
          <p>${returnedSearchedCard.name}</p>
          <p>${returnedSearchedCard.type}</p>
          <p>${returnedSearchedCard.text}</p>
      </div>
    </div>
    `

    currentDecklist.insertAdjacentHTML('afterbegin', imagelessOutput);
  } else {
    const output =
    `
    <div class='card' style="background-image: url('${returnedSearchedCard.imageUrl}')"></div>
    `
  currentDecklist.insertAdjacentHTML('afterbegin', output);  
  }

}
  