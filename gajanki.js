// Get the modal element
var modal2 = document.getElementById("myModal2");

// Get the button element
var openModalBtn2 = document.getElementById("openModalBtn2");

// Attach a click event listener to the button
openModalBtn2.addEventListener("click", function() {
  modal2.style.display = "block";
});

// Get the close button element
var closeBtn = document.getElementsByClassName("close2")[0];

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function() {
  modal2.style.display = "none";
});



// Get the modal element
var modal3 = document.getElementById("myModal3");

// Get the button element
var openModalBtn3 = document.getElementById("openModalBtn3");

// Attach a click event listener to the button
openModalBtn3.addEventListener("click", function() {
  modal3.style.display = "block";
  
  // Get the modal content element
  var modalContent = document.querySelector(".modal-content3");
  
  // Clear the previous modal content
  modalContent3.innerHTML = "";
  
  // Array of video URLs
  var videoUrls = ["video1.mp4", "video2.mp4", "video3.mp4"];
  
  // Iterate over the video URLs and create video elements
  for (var i = 0; i < videoUrls.length; i++) {
    var videoUrl = videoUrls[i];
    
    // Create a video element
    var video = document.createElement("video");
    video.src = videoUrl;
    video.controls = true;
    
    // Append the video element to the modal content
    modalContent3.appendChild(video);
  }
});

// Get the close button element
var closeBtn = document.getElementsByClassName("close3")[0];

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function() {
  modal3.style.display = "none";
});




document.getElementById('search-button').addEventListener('click', function() {
  var searchInput = document.getElementById('search-input').value;
  var searchResults = document.getElementById('search-results');

  // Clear previous search results
  searchResults.innerHTML = '';

  // Perform your search logic here...
  // You can make AJAX requests to a server-side script or manipulate the DOM directly using JavaScript

  // For demonstration purposes, let's display the search term
  var resultText = document.createElement('p');
  resultText.textContent = "You searched for: " + searchInput;
  searchResults.appendChild(resultText);
});






//slide images
document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  showSlide(currentSlide);

  setInterval(function() {
    showSlide(currentSlide + 1);
  }, 3000);
});





document.getElementById("openFormBtn").addEventListener("click", function() {
  var formContainer = document.querySelector(".form-container");
  formContainer.style.display = "block";
});

document.getElementById("dataForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var nameInput = document.getElementById("name");
  var phoneInput = document.getElementById("phone");
  var villageInput = document.getElementById("village");
  var amountInput = document.getElementById("amount");
  
  var name = nameInput.value;
  var phone = phoneInput.value;
  var village = villageInput.value;
  var amount = amountInput.value;
  
  var dataTable = document.getElementById("dataTable");
  var newRow = dataTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  cell1.textContent = name;
  cell2.textContent = phone;
  cell3.textContent = village;
  cell4.textContent = amount;
  
  nameInput.value = "";
  phoneInput.value = "";
  villageInput.value = "";
  amountInput.value = "";
  
  var formContainer = document.querySelector(".form-container");
  formContainer.style.display = "none";
});
