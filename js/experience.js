export default function displayExperience() {


const e_title = document.createElement("h3");
const paragraph2 = document.createElement("p");

const title_content = document.createTextNode(
    "Professional Experience"
);
const e_content = document.createTextNode(

"blah blah blah"
);
e_title.appendChild(title_content);
paragraph1.appendChild(e_content);

document.body.appendChild(e_title)
document.body.appendChild(paragraph2);



}