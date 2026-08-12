// projects.js - Projects data and rendering

var projectData = [];

// Function to load projects (local data only — no external API dependency)
function loadProjects() {
    loadFallbackProjects();
}

// Local projects data, mirrors the "Projects" section of the resume
function loadFallbackProjects() {
    const fallbackProjects = [
        {
            Projects: "Copilot Studio Agent — Visa Application Assistant",
            Project_description: "Built a Copilot Studio conversational agent for a public Visa Portal allowing applicants to query application status, biometric appointments, and case history. Integrated with Dataverse and internal REST APIs via a controlled gateway.",
            image: "images/project-visa.svg",
            featured: true
        },
        {
            Projects: "Copilot Studio Agent — Biometric Exception Triage",
            Project_description: "Designed an agent to classify Page Tray Reader biometric exceptions and route cases into Power Automate flows for automated ticket creation and status updates, reducing manual triage.",
            image: "images/project-biometric.svg",
            featured: true
        },
        {
            Projects: "Power Apps Case Management System (ICS)",
            Project_description: "Implemented a Power Apps model-driven application on Dataverse for case escalation tracking, shift assignments, and multi-level approvals with Power Automate notifications.",
            image: "images/project-powerapps.svg",
            featured: true
        },
        {
            Projects: "Custom RAG Pipeline",
            Project_description: "Built a Retrieval-Augmented Generation pipeline using Azure OpenAI and Azure AI Search for internal documentation Q&A with citation-backed responses.",
            image: "images/project-rag.svg",
            featured: true
        },
        {
            Projects: "Azure AI Foundry — NIC Pipeline Observability Assistant",
            Project_description: "Prototyped an Azure AI Foundry agent to summarize NIC pipeline logs and surface likely root causes and remediation steps via function-calling to observability APIs.",
            image: "images/project-foundry.svg",
            featured: true
        },
        {
            Projects: "Face Match & Face Detection POC",
            Project_description: "Proof-of-concept for CNN-based face detection and face-match exposed via a FastAPI service (Uvicorn) for real-time similarity scoring and identity verification.",
            image: "images/project-facematch.svg",
            featured: true
        }
    ];

    renderProjects(fallbackProjects);
}

// Renders projects — featured first, then secondary
function renderProjects(projects) {
    const projectsList = document.querySelector(".projects-list");
    if (!projectsList) return;
    projectsList.innerHTML = '';

    projects.filter(p => p.featured).forEach((data) => {
        const divElement = document.createElement("div");
        divElement.className = 'project-card featured';

        const imgElement = document.createElement("img");
        imgElement.src = data.image || "images/project-illustration.svg";
        imgElement.alt = data.Projects;
        imgElement.style.width = "100%";
        imgElement.style.height = "150px";
        imgElement.style.objectFit = "cover";

        const h2Element = document.createElement("h2");
        h2Element.textContent = data.Projects;

        const pElement = document.createElement("p");
        pElement.textContent = data.Project_description;

        divElement.appendChild(imgElement);
        divElement.appendChild(h2Element);
        divElement.appendChild(pElement);

        projectsList.appendChild(divElement);
    });

    projects.filter(p => !p.featured).forEach((data) => {
        const divElement = document.createElement("div");
        divElement.className = 'project-card';

        const imgElement = document.createElement("img");
        imgElement.src = data.image || "images/project-illustration.svg";
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

        const clearDiv = document.createElement('div');
        clearDiv.style.clear = 'both';
        divElement.appendChild(clearDiv);

        projectsList.appendChild(divElement);
    });
}