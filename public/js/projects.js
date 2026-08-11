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
    // Suggested low-impact projects to consider cutting from the public listing (recommendation):
    // ["E-Commerce Platform", "Task Management App", "Weather Dashboard"]

    const fallbackProjects = [
        {
            Projects: "Copilot Studio Agent — Visa Application Assistant",
            Project_description: "Built a Copilot Studio conversational agent for a public Visa Portal allowing applicants to query application status, biometric appointments, and case history. Integrated with Dataverse and internal REST APIs via a controlled gateway.",
            Project_links: "https://github.com/harshu-2001",
            featured: true
        },
        {
            Projects: "Copilot Studio Agent — Biometric Exception Triage",
            Project_description: "Designed an agent to classify Page Tray Reader biometric exceptions and route cases into Power Automate flows for automated ticket creation and status updates, reducing manual triage.",
            Project_links: "https://github.com/harshu-2001",
            featured: true
        },
        {
            Projects: "Power Apps Case Management System (ICS)",
            Project_description: "Implemented a Power Apps model-driven application on Dataverse for case escalation tracking, shift assignments, and multi-level approvals with Power Automate notifications.",
            Project_links: "https://github.com/harshu-2001",
            featured: true
        },
        {
            Projects: "Custom RAG Pipeline",
            Project_description: "Built a Retrieval-Augmented Generation pipeline using Azure OpenAI and Azure AI Search for internal documentation Q&A with citation-backed responses.",
            Project_links: "https://github.com/harshu-2001",
            featured: false
        },
        {
            Projects: "Azure AI Foundry — NIC Pipeline Observability Assistant",
            Project_description: "Prototyped an Azure AI Foundry agent to summarize NIC pipeline logs and surface likely root causes and remediation steps via function-calling to observability APIs.",
            Project_links: "https://github.com/harshu-2001",
            featured: false
        },
        {
            Projects: "Face Match & Face Detection POC",
            Project_description: "Proof-of-concept for CNN-based face detection and face-match exposed via a FastAPI service (Uvicorn) for real-time similarity scoring and identity verification.",
            Project_links: "https://github.com/harshu-2001",
            featured: false
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