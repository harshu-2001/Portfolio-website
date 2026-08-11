// skills.js - Skills data and grouped renderer

const skillsGroups = [
    {
        group: "AI & Automation",
        skills: [
            { name: "Copilot Studio", image: "images/free.png" },
            { name: "Power Automate", image: "images/free.png" },
            { name: "Power Apps", image: "images/free.png" },
            { name: "RAG", image: "images/free.png" },
            { name: "LangChain", image: "images/free.png" },
            { name: "Claude", image: "images/free.png" },
            { name: "GitHub Copilot", image: "images/free.png" },
            { name: "MCP", image: "images/free.png" },
            { name: "Azure AI Foundry", image: "images/free.png" }
        ]
    },
    {
        group: "Core Stack",
        skills: [
            { name: "Python", image: "images/python.png" },
            { name: "React.js", image: "images/react.png" },
            { name: "Next.js", image: "images/free.png" },
            { name: "Node.js", image: "images/free.png" },
            { name: "FastAPI", image: "images/free.png" },
            { name: "Dataverse", image: "images/free.png" },
            { name: "TypeScript", image: "images/free.png" }
        ]
    },
    {
        group: "Tools & Architecture",
        skills: [
            { name: "Docker", image: "images/free.png" },
            { name: "Git", image: "images/free.png" },
            { name: "IAM & SSO", image: "images/free.png" },
            { name: "REST APIs", image: "images/free.png" },
            { name: "Firebase", image: "images/free.png" },
            { name: "Postman", image: "images/free.png" },
            { name: "Jira", image: "images/free.png" }
        ]
    },
    {
        group: "Mobile / Other",
        skills: [
            { name: "Kotlin", image: "images/kotlin.png" },
            { name: "Java", image: "images/java.png" },
            { name: "SwiftUI", image: "images/SwiftUI.png" },
            { name: "Flutter", image: "images/free.png" }
        ]
    }
];

function loadSkills() {
    const skillBox = document.getElementById("skill-box");
    if (!skillBox) return;

    // Clear existing
    skillBox.innerHTML = '';

    skillsGroups.forEach(group => {
        const groupCard = document.createElement('div');
        groupCard.className = 'card';
        groupCard.style.marginBottom = '1rem';

        const title = document.createElement('h3');
        title.textContent = group.group;
        title.style.marginTop = '0';
        title.style.marginBottom = '0.8rem';
        title.style.color = '#e6eef8';

        const grid = document.createElement('div');
        grid.className = 'skills-grid';

        group.skills.forEach(s => {
            const pill = document.createElement('div');
            pill.className = 'skill-pill';

            const img = document.createElement('img');
            img.src = s.image;
            img.alt = s.name;

            const name = document.createElement('div');
            name.textContent = s.name;
            name.style.color = '#e6eef8';
            name.style.fontWeight = '600';

            pill.appendChild(img);
            pill.appendChild(name);
            grid.appendChild(pill);
        });

        groupCard.appendChild(title);
        groupCard.appendChild(grid);
        skillBox.appendChild(groupCard);
    });
}