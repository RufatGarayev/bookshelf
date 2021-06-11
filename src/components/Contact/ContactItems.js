import { ContactItemsData } from './ContactItemsData';

const ContactItems = () => {
    return (
        <section id="contact-items">
            <div className="container">
                <div className="row">
                    {
                        ContactItemsData.map((item) => {
                            return (
                                <div key={item.id} className="col-lg-4">
                                    <div className="contact-item">
                                        <div className="icon d-flex justify-content-center">
                                            {item.icon}
                                        </div>
                                        <div className="content text-center">
                                            <h5>{item.title}</h5>
                                            <p className="paragraph">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ContactItems;