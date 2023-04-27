import React from "react";
import Countdown from 'react-countdown';

const EventCountDown = () => {

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return (<>
                <div className="countdown-div">
                    <div className="countdown-inner-div">
                        <h2 className="countdown-first-h2">Days</h2>
                        <h2 className="countdown-h2">
                            00
                        </h2>
                    </div>
                    <div className="countdown-inner-div">
                        <h2 className="countdown-first-h2">Hours</h2>
                        <h2 className="countdown-h2">
                            00
                        </h2>
                    </div>
                    <div className="countdown-inner-div">
                        <h2 className="countdown-first-h2">Min</h2>
                        <h2 className="countdown-h2">
                            00
                        </h2>
                    </div>
                    <div className="countdown-inner-div">
                        <h2 className="countdown-first-h2">Sec</h2>
                        <h2 className="countdown-h2">
                            00
                        </h2>
                    </div>
                </div>
            </>)
        } else {
            // Render a countdown
            return (
                <>
                    <div className="countdown-div">
                        <div className="countdown-inner-div">
                            <h2 className="countdown-first-h2">Days</h2>
                            <h2 className="countdown-h2">
                                {days}
                            </h2>
                        </div>
                        <div className="countdown-inner-div">
                            <h2 className="countdown-first-h2">Hours</h2>
                            <h2 className="countdown-h2">
                                {hours}
                            </h2>
                        </div>
                        <div className="countdown-inner-div">
                            <h2 className="countdown-first-h2">Min</h2>
                            <h2 className="countdown-h2">
                                {minutes}
                            </h2>
                        </div>
                        <div className="countdown-inner-div">
                            <h2 className="countdown-first-h2">Sec</h2>
                            <h2 className="countdown-h2">
                                {seconds}
                            </h2>
                        </div>
                    </div>
                </>
            )
        }
    };

    return (
        <Countdown
            date={new Date('1 june 2023')}
            renderer={renderer}
        />
    );
};

export default EventCountDown;