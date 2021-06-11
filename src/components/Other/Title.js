const Title = ({ title, bottomTitle, description }) => {
    return (
        <div className="section-title text-center">
            <h1>{title}</h1>
            <h6>{bottomTitle}</h6>
            <p className="paragraph">{description}</p>
        </div>
    )
}


export default Title;