import '../Styles/ContactUsStyle.css'
function ContactUs() {
    return (
        <div className='form-container'>
            <h1>Send a message to us!</h1>
            <form >
                <input placeholder='Name' type="text" />
                <input placeholder='Email' type="email" />
                <input placeholder='Subject' type="text" />
                <textarea placeholder='Message' rows='4' name="" id=""></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactUs
