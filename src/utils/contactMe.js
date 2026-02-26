import emailjs from "@emailjs/browser";

const ContactMe = (email, message, setIsLoading) => {
    console.log(email)
    const templateParams = {
        title: "You received a new message from your portfolio website.",
        email: email,
        message: message,
    }

    emailjs
    .send(
        "service_1m1exsb",
        "template_qsr9kuh",
        templateParams,
        "APEDz9T88oD-M9EL2"
    )
    .then(
        () => {
            setIsLoading(false)

        },
        (error) => {
            alert("Failed to send message.")
            console.log(error)
        }
    )
}

export default ContactMe