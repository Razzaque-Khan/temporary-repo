const container = document.querySelector('.container');
const smallCursor = document.querySelector('.smallCursor');
const follower = document.querySelector('.follower');

let mouseX = 0;
let mouseY = 0;
let animationId = null;


const debounce = function () {
    let timeOut;
    return function (callback, delay){
        return function() {
            clearTimeout(timeOut);
            timeOut = setTimeout(callback, delay);
        }
    }
}

const debounceFunc = debounce();
const handleMouseMove = function(e)  {
    mouseX = e.clientX;
    mouseY = e.clientY;
    smallCursor.style.cssText = `left: ${mouseX}px; top: ${mouseY}px;`;
    !animationId && debounceFunc(animateFollowerCursor, 500)();
}
container.addEventListener('mousemove', handleMouseMove);


function animateFollowerCursor() {
    let currentX = parseFloat(follower.style.left) || 0;
    let currentY = parseFloat(follower.style.top) || 0;

    let distanceX = mouseX - currentX;
    let distanceY = mouseY - currentY;

    follower.style.left = currentX + distanceX * 0.07 + 'px';
    follower.style.top = currentY + distanceY * 0.07 + 'px';

    if (Math.abs(parseInt(distanceX)) || Math.abs(parseInt(distanceY))) {
        animationId = requestAnimationFrame(animateFollowerCursor);
    }
    else {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}