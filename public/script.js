// Header Main Page Details

const userData = {
  // logoImage: "images/logo.png",
  title: "",
  firstName: "Harsh",
  lastName: "Shrivastava",
  country: "India",
  aboutImage: "images/user.jpeg",
};

// const logoPhoto = document.getElementById('logo-image');
// logoPhoto.src = userData.logoImage;

const headerIdData = ["title", "firstName", "lastName", "country"];

headerIdData.forEach((elementId) => {
  const element = document.getElementById(elementId);
  element.innerHTML = userData[elementId];
});

// -------------------- porfolio -------------

const portfolioData = [
  {
    image: "",
    heading: "",
    description: "",
  },
  {
    image: "",
    heading: "",
    description: "",
  },
  {
    image: "",
    heading: "",
    description: "",
  },
];

const porfolioBox = document.getElementsByClassName;

// new

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL = "https://next-server-bay.vercel.app/api/message";

const form = document.getElementById("contact-form");

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const Name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Create JSON object
  const formData = {
    name: Name,
    email: email,
    message: message,
  };

  console.log(formData);
  const formDataString = JSON.stringify(formData);
  console.log(formDataString);

  fetch("https://next-server-bay.vercel.app/api/message", {
    method: "POST",
    mode: "cors",
    body: formDataString,
  })
    .then((response) => {
      if (response.ok) {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);

        form.reset();
      } else {
        msg.innerHTML = "Error sending message";
      }
    })
    .then((data) => {
      console.log("Response from API:", data);
      // Handle the API response as needed
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors if any
    });
});
