// Get Canvas context from the HTML canvas tag.
const canvas_size = {height: 750, width: 850};
const canvas = document.getElementById("obstacle_game_canvas");
const context = canvas.getContext("2d");

// Car's global variables.
let car_position = {x: 450, y: 750};
const car_speed = 26;
const road_lane = [85, 125, 138, 164, 242, 250, 268, 295, 450, 476, 528, 580, 606, 370]; // 350 for manic drivers
const obsticle_color = ['Yellow', 'white', 'green', 'pink'];
const obsticle_speed_offset = 3; //3 
let obs_y = 25;
const Max_obsticle = 4;
obs_obj = [];

// Game state
let pause_flag = false;
let game_over_flag = false;

// Game asssets
const background_gameover = document.getElementById("Road_background");
const background_image = document.getElementById("Road1");

class Obstacle{
  // private property 
  #x
  #y
  #width
  #height
  #speed
  #color
  #isDestroyed

  constructor(width, height){
    this.#width = width;
    this.#height = height;
    this.#isDestroyed = false;
  }

  /* Getter methods */
  get getX(){
    return this.#x;
  }

  get getY(){
    return this.#y;
  }

  get isDestroyed(){
    return this.#isDestroyed;
  }

  get getColor(){
    return this.#color;
  }

  get getWidth(){
    return this.#width;
  }

  get getHeight(){
    return this.#height;
  }

  /*
  * Randomly generate obsticle 
  * including lane, and speed
  */
  generate_randomly(){
    // generate car in specific lane
    let select_lane = Math.floor(Math.random() * road_lane.length);
    this.#x = road_lane[select_lane] - (this.#width / 2);

    // select color of obsticle
    let select_color = Math.floor(Math.random() * obsticle_color.length);
    this.#color = obsticle_color[select_color];
    
    // Generate random obsticle speed that will be added to the obsticle_speed_offset
    // Randomly generate number between 0 to  
    let additional_speed = Math.floor(Math.random() * 5);
    this.#speed = obsticle_speed_offset + additional_speed;
    this.#y = -this.#height; // spawn at top of the canvas
  }

  /*
  * Update the obsticle position per frame
  */
  update(){
    this.#y += this.#speed;
  }

  /**
   * for optimization
   * Destroy current car object that is rendered outside the window's context
  */
  destroy(){
    this.#isDestroyed = true;
  }

}

function main(){
  disable_zoom();
  gameLoop();
  input();

}

/**
 * Function that disable zooming feature
 * note: this isn't a foolproof user can still manual zoom using the browser settings.
*/
function disable_zoom(){
  // Disable zoom from mouse scroll wheel.
  window.addEventListener("wheel", (wheel)=>{
    wheel.preventDefault();
  }, {passive: false});

  // Disable zoom from keyboard shortcuts
  window.addEventListener("keydown", (key)=>{
    if ((key.ctrlKey || key.metaKey) && (key.key === "+" || key.key === "-")){
      key.preventDefault();
    }
  });
}

/*
* function which processes player input from keyboard 
*/
function input(){
  window.addEventListener("keydown", (key)=>{
    switch(key.key.toLowerCase()){ // move the car according to keyboard inputs
      case "d":
        // check if the car is within playable area
        if (car_position.x < canvas_size.width - 250){
          car_position.x += car_speed;
        }
        break;

      case "arrowright":
        // check if the car is within playable area
        if (car_position.x < canvas_size.width - 250){
          car_position.x += car_speed;
        }
        break;
      
      case "a":
        // check if the car is within the playable area
        if (car_position.x > 100){
          car_position.x -= car_speed;
        }
        break;
      case "arrowleft":
        // check if the car is within playable area
        if (car_position.x > 100){
          car_position.x -= car_speed;
        }
        break;
    }
    
  });
  
  /* Handles mouse input */

  let isMouseDown = false;  // check if mouse is on hold
  let mouseOffsetX = 0;     // stores initial value of offset

  // Handles mouse drag when mousedown event
  window.addEventListener("mousedown", (mouseEvent) => {
    // check if user is interacting with the car 
        // check if user is interacting with the car 
        if (car_position.y + 70 > mouseEvent.offsetY && car_position.y < mouseEvent.offsetY){ 
          if (car_position.x + 50 > mouseEvent.offsetX && car_position.x < mouseEvent.offsetX){ 
            if (mouseEvent.button === 0) {  // check if left mouse button is triggered!
              isMouseDown = true;  // Mouse dragging is active
              mouseOffsetX = mouseEvent.offsetX - car_position.x;  // Calculates the initial offset
            }
          }
        }
  });

  // Update the car position based on mouse drag 
  window.addEventListener("mousemove", (mouseEvent) => {
    if (isMouseDown) {  // Only move the car if the mouse is being dragged
      let newX = mouseEvent.offsetX - mouseOffsetX;  // Update the car's X position based on mouse movement

      // check if player movement is within the game boundries
      if (newX >= 60 && newX <= canvas_size.width - 230) {
        car_position.x = newX;
      }
    }
  });

  // Handle mouse up event to stop dragging the car
  window.addEventListener("mouseup", () => {
    isMouseDown = false;  // Stop dragging
  });

}

