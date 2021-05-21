# MtG-Deck-API

### Description

This program will enable users to search the (https://docs.magicthegathering.io/) API database through a front-end application utilizing, HTML, CSS, and JavaScript. The application will allow the user to search for specific card names as well as for generic names such as 'Goblin' or 'Wizard' and return a selection from the official MtG database found at https://gatherer.wizards.com/Pages/Default.aspx featuring the creature's card and name.

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
            "foreignNames": [
                {
                    "name": "Gerrard, Held der Wetterlicht",
                    "text": "Erstschlag\nWenn Gerrard, Held der Wetterlicht, stirbt, schicke ihn ins Exil und bringe alle Artefakt- und Kreaturenkarten aus deinem Friedhof ins Spiel zurück, die in diesem Zug aus dem Spiel dorthin gelegt wurden.",
                    "type": "Legendäre Kreatur — Mensch, Soldat",
                    "flavor": "Mit seiner letzten Tat sicherte Gerrard sein Vermächtnis.",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=470889&type=card",
                    "language": "German",
                    "multiverseid": 470889
                },
                {
                    "name": "Gerrard, héroe del Vientoligero",
                    "text": "Daña primero.\nCuando Gerrard, héroe del Vientoligero muera, exílialo y regresa al campo de batalla todas las cartas de criatura y de artefacto de tu cementerio que fueron allí desde el campo de batalla este turno.",
                    "type": "Criatura legendaria — Soldado humano",
                    "flavor": "El acto final de Gerrard aseguró la pervivencia eterna de su legado.",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=471191&type=card",
                    "language": "Spanish",
                    "multiverseid": 471191
                },
                {
                    "name": "Gerrard, héros de l'Aquilon",
                    "text": "Initiative\nQuand Gerrard, héros de l'Aquilon meurt, exilez-le et renvoyez sur le champ de bataille toutes les cartes d'artefact et de créature de votre cimetière qui y ont été mises ce tour-ci depuis le champ de bataille.",
                    "type": "Créature légendaire : humain et soldat",
                    "flavor": "Avec son dernier acte, Gerrard s'assura que son héritage ne mourrait jamais.",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=471493&type=card",
                    "language": "French",
                    "multiverseid": 471493
                },
                {
                    "name": "Gerrard, Eroe della Cavalcavento",
                    "text": "Attacco improvviso\nQuando Gerrard, Eroe della Cavalcavento muore, esilialo e rimetti sul campo di battaglia tutte le carte artefatto e creatura nel tuo cimitero che vi sono state messe dal campo di battaglia in questo turno.",
                    "type": "Creatura Leggendaria — Soldato Umano",
                    "flavor": "L'ultima azione di Gerrard garantì che la sua eredità sopravvivesse in eterno.",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=471795&type=card",
                    "language": "Italian",
                    "multiverseid": 471795
                },
                {
                    "name": "ウェザーライトの英雄、ジェラード",
                    "text": "先制攻撃\nウェザーライトの英雄、ジェラードが死亡したとき、これを追放し、あなたの墓地にあるアーティファクトやクリーチャーであってこのターンに戦場からあなたの墓地に置かれたカードをすべて戦場に戻す。",
                    "type": "伝説のクリーチャー — 人間・兵士",
                    "flavor": "ジェラードが最後にとった行動は、決して滅ぶことのない彼の遺産をはっきりと残した。",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=472097&type=card",
                    "language": "Japanese",
                    "multiverseid": 472097
                },
                {
                    "name": "Gerrard, Herói do Bons Ventos",
                    "text": "Iniciativa\nQuando Gerrard, Herói do Bons Ventos, morrer, exile-o e devolva ao campo de batalha todos os cards de artefato e criatura em seu cemitério que tenham sido colocados lá vindos do campo de batalha neste turno.",
                    "type": "Criatura Lendária — Humano Soldado",
                    "flavor": "O último ato de Gerrard garantiu que seu legado jamais pereceria.",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=472399&type=card",
                    "language": "Portuguese (Brazil)",
                    "multiverseid": 472399
                },
                {
                    "name": "Джерард, Герой «Везерлайта»",
                    "text": "Первый удар\nКогда Джерард, Герой «Везерлайта» умирает, изгоните его и верните на поле битвы все находящиеся на вашем кладбище карты артефактов и существ, которые попали туда с поля битвы в этом ходу.",
                    "type": "Легендарное Существо — Человек Солдат",
                    "flavor": "Своим последним деянием Джерард обеспечил бессмертие своего наследия.",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=472701&type=card",
                    "language": "Russian",
                    "multiverseid": 472701
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

### Wireframes

![image](https://user-images.githubusercontent.com/67838784/118509742-52adc380-b6fe-11eb-8d16-74b18cc46755.png)

### MVP

- Allow the user to search for a creature by name or by generic name descriptors such as 'Goblin', 'Wizard', or 'Knight' to name a few common generic titles appended to a creature's name.
- App will return a selection of creatures and their cards; if the image is unable to be loaded a placeholder card will instead be used to represent the creature

### Post-MVP

- Media queries for users on Mobile vs. Desktop
- Enable the users to hover over the cards they would like to and enable them to add the creatures to an updating decklist that they would be able to save as either a .txt, .csv, or other format.
- Create additional search parameters such as 'Search by Color' to make the app more responsive to user's possible needs
- Create a 'Commander Search' enabling the user to search for a Commander
- Create a filtering method wherein creatures searched after selecting the Commander will take into account the creature's color identity; if the creature's searched for color identity is not a proper subset of the commander, alert the user that the creature cannot be added to the deck.

### Goals

| Day    | Deliverable                                                                    | Status |
| ------ | ------------------------------------------------------------------------------ | ------ |
| May 17 | Prompt Approval - API Search                                                   |        |
| May 18 | HTML & CSS Prototyping - Flexbox part 1                                        |        |
| May 19 | Flexbox part2; Validating MVP - Post MVP: Decklist, Commander Search/Selection |        |
| May 20 | Post MVP: Media Queries & Local Storage & Advanced CSS Carousel                |        |
| May 21 | Post MVP: Validating and trouble shooting before presentation                  |        |

### Priority Matrix

![image](https://user-images.githubusercontent.com/67838784/118509765-58a3a480-b6fe-11eb-9e41-e3dfd4d893c3.png)

### Timeframes

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| API Search              |    H     |    3 hours     |   2.5hrs      |  2.5hrs     |
| API Search Unique only  |    H     |    3 hours     |     2hrs       |   2hrs      |
| HTML Prototype          |    H     |    3 hours     |      3.5hrs   | 3.5hrs      |
| Appending to HTML       |    H     |    2 hours     |   3hrs       |     3hrs     |
| CSS Prototype           |    M     |    2 hours     |   1.5hrs      |   1.5hrs     |
| CSS Flexbox             |    H     |    3 hours    |    2hrs      |   2hrs        |
| CSS Form               |    M     |    2 hours     |    4hrs      |   4hrs        |
| Display Selected        |    H     |    1 hours    |    3hrs      |   3hrs        |
| Append Decklist         |    M     |   2.5 hours    |    3hrs       |    3hrs      |
| Local Storage           |    M     |   2.5 hours    |     n/a        |  n/a        |
| Commander Search        |    L     |    3 hours     |     1 hrs     |   1hrs      |
| Total                   |          |   27 hours   |     25.5hrs     |             |

### Code Snippet

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

### Change Log

- Changed picture boarder to work with different photo styles

###  Deployed Link
[MTG-Deck-API] (https://arquimidesperez.github.io/MtG-Deck-API-/)