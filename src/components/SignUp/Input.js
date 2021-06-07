const Input = () => {
    return (
        <div className="sign-up-form">
            <form action="#" className="d-flex" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your e-mail"
                    spellCheck="false"
                />
                <input type="submit" value="JOIN US" />
            </form>
        </div>
    )
}

export default Input;