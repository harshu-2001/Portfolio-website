// About me Details 


const desc = `Hello! I'm ${userData.firstName} ${userData.lastName}, a multi-talented creative with a passion for turning ideas into captivating visual experiences. With a diverse skill set that includes Android Development, Flutter Development, Machine Learning, Full-Stack Development and 2D Game Development, I thrive on bringing innovation and aesthetics together.
<p><br>I believe in the power of creative collaboration and am always excited to take on new challenges. Whether it's building an interactive website, designing eye-catching graphics, or bringing innovative ideas to life , I'm dedicated to delivering work that stands out.
</p><br><p>I'm eager to connect, collaborate, and bring your creative visions to life. Let's make something amazing together!</p>`;
document.getElementById("desc").innerHTML = desc;


const userPhoto = document.getElementById('about-image');
userPhoto.src = userData.aboutImage; 