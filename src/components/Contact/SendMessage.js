import Input from '../Other/Input';

const SendMessage = () => {
    return (
        <section id="send-message">
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="inputs-wrapper w-100">
                                <Input placeholder="Name" type="text" />
                                <Input placeholder="Email" type="email" />
                                <Input placeholder="Subject" type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="textarea-wrapper">
                                <textarea
                                    name="message"
                                    className="text-area w-100"
                                    rows="7"
                                    placeholder="Your Message"
                                    required
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="send-msg-btn-wrapper d-flex justify-content-center">
                                <button type="submit" className="send-msg-btn">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default SendMessage;