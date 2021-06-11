const Input = () => {
    return (
        <>
            <form action="#" className="d-flex" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your e-mail"
                    spellCheck="false"
                    className="w-100"
                />
                <input type="submit" value="JOIN US" />
            </form>
        </>
    )
}

export default Input;