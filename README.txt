Project's name
Cutting board

Description
Try to slice as many balls as you can, avoiding the red ones. You have 30 seconds to 

MVP (DOM - CANVAS)



Backlog
Levels
Adding a bomb ball that makes you lose automatically
Instead of balls, food

Data structure
MAIN
buildSplash()
destroySplash()
buildGame()
destroyGame()
buildGameOver()
destroyGameOver()

game.js
Game () {
  this.goodBalls // array of good balls
  this.badBalls // array of bad balls
  this.time // time it starts counting from
  this.canvas
  this.gameIsOver
  this.createGoodBall() // pushes it to the goodBalls array
  this.createBadBall() // pushes it to the badBalls array
}

Game.prototype.start(
  buildDom()
  this.startLoop
)

Game.prototype.startLoop(
  ctx
  loop() {
    this.startTimer()
    this.ball.update()
    this.checkIfMouseOverBall()
    // add and loose points
    amItouched() // if true, delete the ball
    clearBall(i)
    updateScore()

    this.createGoodBall()
    this.createBadBall()
    this.ball.draw()
    Frame(loop)
  }
  Frame(loop)
}
    
ball.js(
  this.canvas
  this.ctx
  this.x
  this.y
  this.velX
  this.velY
  this.color = [random color from an array if good, red if type is bad]
  this.size = random number between a min and a max
  this.type = good or badball()

Ball.prototype.update()
Enemy.prototype.draw()
Ball.prototype.amITouched()
)


States and States Transitions
- splashScreen()
  - destroyGameOver(if)
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - destroySplash()
  - destroyGameOver()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - destroyGame()
  - buildGameOver()
  - addEventListener( if splashScreen, else starGame) 


Task
- create files javascript
- Main: buildDom
- Main: buildSplash
- Main: addEventListener
- Main: destroySplash
- Game: buildDom
- Game: startTimer
- Main: gameOver
- Main: destroyGame
- Main: gameOver Restart
- Main: destroyGameOver
- Game: addEventListener
- Game: loop
- Ball: create
- Game: create ball that moves
- Game: create good and bad balls
- Game: mouseOver + remove
- Game: score
- Game: gameOver


Links
Trello
https://trello.com/b/eViXuSU8/ironhack-1st-project

Git
https://github.com/morgenmuffel93/1st-project

Slides
URls for the project presentation (slides) Link Slides.com