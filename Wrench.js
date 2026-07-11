// --- MOBILE TRACKING TOOL: Temporarily copy to the bottom of script.js ---
canvas.addEventListener('touchstart', (e) => {
  if (!gameActive || showFullMap) return;

  // Track the first finger touch point
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  const touchX = touch.clientX - rect.left;
  const touchY = touch.clientY - rect.top;

  // 1. Reverse the screen center translation matrix
  let dx = touchX - canvas.width / 2;
  let dy = touchY - canvas.height / 2;

  // 2. Reverse the camera angle rotation matrix
  let cos = Math.cos(camera.angle);
  let sin = Math.sin(camera.angle);
  let rotatedX = dx * cos - dy * sin;
  let rotatedY = dx * sin + dy * cos;

  // 3. Reverse the player tracking camera offsets to get precise image coordinates
  let finalMapX = Math.floor(rotatedX + player.x + player.size / 2);
  let finalMapY = Math.floor(rotatedY + player.y + player.size / 2);

  // 4. Send an alert popup to your phone screen so you can see it without dev-tools
  alert(`Door Coordinates:\nX: ${finalMapX}\nY: ${finalMapY}`);
});
