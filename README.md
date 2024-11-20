# Module 11 Lesson 3: Assignments | Component Lifecycle Events and Forms
//Task 2: Fetch and Display Characters
Create a functional component CharacterList to display a list of Marvel Comics characters.
Use the useEffect hook to fetch character data from the Marvel Comics API endpoint https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<YOURPUBLICKEY>&hash=<YOURHASH> using Axios.
Display each character's name and thumbnail imag


//Task 3: Implement the Character Detail Feature
Create a functional component CharacterDetail to display detailed information about a selected character.
Implement a click event handler to fetch additional character details asynchronously when a character thumbnail is clicked.
Use Axios to send a GET request to the Marvel Comics API endpoint https://gateway.marvel.com/v1/public/characters/{characterId}?ts=1&apikey=<YOURPUBLICKEY&hash=YOURHASH.
Display the character's name, description, and list of associated comics.
Expected Outcome:
Ability to click on a character thumbnail to view detailed information about the character.
Detailed information should include the character's name, description, and associated comics.


//Task 4: Integrating Components and Updating the User Interface
In your main App component, integrate CharacterList and CharacterDetail.
Ensure that the character detail view updates dynamically when a character thumbnail is clicked.