/**
 * Detect if player collided with obsticle
*/
function detectCollision(){
  obs_obj.forEach((obs)=>{
    // detect collision at front of the player car
    if (car_position.y + 70 > obs.getY && car_position.y < obs.getY + obs.getHeight){ // check collision at y-axis
      if (car_position.x + 50 > obs.getX && car_position.x < obs.getX + obs.getWidth){ // check collision at x-axis
        gameOver();
      }
    }

  });
}

/*
* Pauses the game and restart if player loses
**/
function gameOver(){
  // alert("colision!!"); //test
  game_over_flag = true; // set game state into gameover

  // Display empty background
  context.clearRect(0, 0, canvas_size.width, canvas_size.height);
  context.drawImage(background_gameover, 0, 0);

  // Display text to the user
  context.fillStyle = "white";
  context.font = "75px Arial";
  context.fillText("Game Over", canvas_size.width / 2 - 250, canvas_size.height / 2);

  context.font = "35px Arial";
  context.fillText("Press R to play again!", canvas_size.width / 2 - 220, (canvas_size.height / 2) + 65)

  // Check if user want to play again!
  window.addEventListener("keydown", (key)=>{
    switch (key.key.toLowerCase()){
      case "r":
        location.reload(); // reload the page to play again!
        break;
    }
  });
}

/*
* Manages spawn and spawn rate of obsticle(car).
* @Input: Max_generation - maxium number of obsticle spawn
*/ 
function obsticle_manager(Max_generation){
  // remove all the destroyed object
  obs_obj = obs_obj.filter(obs =>(!obs.isDestroyed)); // keeps only alive obsticle.

  // Generate obsticle
  if (obs_obj.length <= Max_generation){
    let new_obs = new Obstacle(50, 70);
    new_obs.generate_randomly();
    obs_obj.push(new_obs);
  }

  // update the state of obsticle
  obs_obj.forEach((obs) =>{
    obs.update(); // update car for each object in the array
    if (obs.getY > canvas_size.height){ // destroys object that is out of screen
      obs.destroy();
    }
  });
}

/*
* Game's mainloop updated each frame recursively
*/
function gameLoop(){
  /* check game state if paused or game over */ 
  if (game_over_flag){ return;}

  /* Clear the canvas */
  context.clearRect(0, 0, canvas_size.width, canvas_size.height);

  /* Loads the background image*/
  context.drawImage(background_image, 0, 0);

  /* Render a player's car */
  context.fillStyle = "red";
  context.fillRect(car_position.x, car_position.y, 50, 70);

  /* Render NPC's car (obsticle) */
  obs_obj.forEach((obs) =>{
    context.fillStyle = obs.getColor; 
    context.fillRect(obs.getX, obs.getY, obs.getWidth, obs.getHeight);
  });

  /* Handles the spawn and spawn rate of the NPC car */
  obsticle_manager(Max_obsticle); 

  /* Checks if player collide with obsticle */
  detectCollision();

  /* Recursive main loop */
  window.requestAnimationFrame(gameLoop);
}

// game entry point
main()
