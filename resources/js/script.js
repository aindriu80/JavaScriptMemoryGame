var tileImages = [];
var tileArray = [];
var tileFlippedOver = [];
var cardFlipped = -1;
var timer = '';
var playLockout = false;
var gamePlay = false; // controls if we rebuild the board restart

var startButton = document.getElementById('start')
var gameBoard = document.getElementById('gameboard');
var message = document.getElementById('message');

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
        message.innerHTML = "Click any tile";

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

function hideCard() {
    for (var x = 0; x < 2; x++) {
        var vid = tileFlippedOver.pop();
        document.getElementById(vid).src = "resources/img/back.jpg";
    }
    clearInterval(timer);
    playLockout = false;
    cardFlipped = -1;
    message.innerHTML = "Click any tile";
}

function checkSrc(v) {
    var v = document.getElementById(v).src;
    return v;
}

function pickCard(tileIndex, t) {
    // check if its already flipped
    if (!isinArray(t.id, tileFlippedOver) && !playLockout) {
        message.innerHTML = "Check for Match";
        if (cardFlipped >= 0) {
            cardFlip(t, tileIndex);
            var secondCard = tileIndex;
            playLockout = true;
            if (checkSrc(tileFlippedOver[tileFlippedOver.length - 1]) == checkSrc(tileFlippedOver[tileFlippedOver.length - 2])) {
                // Match
                message.innerHTML = "Match Found!";
                playLockout = false;
                cardFlipped = -1;
            } else {
                // No Match
                message.innerHTML = "No Match";
                timer = setInterval(hideCard, 1000);
            }
        } else {
            cardFlipped = tileIndex;
            cardFlip(t, tileIndex);
        }
    } else {
        message.innerHTML = "Already clicked";
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
