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

GAME
this.balls
this.time
this.canvas
this.gameIsOver
this.createGoodBall()
this.createBadBall()

start()
  startLoop()
    startTmer()
    this.updateAll()
    this.clearAll()
    this.drawAll()
    checkIfMouseOverBall()
      clearBall()
    gameOver()
    destroy()
    
BALL
this.x
this.y
this.velX
this.velY
this.color = [random color from an array]
this.size = random number between a min and a max
this.type = good or baddraw()
update()
amITouched()

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
- Game: create ball that moves
- Game: create good and bad balls
- Ball: create
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