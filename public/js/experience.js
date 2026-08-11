// experience.js - Experience data and functionality

/*
Note: Earlier versions of the site showed an incorrect EY date range (02/2023 - 02/2025)
and included an "Android Developer Intern" entry that is not present on the current resume.
The intern entry is preserved below for reference per request.
*/

const experData = [
    {
        company: "Ernst & Young (EY)",
        role: "Associate Consultant - Technology Consulting",
        location: "Delhi, India",
        time: "Feb 2025 – Present",
        bullets: [
            "Power Platform Developer for the Immigration Control System (ICS)",
            "Built Copilot Studio agents for visa and biometric status queries and case triage",
            "Designed a Power Apps model-driven Case Management system on Dataverse with Power Automate workflows",
            "Led a 5-member React.js team and designed UI-to-service boundaries",
            "Built a Tauri desktop app (Rust + TypeScript) for secure SFTP transfer in air-gapped environments",
            "Integrated Page Tray Reader biometric hardware supporting 10,000+ passengers/day",
            "Resolved 100+ production issues, reducing turnaround time by ~25%; optimized NIC pipelines to cut processing time by ~40%"
        ]
    },
    {
        company: "Z1 Tech",
        role: "Software Developer",
        location: "Gurugram, Haryana",
        time: "Feb 2023 – Feb 2025",
        bullets: [
            "Published Flapster and Pixel Perfect, scaling to 15,000+ users",
            "Built an Ads Mediation SDK (Kotlin) that increased ad revenue by ~20%",
            "Developed React.js / Next.js dashboards with performance profiling, cutting load time by ~30%"
        ]
    },
    {
        company: "Demotic Technologies Pvt. Ltd.",
        role: "Mobile App Developer",
        location: "Remote",
        time: "Aug 2022 – Nov 2022",
        bullets: [
            "Delivered 5+ feature releases and resolved 50+ production bugs",
            "Improved FCM notification reliability with retry logic (+35%)",
            "Added crash/error observability, reducing crash rate from ~6% to <2%"
        ]
    },
    // Preserved for reference as requested
    {
        company: "HDPI Soft Weblink Solutions",
        role: "Android Developer Intern",
        location: "",
        time: "May 2023 – Jun 2023",
        bullets: [
            "Internship tasks: developed and maintained parts of an existing Android app (preserved for historical reference)."
        ],
        _note: "Preserved entry - not present on current resume"
    }
];

// Function to load experience (renders a simple vertical list with bullets)
function loadExperience() {
    const expierenceBox = document.getElementById("expierence-box");
    if (!expierenceBox) return;

    experData.forEach((item) => {
        const divElement = document.createElement("div");
        divElement.className = "expierence-details";

        const header = document.createElement("div");
        header.className = "experience-item";

        const title = document.createElement("h3");
        title.textContent = `${item.role} — ${item.company}`;

        const meta = document.createElement("div");
        meta.className = "meta";
        const loc = document.createElement("span");
        loc.textContent = item.location || "";
        loc.style.color = "#a0a0a0";
        const time = document.createElement("span");
        time.textContent = item.time || "";
        time.style.color = "#9aa3b2";

        meta.appendChild(loc);
        meta.appendChild(time);

        header.appendChild(title);
        header.appendChild(meta);

        divElement.appendChild(header);

        if (Array.isArray(item.bullets) && item.bullets.length) {
            const ul = document.createElement("ul");
            ul.style.marginTop = "8px";
            ul.style.paddingLeft = "1.2rem";
            ul.style.color = "#cfe6ff";
            item.bullets.forEach(b => {
                const li = document.createElement("li");
                li.textContent = b;
                ul.appendChild(li);
            });
            divElement.appendChild(ul);
        }

        // small spacer
        const spacer = document.createElement("div");
        spacer.style.height = "10px";
        divElement.appendChild(spacer);

        expierenceBox.appendChild(divElement);
    });
}