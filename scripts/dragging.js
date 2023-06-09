

const dragThreshold = 50; // The number of pixels to drag the images
const dragThresholdPercentage = 0.7; // Adjust the percentage for the drag threshold
let draggingEnabled = false;
let dragStartX = 0;
let dragStartY = 0;

// ---------------- Dragging ---------------- //

function handleDragStart(event) {
  if (!draggingEnabled) {
    return;
  }
  dragStartX = event.clientX;
  dragStartY = event.clientY;

  event.target.style.zIndex = '9999';

  document.addEventListener('mousemove', handleDragMove);
  document.addEventListener('mouseup', handleDragEnd);
}

function handleDragMove(event) {
  const dragEndX = event.clientX;
  const dragEndY = event.clientY;

  const deltaX = dragEndX - dragStartX;
  const deltaY = dragEndY - dragStartY;

  const element = event.target;

  const left = parseInt(element.style.left) || 0;
  const top = parseInt(element.style.top) || 0;

  element.style.left = left + deltaX + 'px';
  element.style.top = top + deltaY + 'px';

  dragStartX = dragEndX;
  dragStartY = dragEndY;
}

function handleDragEnd() {
  document.removeEventListener('mousemove', handleDragMove);
  document.removeEventListener('mouseup', handleDragEnd);
}
