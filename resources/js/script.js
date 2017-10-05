var titleImages  =[];
var startButton = document.getElementById('start')

//event listeners
startButton.addEventListener('click', startGame);


for (var x = 1; x <7; x++){
    titleImages.push(x+' .jpg');
}

//Functions
function startGame(){
    startButton.style.display='none';
    console.log('started');
}