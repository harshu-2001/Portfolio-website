// projects.js - Projects data and API functionality

var projectData = [];

// Function to load projects (use local data only — API removed)
function loadProjects() {
    // Directly render fallback/local projects to avoid external API dependency
    loadFallbackProjects();
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

// Function to render projects — featured first, then secondary
function renderProjects(projects) {
    const projectsList = document.querySelector(".projects-list");
    if (!projectsList) return;
    projectsList.innerHTML = '';

    // Featured projects
    projects.filter(p => p.featured).forEach((data) => {
        const divElement = document.createElement("div");
        divElement.className = 'project-card featured';

        const imgElement = document.createElement("img");
        imgElement.src = "images/project-illustration.svg";
        imgElement.alt = data.Projects;
        imgElement.style.width = "100%";
        imgElement.style.height = "150px";
        imgElement.style.objectFit = "cover";
        imgElement.style.borderRadius = "12px";
        imgElement.style.marginBottom = "10px";

        const h2Element = document.createElement("h2");
        h2Element.textContent = data.Projects;

        const pElement = document.createElement("p");
        pElement.textContent = data.Project_description;

        divElement.appendChild(imgElement);
        divElement.appendChild(h2Element);
        divElement.appendChild(pElement);

        if (data.Project_links && data.Project_links !== "na") {
            const aElement = document.createElement("a");
            aElement.href = data.Project_links;
            aElement.textContent = "Learn more";
            aElement.target = "_blank";
            divElement.appendChild(aElement);
        }

        projectsList.appendChild(divElement);
    });

    // Secondary projects
    projects.filter(p => !p.featured).forEach((data) => {
        const divElement = document.createElement("div");
        divElement.className = 'project-card';

        const imgElement = document.createElement("img");
        imgElement.src = "images/project-illustration.svg";
        imgElement.alt = data.Projects;
        imgElement.style.width = "60px";
        imgElement.style.height = "60px";
        imgElement.style.objectFit = "cover";
        imgElement.style.marginBottom = "10px";
        imgElement.style.float = 'left';
        imgElement.style.marginRight = '12px';

        const titleWrapper = document.createElement('div');
        titleWrapper.style.overflow = 'hidden';

        const h2Element = document.createElement("h2");
        h2Element.textContent = data.Projects;
        h2Element.style.marginTop = '0';

        const pElement = document.createElement("p");
        pElement.textContent = data.Project_description;

        titleWrapper.appendChild(h2Element);
        titleWrapper.appendChild(pElement);

        divElement.appendChild(imgElement);
        divElement.appendChild(titleWrapper);

        if (data.Project_links && data.Project_links !== "na") {
            const aElement = document.createElement("a");
            aElement.href = data.Project_links;
            aElement.textContent = "Learn more";
            aElement.target = "_blank";
            divElement.appendChild(aElement);
        }

        // clear float
        const clearDiv = document.createElement('div');
        clearDiv.style.clear = 'both';
        divElement.appendChild(clearDiv);

        projectsList.appendChild(divElement);
    });
}