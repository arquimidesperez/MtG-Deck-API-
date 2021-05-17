# MtG-Deck-API

###Description
This program will enable users to search the (https://docs.magicthegathering.io/) through a front-end application utilizing, HTML, CSS, and JavaScript. The application will allow the user to search for card names as well as for generic names such as 'Goblin' or 'Wizard' and return a selection from the MtG official database found at https://gatherer.wizards.com/Pages/Default.aspx feature the creature's card and name.

###API
The API to be used for this project is: https://docs.magicthegathering.io/

###Wireframeswe
![image](https://user-images.githubusercontent.com/67838784/118421959-38d59780-b690-11eb-881c-17001b01375b.png)


###MVP
- Allow the user to search for a creature by name or by generic name descriptors such as 'Goblin', 'Wizard', or 'Knight' to name a few common generic titles appended to a creature's name.
- App will return a selection of creatures and their cards; if the image is unable to be loaded a placeholder card will instead be used to represent the creature


###Post-MVP
- Media queries for users on Mobile vs. Desktop
- Enable the users to hover over the cards they would like to and enable them to add the creatures to an updating decklist that they would be able to save as either a .txt, .csv, or other format.
- Create additional search parameters such as 'Search by Color' to make the app more responsive to user's possible needs
- Create a 'Commander Search' enabling the user to search for a Commander
- Create a filtering method wherein creatures searched after selecting the Commander will take into account the creature's color identity; if the creature's searched for color identity is not a proper subset of the commander, alert the user that the creature cannot be added to the deck. 

###Goals
Day 1: Create the basics of the MVP framework; search capability for the API is not too difficult to master; this day will mainly be focused on ensuring how the creatures are searched for and that if an imageUrl is not available the user is given a placeholder card. 
Day 2: Create the HTML/CSS landing page for the MVP
Day 3: Begin researching methods for appending the creatures selected to a Decklist and what would be necessary to allow the users to download the creatures selected into a file; begin experimenting with the color filters for API querying.
Day 4: Begin adding an additional level of search to enable the user to search for Legendary Creature to serve as commander; if this is not feasible may hard-code a few creatures to be featured commanders based on the most popular comamnder archetypes as featured on edhrec: (https://edhrec.com/)
Day 5: Additional testing; if possible finalize the CSS layout and design and fully implement the Commander search/selection process and the color-filter if feasibly doable with the API.

###Priority Matrix
![image](https://user-images.githubusercontent.com/67838784/118422555-6ff87880-b691-11eb-9fdc-4cdcd6c2ec24.png)


###Timeframes
Monday    
| 9:00-12:00 PM | Focus on search capabilites for the API; map out best ways to search for cards based on name, color, or supertype
| 1:00-4:00PM | Create a basic framework for the HTML and CSS to append images from the search to the webbrowser

Tuesday   
| 9:00-12:00 PM | Prototype the CSS & HTML components of the page; work on the Media queries to see design differences between Web vs. Mobile
| 1:00-4:00PM | Append creatures selected by user to a decklist to save previous searches

Wednesday 
| 9:00-12:00 PM | Local storage; try and allow the users to save their decklist to their computers locally
| 1:00-4:00PM | Add additional legendary creature selection to enable usesr to select a Legendary creature as their commander

Thursday  
| 9:00-12:00 PM | POSTMVP: Try and implement the color filters so that creatures need to be part of the user's commanders to be displayed
| 1:00-4:00PM | POSTMVP: Expand search options to enable more responsiveness for the user

Friday    
| 9:00-12:00 PM | POSTMVP: Finalize the HTML and CSS for both Web and Mobile
| 1:00-4:00PM | POSTMVP: Test and validate app to ensure it's performance
