// Get the modal
var modal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the cancel button element
var cancelButton = document.querySelector(".cancel");
var openButton = document.querySelector("#modal-open");
var tblButton = document.querySelector(".tbl-btn");

// When the user clicks on <span> (x), close the modal
openButton.onclick = function () {
  modal.style.display = "block";
};
tblButton.onclick = function () {
  modal2.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on the cancel button, close the modal
cancelButton.onclick = function () {
  modal.style.display = "none";
};

// Optional: Close the modal if the user clicks anywhere outside of it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
