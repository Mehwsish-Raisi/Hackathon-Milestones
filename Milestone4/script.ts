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
const experience = (document.getElementById('experience') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLInputElement).value
const skills= (document.getElementById('skills') as HTMLInputElement).value


// Picture Element
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
   

    

// Create Resume Output
const resumeOutput = `
<h2> Editable Resume</h2>
${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilepicture">` : ''}
<h3>Personal Information</h3>
<p><strong>Name:</strong><span contenteditable="true"> ${name}</span></p>
<p><strong>Contact:</strong><span contenteditable="true"> ${contact}</span></p>
<p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>


<h3>Education</h3>
<p <span contenteditable="true">${education}</span></p>


<h3>Experience</h3>
<p <span contenteditable="true">${experience}</span></p>


<h3>Skills</h3>
<p <span contenteditable="true">${skills}</span></p>

`;

//Display the generated resume
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