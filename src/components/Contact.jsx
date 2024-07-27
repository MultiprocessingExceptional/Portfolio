function ContactForm() {

    const classes = "w-full rounded-sm lg:rounded-md p-2 text-[#0E0C15] mt-2 bg-[#fff] outline-none";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Message sent successfully.');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            alert('Error sending message.');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 items-start w-[80%] lg:w-[40%] h-full lg:mt-[1rem] text-sm lg:text-[1rem]"
        >
            <div className="text-holder flex flex-col items-start w-full">
                <label htmlFor="name"><i className="fa-solid fa-user mr-2"></i>Name</label>
                <input type="text" id="name" name="name" className={`${classes} h-9 lg:h-10`} required />
            </div>
            <div className="text-holder flex flex-col items-start w-full mt-3">
                <label htmlFor="email"><i className="fa-solid fa-envelope mr-2"></i>Email</label>
                <input type="email" id="email" name="email" className={`${classes} h-9 lg:h-10`} required />
            </div>
            <div className="text-holder flex flex-col items-start w-full mt-3">
                <label htmlFor="message"><i className="fa-solid fa-message mr-2"></i>Message</label>
                <textarea id="message" name="message" className={`${classes} h-24 lg:h-36`} required></textarea>
            </div>
            <button type="submit" className="w-full h-9 lg:h-12 rounded-md bg-gradient-to-r from-[#DF458E] to-[#951AA2] mt-3">
                Send Message
            </button>
            <h3 className="mb-10 text-[0.7rem] lg:text-[0.9rem] text-justify">
                Note: The contact form is temporarily unavailable. Please feel free to reach out to me directly via sijinsaji14@gmail.com or connect with me on LinkedIn for any inquiries.
            </h3>
        </form>
    );
}

export default ContactForm;
