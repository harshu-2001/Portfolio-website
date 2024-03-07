// -----------------Experience data-------------------------- 

const experData = [
    {
        post:"Junior Android Developer",
        companyname : "Z1 Tech",
        time : "02/2023 - Present"
    },
    {
        post:"Flutter Developer",
        companyname : "Demotic Technologies Pvt. Ltd.",
        time : "07/2022 - 12/2022"
    },
    {
        post:"Android Developer Intern",
        companyname : "HDPI Soft Weblink Solutions",
        time : "05/2023 - 06/2023"
    },
];

const expierenceBox = document.getElementById("expierence-box");
experData.forEach(data => {
    
    const divElement = document.createElement("div");
    divElement.className = "expierence-details";
    divElement.classList.add("expierence-details");

    const postElement = document.createElement("span");
    postElement.style.fontSize = "20px";
    postElement.style.color = "#0088ff";
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
