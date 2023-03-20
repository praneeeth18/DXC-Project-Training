document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var email = document.querySelector("#email").value;
      var password = document.querySelector("#password").value;
      var valid = true;
      if (email === "") {
        document.querySelector("#email-error").textContent = "Email is required";
        valid = false;
      } else {
        document.querySelector("#email-error").textContent = "";
      }
      if (password === "") {
        document.querySelector("#password-error").textContent = "Password is required";
        valid = false;
      } else {
        document.querySelector("#password-error").textContent = "";
      }
      if (valid) {
        alert("Logged in successfully!");
        // Add your login logic here
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
      }
    });
  });
  