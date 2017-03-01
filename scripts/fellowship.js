console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';
var article = '<article></article>';
var p = '<p></p>';
var h1 = '<h1></h1>';
var li = '<li></li>';
var div = '<div></div>';
var aside = '<aside></aside>';
var ul = '<ul></ul>';
var Shire = lands[0];
var Rivendell = lands[1];
var Mordor = lands[2];

var Gandalf = buddies[0];
var Legolas = buddies[1];
var Gimli = buddies[2];
var Strider = buddies[3];
var Boromir = buddies[4];

var Frodo = hobbits[0];
var Sam = hobbits[1];
var Meriadoc = hobbits[2];
var Peregrin = hobbits[3];

function makeMiddleEarth() {
// create a section tag with an id of `middle-earth`
$('body').append("<section id='#middle-earth'></section")
// add each land as an `article` tag
$('section').append("<article>" + "<h1>" + Shire + "</h1>" + "</article>")
$('section').append("<article>" + "<h1>" + Rivendell + "</h1>" + "</article>")
$('section').append("<article>" + "<h1>" + Mordor + "</h1>" + "</article>")
// inside each `article` tag include an `h1` with the name of the land
// append `middle-earth` to your document `body`
$('#middle-earth').append('body')
}

makeMiddleEarth();

function makeHobbits(){
// display an `unordered list` of hobbits in the shire
$('article:nth-child(1)').append("<ul><li class='hobbit'>" + Frodo + "</li>" + "<li class='hobbit'>" + Sam + "</li>" + "<li class='hobbit'>" + Meriadoc + "</li>" + "<li class='hobbit'>" + Peregrin + "</li>"+ "</ul>")
// (which is the second article tag on the page) -----> //how come when I put 'hobbits' or 'shire' in the selector it won't put the hobbits in the shire?
//Do I have to use nth child for that no matter what??

// give each hobbit a class of `hobbit`
}

makeHobbits();

function keepItSecretKeepItSafe(){
// create a div with an id of `'the-ring'`
$('body').append("<div id='the-ring' class='magic-imbued-jewelry'></div>");
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`
$('Frodo').append(".the-ring"); //I'm having trouble with this...I don't see why
//I can't  append the ring to Frodo
}

keepItSecretKeepItSafe();

function makeBuddies(){
// create an `aside` tag

// attach an `unordered list` of the `'buddies'` in the aside
// insert your aside as a child element of `rivendell`
for(i = 0; i < buddies.length; i++){
  aside.append("<ul><li>" + buddies[i] + "</li></ul>");
  }

$('Rivendell').append('aside') //<--- what the hell! This doesn't work, why?
//aside.append is not a function???? Ugggghhhh

}

makeBuddies();

function beautifulStranger(){
// change the `'Strider'` text to `'Aragorn'`
$('Strider').text('Aragorn');
}

beautifulStranger();

function leaveTheShire(){
// assemble the `hobbits` and move them to `rivendell`
$('.hobbit').appendTo(Rivendell); //the class I gave the hobbits and then I move
//them to Rivendell which is a variable..soooo what the
}

leaveTheShire();

function forgeTheFellowship() {
// create a new div called `'the-fellowship'` within `rivendell`
$('Rivendell').append("<div id='the-fellowship'></div>");
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
$('#the-fellowship').append(hobbits[i])
  if (i = 0; i <= hobbits.length; i++);
  // after each character is added make an alert that they // have joined your party
  return alert(hobbit[i] + "has joined your party!");
  //my console keeps saying that hobbits isn't defined but it IS defined!//

}

forgeTheFellowship();

function theBalrog(){
// change the `'Gandalf'` text to `'Gandalf the White'`
var gandy = $('li:contains("Gandalf")'); //this is from my orignial fellowship because
//I can't get the variables I made to work//
gandy.text('Gandalf the White');
// apply the following style to the element, make the // background 'white', add a grey border
$(gandy).css({ 'background-color': 'white', 'border': 'grey' });
  }

}

theBalrog();

function hornOfGondor() {
// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
alert("The horn of gondor has been blown! Boromir has been killed by the Uruk-hai!");
$('#the-fellowship').remove(Boromir);
// Remove `Boromir` from the Fellowship
}

hornOfGondor();

function itsDangerousToGoAlone() {
// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
$('#the-fellowship').detach(Frodo + Sam);
$('Mordor').append(Frodo + Sam);
// add a div with an id of `'mount-doom'` to `Mordor`
$('Mordor').append("<div id='mount-doom'></div>");
}

itsDangerousToGoAlone();

function weWantsIt() {
// Create a div with an id of `'gollum'` and add it to Mordor
$('Mordor').append("<div id='gollum'></div>");
// Remove `the ring` from `Frodo` and give it to `Gollum`
$('Frodo').remove('.the-ring');
$('Gollum').append('.the-ring');
// Move Gollum into Mount Doom
$('Gollum').append('#mount-doom');
}

weWantsIt();

function thereAndBackAgain(){
// remove `Gollum` and `the Ring` from the document
$('body').remove(Gollum + '.the-ring');
// Move all the `hobbits` back to `the shire`
$('Shire').append(hobbits)
}

thereAndBackAgain();
