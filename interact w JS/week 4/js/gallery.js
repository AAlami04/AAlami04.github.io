

function upDate(previewPic){
     var image = previewPic.src;
      document.getElementById("image").style.backgroundImage = "url('" + image +"')";  
      var text = previewPic.alt;
     document.getElementById("image").innerHTML = text;
     
     
       }
       function unDo(){
        document.getElementById("image").style.backgroundImage = "url('" + null +"')";
       
       document.getElementById("image").innerHTML = "Hover over an image below to display here.";
           
       }
       // ... (Your existing code)

// Add the listeners for onfocus and onblur events
document.addEventListener("DOMContentLoaded", function() {
  var previewImages = document.querySelectorAll(".preview");
  for (var i = 0; i < previewImages.length; i++) {
      previewImages[i].addEventListener("focus", function() {
          upDate(this);
      });
      previewImages[i].addEventListener("blur", function() {
          unDo();
      });
  }

  // Add the listener for onload event
  window.onload = function() {
      document.addEventListener("keydown", tabFocus);
  };

  // Add the new function for adding the tabfocus attribute
  
  function tabFocus(event) {
    if (event.key === "Tab") {
         // Prevent default behavior (scrolling)

        console.log("Tab key pressed");
        var currentIndex = document.activeElement.tabIndex;
        var totalImages = document.querySelectorAll(".preview").length;

        // Reset image to original state if all images have been shown
        if (currentIndex > totalImages) {
            unDo();
            // Set the focus to the first image to restart the loop
            document.querySelector(".preview").focus();
        } else {
            upDate(document.activeElement);
        }
    }
}

  // Write a for loop to loop through each image and add tabindex attributes
  for (var i = 0; i < previewImages.length; i++) {
      previewImages[i].tabIndex = i + 1;
     

  }

});
