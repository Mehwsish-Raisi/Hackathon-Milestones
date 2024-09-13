//Get references to the form and display area
const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutputElement = document.getElementById('resumeOutput') as HTMLDivElement;



// Handle Form Submission
form.addEventListener("submit", (event: Event) => {
event.preventDefault(); //prevent page reload


//Collect Input Values

const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;

const name = (document.getElementById('name') as HTMLInputElement).value
const contact = (document.getElementById('contact') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
const education = (document.getElementById('education') as HTMLTextAreaElement).value
const skills= (document.getElementById('skills') as HTMLTextAreaElement).value


// Picture Elements
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
  
   

    

// Create Resume Output
const resumeOutput = `
<h2>Resume</h2>
${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilepicture">` : ''}
<h3>Personal Information</h3>
<p><strong>Name:</strong> ${name} </p>
<p><strong>Contact:</strong> ${contact} </p>
<p><strong>Email:</strong> ${email} </p>


<h3>Education</h3>
<p>${education}</p>


<h3>Experience</h3>
<p>${experience}</p>


<h3>Skills</h3>
<p>${skills}</p>

`;

if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput;
} else {
    console.error("The resume output elements are missing")
}
})


//Toggle button
const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement

const skills = document.getElementById("skills-section") as HTMLElement

toggleButton.addEventListener("click", () => {
    if(skills.style.display === "none") {
        skills.style.display = "block";
        
    } else {
        skills.style.display = "none";
        
    }
});