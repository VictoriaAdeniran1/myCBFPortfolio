export default function displayQualifications() {

    const q_title = document.createElement("h3");
    const paragraph3 = document.createElement("p");

    const title_content = document.createTextNode(
        "My Qualifications"
    );
    const q_content = document.createTextNode(

   "blah blah blah"
   );
    q_title.appendChild(title_content);
    paragraph3.appendChild(q_content);

    document.body.appendChild(q_title)
    document.body.appendChild(paragraph3);




}