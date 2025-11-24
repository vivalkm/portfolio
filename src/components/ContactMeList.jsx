import ContactMeItem from "./ContactMeItem";
import { Github, LinkedIn, Email } from "../contents/ContactMeData";

export default function ContactMeList() {
    return (
        <ul className="ml-1 mt-8 flex items-center" aria-label="Contact me">
            <ContactMeItem data={Github}></ContactMeItem>
            <ContactMeItem data={LinkedIn}></ContactMeItem>
            <ContactMeItem data={Email}></ContactMeItem>
        </ul>
    );
}
