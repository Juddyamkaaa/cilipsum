function strokeShape(shape, ctx) {
  ctx.strokeStyle = 'black'; // set stroke color
  ctx.lineWidth = 2; // set stroke thickness
  ctx.beginPath();
  // draw the outline of the shape
  for (let point of shape.points) {
    ctx.lineTo(point.x, point.y);
  }
  ctx.closePath();
  ctx.stroke();
}
