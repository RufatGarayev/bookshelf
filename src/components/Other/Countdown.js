import React from 'react'

const Countdown = () => {
    return (
        <div className="countdown d-flex">
            <div className="box day">
                <span>70</span>
                <p><small>Days</small></p>
            </div>
            <span>:</span>
            <div className="box hour">
                <span>70</span>
                <p><small>Hours</small></p>
            </div>
            <span>:</span>
            <div className="box minute">
                <span>70</span>
                <p><small>Minutes</small></p>
            </div>
            <span>:</span>
            <div className="box second">
                <span>70</span>
                <p><small>Seconds</small></p>
            </div>
        </div>
    )
}

export default Countdown;