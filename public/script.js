// Header Main Page Details
var secretAuthToken = "mySecretToken123";

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

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyrTIybZ2qx8u52V8UR-UMOYl32ojKrcaXyV-S3kcqWhY1taLmMYSaZJtryvyw9HAI97Q/exec";

const form = document.getElementById("contact-form");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form), mode:'no-cors' })
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
    .catch((error) => console.error("Error!", error.message));
});
// const form = document["submit-to-google-sheet"];
// const msg = document.getElementById("msg");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   console.log(e);
//   formData.append("auth", secretAuthToken);

//   fetch(scriptURL, { method: "POST", body: formData, mode: "no-cors" })
//     .then((response) => {
//       msg.innerHTML = "Message sent successfully";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);

//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
