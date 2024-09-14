var _a
{
    (_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault(); 

        var profilePictureInput = document.getElementById("profilePicture");
        var nameElement = document.getElementById("name");
        var emailElement = document.getElementById("email");
        var phoneElement = document.getElementById("phone");
        var addressElement = document.getElementById("address");
        var educationElement = document.getElementById("education");
        var workExperienceElement = document.getElementById("workexperience");
        var skillsElement = document.getElementById("skills");
        var achievementElement = document.getElementById("achievement");
        var certificationsElement = document.getElementById("certificationsandtraining");
        var usernameElement = document.getElementById("username");
        
        if (profilePictureInput &&
            nameElement &&
            emailElement &&
            phoneElement &&
            addressElement &&
            educationElement &&
            workExperienceElement &&
            skillsElement &&
            achievementElement &&
            certificationsElement &&
            usernameElement) {
            
            var name_1 = nameElement.value;
            var email = emailElement.value;
            var phone = phoneElement.value;
            var address = addressElement.value;
            var education = educationElement.value;
            var workExperience = workExperienceElement.value;
            var skills = skillsElement.value;
            var achievement = achievementElement.value;
            var certifications = certificationsElement.value;
            var username = usernameElement.value;
            var uniquepath = "resumes/".concat(username.replace(/\s+/g, '-'), "_cv.html");
            
            var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
            var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : null;
            
            var resumeOutput = "\n                <h2>Resume</h2>\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n                <p><b>Name:</b> ").concat(name_1, "</p>\n                <p><b>Email:</b> ").concat(email, "</p>\n                <p><b>Phone:</b> ").concat(phone, "</p>\n                <p><b>Address:</b> ").concat(address, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(workExperience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n                <h3>Achievements</h3>\n                <p>").concat(achievement, "</p>\n                <h3>Certifications and Training</h3>\n                <p>").concat(certifications, "</p>\n            ");
            
            var downloadLink = document.createElement("a");
            downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
            downloadLink.download = uniquepath;
            downloadLink.textContent = "Download your 2024 resume";
            
            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                resumeOutputElement.appendChild(downloadLink);
            }
            else {
                console.error("The resume output element is missing");
            }
            
            var shareableLink = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
            var shareableLinkElement = document.getElementById("shareable-Link");
            if (shareableLinkElement) {
                shareableLinkElement.href = shareableLink;
                shareableLinkElement.textContent = "Shareable Resume Link";
                shareableLinkElement.style.display = "block"; 
            }
            
            var downloadPdfButton = document.getElementById("download-pdf");
            if (downloadPdfButton) {
                downloadPdfButton.addEventListener("click", function () {
                    var element = document.getElementById("resumeOutput"); 
                    if (element) {
                    }
                });
            }
        }
        else {
            console.error("One or more input elements are missing");
        }
    });
}
