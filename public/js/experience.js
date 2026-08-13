// experience.js - Experience data and functionality

/*
Note: An earlier version of this file rendered an "Android Developer Intern"
(HDPI Soft) entry that is not present on the current resume. It's kept here
as `archived: true` for reference only — loadExperience() filters it out so
the public site always matches the resume.
*/

const experData = [
    {
        company: "Ernst & Young (EY)",
        role: "Associate Consultant - Technology",
        location: "Delhi, India",
        time: "Feb 2025 – Present",
        current: true,
        bullets: [
            "Power Platform Developer for the Immigration Control System (ICS), building Copilot Studio agents across visa processing, biometric exception handling, and case management",
            "Built a Copilot Studio agent for the Visa Portal so applicants can query application and biometric appointment status via natural language, integrated with Dataverse and REST APIs",
            "Designed a Power Apps model-driven Case Management system on Dataverse with Power Automate-driven approval workflows and notifications",
            "Developed a custom Azure AI Foundry agent that scaffolds boilerplate and surfaces internal docs on demand, cutting new-module ramp-up time",
            "Led a 5-member React.js team for the ICS core platform, designing clean UI-to-service boundaries with state sync and error handling",
            "Built a Tauri desktop app (Rust + TypeScript) for secure SFTP transfer in air-gapped environments using an IPC architecture",
            "Integrated Page Tray Reader biometric hardware with retry logic and error recovery, supporting 10,000+ passengers/day",
            "Resolved 100+ production issues, cutting turnaround time by ~25%; optimized NIC pipelines to cut processing time by ~40%",
            "Built a CNN-based Face Match & Face Detection proof-of-concept, exposed via a FastAPI (Uvicorn) service for real-time identity verification"
        ]
    },
    {
        company: "Z1 Tech",
        role: "Software Developer",
        location: "Gurugram, Haryana",
        time: "Feb 2023 – Feb 2025",
        bullets: [
            "Published Flapster and Pixel Perfect end-to-end, scaling to 15,000+ users in 6 months",
            "Built an Ads Mediation SDK (Kotlin) with clean UI/backend/third-party boundaries, boosting ad revenue by ~20%",
            "Developed React.js / Next.js dashboards with performance profiling, cutting load time by ~30%",
            "Optimized company websites for performance, growing organic traffic by ~12%"
        ]
    },
    {
        company: "Demotic Technologies Pvt. Ltd.",
        role: "Mobile App Developer",
        location: "Remote",
        time: "Aug 2022 – Feb 2023",
        bullets: [
            "Delivered 5+ feature releases and resolved 50+ production bugs in 3 months",
            "Improved FCM notification reliability with retry logic, raising success rate by ~35%",
            "Added crash/error observability, cutting crash rate from ~6% to below 2%"
        ]
    },
    // Preserved for reference only — not shown on the site or the current resume
    {
        company: "HDPI Soft Weblink Solutions",
        role: "Android Developer Intern",
        location: "",
        time: "May 2022 – Jun 2022",
        archived: true,
        bullets: [
            "Internship tasks: developed and maintained parts of an existing Android app (preserved for historical reference)."
        ]
    }
];

// Function to load experience (renders a vertical timeline with bullets)
function loadExperience() {
    const expierenceBox = document.getElementById("expierence-box");
    if (!expierenceBox) return;

    experData.filter(item => !item.archived).forEach((item) => {
        const divElement = document.createElement("div");
        divElement.className = "expierence-details" + (item.current ? " is-current" : "");

        const header = document.createElement("div");
        header.className = "experience-item";

        const title = document.createElement("h3");
        title.textContent = `${item.role} — ${item.company}`;
        if (item.current) {
            const badge = document.createElement("span");
            badge.className = "badge-live";
            badge.textContent = "ACTIVE";
            title.appendChild(badge);
        }

        const meta = document.createElement("div");
        meta.className = "meta";
        const loc = document.createElement("span");
        loc.textContent = item.location || "";
        loc.style.color = "#8b93a7";
        const time = document.createElement("span");
        time.textContent = item.time || "";
        time.style.color = "#8b93a7";

        meta.appendChild(loc);
        meta.appendChild(time);

        header.appendChild(title);
        header.appendChild(meta);

        divElement.appendChild(header);

        if (Array.isArray(item.bullets) && item.bullets.length) {
            const ul = document.createElement("ul");
            item.bullets.forEach(b => {
                const li = document.createElement("li");
                li.textContent = b;
                ul.appendChild(li);
            });
            divElement.appendChild(ul);
        }

        expierenceBox.appendChild(divElement);
    });
}