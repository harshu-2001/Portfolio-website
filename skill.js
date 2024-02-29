// --------------- skills -------------- 
const skillData = [
    {
        skill:"Blender",
        image:"images/Blender.png"
    },
    {
        skill:"Java",
        image:"images/java.png"
    },
    {
        skill:"CPP",
        image:"images/cpp.png"
    },
    {
        skill:"HTML",
        image:"images/html.png"
    },
    {
        skill:"CSS",
        image:"images/css.png"
    },
    {
        skill:"JavaScript",
        image:"images/js.png"
    },
    {
        skill:"Unity",
        image:"images/unity.png"
    },
    {
        skill:"Photoshop",
        image:"images/ps.png"
    },
    {
        skill:"Illustrator",
        image:"images/ai.png"
    },
    {
        skill:"Premier Pro",
        image:"images/pr.png"
    },
    {
        skill:"CorelDraw",
        image:"images/coreldraw.png"
    },
    {
        skill:"Figma",
        image:"images/figma.png"
    },
    {
        skill:"Python",
        image:"images/python.png"
    },
    {
        skill:"Angular",
        image:"images/angular.png"
    }
];

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

// -------------- end of skills -------------- 