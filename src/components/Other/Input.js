const Input = ({ placeholder, type, id }) => {
    return (
        <div className="input-wrapper">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                spellCheck="false"
                className="w-100 input-box"
                required
            />
        </div>
    )
}

export default Input;