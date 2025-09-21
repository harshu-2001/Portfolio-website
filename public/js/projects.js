// projects.js - Projects data and API functionality

var projectData = [];

// Function to load projects from API
function loadProjects() {
    const projectsList = document.querySelector(".projects-list");
    
    fetch("https://next-server-bay.vercel.app/api/projects")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            projectData = data.project;
            renderProjects(projectData);
        })
        .catch((error) => {
            console.error("Error:", error);
            // Fallback to local data if API fails
            loadFallbackProjects();
        });
}

// Fallback projects data if API is unavailable
function loadFallbackProjects() {
    const fallbackProjects = [
        {
            Projects: "E-Commerce Platform",
            Project_description: "A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration.",
            Project_links: "https://github.com/harshu-2001"
        },
        {
            Projects: "Task Management App",
            Project_description: "A collaborative productivity application with real-time updates, drag-and-drop functionality, and team collaboration tools.",
            Project_links: "https://github.com/harshu-2001"
        },
        {
            Projects: "Weather Dashboard",
            Project_description: "Interactive weather application with real-time data, location-based forecasts, and responsive design.",
            Project_links: "https://github.com/harshu-2001"
        }
    ];
    renderProjects(fallbackProjects);
}

// Function to render projects
function renderProjects(projects) {
    const projectsList = document.querySelector(".projects-list");
    
    projects.forEach((data) => {
        const divElement = document.createElement("div");

        const imgElement = document.createElement("img");
        imgElement.src = "images/project.png";
        imgElement.alt = data.altText || data.Projects;
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
            aElement.target = "_blank";
            divElement.appendChild(aElement);
        }
        
        projectsList.appendChild(divElement);
    });
}