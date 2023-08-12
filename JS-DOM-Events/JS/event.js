//  <button onclick="console.log(65)">Another button</button>


//option 1
// mostly use
function makeRed(){
  document.body.style.backgroundColor = 'red'
}

// option 2
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue; // Don't call

function makeBlue(){
 document.body.style.backgroundColor='blue';
}


//option 3
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple(){
 document.body.style.backgroundColor = 'purple'
}


// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink)

function makePink(){
  document.body.style.backgroundColor = 'pink'
}

// option 5
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
 document.body.style.backgroundColor='green';
})

// option 6
document.getElementById('make-goldenRod').addEventListener('click',function(){
  document.body.style.backgroundColor = 'goldenrod'
 })
