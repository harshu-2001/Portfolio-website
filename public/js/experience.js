// experience.js - Experience data and functionality

const experData = [
    {
        post: "Associate Consultant - Technology",
        companyname: "Ernst & Young (EY)",
        time: "Feb 2025 - Present",
        detail: "Power Platform & Copilot Studio developer for the Immigration Control System (ICS): built Copilot Studio agents, Power Apps model-driven apps on Dataverse, biometric integrations, and a Tauri secure SFTP app. Led a 5-member React.js team; built FastAPI services (face-match POC); resolved 100+ production issues and improved pipeline throughput and MTTR."
    },  
    {
        post: "Software Developer",
        companyname: "Z1 Tech",
        time: "Feb 2023 - Feb 2025",
        detail: "Published Flapster and Pixel Perfect (15k+ users growth); built an Ads Mediation SDK (Kotlin) to unify third-party ad providers; developed React/Next dashboards with performance profiling and optimized sites to improve load times and organic traffic."
    },
    {
        post: "Mobile App Developer",
        companyname: "Demotic Technologies Pvt. Ltd.",
        time: "Aug 2022 - Nov 2022",
        detail: "Delivered 5+ feature releases and fixed 50+ production bugs; improved FCM reliability with retry logic and added crash/observability instrumentation to reduce crash rate from ~6% to <2%."
    },
    {
        post: "Android Developer Intern",
        companyname: "HDPI Soft Weblink Solutions",
        time: "05/2023 - 06/2023",
        detail: "Developed and maintain existing app."
    }
];

// Function to load experience
function loadExperience() {
    const expierenceBox = document.getElementById("expierence-box");
    experData.forEach((data) => {
        const divElement = document.createElement("div");
        divElement.className = "expierence-details";
        divElement.classList.add("expierence-details");

        const postElement = document.createElement("span");
        postElement.style.fontSize = "20px";
        postElement.style.color = "#0088ff";
        postElement.style.marginBottom = "10px";
        postElement.textContent = data.post;

        const companynameElement = document.createElement("span");
        companynameElement.style.fontSize = "18px";
        companynameElement.textContent = data.companyname;

        const companynameDetailElement = document.createElement("p");
        companynameDetailElement.style.fontSize = "18px";
        companynameDetailElement.textContent = data.detail;

        const timeElement = document.createElement("span");
        timeElement.style.fontSize = "16px";
        timeElement.textContent = data.time;

        const brElement = document.createElement("br");
        const spacerElement = document.createElement("spacer");
        spacerElement.style.height = "20px";

        divElement.appendChild(postElement);
        divElement.appendChild(brElement);
        divElement.appendChild(companynameElement);
        divElement.appendChild(brElement.cloneNode());
        divElement.appendChild(timeElement);
        divElement.appendChild(brElement.cloneNode());
        divElement.appendChild(spacerElement);
        divElement.appendChild(companynameDetailElement);
        expierenceBox.appendChild(divElement);
    });
}