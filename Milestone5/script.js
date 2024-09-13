//Get references to the form and display area
var form = document.getElementById('resumeform');
var resumeOutputElement = document.getElementById('resumeOutput');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle Form Submission
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); //prevent page reload
    //Collect Input Values
    var profilePictureInput = document.getElementById('profilepicture');
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Saving the data locally
    // Picture Elements
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Create Resume Output
    var resumeOutput = "\n<h2> Editable Resume</h2>\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilepicture\">") : '', "\n<h3>Personal Information</h3>\n<p><strong>Name:</strong><span contenteditable=\"true\"> ").concat(name, "</span></p>\n<p><strong>Contact:</strong><span contenteditable=\"true\"> ").concat(contact, "</span></p>\n<p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n\n\n<h3>Education</h3>\n<p <span contenteditable=\"true\">").concat(education, "</span></p>\n\n\n<h3>Experience</h3>\n<p <span contenteditable=\"true\">").concat(experience, "</span></p>\n\n\n<h3>Skills</h3>\n<p <span contenteditable=\"true\">").concat(skills, "</span></p>\n\n");
    //Display the generated resume
    resumeOutputElement.innerHTML = resumeOutput;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print();
    // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
//Toggle button
var toggleButton = document.getElementById("toggle-skills");
var skills1 = document.getElementById("skills-section");
toggleButton.addEventListener("click", function () {
    if (skills1.style.display === "none") {
        skills1.style.display = "block";
    }
    else {
        skills1.style.display = "none";
    }
});
