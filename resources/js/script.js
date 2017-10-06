var tileImages  =[];
var tileArray = [];
var startButton = document.getElementById('start')
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
        console.log(tileArray);
    }
    console.log('started');
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