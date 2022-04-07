//If you don't know what a sprite is, it's a name given to a playable character in a 2-D Game (like mario).
//Note: The list of character portraits need to be in the same order list as sprite appear in the HTML otherwise it will mess up the order list and the incorrect sprite will appear when clicked.

const spriteFighters = document.querySelectorAll('.sprite-fighter'); //Grabs ALL of the sprite images of the characters (e.g, Naruto, Sasuke, Itachi, etc.)

const spritePortraits = document.querySelectorAll('.sprite-portrait'); //Grabs the Portraits of all character's in the player selector box.

let previousActivePortrait = [...spritePortraits].filter(portrait => portrait.classList.contains('active-portrait'))[0] //Creates an array with with all of the character portraits and filters out the portraits that DO NOT contain the '.active-portrait' in their element attribute. 

let previousActiveSprite = [...spriteFighters].filter(fighter => fighter.classList.contains('active-sprite'))[0] //Creates an array with with all of the character sprites and filters out the sprites that DO NOT contain the '.active-sprite' in their element attribute. 

spritePortraits.forEach(item => item.addEventListener('click', switchFighters)) //Grabs each character's portrait in the player select box and gives them a trigger when they are clicked.


//This function will switch in a new sprite on the screen when the user clicks that sprite potrait in the character selector box. (If sprite is already present nothing will happen).
function switchFighters(event){
  const fighterPortrait = event.target //Grabs the character potrait that was clicked.
  
  if (!fighterPortrait.classList.contains('active-portrait')){  //If the character portrait doesn't contain '.active-portrait' attribute ..

    previousActivePortrait.classList.remove('active-portrait') //..remove the class attribute '.active-portrait' from the previous character portrait that had it on before.

    previousActivePortrait = fighterPortrait //Grabs (or selects) the previously clicked character portrait..

    previousActiveSprite.classList.remove('active-sprite') //..and removes the sprite from the screen that was connected to that previous character portrait. 
    fighterPortrait.classList.add('active-portrait') //The character potrait that was just clicked make them the active (or more recent) clicked.

    const indexOfFighter = [...spritePortraits].indexOf(fighterPortrait) //Finds which sprite potrait was clicked
    spriteFighters[indexOfFighter].classList.add('active-sprite') //The sprite of the matching clicked portrait will then appear on the screen. 

    
    previousActiveSprite = spriteFighters[indexOfFighter] //Re-assigns the cached or memoized sprite so that the next time the function is run, it knows which was the previousActive.
  }
}


//Battlefield Image Carousel 
let leftArrow = document.querySelector('.prev'); //Grabs the left orange arrow for the arena carousel.
let rightArrow = document.querySelector('.next'); //Grabs the right orange arrow for the arena carousel.
let index = 0; //Set index to 0.
let lis = document.querySelectorAll('.carousel-list li'); //Grabs all the carousel images (arena background options)
let count = lis.length;  //Grabs the number of carousel images.


//When left arrow is clicked carousel will show the previous arena in carousel.
leftArrow.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index--;
    if (index < 0){
        index = count-1;
    }

    lis[index].classList.add('visible');
});

//When right arrow is clicked carousel will show the next arena in carousel.
rightArrow.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index++;
    if (index > count-1){
        index = 0;
    }

    lis[index].classList.add('visible');
});


//Change battlefield on click.
let battlefieldPicker = document.querySelectorAll('.carousel-list li'); //Selects all the battlefield backgrounds.

battlefieldPicker.forEach(arena => arena.addEventListener('click', switchArena)); //Create a click event for each battlefield background.

//Function switches battlefield background from selected choice made in carousel.
function switchArena(){
  const li = document.querySelector('li.visible') //Grabs the arena background that's currently displayed in the carousel.

  document.querySelector('.background').src = li.querySelector('img').src //Overwrites the previous background with the new one clicked (aka the one with the class attribute 'visible').
}