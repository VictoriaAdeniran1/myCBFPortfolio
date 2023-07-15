import displayExperience from "./experience"


const button = document.createElement("button");

const e_content = document.createTextNode(
    "Professional Experience"
    );

button.appendChild(e_content);

button.onclick = displayExperience;
document.body.appendChild(button);

