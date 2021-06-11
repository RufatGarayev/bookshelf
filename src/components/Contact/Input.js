const Input = ({ placeholder, type }) => {
    return (
        <div className="input-wrapper">
            <input
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