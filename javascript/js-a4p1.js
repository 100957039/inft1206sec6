// COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// RAW TEXT STRINGS
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  // Creates a varaible for the story for editting
  let newStory = storyText;

  // Picks a random string from each array of strings
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  // Adds all randomly generated strings to the story string
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;

    // Replaces the default story name with the user inputted name
    newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    // Converts US weight and temperature into UK units
    const weight = Math.round(300 / 14).concat(' stone');
    const temperature =  Math.round((94 - 32)* 5/9).concat(' centigrade');
    
    // Replaces weight and temperature in the story with UK equivalents
    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
  }

  story.textContent = '';
  story.style.visibility = 'visible';
}