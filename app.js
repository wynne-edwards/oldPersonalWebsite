const observer = new IntersectionObserver((entries) => { //Observer to add labels to what is sees and remove to what it doesnt
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden'); //Observe all elements with label .hidden
hiddenElements.forEach((el) => observer.observe(el));

function sendEmail() {
    document.getElementById("prompt").style.display = "flex"; //Show email bar
}
function closeEmail() {
    document.getElementById("prompt").style.display = "none"; //Close email bar
}
function checkSend() {
    var email = document.getElementById("emailId").value; //take in values from text fields and open up a email bar where a email can be sent with relevent information
    var subject = document.getElementById("subjectId").value;
    var text = document.getElementById("textId").value;
    window.open(`mailto:wynnee02@gmail.com?subject=${subject}&body=${text}`);
    closeEmail();
    console.log(email + "\n" + subject + "\n" + text);
}
//SRC CODE:  https://www.youtube.com/watch?v=gphMli74Chk
const scrollBtn = document.querySelector("#cvId");
scrollBtn.addEventListener("click", transitionToCV);
function transitionToCV(){
    smoothScrollBackToTop()
    setTimeout(function(){
        window.location.href = "cv.html";
    }, 725);
    
}
function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;
    
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }
  function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
dragElement(document.getElementById("prompt"));//Drag efect
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;

        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) { 

        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

    }
}

