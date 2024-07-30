import { useState } from "react";

const Contact = () => {
    const initialState = {
        name: "",
        message: "",
        email: ""
    }

    const [formDetails, setFormDetails] = useState(initialState);

    const onValueChange = (fieldName, value) => {
        const updatedFormDetails = { ...formDetails, [fieldName]: value };
        setFormDetails(updatedFormDetails);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(formDetails);
        setFormDetails(initialState);
    };

    return (
        <section>
            <h1 className="text-4xl text-left font-bold my-6">get in touch</h1>
            <div className="bg-subparts text-left rounded-xl p-8 shadow-md">
                <p>
                    i'd love to hear from you! whether you have questions, opportunities, or just want to chat about tech and projects, feel free to reach out. you can contact me at: {" "}
                    <br />
                    <a href="mailto:naheyans1@gmail.com">naheyans1@gmail.com</a>
                </p>
            </div>
        </section>
    );
};

export default Contact;