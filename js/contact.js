<script type="text/javascript"
src="https://cdn.jsdelivr.net/npm/emailjs-com/dist/email.min.js"></script>
(function () {
  emailjs.init("-IcGnqrKUjzJtJa1c");
})();

function sendMail(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var params = {
      from_name: name,
      to_name: "Recipient Name",
      email: email,
      phone: phone,
      message: message,
  };

  emailjs
      .send("service_cz0lh64", "template_oofb2wz", params)
      .then(function (response) {
          console.log("Email sent successfully!", response.status, response.text);
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";

          var responseElement = document.getElementById("response");
          responseElement.innerText = "Email sent successfully!";
          responseElement.style.color = "green";
      })
      .catch(function (error) {
          console.log("Error sending email:", error);

          var responseElement = document.getElementById("response");
          responseElement.innerText = "Error sending email. Please try again later.";
          responseElement.style.color = "red";
      });
}

