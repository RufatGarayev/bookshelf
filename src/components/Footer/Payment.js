import PaymentImg from '../../assets/img/payment.jpg';

const Payment = () => {
    return (
        <div className="payment d-flex">
            <img className="img-fluid" src={PaymentImg} alt="payment" />
        </div>
    )
}

export default Payment;