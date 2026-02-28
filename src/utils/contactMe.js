import emailjs from "@emailjs/browser";

const ContactMe = (email, message) => {
    const templateParams = {
        title: "You received a new message from your portfolio website.",
        email: email,
        message: message,
    }

    return emailjs.send(
        "service_1m1exsb",
        "template_qsr9kuh",
        templateParams,
        "APEDz9T88oD-M9EL2"
    )
}

export default ContactMe;