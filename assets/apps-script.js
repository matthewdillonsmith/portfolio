function changetexttest1(id) {
    return document.getElementById(id).innerHTML="It worked!";
}

function changetexttest2(id) {
    return document.getElementById(id).innerHTML="This is a test for my external JavaScript";
}

// Script for the 'introduction' set of cards
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent1, tablinks1;
  tabcontent1 = document.getElementsByClassName("tabcontent-1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinkouter = document.getElementsByClassName("tablink-outer");
  for (i = 0; i < tablinkouter.length; i++) {
    tablinkouter[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

