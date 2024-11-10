//Get references to the form and display area
const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutputElement = document.getElementById('resumeOutput') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;



// Handle Form Submission
form.addEventListener("submit", (event: Event) => {
event.preventDefault(); //prevent page reload


//Collect Input Values

const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;

const username = (document.getElementById('username') as HTMLInputElement).value;
const name = (document.getElementById('name') as HTMLInputElement).value
const contact = (document.getElementById('contact') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
const education = (document.getElementById('education') as HTMLTextAreaElement).value
const skills= (document.getElementById('skills') as HTMLTextAreaElement).value



// Save form data in localStorage with the username as the key
const resumeData = {
    name,
    email,
    contact,
    education,
    experience,
    skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); 
    // Saving the data locally
    


// Picture Elements
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

    resumeOutputElement.innerHTML = resumeOutput;

// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});


// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); 
// This will open the print dialog and allow the user to save as PDF
});

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
    username;
    (document.getElementById('name') as HTMLInputElement).value =
    resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =
    resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value =
    resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value =
    resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value
    = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value =
    resumeData.skills;
}
}
});


//Toggle button
const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement

const skills1 = document.getElementById("skills-section") as HTMLElement

toggleButton.addEventListener("click", () => {
    if(skills1.style.display === "none") {
        skills1.style.display = "block";
        
    } else {
        skills1.style.display = "none";
        
    }
});