// ------------------ Education ------------------

const educationData = [
    {
        image: "images/scholarship.png",
        grade: "Bachelors of Technology",
        stream:"Computer Science",
        institute: "Jaypee University of Engineering and Technology, Guna",
        cgpa:"8.4",
    },
    {
        image: "images/scholarship.png",
        grade: "Intermediate",
        stream: "",
        institute: "Kiddy's Corner School,Gwalior(M.P)",
        cgpa: ""
    },
    {
        image: "images/scholarship.png",
        grade: "Matric", 
        stream: "",
        institute: "The Radiant School ,Gwalior(M.P)",
        cgpa: ""

    }
]



const educationBox = document.getElementById("education-box");
educationData.forEach(data => {
    const divElement = document.createElement("div");
    divElement.className = "education-details";
    divElement.classList.add("education-details");

    const imageElement = document.createElement("img");
    imageElement.className = "education-img";
    imageElement.classList.add("education-img");
    imageElement.src = data.image;

    const divElement2 = document.createElement("div");
    divElement2.className = "education-content";
    divElement2.classList.add("education-content");

    const gradeElement = document.createElement("h2");
    gradeElement.className = "education-grade";
    gradeElement.classList.add("education-grade");
    gradeElement.textContent = data.grade;


    const streamElement = document.createElement("p");
    streamElement.className = "education-stream";
    streamElement.classList.add("education-stream");
    streamElement.textContent = data.stream;

    const Cgpa = document.createElement("p");
    Cgpa.className = "education-stream";
    Cgpa.classList.add("education-stream");
    Cgpa.textContent = data.cgpa;

    const instituteElement = document.createElement("p");
    instituteElement.className = "education-institute";
    instituteElement.classList.add("education-institute");
    instituteElement.textContent = data.institute;

    divElement2.appendChild(gradeElement);
    divElement2.appendChild(instituteElement);
    try{
        divElement2.appendChild(streamElement);
    }
    catch(error){
        console.log(error);
    }

    try{
        divElement2.appendChild(Cgpa);
    }
    catch(error){
        console.log(error);
    }

    divElement.appendChild(imageElement);
    divElement.appendChild(divElement2);

    educationBox.appendChild(divElement);

});



// ---------------- end of Education ------------