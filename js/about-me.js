export default function displayAboutMe() {

const a_title = document.createElement("h3");
const paragraph1 = document.createElement("p");

const title_content = document.createTextNode(
    "About me"
);
const a_content = document.createTextNode(

"blah blah blah"
);
a_title.appendChild(title_content);
paragraph1.appendChild(a_content);

document.body.appendChild(a_title)
document.body.appendChild(paragraph1);



}