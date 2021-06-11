import Breadcrumb from '../components/Other/Breadcrumb';
import Map from '../components/Contact/Map';
import ContactItems from '../components/Contact/ContactItems';
import SendMessage from '../components/Contact/SendMessage';
import '../sass/_contact.scss';

const Contact = () => {
    return (
        <div className="contact-content">
            <div className="main">
                <Breadcrumb currentPage={"Contact"} />
                <Map />
                <ContactItems />
                <SendMessage />
            </div>
        </div>
    )
}

export default Contact;