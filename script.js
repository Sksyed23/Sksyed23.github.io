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

// New form functionality
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch all form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    // Store data in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(data));

    // Provide feedback or redirect user
    alert('Your information has been saved. Thank you!');

    // Optionally clear the form or redirect the user
    // this.reset(); // Uncomment this if you want to clear the form after submission
    // window.location.href = 'thankyoupage.html'; // Redirect to a thank you page
});

// New image caption functionality
document.querySelectorAll('.image-with-caption').forEach(item => {
  item.addEventListener('mouseover', showCaption);
  item.addEventListener('focus', showCaption);
  item.addEventListener('mouseout', hideCaption);
  item.addEventListener('blur', hideCaption);
});

function showCaption(event) {
  const caption = event.target.getAttribute('data-caption');
  const captionDiv = document.getElementById('image-caption');
  captionDiv.textContent = caption;
  captionDiv.style.display = 'block'; // Show the caption div
}

function hideCaption() {
  const captionDiv = document.getElementById('image-caption');
  captionDiv.style.display = 'none'; // Hide the caption div
}
