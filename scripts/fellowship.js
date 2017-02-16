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

function makeMiddleEarth() {

  // create a section tag with an id of `middle-earth`
$('body').append("<section id='#middle-earth'></section>")

   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
// $('body').append("<article>" + lands + "</article>");
//   for(i = 0; i < lands.length[i]; i++);
$('section').append("<article></article>");
$('section').append("<article></article>");
$('section').append("<article></article>");
$('article:nth-child(1)').append("<h1>" + lands[0] + "</h1>");
$('article:nth-child(2)').append("<h1>" + lands[1] + "</h1>");
$('article:nth-child(3)').append("<h1>" + lands[2] + "</h1>");

   // append `middle-earth` to your document `body`
}

makeMiddleEarth();

function makeHobbits(){
  // your answers here
    // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
$('article:nth-child(1)').append("<ul><li class='hobbit'>" + "'Frodo Baggins,'</li>" + "<li class='hobbit'>'Samwise \'Sam\' Gamgee', </li>" + "<li class='hobbit'>'Meriadoc \'Merry\' Brandybuck', </li>" + "<li class='hobbit'>'Peregrin \'Pippin\' Took'</li></ul>");
}


makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
    // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
$('body').append("<div id='the-ring' class='magic-imbued-jewelery'></div>");
$('hobbit:nth-child(1)').append(".the-ring");
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
     // create an `aside` tag
     var aside =  $('<aside></aside>');
    // attach an `unordered list` of the `'buddies'` in the aside
    var ul = $('<ul></ul>');
    aside.append(ul);


  for(i = 0; i < buddies.length; i++){
    ul.append("<li>" + buddies[i] + "</li>");
  }

     // insert your aside as a child element of `rivendell`
     aside.appendTo('article:nth-child(2)');
}

makeBuddies();

function beautifulStranger(){
  // your answers here
     // change the `'Strider'` text to `'Aragorn'`
  $($('ul').children()[7]).text('Aragorn');

}

beautifulStranger();

function leaveTheShire(){
  // your answers here
//      // assemble the `hobbits` and move them to `rivendell`

$('.hobbit').appendTo('article:nth-child(2)');
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
     // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   $("<div id='the-fellowship'></div>").appendTo("article:nth-child(2)");

///I'm having a lot of trouble here, not sure with adding each buddy.
// }

   // after each character is added make an alert that they // have joined your party
alert(".hobbit[] has joined your party!");
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
     // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
var gandy = $('li:contains("Gandalf")');
gandy.text('Gandalf the White');
$(gandy).css({ 'background-color': 'white', 'border': 'grey' });
}

theBalrog();

function hornOfGondor() {
  // your answers here
  // pop up an alert that the horn of gondor has been blown
  alert("Horn of Gondor has been blown!\nBoromir's been killed by the Uruk-hai!");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
  $('li:contains("Boromir")').remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  $('.hobbit(1)').appendTo('#Mordor');
  $('.hobbit(2)').appendTo('#Mordor');
   // add a div with an id of `'mount-doom'` to `Mordor`
$('#Mordor').append('<div id="mount-doom"></div>');

//I'm still having a lot of trouble with moving the hobbit class
//and moving the ring property....
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
  // Create a div with an id of `'gollum'` and add it to Mordor
    $('#Mordor').append('<div id="gollum"></div>');
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   $('#gollum').append($('#the-ring'));
   // Move Gollum into Mount Doom
   $('#mount-doom').append($('#gollum'));
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
  // remove `Gollum` and `the Ring` from the document
  $('#the-ring').remove();
  $('#gollum').remove();
   // Move all the `hobbits` back to `the shire`
  $('article h1:contains("Shire")').parent().append($('#hobbit-list'));
  $('#hobbit-list').append($('.hobbit'));

}

thereAndBackAgain();
