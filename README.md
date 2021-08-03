# MtG-Deck-API

## Project Description
> This program will enable users to search the (https://docs.magicthegathering.io/) API database through a front-end application utilizing, HTML, CSS, and JavaScript. The application will allow the user to search for specific card names as well as for generic names such as 'Goblin' or 'Wizard' and return a selection from the official MtG database found at https://gatherer.wizards.com/Pages/Default.aspx featuring the creature's card and name.

## Deployed Link
MTG-Deck-API: https://arquimidesperez.github.io/MtG-Deck-API-/

- [MVP](#mvp)
- [Goals](#goals)
- [API](#api)
- [API Snipped](#api-snippet)
- [Wireframes](#wireframes)
<!-- - [Component Tree](#component-tree) -->
<!-- - [ERD Model](#erd-model) -->
- [Project Schedule](#project-schedule)
- [Timeframes](#timeframes)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)

## MVP
- Allow the user to search for a creature by name or by generic name descriptors such as 'Goblin', 'Wizard', or 'Knight' to name a few common generic titles appended to a creature's name.
- App will return a selection of creatures and their cards; if the image is unable to be loaded a placeholder card will instead be used to represent the creature

## Goals
Build out a single page application that utilizes Axios and the MtG card database api to enable users to query for cards via search-bar and display cards satisfying those parameters to the user. 

### API
The API to be used for this project is: https://docs.magicthegathering.io/

### API Snippet
```
{
    "cards": [
        {
            "name": "Gerrard, Weatherlight Hero",
            "manaCost": "{2}{R}{W}",
            "cmc": 4.0,
            "colors": [
                "Red",
                "White"
            ],
            "colorIdentity": [
                "R",
                "W"
            ],
            "type": "Legendary Creature — Human Soldier",
            "supertypes": [
                "Legendary"
            ],
            "types": [
                "Creature"
            ],
            "subtypes": [
                "Human",
                "Soldier"
            ],
            "rarity": "Rare",
            "set": "C19",
            "setName": "Commander 2019",
            "text": "First strike\nWhen Gerrard, Weatherlight Hero dies, exile it and return to the battlefield all artifact and creature cards in your graveyard that were put there from the battlefield this turn.",
            "flavor": "Gerrard's final act ensured his legacy would never die.",
            "artist": "Zack Stella",
            "number": "41",
            "power": "3",
            "toughness": "3",
            "layout": "normal",
            "multiverseid": "470587",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=470587&type=card",
            "rulings": [
                {
                    "date": "2019-08-23",
                    "text": "Gerrard’s triggered ability returns artifact and creature cards even if Gerrard leaves your graveyard before you can exile it."
                },
                {
                    "date": "2019-08-23",
                    "text": "Gerrard’s triggered ability returns artifact and creature cards even if they were put into your graveyard while Gerrard wasn’t on the battlefield, so long as they were put there this turn."
                },
                {
                    "date": "2019-08-23",
                    "text": "If Gerrard is your commander, you can exile it into the command zone from your graveyard. You’ll still return your artifact and creature cards."
                },
                {
                    "date": "2019-08-23",
                    "text": "Permanent spells that were countered earlier in the turn never entered the battlefield, so they won’t be returned by Gerrard’s ability."
                }
            ],
            "printings": [
                "C19"
            ],
            "originalText": "First strike\nWhen Gerrard, Weatherlight Hero dies, exile it and return to the battlefield all artifact and creature cards in your graveyard that were put there from the battlefield this turn.",
            "originalType": "Legendary Creature — Human Soldier",
            "legalities": [
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "id": "28459573-f06a-5571-b232-aa1bbe6347d0"
        }
    ]
}
```

## Wireframes
![image](https://user-images.githubusercontent.com/67838784/118509742-52adc380-b6fe-11eb-8d16-74b18cc46755.png)

<!-- ## Priority Matrix
![image](https://user-images.githubusercontent.com/67838784/118509765-58a3a480-b6fe-11eb-9e41-e3dfd4d893c3.png) -->

## Project Schedule
| Day    | Deliverable                                                                    | Status |
| ------ | ------------------------------------------------------------------------------ | ------ |
| May 17 | Prompt Approval - API Search                                                   | Completed |
| May 18 | HTML & CSS Prototyping - Flexbox part 1                                        | Completed |
| May 19 | Flexbox part2; Validating MVP - Post MVP: Decklist, Commander Search/Selection | Completed |
| May 20 | Post MVP: Media Queries & Local Storage & Advanced CSS Carousel                | Completed |
| May 21 | Post MVP: Validating and trouble shooting before presentation                  | Completed |

## Timeframes
| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| API Search              |    H     |    3 hours     |   2.5hrs      |  2.5hrs     |
| API Search Unique only  |    H     |    3 hours     |     2hrs      |   2hrs      |
| HTML Prototype          |    H     |    3 hours     |      3.5hrs   | 3.5hrs      |
| Appending to HTML       |    H     |    2 hours     |   3hrs        |     3hrs    |
| CSS Prototype           |    M     |    2 hours     |   1.5hrs      |   1.5hrs    |
| CSS Flexbox             |    H     |    3 hours     |    2hrs       |   2hrs      |
| CSS Form                |    M     |    2 hours     |    4hrs       |   4hrs      |
| Display Selected        |    H     |    1 hours     |    3hrs       |   3hrs      |
| Append Decklist         |    M     |   2.5 hours    |    3hrs       |    3hrs     |
| Local Storage           |    M     |   2.5 hours    |     n/a       |  n/a        |
| Commander Search        |    L     |    3 hours     |     1 hrs     |   1hrs      |
| Total                   |          |   27 hours     |     25.5hrs   |   25.5hrs   |

## Post-MVP
- Enable the users to hover over the cards they would like to and enable them to add the creatures to an updating decklist that they would be able to save as either a .txt, .csv, or other format.
- Create additional search parameters such as 'Search by Color' to make the app more responsive to user's possible needs
- Create a 'Commander Search' enabling the user to search for a Commander
- Create a filtering method wherein creatures searched after selecting the Commander will take into account the creature's color identity; if the creature's searched for color identity is not a proper subset of the commander, alert the user that the creature cannot be added to the deck.

## Code Showcase
```
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
```