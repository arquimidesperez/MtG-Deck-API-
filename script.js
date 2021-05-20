
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

      // console.log(uniqueCards);
      showToUser(uniqueCards);

    })
    .catch(error => {
      console.error(error);
    })

}

const searchButton = document.querySelector(`#searchButton`);


searchButton.addEventListener('click', () => {
  cardGallery.innerHTML = '';

  const searchInput = document.querySelector(`#searchBar`);
    let searchValue = searchInput.value;
    accessDatabase(searchValue);    

})



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
      // console.log('within imageless')
      cardGallery.insertAdjacentHTML('afterbegin', imagelessOutput);
      
    } else {
      cardGallery.insertAdjacentHTML('afterbegin', output);
      // console.log('within images')
    }

  }
}

function clickedCard(name) {
  const formBehavior = document.getElementById("form");
  // const formC = document.getElementById('formContainer');
  formBehavior.style.display = "block"
  // formC.style.display.height = '100vh';
  
  document.getElementById('cancel').onclick = function () {
    // alert('Not appending to the list');
    formBehavior.style.display = 'none';
  }

  document.getElementById('confirm').onclick = function () {
    // alert(`Adding ${name} to the deck list`);
    arrayForFile(name);
    //function to write to .txt list
    formBehavior.style.display = 'none';
  }

}


const arrayOfCreatures = [];
function arrayForFile(name) {
  arrayOfCreatures.push(name)

  console.log(arrayOfCreatures);
  verify(arrayOfCreatures)
}

function verify(arrayOfCreatures) {
  console.log(`verifying that array of creatures is returning well: ${arrayOfCreatures}`)
}

const displayButton = document.querySelector('#displayChoices');

const showDecklist = document.querySelector('#current-decklist');
displayButton.addEventListener('click', () => {

  showDecklist.innerHTML = '';

  for (let i = 0; i < arrayOfCreatures.length; i++){
    const selectedCards =
    `
    <div class='selectedCards'>${arrayOfCreatures[i]}</div>
    `
    showDecklist.style.display = 'block';
    showDecklist.insertAdjacentHTML(`afterend`, selectedCards)
  }
  
})




