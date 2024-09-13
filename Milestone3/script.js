//Get references to the form and display area
var form = document.getElementById('resumeform');
var resumeOutputElement = document.getElementById('resumeOutput');
// Handle Form Submission
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); //prevent page reload
    //Collect Input Values
    var profilePictureInput = document.getElementById('profilepicture');
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Picture Elements
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Create Resume Output
    var resumeOutput = "\n<h2>Resume</h2>\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilepicture\">") : '', "\n<h3>Personal Information</h3>\n<p><strong>Name:</strong> ").concat(name, " </p>\n<p><strong>Contact:</strong> ").concat(contact, " </p>\n<p><strong>Email:</strong> ").concat(email, " </p>\n\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n\n");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error("The resume output elements are missing");
    }
});
//Toggle button
var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills-section");
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
