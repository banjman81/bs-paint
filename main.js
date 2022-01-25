/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
let darkMode = false
const gridWidth = 75;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-9';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

const blocks = document.querySelectorAll('.square');
const colors = document.querySelectorAll('.palette .palette-color');
const brush = document.querySelector('.brush-icon');
const body = document.querySelector('body');
const canvas = document.querySelector('.canvas');
const dark = document.querySelector('.dark-mode');
const darkText = document.querySelector('button.dark-mode');
const app = document.querySelector('.app');
const clear = document.querySelector('.clear');
const squares = document.querySelectorAll('.square');
const pepe = document.querySelectorAll('.pepe');

// Dark mode on and off

dark.addEventListener('click', function(){
  if(darkMode == false){
    app.className = 'app darkmode'
    body.style.background = 'rgb(37, 37, 48)'
    body.style.color = 'white'
    darkText.innerText = 'Lightmode'
    dark.style.background = 'rgb(224, 236, 255)'
    darkText.style.color = 'black'

  }
  else{
    app.className = 'app'
    body.style.color = defaultStatus
    body.style.background = defaultStatus
    darkText.innerText = 'Darkmode'
    dark.style.background = 'rgb(23, 38, 61)'
    darkText.style.color = 'white'
  }
  darkMode = !darkMode
  console.log('darkmode', darkMode)
})




/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.
let clicked = false
let colorPicked = 'color-9'
brush.className = `icon palette-icon ${colorPicked}`

colors.forEach(function(color){
  color.addEventListener('click', function(){
    const classArr = color.className.split(' ')
    colorPicked = classArr[classArr.length-1]
    console.log(colorPicked)
    brush.className = `icon palette-icon ${colorPicked}`
  })
})

addEventListener('mouseup', function(){
  clicked = false
  console.log(clicked)
})

addEventListener('mousedown', function(){
  clicked = true
  console.log(clicked)

})

blocks.forEach(function(square){
  square.addEventListener( 'mousedown' , function(){
    if (clicked == true){
      square.className = `square ${colorPicked}`
    }
  }
  )
    
    // clicked = false
    square.addEventListener('mouseover', function(){
      if(clicked === true){
        square.className = `square ${colorPicked}`
      }
    })
})

// brush.addEventListener('click', function(event){
//   if(event.detail === 5){
//     console.log('5x')
//     if(colorPicked == 'color-3'){
//       console.log('green 5x')
//       pepe.className ='pepe'
//       pepeEE = true
//     }

//   }
// })

clear.addEventListener('click', function(){
    squares.forEach(function(square){
        square.className = 'square color-9'
    })
})
/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
