document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "save_contact.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert(xhr.responseText); // Show response from server
        }
    };
    xhr.send(formData);
});

// Servo animation
function rotateServo() {
    const servoImage = document.querySelector('.interactive-image');
    servoImage.classList.add('rotate');
    setTimeout(() => {
      servoImage.classList.remove('rotate');
    }, 1000); // Reset after 1 second
  }
  // LiDAR visualization
  const lidarCanvas = document.getElementById('lidar-canvas');
  const ctx = lidarCanvas.getContext('2d');
  
  // Simulate LiDAR data
  const lidarData = [
    { x: 10, y: 20 },
    { x: 30, y: 40 },
    { x: 50, y: 60 },
    // Add more data points
  ];
  
  // Render LiDAR data on the canvas
  function renderLidarData() {
    ctx.clearRect(0, 0, lidarCanvas.width, lidarCanvas.height);
    ctx.beginPath();
    for (const point of lidarData) {
      ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
    }
    ctx.fillStyle = 'red';
    ctx.fill();
    requestAnimationFrame(renderLidarData);
  }
  
  renderLidarData();