// Function to access the webcam

//This is sample code not sure how I will be incorpating webcam yet using this Javascript code
$('.box').click( function() {
  $(this).toggleClass('clicked');
});
async function setupWebcam() {
    const video = document.getElementById('webcam');
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  }

  // This alitude code may not be needed jsut sample code
async function getAltitude() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const altitudeElement = document.getElementById('altitude');
        const altitude = position.coords.altitude || 'Unavailable';
        altitudeElement.innerHTML = `<h2>Altitude:</h2><p>${altitude} meters</p>`;
      }, error => {
        console.error('Error getting altitude:', error);
        const altitudeElement = document.getElementById('altitude');
        altitudeElement.innerHTML = '<h2>Altitude:</h2><p>Unable to fetch altitude</p>';
      });
    } else {
      console.log('Geolocation is not supported');
    }
  }
 
  // Function to retrieve Lidar sensor data and display it on the canvas
  $(document).ready(function() {

    function fetchLiDARReadings() {
      $.get("http://<jetson-nano-ip>:5000/lidar", function(data) {
        //
        $("#lidarContainer").html(`<p>LiDAR Distance: ${data.distance} meters</p>`);
     } );
    }
    
    // we will fetch readings every 5 seconds (adjust as needed)
    setInterval(fetchLiDARReadings, 5000);

    // Fetching page load
    fetchLiDARReadings();
  });
  
  // Initialize functions on page load
  window.onload = function() {
    setupWebcam();
    displayLidarData();
    getAltitude();
  }
  