import "React" from react;
import Contact from "./Contact.js";

function ContactList {
    return (
        <div className="contact-list">
            {/* run this for each contact in contacts.json */}
            <Contact />
        </div>
    )
}