// ----------------- Service data ----------------------------

const servicesData = [
    {
        imageSrc: "images/3d-artist.png",
        altText: "3D Artist",
        title: "3D Artist",
        description: "I'm a dedicated 3D artist, specializing in crafting lifelike visuals that elevate projects across industries. Let's transform your ideas into immersive 3D experiences.",
        learnMoreLink: "https://drive.google.com/drive/folders/1LgG2aVN_Rsvjc6ImjpVUG8R0KIAye6PQ?usp=sharing"
    },
    {
        imageSrc: "images/ui.png",
        altText: "UI/UX Designer",
        title: "UI/UX Designer",
        description: "I'm a UI/UX designer focused on crafting intuitive, user-centered digital experiences. Let's collaborate to create designs that captivate and engage your audience.",
        learnMoreLink: "https://www.behance.net/ayyushhh"
    },
    {
        imageSrc: "images/frontend.png",
        altText: "Frontend Developer",
        title: "Frontend Developer",
        description: "I'm a frontend sorcerer, conjuring captivating web experiences with code and creativity. Let's weave your ideas into mesmerizing online realities.",
        learnMoreLink: "#"
    },
    {
        imageSrc: "images/pen-tool.png",
        altText: "Graphic Designer",
        title: "Graphic Designer",
        description: "I'm a graphic designer specializing in branding and visual storytelling. Let's bring your ideas to life and captivate your audience through creative design.",
        learnMoreLink: "#"
    }
];

const servicesList = document.querySelector(".services-list");

servicesData.forEach(data => {
    const divElement = document.createElement("div");

    const imgElement = document.createElement("img");
    imgElement.src = data.imageSrc;
    imgElement.alt = data.altText;
    imgElement.style.height = "70px";
    imgElement.style.width = "70px";
    imgElement.style.marginBottom = "10px";

    const h2Element = document.createElement("h2");
    h2Element.textContent = data.title;

    const pElement = document.createElement("p");
    pElement.textContent = data.description;

    const aElement = document.createElement("a");
    aElement.href = data.learnMoreLink;
    aElement.textContent = "Learn more";

    divElement.appendChild(imgElement);
    divElement.appendChild(h2Element);
    divElement.appendChild(pElement);
    divElement.appendChild(aElement);

    servicesList.appendChild(divElement);
});


// ------------------ end of service data-------------------------