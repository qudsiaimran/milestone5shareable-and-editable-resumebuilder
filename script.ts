 
{
    document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
        event.preventDefault();  

        const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    
const nameElement = document.getElementById("name") as HTMLInputElement;
        const emailElement = document.getElementById("email") as HTMLInputElement;
        const phoneElement = document.getElementById("phone") as HTMLInputElement;
        const addressElement = document.getElementById("address") as HTMLInputElement;
        const educationElement = document.getElementById("education") as HTMLInputElement;
        const workExperienceElement = document.getElementById("workexperience") as HTMLInputElement;
        const skillsElement = document.getElementById("skills") as HTMLInputElement;
        const achievementElement = document.getElementById("achievement") as HTMLInputElement;
        const certificationsElement = document.getElementById("certificationsandtraining") as HTMLInputElement;
        const usernameElement = document.getElementById("username") as HTMLInputElement;

        if (
            profilePictureInput &&
            nameElement &&
            emailElement &&
            phoneElement &&
            addressElement &&
            educationElement &&
            workExperienceElement &&
            skillsElement &&
            achievementElement &&
            certificationsElement &&
            usernameElement
        ) {
            
            const name = nameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const address = addressElement.value;
            const education = educationElement.value;
            const workExperience = workExperienceElement.value;
            const skills = skillsElement.value;
            const achievement = achievementElement.value;
            const certifications = certificationsElement.value;

            const username = usernameElement.value;
            const uniquepath = `resumes/${username.replace(/\s+/g, '-')}_cv.html`;

            
            const profilePictureFile = profilePictureInput.files?.[0];
            const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : null;

            
            const resumeOutput = `
                <h2>Resume</h2>
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Address:</b> ${address}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${workExperience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
                <h3>Achievements</h3>
                <p>${achievement}</p>
                <h3>Certifications and Training</h3>
                <p>${certifications}</p>
            `;

            
            const downloadLink = document.createElement("a");
            downloadLink.href = `data:text/html;charset=utf-8,` + encodeURIComponent(resumeOutput);
            downloadLink.download = uniquepath;
            downloadLink.textContent = "Download your 2024 resume";

    
            const resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                resumeOutputElement.appendChild(downloadLink);
            } else {
                console.error("The resume output element is missing");
            }

            
            const shareableLink = `data:text/html;charset=utf-8,` + encodeURIComponent(resumeOutput);
            const shareableLinkElement = document.getElementById("shareable-Link") as HTMLAnchorElement;
            if (shareableLinkElement) {
                shareableLinkElement.href = shareableLink;
                shareableLinkElement.textContent = "Shareable Resume Link";
                shareableLinkElement.style.display = "block";  
            }

            
            const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;
            if (downloadPdfButton) {
                downloadPdfButton.addEventListener("click", function () {
                    const element = document.getElementById("resumeOutput"); 
                    if (element) {
                        
           
                    }
                });
            }
        } else {
            console.error("One or more input elements are missing");
        }
    });
}

    document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
        event.preventDefault();  

        
        const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    })
