// --------------- skills -------------- 
const skillData = [
    {
        skill:"Android",
        image:"images/android.png"
    },
    {
        skill:"Kotlin",
        image:"images/kotlin.png"
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
        skill:"Flutter",
        image:"images/Flutter.png"
    },
    {
        skill:"Unity",
        image:"images/unity.png"
    },
    {
        skill:"SwiftUI",
        image:"images/SwiftUI.png"
    },
    {
        skill:"C#",
        image:"images/C-sharp.png"
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
        skill:"Java",
        image:"images/java.png"
    },
    {
        skill:"React",
        image:"images/react.png"
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