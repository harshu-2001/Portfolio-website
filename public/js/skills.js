// skills.js - Skills data and functionality

const skillData = [
    { skill: "Copilot Studio", image: "images/free.png" },
    { skill: "Power Automate", image: "images/free.png" },
    { skill: "Power Apps", image: "images/free.png" },
    { skill: "Retrieval-Augmented Generation (RAG)", image: "images/free.png" },
    { skill: "Prompt Engineering", image: "images/free.png" },
    { skill: "Claude", image: "images/free.png" },
    { skill: "GitHub Copilot", image: "images/free.png" },
    { skill: "LangChain", image: "images/free.png" },
    { skill: "MCP", image: "images/free.png" },
    { skill: "Python", image: "images/python.png" },
    { skill: "React.js", image: "images/react.png" },
    { skill: "Next.js", image: "images/free.png" },
    { skill: "Node.js", image: "images/free.png" },
    { skill: "FastAPI", image: "images/free.png" },
    { skill: "Dataverse", image: "images/free.png" },
    { skill: "TypeScript", image: "images/free.png" },
    { skill: "JavaScript", image: "images/js.png" },
    { skill: "Kotlin", image: "images/kotlin.png" },
    { skill: "Java", image: "images/java.png" },
    { skill: "SQL", image: "images/free.png" },
    { skill: "Dart", image: "images/free.png" },
    { skill: "Docker", image: "images/free.png" },
    { skill: "Git", image: "images/free.png" },
    { skill: "IAM & SSO", image: "images/free.png" },
    { skill: "REST APIs", image: "images/free.png" },
    { skill: "IPC Architecture", image: "images/free.png" },
    { skill: "Firebase", image: "images/free.png" },
    { skill: "Postman", image: "images/free.png" },
    { skill: "Jira", image: "images/free.png" }
];

// Function to load skills
function loadSkills() {
    const skillBox = document.getElementById("skill-box");
    skillData.forEach(data => {
        const divElement = document.createElement("div");
        divElement.className = "skill-details";
        divElement.classList.add("skill-details");
        
        const imgElement = document.createElement("img");
        imgElement.src = data.image;
        imgElement.style.height = "50px";
        imgElement.style.width = "50px";
        imgElement.style.marginBottom = "10px";

        const h2Element = document.createElement("h2");
        h2Element.textContent = data.skill;

        divElement.appendChild(imgElement);
        divElement.appendChild(h2Element);

        skillBox.appendChild(divElement);
    });
}