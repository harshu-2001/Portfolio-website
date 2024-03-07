// ----------------- Projects data ----------------------------


var projectData = [];
fetch("https://next-server-bay.vercel.app/api/projects")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    projectData = data.project;
    projectData.forEach((data) => {
      const divElement = document.createElement("div");

      const imgElement = document.createElement("img");
      imgElement.src = "images/project.png";
      imgElement.alt = data.altText;
      imgElement.style.height = "60px";
      imgElement.style.width = "60px";
      imgElement.style.marginBottom = "10px";

      const h2Element = document.createElement("h2");
      h2Element.textContent = data.Projects;

      const pElement = document.createElement("p");
      pElement.textContent = data.Project_description.replace(/:/g, '\n');

      

      divElement.appendChild(imgElement);
      divElement.appendChild(h2Element);
      divElement.appendChild(pElement);
      if (data.Project_links !== "na") {
        const aElement = document.createElement("a");
        aElement.href = data.Project_links;
        aElement.textContent = "Learn more";
        divElement.appendChild(aElement);

      }
      projectsList.appendChild(divElement);
    });
  })
  .catch((error) => console.error("Error:", error));
// console.log(run());
const projectsList = document.querySelector(".projects-list");

// ------------------ end of service data-------------------------
