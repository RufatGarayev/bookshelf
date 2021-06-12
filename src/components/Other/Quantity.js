const Quantity = () => {
    return (
        <div className="quantity-area d-flex align-items-center">
            <button className="minus-btn">−</button>
            <input type="text" size="2" defaultValue="1" />
            <button className="plus-btn">+</button>
        </div>
    )
}

export default Quantity;