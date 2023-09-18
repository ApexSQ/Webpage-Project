

  //all pages
  
  // Initialize Bootstrap components
  document.addEventListener("DOMContentLoaded", function() {
    var navbarCollapse = new bootstrap.Collapse(document.querySelector("#navbarNav"), {
      toggle: false  // Set toggle option to false to keep the dropdown closed initially
    });

    // Add event listener to the navbar toggle button
    var navbarToggle = document.querySelector(".navbar-toggler");
    navbarToggle.addEventListener("click", function() {
      // Custom code to execute when the toggle button is clicked
      console.log("Toggle button clicked!");

      // Example: Change the background color of the navigation links
      var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
      navLinks.forEach(function(link) {
        link.style.backgroundColor = "none";
      });

      // Toggle the navigation bar collapse
      navbarCollapse.toggle();
    });
  });



  //OUR WORK PAGE

  var currentPage = window.location.href;

  // Check if the current page is "our-work.html"
  if (currentPage.includes("OurWork.html")) {
    // Add the "our-work" class to the navigation bar
    document.querySelector('.navbar').classList.add('our-work');
  }
  if (currentPage.includes("OurWork.html")) {
  var navLinks = document.querySelectorAll('.nav-link');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add('our-work');
  }
}



// Initialize Bootstrap components
document.addEventListener("DOMContentLoaded", function() {
  var navbarCollapse = new bootstrap.Collapse(document.querySelector("#navbarNav"), {
    toggle: false  // Set toggle option to false to keep the dropdown closed initially
  });

  // Add event listener to the navbar toggle button
  var navbarToggle = document.querySelector(".navbar-toggler");
  navbarToggle.addEventListener("click", function() {
    // Custom code to execute when the toggle button is clicked
    console.log("Toggle button clicked!");

    // Example: Change the background color of the navigation links
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(function(link) {
      link.style.backgroundColor = "none";
    });

    // Toggle the navigation bar collapse
    navbarCollapse.toggle();
  });
});
