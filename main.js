'use strict'

function buildDOM(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var splashScreen;
  var gameScreen;
  var gameOverScreen;
  var gameFlandersScreen;
  var gameWinScreen;
  var startButton;
  var restartButton;
  var restartButtonFlanders;
  var restartButtonWin;
  var canvasElement;
  var scoreElement;
  var gameInstructionsScreen;
  var instructionsButton;
  var backButton;
  
  function buildSplash() {
    splashScreen = buildDOM(`
      <main class="main-splash">
        <h1 class="h1-splash">Homer is hungry!</h1>
        <p class="text-splash">Help him catch the foods he enjoys while avoiding healthy items...<br>...and Flanders. Stupid Flanders.</p>
        <button class="btn-splash">Start</button>
        <button class="btn-instructions">Instructions</button>
        <audio autoplay="autoplay"><source src="audio/TheSimpsons.mp3" type="audio/mp3" /></audio>
      </main>
    `)

    document.body.prepend(splashScreen);

    startButton = document.querySelector('.btn-splash');
    startButton.addEventListener('click', destroySplash);
    instructionsButton = document.querySelector('.btn-instructions');
    instructionsButton.addEventListener('click', destroySplashInstructions);
  }

  function destroySplash() {
    splashScreen.remove();
    startButton.removeEventListener('click', destroySplash);
    buildGameScreen();
  }

  function destroySplashInstructions() {
    splashScreen.remove();
    startButton.removeEventListener('click', destroySplash);
    buildInstructionsScreen();
  }

  function buildInstructionsScreen() {
    gameInstructionsScreen = buildDOM(`
    <main class="main-instructions">
      <h1 class="h1-instructions">Instructions</h1>
      <p class="instructions-par">Use the mouse to move over the objects you want to catch. <br>The game is over when you lose all your lives, time is up or you catch Flanders.<br> Score 20 to win!</p>
      <img class="ins-img" src="images/instructions.png">
      <button class="btn-back">Back</button>
    </main>  
  `);

  document.body.prepend(gameInstructionsScreen);

  backButton = document.querySelector('button');
  backButton.addEventListener('click', destroyGameInstructionsScreen)

  }

  function destroyGameInstructionsScreen() {
    gameInstructionsScreen.remove();
    buildSplash();
  }

  function buildGameScreen() {
    
    var game = new Game();
    game.start();
    game.setGameOverCallback(buildGameOverScreen);

    game.setGameFlandersCallback(buildGameFlandersScreen);
    
    game.setGameWinCallback(buildGameWinScreen);
  }

  function destroyGameFlandersScreen() {
    buildGameFlandersScreen();
  }

  function destroyGameWinScreen() {
    buildGameWinScreen();
  }

  function buildGameOverScreen() {
    gameOverScreen = buildDOM(`
      <main class="main-over">
        <h1 class="h1-over">Game Over</h1>
        <p class="scored-par"><span class="score"></span></p>
        <button class="btn-over">Restart</button>
      </main>  
    `);

    document.body.prepend(gameOverScreen);

    scoreElement = document.querySelector('span');
    //scoreElement.innerText = game.score;
    restartButton = document.querySelector('button');
    restartButton.addEventListener('click', destroyGameOverScreen)
  }

  function buildGameFlandersScreen() {
    gameFlandersScreen = buildDOM(`
      <main class="main-flanders">
        <h1 class="h1-flanders">Game Over</h1>
        <p class="flanders-text">Knock knock! It's your favorite neighbour...</p>
        <button class="btn-flanders">Restart</button>
      </main>  
    `);

    document.body.prepend(gameFlandersScreen);

    scoreElement = document.querySelector('.score');
    //scoreElement.innerText = game.score;
    restartButtonFlanders = document.querySelector('button');
    restartButtonFlanders.addEventListener('click', destroyGameFlandersScreen)
    

  }

  function buildGameWinScreen() {
    gameWinScreen = buildDOM(`
      <main class="main-win">
        <h1 class="h1-win">You won!</h1>
        <p class="win-text"><span class="score"></span></p>
        <button class="btn-over-win">Restart</button>
      </main>  
    `);

    document.body.prepend(gameWinScreen);

    scoreElement = document.querySelector('.score');
    //scoreElement.innerText = game.score;
    restartButtonWin = document.querySelector('button');
    restartButtonWin.addEventListener('click', destroyGameWinScreen)
  }



  function destroyGameOverScreen() {
    gameOverScreen.remove();
    restartButton.removeEventListener('click', destroyGameOverScreen)
    buildGameScreen();
  }

  function destroyGameFlandersScreen() {
    gameFlandersScreen.remove();
    restartButtonFlanders.removeEventListener('click', destroyGameFlandersScreen)
    buildGameScreen();
  }

  function destroyGameWinScreen() {
    gameWinScreen.remove();
    restartButtonWin.removeEventListener('click', destroyGameWinScreen)
    buildGameScreen();
  }

  buildSplash();

}

window.addEventListener('load', main);