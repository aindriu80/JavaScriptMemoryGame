var tileImages  =[];
var tileArray = [];
var cardFlipped = -1;
var startButton = document.getElementById('start')
var gameBoard = document.getElementById('gameboard');
var gamePlay = false; // controls if we rebuild the board restart

//event listeners
startButton.addEventListener('click', startGame);


//Functions
function startGame(){
    startButton.style.display='none';
    if(!gamePlay){
        gamePlay = true;
        buildArray();
        tileArray = tileImages.concat(tileImages);
        shuffleArray(tileArray);
        buildBoard();
    }
    
}

function buildBoard() {
  var html = "";
  for (var x = 0; x <= (tileArray.length - 1); x++) {
    html += '<div class="gameTile"><div class="gameTile">';
    html += '<img id="cardz' + x + '" src="resources/img/back.jpg" onclick="pickCard(' + x + ',this)" class="flipImage"></div></div>';
  }
  gameBoard.innerHTML = html;
}

function pickCard(tileIndex,t){
    console.log(tileIndex);
    console.log(cardFlipped);
    console.log(t.src);    
     // check if its already flipped
    if(cardFlipped >=0 ){
        // second card Flipped
          if(tileIndex !=cardFlipped){
              // second card new
              t.src = "resources/img/"+tileArray[tileIndex];
              var secondCard = tileIndex;
              // check for match
              
          }
        console.log('second', cardFlipped);
    }else{
        // first cardFlipped
        cardFlipped = tileIndex;
        t.src = "resources/img/"+tileArray[tileIndex];
        console.log('first',cardFlipped);
    }
}

function buildArray() {
  for (var x = 1; x < 7; x++) {
    tileImages.push(x + '.jpg');
  }
}

function shuffleArray(array){
    for(var x = array.length -1; x>0; x--){
        var holder = Math.floor(Math.random() * (x+1) );        
        var itemValue = array[x];
        array[x] = array[holder];
        array[holder] = itemValue;
        console.log(itemValue);
    }
    return array;
}