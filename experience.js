// -----------------Experience data-------------------------- 

const experData = [
    {
        post:"3D Artist",
        companyname : "Astarix",
        time : "10/2023 - Present"
    },
    {
        post:"Developer",
        companyname : "Tecnod8",
        time : "09/2023 - Present"
    },
    {
        post:"3D Artist",
        companyname : "TechXR Innovations Private Limited",
        time : "05/2023 - 06/2023"
    },
    {
        post:"Graphic Designer",
        companyname : "Sshark Aum Llp",
        time : "12/2022 - 08/2023"
    },
    {
        post:"3D Artist",
        companyname : "Compact Gyan",
        time : "06/2022 - 08/2022"
    },
    {
        post:"Employer Branding Intern",
        companyname : "Oplus Cowork",
        time : "04/2022 - 05/2022"
    }
];

const expierenceBox = document.getElementById("expierence-box");
experData.forEach(data => {
    
    const divElement = document.createElement("div");
    divElement.className = "expierence-details";
    divElement.classList.add("expierence-details");

    const postElement = document.createElement("span");
    postElement.style.fontSize = "20px";
    postElement.style.color = "#ff004f";
    postElement.textContent = data.post;

    const companynameElement = document.createElement("span");
    companynameElement.style.fontSize = "17px";
    companynameElement.textContent = data.companyname;

    const timeElement = document.createElement("span");
    timeElement.style.fontSize = "15px";
    timeElement.textContent = data.time;

    const brElement = document.createElement("br");

    divElement.appendChild(postElement);
    divElement.appendChild(brElement);
    divElement.appendChild(companynameElement);
    divElement.appendChild(brElement.cloneNode());
    divElement.appendChild(timeElement);
    

    expierenceBox.appendChild(divElement);

});

// ------------- end of expierenceBox --------------- 
