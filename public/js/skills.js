// skills.js - Skills data and grouped renderer
// Grouping mirrors the resume's four skill categories exactly.
// Icon filenames are distinct per skill (no more "free.png" placeholder)
// so they're ready to be generated in the next pass.

const skillsGroups = [
    {
        group: "AI & Automation",
        skills: [
            { name: "Copilot Studio", image: "images/copilot-studio.svg" },
            { name: "Power Automate", image: "images/power-automate.svg" },
            { name: "Power Apps", image: "images/power-apps.svg" },
            { name: "RAG", image: "images/rag.svg" },
            { name: "Prompt Engineering", image: "images/prompt-engineering.svg" },
            { name: "Evaluation", image: "images/evaluation.svg" },
            { name: "Claude", image: "images/claude.svg" },
            { name: "GitHub Copilot", image: "images/github-copilot.svg" },
            { name: "LangChain", image: "images/langchain.svg" },
            { name: "MCP", image: "images/mcp.svg" }
        ]
    },
    {
        group: "Core Tech Stack",
        skills: [
            { name: "Python", image: "images/python.svg" },
            { name: "React.js", image: "images/react.svg" },
            { name: "Next.js", image: "images/nextjs.svg" },
            { name: "Node.js", image: "images/nodejs.svg" },
            { name: "FastAPI", image: "images/fastapi.svg" },
            { name: "Dataverse", image: "images/dataverse.svg" }
        ]
    },
    {
        group: "Programming Languages",
        skills: [
            { name: "TypeScript", image: "images/typescript.svg" },
            { name: "JavaScript", image: "images/javascript.svg" },
            { name: "Python", image: "images/python.svg" },
            { name: "Kotlin", image: "images/kotlin.svg" },
            { name: "Java", image: "images/java.svg" },
            { name: "SQL", image: "images/sql.svg" },
            { name: "Dart", image: "images/dart.svg" }
        ]
    },
    {
        group: "Tools & Architecture",
        skills: [
            { name: "Docker", image: "images/docker.svg" },
            { name: "Git", image: "images/git.svg" },
            { name: "IAM", image: "images/iam.svg" },
            { name: "SSO", image: "images/sso.svg" },
            { name: "REST APIs", image: "images/rest-apis.svg" },
            { name: "IPC Architecture", image: "images/ipc-architecture.svg" },
            { name: "Firebase", image: "images/firebase.svg" },
            { name: "Postman", image: "images/postman.svg" },
            { name: "Jira", image: "images/jira.svg" }
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

        const title = document.createElement('h3');
        title.textContent = group.group;
        title.style.marginBottom = '1rem';

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

            pill.appendChild(img);
            pill.appendChild(name);
            grid.appendChild(pill);
        });

        groupCard.appendChild(title);
        groupCard.appendChild(grid);
        skillBox.appendChild(groupCard);
    });
}