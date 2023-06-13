document.getElementById("sendButton").addEventListener("click", function(event) {
    event.preventDefault();
  
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
  
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
      document.getElementById("missingFieldsMessage").style.display = "block";
      document.getElementById("successMessage").style.display = "none";
    } else {
      document.getElementById("missingFieldsMessage").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
  
      setTimeout(function() {
        document.getElementById("successMessage").style.display = "none";
      }, 5000);
    }
  });
