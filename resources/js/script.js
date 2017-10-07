var tileImages = [];
var tileArray = [];
var tileFlippedOver = [];
var cardFlipped = -1;
var startButton = document.getElementById('start')
var gameBoard = document.getElementById('gameboard');
var gamePlay = false; // controls if we rebuild the board restart

//event listeners
startButton.addEventListener('click', startGame);


//Functions
function startGame() {
    startButton.style.display = 'none';
    if (!gamePlay) {
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

function isinArray(v, array) {
    return array.indexOf(v) > -1;
}

function cardFlip(t, ti) {
    t.src = "resources/img/" + tileArray[ti];
    tileFlippedOver.push(t.id);

}

function pickCard(tileIndex, t) {
    // check if its already flipped
    if (!isinArray(t.id, tileFlippedOver)) {
        console.log('not in array')

        if (cardFlipped >= 0) {
            cardFlip(t, tileIndex)
            var secondCard = tileIndex;
        } else {
            cardFlipped = tileIndex;
            cardFlip(t, tileIndex);
        }
    } else {
        console.log('in array');
    }
}

function buildArray() {
    for (var x = 1; x < 7; x++) {
        tileImages.push(x + '.jpg');
    }
}

function shuffleArray(array) {
    for (var x = array.length - 1; x > 0; x--) {
        var holder = Math.floor(Math.random() * (x + 1));
        var itemValue = array[x];
        array[x] = array[holder];
        array[holder] = itemValue;
        console.log(itemValue);
    }
    return array;
}
