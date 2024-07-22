// -----------------Experience data--------------------------

const experData = [
  {
    post: "Software Developer",
    companyname: "Z1 Tech",
    time: "02/2023 - Present",
    detail:
      "Successfully launched in-house applications like Flapster and Pixel  Perfect, catering to specific user needs.\n Developed a robust Ads Mediation Library that simplifies the  integration of ads from different platforms. ",
  },
  {
    post: "Mobile App Developer",
    companyname: "Demotic Technologies Pvt. Ltd.",
    time: "07/2022 - 12/2022",
    detail: "Developed features in existing app.",
  },
  {
    post: "Android Developer Intern",
    companyname: "HDPI Soft Weblink Solutions",
    time: "05/2023 - 06/2023",
    detail: "Developed and maintain existing app.",
  },
];

const expierenceBox = document.getElementById("expierence-box");
experData.forEach((data) => {
  const divElement = document.createElement("div");
  divElement.className = "expierence-details";
  divElement.classList.add("expierence-details");

  const postElement = document.createElement("span");
  postElement.style.fontSize = "20px";
  postElement.style.color = "#0088ff";
  postElement.style.marginBottom = "10px";

  postElement.textContent = data.post;

  const companynameElement = document.createElement("span");
  companynameElement.style.fontSize = "18px";

  companynameElement.textContent = data.companyname;

  const companynameDetailElement = document.createElement("p");
  companynameDetailElement.style.fontSize = "18px";
  companynameDetailElement.textContent = data.detail;

  const timeElement = document.createElement("span");
  timeElement.style.fontSize = "16px";
  timeElement.textContent = data.time;

  const brElement = document.createElement("br");
  const spacerElement = document.createElement("spacer");
  spacerElement.style.height = "20px";



  divElement.appendChild(postElement);
  divElement.appendChild(brElement);
  divElement.appendChild(companynameElement);
  divElement.appendChild(brElement.cloneNode());
  divElement.appendChild(timeElement);
  divElement.appendChild(brElement.cloneNode());
  divElement.appendChild(spacerElement);
  divElement.appendChild(companynameDetailElement);
  expierenceBox.appendChild(divElement);
});

// ------------- end of expierenceBox ---------------
