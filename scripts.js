document.getElementById('yesBtn').addEventListener('click', function() {
    Swal.fire({
      title: 'Congratulations!',
      text: "You're now my valentine's Date ❤️",
      icon: 'success',
      confirmButtonText: 'Great!'
    });
  });
  
// Add event listener for mouseover event on the No button
document.getElementById('noBtn').addEventListener('mouseover', function() {
    this.style.transition = 'transform 0.5s ease-in-out';
    this.style.transform = 'rotate(360deg)';
  });
  
  // Add event listener for mouseout event on the No button to reset its rotation
  document.getElementById('noBtn').addEventListener('mouseout', function() {
    this.style.transform = 'rotate(0deg)';
  });
  
  // Add event listener for click event on the No button to rotate it continuously
  document.getElementById('noBtn').addEventListener('click', function() {
    var rotation = 0;
    var button = this;
    setInterval(function() {
      rotation += 45;
      button.style.transition = 'transform 0.5s ease-in-out';
      button.style.transform = 'rotate(' + rotation + 'deg)';
    }, 500); // Rotate every 0.5 seconds (500 milliseconds)
  });