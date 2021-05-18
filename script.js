async function accessDatabase() {
  //const datatypes should be all-caps
  //test URL to return the card 'Lightning Bolt'
  // const URL = `https://api.magicthegathering.io/v1/cards?name=Ghave,_Guru_of_Spores`
  const URL = `https://api.magicthegathering.io/v1/cards?name=Goblin`
  //to be assigned later based on what the user wants
  const UserSearch = '';

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

accessDatabase();

const cardGallery = document.querySelector('#cardGallery');

function showToUser(returnedUniqueCards) {
  const image = 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest/scale-to-width-down/250?cb=20140813141013'

  for (let i = 0; i < returnedUniqueCards.length; i++) {
    const output =
      `
      <div class='card' style="background-image: url('${returnedUniqueCards[i].imageUrl}')"></div>
      `
    if (`${returnedUniqueCards[i].imageUrl}` == 'undefined') {
      const imagelessOutput =
      `
      <div class='card' style="background-image: url('${image}')"></div>
      `
      // console.log('within imageless')
      cardGallery.insertAdjacentHTML('afterbegin', imagelessOutput);
      
    } else {
      cardGallery.insertAdjacentHTML('afterbegin', output);
      console.log(i);
      // console.log('within images')
    }

  }
}

//original function if errors result recomment this back in
// function showToUser(returnedUniqueCards) {
//   const image = 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest/scale-to-width-down/250?cb=20140813141013'
//   for (let i = 0; i < returnedUniqueCards.length; i++) {
//     const output =
//       `
//     <p>${returnedUniqueCards[i].name}</p>
//     <img src=${returnedUniqueCards[i].imageUrl}> 
//     `
//     if (`${returnedUniqueCards[i].imageUrl}` == 'undefined') {
//       const imagelessOutput =
//       `
//       <p>${returnedUniqueCards[i].name}</p>
//       <img src=${image}>
//       `
//       document.querySelector(`#picture`).insertAdjacentHTML('afterbegin', imagelessOutput);
      
//     } else {
//       document.querySelector(`#picture`).insertAdjacentHTML('afterbegin', output);
//     }

//   }
// }
  
