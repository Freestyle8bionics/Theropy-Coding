// Canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Player object
const player = {
  x: 50,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  jumpPower: 15,
  isJumping: false,
  velocityY: 0
};

// Gravity
const gravity = 0.8;

// Keyboard event listeners
document.addEventListener("keydown", function(event) {
  if (event.code === "Space" && !player.isJumping) {
    player.isJumping = true;
    player.velocityY = -player.jumpPower;
  }
});

// Game loop
function update() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Apply gravity
  player.velocityY += gravity;
  player.y += player.velocityY;

  // Collision with ground
  if (player.y > canvas.height - player.height) {
    player.y = canvas.height - player.height;
    player.isJumping = false;
  }

  // Draw player
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Request next frame
  requestAnimationFrame(update);
}

// Start game loop
update();
