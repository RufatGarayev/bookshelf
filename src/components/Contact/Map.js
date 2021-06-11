const Map = () => {
    return (
        <div id="map-area">
            <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22296.91965400024!2d49.83961535220232!3d40.37848796155387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2s!4v1614293685967!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="This is a unique title"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Map;