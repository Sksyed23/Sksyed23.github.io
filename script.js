document.getElementById('namePromptButton').addEventListener('click', function() {
    let userName = prompt('Please enter your name:', '');
    if (userName) {
        document.getElementById('nameDisplay').textContent = `Welcome, ${userName}!`;
    }
});

document.getElementById('profileImage').addEventListener('click', function() {
    this.classList.toggle('enlarged');
});

function hoverEffect(element) {
    element.style.color = 'red'; // Hover color change
}

function hoverEffectOff(element) {
    element.style.color = 'black'; // Original color
}