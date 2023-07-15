import displayExperience from "./experience";
import displayQualifications from "./qualifications";
import displayAboutMe from "./about-me";

// About me button
const button1 = document.createElement("button");

const b1_content = document.createTextNode(
    "About Me"
    );

button1.appendChild(b1_content);

// button.onclick = displayAboutMe;
document.body.appendChild(button1);

//Experience button
const button2 = document.createElement("button");

const b2_content = document.createTextNode(
    "Professional Experience"
    );

button2.appendChild(b2_content);

// button.onclick = displayExperience;
document.body.appendChild(button2);

// Qualifications button
const button3 = document.createElement("button");

const b3_content = document.createTextNode(
    "Qualifications"
    );

button3.appendChild(b3_content);

// button.onclick = displayQualifications;
document.body.appendChild(button3);