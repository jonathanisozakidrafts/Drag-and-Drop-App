/* This is the area where the draggable divs belongs. */
const draggableDivsBox = document.getElementById("drag-spots-box");

/* These are the original spots of the draggable divs */
const originalSpots = document.querySelectorAll(".drag-div-original");

/* These are the spots to drag the elements */
const dragSpots = document.querySelectorAll(".drag-spots");
let dragged = null; // This line of code is a dragged element.

/* These are the block elements to drag into the drag spots. */
const draggableDivs = document.querySelectorAll('.drag-items');

/* This code makes each div element that could be dragged have a 'dragstart' event. */
draggableDivs.forEach(function(draggableDiv) {
    draggableDiv.addEventListener("dragstart", function(event) {
        dragged = event.target; //This specifies that the event.target is the item - a.k.a. Whatever is clicked and dragged becomes the dragged item.
    });
});

/* These events are fired when we enter or exit their regions. */
dragSpots.forEach(function(dragSpot) {

    // This event listener occurs when we drag elements over the drag spot.
    dragSpot.addEventListener("dragenter", function(event) {
        if (event.target.classList.contains("drag-spots")) {
            event.target.style.backgroundColor = "rgba(180, 180, 180, 1)";
        }
    });

    // This event listener allows for drag events to happen.
    dragSpot.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    // This event listener occurs when we drag elements out of the drag spot.
    dragSpot.addEventListener("dragleave", function(event) {
        if (event.target.classList.contains("drag-spots")) {
            event.target.style.backgroundColor = "rgba(180, 180, 180, 0.5)";
        }
    });

    // This event listener removes the block element and appends it to the drag spot.
    dragSpot.addEventListener("drop", function(event) {
        if (event.target.className === "drag-spots") {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    });
});

// These events will make it so we can re-drag the draggable elements back.
originalSpots.forEach(function(originalSpot) {

    // This event listener occurs when we drag elements over the drag spot.
    originalSpot.addEventListener("dragenter", function(event) {
        if (event.target.classList.contains("drag-spots")) {
            event.target.style.backgroundColor = "rgba(180, 180, 180, 0.5)";
        }
    });

    // This event listener allows for drag events to happen.
    originalSpot.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    // This event listener occurs when we drag elements out of the drag spot.
    originalSpot.addEventListener("dragleave", function(event) {
        if (event.target.classList.contains("drag-spots")) {
            event.target.style.backgroundColor = "rgba(255, 255, 255, 1)";
        }
    });

    // This event listener removes the block element and appends it to the drag spot.
    originalSpot.addEventListener("drop", function(event) {
        if (event.target.className === "drag-div-original") {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    });
});