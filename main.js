document.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;
  var fadeInText = document.querySelector(".fade-in-text");

  // Adjust the 300 value based on your desired scroll position for the fade-in effect
  if (scrollPosition > 300) {
      fadeInText.style.opacity = "1";
  } else {
      fadeInText.style.opacity = "0";
  }
});